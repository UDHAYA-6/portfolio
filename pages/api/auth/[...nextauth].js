import NextAuth from "next-auth";
import { genSalt, hash, compare } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import { ConnectToDatabase } from "@/Mongodb/mongodb";
export default NextAuth({
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        const cl = await ConnectToDatabase();
        const client = await cl.connect();
        const db = client.db("Portfolio");
        const user = await db.collection("Admin").findOne({
          Email: credentials.email,
        });
        const isValid = await compare(credentials.password, user.Password);

        if (isValid) {
          return Promise.resolve({ email: user.Email });
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],

  callbacks: {
    async session(session) {
      session.id = "3704890#4890";
      return session;
    },
  },
});
