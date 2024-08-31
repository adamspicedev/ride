import { neon } from "@neondatabase/serverless";

export const buildDbUrl = () => {
  const publishableKey = process.env.DATABASE_URL!;

  if (!publishableKey) {
    throw new Error(
      "Missing Publishable Key. Please set DATABASE_URL in your .env"
    );
  }

  return neon(publishableKey);
};
