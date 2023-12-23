import GitHubProvider from "next-auth/providers/github";
import PostgresAdapter from "@auth/pg-adapter";
import { Pool } from "pg";

const pool = new Pool({
  host:process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password:process.env.POSTGRES_PASSWORD,
  database:process.env.POSTGRES_DATABASE,
  ssl:true,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 20000,

});

export const options = {
  adapter: PostgresAdapter(pool),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_Secret,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return token;
    },
    async session({ session,user, token }) {
      session.user=user;
      return session;
    },
  },
};
