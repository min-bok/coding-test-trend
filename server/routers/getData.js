import express from "express";
import { GoogleSpreadsheet } from "google-spreadsheet";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

// Initialize the sheet
const sheet_id = "1ouc2PKURAQylNWhL9iRAHkXnd12ed6lZ6h2ybWKpC-M";
const doc = new GoogleSpreadsheet(sheet_id);

// Initialize Auth
await doc.useServiceAccountAuth({
  client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY,
});

// loads document
await doc.loadInfo();

const sheet = doc.sheetsByIndex[0];
const rows = await sheet.getRows();

const name = [];
const field = [];
const first = [];
const second = [];
const posting = [];
const year = [];

rows.forEach((e) => {
  name.push(e["기업명"]);
  field.push(e["분야"]);
  first.push(e["1차"]);
  second.push(e["2차"]);
  posting.push(e["채용공고"]);
  year.push(e["연도"]);
});

const result = [];

for (let i = 0; i < rows.length; i++) {
  let val = {
    name: name[i],
    field: field[i],
    first: first[i],
    second: second[i],
    posting: posting[i],
    year: year[i],
  };
  result.push(val);
}

router.get("/", async (req, res) => {
  try {
    return res.send(result);
  } catch (err) {
    console.log(err);
  }
});

export default router;
