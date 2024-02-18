import torch
from transformers import BertTokenizer, BertForSequenceClassification, AdamW
from torch.utils.data import Dataset, DataLoader

import json
with open('relationship_new_data.json', 'r') as file:
    data = json.load(file)

# Map labels to numerical values
label_mapping = {"one-to-one": 0, "one-to-many": 1, "many-to-one": 2, "many-to-many": 3}

# Tokenizer and model
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertForSequenceClassification.from_pretrained('bert-base-uncased', num_labels=len(label_mapping))

# Convert data to features
def create_dataset(data, tokenizer, label_mapping):
    dataset = []
    for item in data:
        sentence = item["sentence"]
        entities = item["entities"]
        label = torch.tensor(label_mapping[item["label"]])

        # Create entity markers in the sentence
        entity_markers = ['O'] * len(sentence)
        for entity in entities:
            entity_markers[entity["start"]:entity["end"]+1] = ['I'] * (entity["end"]+1 - entity["start"])

        # Tokenize with entity markers
        tokenized_input = tokenizer(sentence, return_tensors='pt', padding=True, truncation=True)

        # Update input_ids to include entity markers
        for i, token in enumerate(tokenized_input["input_ids"][0]):
            if entity_markers[i] == 'I':
                tokenized_input["input_ids"][0][i] += len(tokenizer)

        dataset.append({"input_ids": tokenized_input["input_ids"].squeeze(), "attention_mask": tokenized_input["attention_mask"].squeeze(), "labels": label})

    return dataset

# Create dataset and dataloader
dataset = create_dataset(data, tokenizer, label_mapping)
dataloader = DataLoader(dataset, batch_size=1, shuffle=True)

# Training setup
#########################

optimizer = AdamW(model.parameters(), lr=1e-5)

# Fine-tune BERT
model.train()
for epoch in range(3):  # You can adjust the number of epochs
    for batch in dataloader:
        inputs = batch["input_ids"]
        attention_mask = batch["attention_mask"]
        labels = batch["labels"]

        optimizer.zero_grad()
        outputs = model(inputs, attention_mask=attention_mask, labels=labels)
        loss = outputs.loss
        loss.backward()
        optimizer.step()

# Save the fine-tuned model
model.save_pretrained("/model/fine_tuned_bert_with_entities")
tokenizer.save_pretrained("/model/fine_tuned_tokenizer")
