# Data Extraction & Secure Validation Assignment

This project uses JavaScript and Regular Expressions (Regex) to extract useful information from raw text data.

The program extracts:
- Email addresses
- URLs
- Phone numbers
- Credit card numbers
- Hashtags
- Currency values

It also performs simple validation and security checks on the input data.

# Project Structure

```text
alu-regex-data-extraction_yourgithubusername/

├── input/
│   └── raw-text.txt

├── src/
│   └── main.js

├── output/
│   └── sample-output.json

└── README.md
```

# How the Program Works

1. The program reads text from `raw-text.txt`
2. Regex patterns are used to extract different data types
3. ALU email addresses are validated
4. Suspicious or unsafe content is detected
5. Sensitive credit card numbers are masked
6. Results are saved into `sample-output.json`

# How to Run the Project

## Step 1

Open the project folder in VS Code.

## Step 2

Open the terminal inside the project folder.

## Step 3

Run the following command:

```bash
node src/main.js
```

Or:

```bash
npm start
```

# Output

The extracted data will be saved in:

```text
output/sample-output.json
```

# Security Features

The program:
- Detects suspicious script tags
- Detects simple SQL injection patterns
- Masks credit card numbers
- Validates ALU email addresses
