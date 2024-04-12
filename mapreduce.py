import json
from mapper import mapper
from reducer import reducer

# Read data from JSON file
with open('top_anime_data.json', 'r') as file:
    data = json.load(file)

# Map phase
mapped_data = mapper(data)

# Reduce phase
reduced_data = reducer([mapped_data])

# Print result
with open('reduced_data.json', 'w') as outfile:
    json.dump(reduced_data, outfile)

print("Data has been written to reduced_data.json")