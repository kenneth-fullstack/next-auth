// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// export default NextAuth({
//   // Configure one or more authentication providers
//   providers: [
//     CredentialsProvider({
//       id: "domain-login",
//       name: "Credential Account",
//       credentials: {
//         username: {
//           label: "Email",
//           type: "email",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (
//           credentials.username === "kenneth@sample.com" &&
//           credentials.password === "admin!123"
//         ) {
//           const user = {
//             /* add function to get user */
//             id: 1,
//             name: "Kenneth",
//             email: "kenneth@sample.com",
//           };
//           return user;
//         }

//         return null;
//       },
//     }),
//   ],

//   callbacks: {
//     jwt: async ({ token, user }) => {
//       // first time jwt callback is run, user object is availables
//       if (user) {
//         token.id = user.id;
//       }

//       return token;
//     },
//     session: async ({ session, token }) => {
//       if (token) {
//         session.id = token.id;
//       }

//       return session;
//     },
//   },
//   secret: "test",
//   jwt: {
//     secret: "test",
//     encryption: true,
//   },
// });

// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { FirebaseAdapter } from "@next-auth/firebase-adapter";

// import firebase from "firebase/app";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

// const firestore = (firebase.apps[0] ?? firebase.initializeApp(firebaseConfig)).firestore();

// // For more information on each option (and a full list of options) go to
// // https://next-auth.js.org/configuration/options
// export default NextAuth({
//   // https://next-auth.js.org/providers/overview
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//   ],
//   adapter: FirebaseAdapter(firestore),
// });
