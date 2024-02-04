# Load the fine-tuned model
model = BertForSequenceClassification.from_pretrained("fine_tuned_bert_with_entities")
tokenizer = BertTokenizer.from_pretrained("/model/fine_tuned_tokenizer")
import json
with open('testing_data.json', 'r') as file:
    test_data = json.load(file)
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
    
    # desired data
    print(f"Sentence: {sentence}")
    print(f"Entities: {entities}")
    print(f"Predicted relationship: {predicted_label}\n")