import { google } from "googleapis";

export async function getBibleInBits() {
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
      range: "bibleinbits",
    });

    const rows = response.data.values;
    if (rows.length) {
      return rows.map((row) => ({
        timestamp: row[0],
        passageContent: row[1],
        passageReference: row[2],
        explanation: row[3],
        category:row[4],
        questions:row[5],
        notes:row[6],
        tldr:row[7],
        youtube:row[8]
      }));
    }
  } catch (err) {
    console.log(err);
  }

  return [];
}
