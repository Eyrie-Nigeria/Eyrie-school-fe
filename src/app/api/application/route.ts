import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    if (
      !process.env.GOOGLE_SHEETS_SHEET_ID ||
      !process.env.GOOGLE_SHEETS_CLIENT_EMAIL ||
      !process.env.GOOGLE_SHEETS_PRIVATE_KEY
    ) {
      throw new Error('Missing Google Sheets environment variables');
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SHEET_ID!;
    const SHEET_NAME = 'Sheet1';

    // 1️⃣ Get existing emails
    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!F2:F`,
    });

    const emails = existing.data.values?.flat() || [];

    if (emails.includes(data.email)) {
      return NextResponse.json(
        { result: 'error', message: 'This email has already been used' },
        { status: 400 }
      );
    }

    const newRow = [
      new Date().toISOString(),
      uuidv4(),
      uuidv4(),
      data.fullName,
      data.phone,
      data.email,
      data.university,
      data.department,
      data.level,
      data.why,
      data.discord,
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1`,
      valueInputOption: 'RAW',
      requestBody: { values: [newRow] },
    });

    return NextResponse.json({ result: 'success' });
  } catch (err) {
    console.error('Google Sheets error:', err);
    return NextResponse.json({ result: 'error', message: (err as Error).message }, { status: 500 });
  }
}
