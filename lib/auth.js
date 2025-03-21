import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";
import { db } from "./db";

export const authOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 3600,
  },
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await db.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (!user) return null;

          const passwordMatch = await compare(
            credentials.password,
            user.password
          );

          if (!passwordMatch) return null;

          return {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
            profile_id: user.profile_id,
          };
        } catch (error) {
          console.error("Authorization error: ", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          ...user,
        };
      }

      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id,
        username: token.username,
        email: token.email,
        role: token.role,
        name: token.name,
        profile_id: token.profile_id,
      };

      return session;
    },
  },
};
