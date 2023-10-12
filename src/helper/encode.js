import { PrismaClient } from "@prisma/client";
import { SignJWT } from "jose";

const prisma = new PrismaClient();

export async function encodeFunc(email) {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const alg = "HS256";

    const findUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    const token = await new SignJWT({ id: findUser.id })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setIssuer("http://localhost:3000")
      .setExpirationTime("2h")
      .sign(secret);

    return {
      msg: "success",
      data: token,
    };
  } catch (error) {
    return {
      msg: "failed",
      error: error,
    };
  }
}
