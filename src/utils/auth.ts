import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google"

//google provider
export const authOptions:NextAuthOptions = {
    providers: [
        GoogleProvider({
          // clientId: process.env.GOOGLE_ID as string,
          // clientSecret: process.env.GOOGLE_SECRET as string,
          clientId: process.env.GOOGLE_ID!,
          clientSecret: process.env.GOOGLE_SECRET!,
        }),
    ]
}

//able to get the user and status in the server component and api use the "getAuthSession" function
export const getAuthSession = () => getServerSession(authOptions)
