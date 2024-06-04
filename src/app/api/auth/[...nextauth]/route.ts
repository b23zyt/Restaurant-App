import { authOptions } from "@/utils/auth";
import NextAuth from "next-auth/next";

// import { NextAuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";



// const authOptions: NextAuthOptions = {
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_ID!,
//             clientSecret: process.env.GOOGLE_SECRET!,
//         }),
//     ],
// };

//create the auth endpoints

//create a handler to handle all get and post methods

//give the Auth options
const handler = NextAuth(authOptions); //including GoogleProvider

export {handler as GET, handler as POST}