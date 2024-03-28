import { users } from "../../db/schema";
import { db } from "../sqlite-service";

export default defineEventHandler(async (event) => {
  try {
    const usersResponse = await db.select().from(users).all();
    return { users: usersResponse };
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});
