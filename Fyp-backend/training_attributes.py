import torch
from torch.utils.data import Dataset, DataLoader
from transformers import GPT2Tokenizer, GPT2LMHeadModel, GPT2Config, AdamW
from tqdm import tqdm

import json
with open('attributes_data.json', 'r') as file:
    training_data = json.load(file)


tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2LMHeadModel.from_pretrained("gpt2")
tokenizer.add_special_tokens({'pad_token': '[PAD]'})


# Define a custom dataset function
def create_dataset(data, tokenizer, max_length=128):
    dataset = []
    for entry in data:
        entity = entry["entity"]
        attributes = " ".join(entry["attributes"])
        input_text = f"Generate attributes for the database entity {entity}: {attributes}"
        encoding = tokenizer(
            input_text,
            max_length=max_length,
            padding="max_length",
            truncation=True,
            return_tensors="pt",
        )
        dataset.append({
            "input_ids": encoding["input_ids"].squeeze(),
            "attention_mask": encoding["attention_mask"].squeeze(),
        })
    return dataset

# Add a new token for separation between input and output
tokenizer.add_tokens(["<SEP>"])
model.resize_token_embeddings(len(tokenizer))

# Prepare the dataset and dataloader
dataset = create_dataset(training_data, tokenizer)
dataloader = DataLoader(dataset, batch_size=1, shuffle=True)

# Initialize optimizer and loss function
optimizer = AdamW(model.parameters(), lr=5e-5)
criterion = torch.nn.CrossEntropyLoss()

# Training loop
num_epochs = 10
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)


model.train()

for epoch in range(num_epochs):
    total_loss = 0.0
    for batch in tqdm(dataloader, desc=f"Epoch {epoch + 1}/{num_epochs}"):
        input_ids = batch["input_ids"].to(device)
        attention_mask = batch["attention_mask"].to(device)

        # Forward pass
        outputs = model(input_ids, attention_mask=attention_mask, labels=input_ids)
        loss = outputs.loss

        # Backward pass and optimization
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

        total_loss += loss.item()

    average_loss = total_loss / len(dataloader)
    print(f"Epoch {epoch + 1}/{num_epochs}, Loss: {average_loss}")

# Save the trained model
model.save_pretrained("/model/gpt_trained_model")
tokenizer.save_pretrained("/model/gpt_trained_tokenizer")




