import { jwtVerify } from "jose";

export async function decodeFunc(token) {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const decode = await jwtVerify(token, secret);
    return decode?.payload?.id;
  } catch (error) {
    return {
      msg: "failed",
      error: error,
    };
  }
}
