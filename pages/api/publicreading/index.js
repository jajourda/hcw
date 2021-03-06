import { google } from "googleapis";

export async function getPublicReading() {
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
      range: "publicreading",
    });

    const rows = response.data.values;
    if (rows.length) {
      return rows.map((row) => ({
        date: row[0],
        torahTitle: row[1],
        torahPassage: row[2],
        torahVerseTotal: row[3],
        gospelPassage: row[4],
        gospelVerseTotal: row[5],
      }));
    }
  } catch (err) {
    console.log(err);
  }

  return [];
}
