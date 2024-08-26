import { UserType } from "@/models/custom-types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  //   console.log("request :>> ", request);
  const { searchParams } = new URL(request.url);
  console.log("searchParams :>> ", searchParams);
  const userId = searchParams.get("userId");
  console.log("userId :>> ", userId);

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    {
      // headers: {
      //   "Content-Type": "application/json",
      //   "API-Key": process.env.DATA_API_KEY,
      // },
    }
  );
  const data: UserType = await res.json();
  console.log("data :>> ", data);

  return NextResponse.json(data, { status: 200 });
}
