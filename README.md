# CSV to JSON Converter

This is a simple web-based tool to convert CSV data into JSON format. It allows users to upload a CSV file, parses the data, and outputs the corresponding JSON structure. The tool also provides options to **copy** the resulting JSON to the clipboard and **download** it as a `.json` file for further use.

## Features
- Upload CSV files and automatically convert them to JSON format.
- Displays the parsed JSON in a user-friendly format.
- Ability to **copy** the JSON data to the clipboard.
- Option to **download** the parsed JSON data as a `.json` file.

## Getting Started

### Prerequisites

Ensure you have a modern web browser to run the CSV to JSON Converter. The tool relies on **PapaParse** for parsing CSV files and utilizes the **Clipboard API** for copying content to the clipboard.

### How to Use

1. Open the tool on [this web page](https://mvster1.github.io/csv-to-json-converter/) or clone this repository.
2. Click on the "Choose File" button and select your CSV file.
3. The tool will automatically parse the CSV file and display the resulting JSON output.
4. To copy the JSON to your clipboard, click the **Copy JSON** button.
5. To download the JSON as a file, click the **Download JSON** button.

### Example CSV Input:
```csv
name,age,city
Alice,30,New York
Bob,25,Los Angeles
Charlie,35,Chicago
