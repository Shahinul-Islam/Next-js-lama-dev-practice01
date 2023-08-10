import { NextResponse } from "next/server";

export const GET = async (request) => {
	//fetch data from mongodb

	return new NextResponse("it works", { status: 200 });
};
