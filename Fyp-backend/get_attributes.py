import spacy
import json

tokenizer = GPT2Tokenizer.from_pretrained("/model/gpt_trained_tokenizer")
model = GPT2LMHeadModel.from_pretrained("/model/gpt_trained_model")

nlp = spacy.load("en_core_web_sm")

# Set the model to evaluation mode
model.eval()


# extract entities
def find_entity(text):
  entities =[]
  seen_nouns= set()
  doc =nlp(text)
  skip_check =True
  # Iterate through the tokens in the processed document
  for token in doc:
        
      # Check if the token is a noun and not in the set already
      if token.pos_ == "NOUN" and token.lemma_ not in seen_nouns:

          # Append the noun to the list and add it to the set
          # Get the next token
          if token.dep_=="compound" and token.i < len(doc) - 1:

            next_token = doc[token.i + 1]
            if next_token.pos_ == "NOUN":
                # add the noun and skip the next dependent part
                entities.append(token.lemma_)
                seen_nouns.add(token.lemma_)
                # Skip the next token as it's already been processed
                continue
            else:
              continue
          
          entities.append(token.lemma_)
          seen_nouns.add(token.lemma_)


  return entities

# used to separate the output returned by the model
def get_string(input_string):
    # Find the index of the first colon
    first_colon_index = input_string.find(':')
    if first_colon_index == -1:  # Check if there's at least one colon
        return ""


    # Return the substring after the second colon
    return input_string[first_colon_index + 1:]


# sample case study

text ='''
In hospital, there are many departments like Orthopedic, Pathology, Emergency,
Dental, Gynecology, Anesthetics, I.C.U., Blood Bank, Operation Theater, Laboratory, M.R.I.,
Neurology, Cardiology, Cancer Department, Corpse, etc. There is an OPD where patients come
and get a card (that is, entry card of the patient) for check up from the concerned doctor. After
making entry in the card, they go to the concerned doctor’s room and the doctor checks up
their ailments. According to the ailments, the doctor either prescribes medicine or admits the
patient in the concerned department. The patient may choose either private or general room
according to his/her need. But before getting admission in the hospital, the patient has to fulfill
certain formalities of the hospital like room charges, etc. After the treatment is completed, the
doctor discharges the patient. Before discharging from the hospital, the patient again has to
complete certain formalities of the hospital like balance charges, test charges, operation
charges (if any), blood charges, doctor’s charges, etc.
Next we talk about the doctors of the hospital. There are two types of the doctors in the
hospital, namely, regular doctors and call on doctors. Regular doctors are those doctors who
come to the hospital daily. Calls on doctors are those doctors who are called by the hospital if
the concerned doctor is not available.

'''

# Initialize a dictionary to store generated attributes for each entity
generated_attributes_dict = {}

# extraxted entities 
input_entities =find_entity(text)


# Loop through each input entity
for input_entity in input_entities:
    # Encode the input entity
    new_entity = f"Generate attributes for the database entity {input_entity}"
    input_ids = tokenizer.encode(new_entity, return_tensors="pt")

    # Generate attributes for the input entity
    generated_ids = model.generate(
        input_ids,
        max_length=20,  # Adjust as needed
        num_beams=5,  # Adjust as needed
        no_repeat_ngram_size=2,  # Adjust as needed
        top_k=50,  # Adjust as needed
        top_p=0.95,  # Adjust as needed
        temperature=1.0,  # Adjust as needed
        pad_token_id=tokenizer.eos_token_id,
        eos_token_id=tokenizer.eos_token_id,
    )

    # Decode the generated attributes
    decoded_attributes = tokenizer.decode(generated_ids[0], skip_special_tokens=True)

    # Store the generated attributes for the current entity
    generated_attributes_dict[input_entity] = decoded_attributes




# final attrbiutes list
attributes =[]
for input_entity, generated_attributes in generated_attributes_dict.items():
  print(generated_attributes)
  atts = get_string(generated_attributes)
  if "<SEP>" in atts:
    index =atts.find('<')
    atts = atts[:index-1]

  attributes.append(atts.split())





# Constructing JSON
json_data = {"entities": []}

for i, entity_name in enumerate(input_entities):
    entity = {"entity_name": entity_name, "attributes": []}
    for attribute_data in attributes[i]:
         if any(keyword in attribute_data for keyword in ["ID", "Number", "Age"]):
            attribute_type = "int"
         elif "DATE" in attribute_data.upper():
            attribute_type = "date"
         else:
            attribute_type = "string"
         is_key = "ID" in attribute_data
         attribute = {
            "attribute_name": attribute_data,
            
            "attribute_type": attribute_type,
            "key": is_key
         }
         entity["attributes"].append(attribute)
    json_data["entities"].append(entity)

# Write JSON data to a file
output_file_path = "entity_attribute_schema.json"
with open(output_file_path, "w") as json_file:
    json.dump(json_data, json_file, indent=2)

