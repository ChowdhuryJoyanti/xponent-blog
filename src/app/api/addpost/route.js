import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function POST(req, res) {
  try {
    const params = new URL(req.url).searchParams;
    const categoryID = params.get("id");
    const Post = await prisma.posts.create({
      data: {
        ...(await req.json()),
        category: {
          connect: {
            id: categoryID,
          },
        },
        user: {
          connect: {
            id: "65270435afc91ee2257bc816",
          },
        },
      },
    });
    return NextResponse.json({
      msg: "success",
      data: Post,
    });
  } catch (error) {
    return NextResponse.json({
      msg: "failed",
      error,
    });
  }
}

export async function GET(req, res) {
  try {
    const posts = await prisma.posts.findMany();
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
