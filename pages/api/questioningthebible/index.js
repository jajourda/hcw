import { google } from "googleapis";

export async function getQuestioningTheBible() {
  try {
    const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
      target
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "questioningthebible",
    });

    const rows = response.data.values;
    if (rows.length) {
      return rows.map((row) => ({
        timestamp: row[0],
        question: row[1],
        description: row[2],
        book: row[3],
        chapter:row[4],
        verseRange:row[5],
        category:row[6],
        tags:row[7],
        answer:row[8],
      }));
    }
  } catch (err) {
    console.log(err);
  }

  return [];
}
