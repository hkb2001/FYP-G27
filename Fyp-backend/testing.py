# Load the fine-tuned model
model = BertForSequenceClassification.from_pretrained("/model/fine_tuned_bert_with_entities")
tokenizer = BertTokenizer.from_pretrained("/model/fine_tuned_tokenizer")
import json
with open('testing_data.json', 'r') as file:
    test_data = json.load(file)

# label  mapping for local mapping
label_mapping = {"one-to-one": 0, "one-to-many": 1, "many-to-one": 2, "many-to-many": 3}

# Mapping of label to type and cardinality for output schema generation
label_map_for_schema = {
    "many-to-many": {"type": "Many-to-Many", "cardinality": "M:M"},
    "many-to-one": {"type": "One-to-Many", "cardinality": "1:M"},
    "one-to-many": {"type": "One-to-Many", "cardinality": "1:M"},
    "one-to-one": {"type": "One-to-One", "cardinality": "1:1"}
}
relationships_data = {"relationships": []}


# Tokenize sentences with entity markers and make predictions
for sample in test_data:
    sentence = sample["sentence"]
    entities = sample["entities"]

    # Tokenize with entity markers
    tokenized_input = tokenizer(sentence, return_tensors='pt', padding=True, truncation=True)

    # Update input_ids to include entity markers
    entity_markers = ['O'] * len(sentence)
    for entity in entities:
        entity_markers[entity["start"]:entity["end"]] = ['I'] * (entity["end"] - entity["start"])

    for i, token in enumerate(tokenized_input["input_ids"][0]):
        if entity_markers[i] == 'I':
            tokenized_input["input_ids"][0][i] += len(tokenizer)

    # Make prediction
    with torch.no_grad():
        model.eval()
        logits = model(**tokenized_input).logits

    # Get the predicted label
    predicted_label_idx = torch.argmax(logits).item()
    predicted_label = [label for label, idx in label_mapping.items() if idx == predicted_label_idx][0]

    # exporting data as schema
    entity1 = sample["sentence"][sample["entities"][0]["start"]:sample["entities"][0]["end"]]
    entity2 = sample["sentence"][sample["entities"][1]["start"]:sample["entities"][1]["end"]]
    label = predicted_label
    relationship = {
        "entity1": entity1,
        "entity2": entity2,
        **label_map_for_schema[label]
    }
    relationships_data["relationships"].append(relationship)

    # print(f"Sentence: {sentence}")
    # print(f"Entities: {entities}")
    # print(f"Predicted relationship: {predicted_label}\n")


# writing to json
# Write relationships JSON data to a file
output_file_path = "relationships_schema.json"
with open(output_file_path, "w") as json_file:
    json.dump(relationships_data, json_file, indent=2)