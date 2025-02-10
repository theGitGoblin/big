import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    annual_review:[
  { "id": 1, "month": "January", "revenue": 10000 },
  { "id": 2, "month": "February", "revenue": 12000 },
  { "id": 3, "month": "March", "revenue": 15000 },
  { "id": 4, "month": "April", "revenue": 13000 },
  { "id": 5, "month": "May", "revenue": 17000 },
  { "id": 6, "month": "June", "revenue": 16000 },
  { "id": 7, "month": "July", "revenue": 18000 },
  { "id": 8, "month": "August", "revenue": 20000 },
  { "id": 9, "month": "September", "revenue": 19000 },
  { "id": 10, "month": "October", "revenue": 22000 },
  { "id": 11, "month": "November", "revenue": 25000 },
  { "id": 12, "month": "December", "revenue": 27000 }
]

  });
}

export async function POST(request) {
  
  const data = await request.json();
    return NextResponse.json({
        data
    }
  )}
