import spacy
nlp = spacy.load("en_core_web_sm")
import json


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


# to create tuples for testing phase
def ents_tuples(check):
  ents =[]
  start =[]
  end =[]
  j=0
  for i in range(0,len(check)):
      
    if i+2>=len(check):
      break
    for z in range(i+1,i+3):
      
      ents.append("The cardinality relationship between "+str(check[i])+" and "+str(check[z])+" is")
      start.append([37,37+len(check[i])+5])
      end.append([37+len(check[i]),37+len(check[i])+5+len(check[z])])
   
      
  return ents,start,end
#sample case study

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

# run the code

# the entities
check =find_entity(text)

# the tuples
tuples,start,end =ents_tuples(check)

data = []

for i in range(len(tuples)):
    # sentence = f"The cardinality relationship between *{pair[0]}* and *{pair[1]}* is"
    entities = [
        {"start": start[i][0], "end": end[i][0]},
        {"start": start[i][1], "end": end[i][1]},
    ]
    data.append({"sentence":tuples[i], "entities": entities})

# Convert the list of dictionaries to JSON format

json_data = json.dumps(data, indent=2)

# Save the JSON data to a file
with open("testing_data.json", "w") as file:
    file.write(json_data)