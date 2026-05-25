const fs = require("fs");

// Read text file
const text = fs.readFileSync("../input/raw-text.txt", "utf8");

// REGEX PATTERNS

// Email addresses
const emailPattern =
  /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

// URLs
const urlPattern =
  /https?:\/\/[^\s]+/g;

// Phone numbers
const phonePattern =
  /(?:\+\d{1,3}\s?)?(?:\(?\d{2,4}\)?[\s-]?)?\d{3}[\s-]?\d{3}[\s-]?\d{3,4}/g;

// Credit cards
const cardPattern =
  /\b(?:\d[ -]*?){13,16}\b/g;

// Time formats
const timePattern =
  /\b(?:[01]?\d|2[0-3]):[0-5]\d(?:\s?[APMapm]{2})?\b/g;

// HTML tags
const htmlPattern =
  /<[^>]+>/g;

// Hashtags
const hashtagPattern =
  /#\w+/g;

// Currency values
const currencyPattern =
  /(?:\$|EUR|RWF)\s?\d[\d,]*/g;

// EXTRACT DATA

const emails = text.match(emailPattern) || [];
const urls = text.match(urlPattern) || [];
const phones = text.match(phonePattern) || [];
const cards = text.match(cardPattern) || [];
const times = text.match(timePattern) || [];
const htmlTags = text.match(htmlPattern) || [];
const hashtags = text.match(hashtagPattern) || [];
const currencies = text.match(currencyPattern) || [];


// ALU EMAIL VALIDATION

const aluEmails = [];

emails.forEach((email) => {
  if (
    email.endsWith("@alueducation.com") ||
    email.endsWith("@alumni.alueducation.com") ||
    email.endsWith("@si.alueducation.com")
  ) {
    aluEmails.push(email);
  }
});

// SECURITY CHECKS

const dangerousPatterns = [
  /<script.*?>/gi,
  /DROP TABLE/gi,
  /SELECT \* FROM/gi
];

const unsafeContent = [];

dangerousPatterns.forEach((pattern) => {
  const found = text.match(pattern);

  if (found) {
    unsafeContent.push(...found);
  }
});

// MASK CREDIT CARD NUMBERS

const maskedCards = [];

cards.forEach((card) => {

  // Remove spaces and dashes
  const cleanCard = card.replace(/\D/g, "");

  // Keep only last 4 digits visible
  const masked =
    "*".repeat(cleanCard.length - 4) +
    cleanCard.slice(-4);

  maskedCards.push(masked);
});

// SAVE RESULTS

const results = {
  emails: emails,
  aluEmails: aluEmails,
  urls: urls,
  phoneNumbers: phones,
  creditCards: maskedCards,
  times: times,
  htmlTags: htmlTags,
  hashtags: hashtags,
  currencyValues: currencies,
  unsafeContentDetected: unsafeContent
};

// Convert to JSON
const jsonData = JSON.stringify(results, null, 2);

// Save JSON file
fs.writeFileSync(
  "../output/sample-output.json",
  jsonData
);

console.log("Data extraction completed successfully.");
console.log(jsonData);