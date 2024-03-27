import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "better-sqlite",
  dbCredentials: {
    url: "drizzle.db",
  },
} satisfies Config;
