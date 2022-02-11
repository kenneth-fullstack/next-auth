import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "domain-login",
      name: "Credential Account",
      credentials: {
        username: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials.username === "kenneth@sample.com" &&
          credentials.password === "admin!123"
        ) {
          const user = {
            /* add function to get user */
            id: 1,
            name: "Kenneth",
            email: "kenneth@sample.com",
          };
          return user;
        }

        return null;
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
      // first time jwt callback is run, user object is availables
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }

      return session;
    },
  },
  secret: "test",
  jwt: {
    secret: "test",
    encryption: true,
  },
});
