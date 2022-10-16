# Convert a text file to JSON
import json
# import sys
from os.path import join, dirname

# Read the text file with utf-8 encoding
with open(join(dirname(__file__), 'MBTI.txt'), 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Convert the text file to JSON
json_data = []
for line in lines:
    if line[0].isdigit():
        json_data.append({
            "question": line.strip() + ' ',
            "options": {"A": "", "B": "",},
        })
    elif line[0] == 'a':
        json_data[-1]["options"]["A"] = line.strip()
    elif line[0] == 'b':
        json_data[-1]["options"]["B"] = line.strip()


# Write the JSON file
with open(join(dirname(__file__), "out.json"), 'w') as f:
    json.dump(json_data, f)

# Run the script
# python TEXT_to_JSON.py text_file.json output_file.json