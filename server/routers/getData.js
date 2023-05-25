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
const career = [];
const first = [];
const second = [];
const posting = [];
const language = [];
const year = [];
const significant = [];

rows.forEach((e) => {
  name.push(e["기업명"]);
  field.push(e["직무"]);
  career.push(e["경력"]);
  first.push(e["1차"]);
  second.push(e["2차"]);
  posting.push(e["공고종류"]);
  language.push(e["언어"]);
  year.push(e["연도"]);
  significant.push(e["특이사항"]);
});

const result = [];

for (let i = 0; i < rows.length; i++) {
  let val = {
    name: name[i],
    field: field[i],
    career: career[i],
    first: first[i] ? first[i].split(",") : null,
    second: second[i] ? second[i].split(",") : null,
    posting: posting[i],
    language: language[i],
    year: year[i],
    significant: significant[i] ? significant[i] : null,
  };
  result.push(val);
}

// console.log(result);

router.get("/", async (req, res) => {
  try {
    return res.send(result);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    let arr = [];
    const data = req.body;
    data.forEach((el) => arr.push(String(el)));
    await sheet.addRow(arr);
    res.send("입력이 완료되었습니다");
  } catch (err) {
    res.send("입력실패");
    console.log(err);
  }
});

export default router;
