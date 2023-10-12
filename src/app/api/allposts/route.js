import { PrismaClient, Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function GET(req, res) {
  try {
    const posts = await prisma.posts.findMany({
      include: {
        user: true,
      },
    });
    return NextResponse.json({
      msg: "success",
      data: posts,
    });
  } catch (error) {
    return NextResponse.json({
      msg: "failed",
      error,
    });
  }
}
