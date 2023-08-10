import connection from "@/utils/db";
import { NextResponse } from "next/server";
import Users from "@/models/UserModel";

export const GET = async (request) => {
	//fetch data from mongodb

	try {
		await connection();
		const users = Users.find();
		return new NextResponse(users, { status: 200 });
	} catch (error) {
		return new NextResponse("database error", { status: 500 });
	}
};
