import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from 'next-auth/providers/google'

const authOptions: AuthOptions = {

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? '',
            clientSecret: process.env.GOOGLE_SECRET ?? '',
          }),
    ],

    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60

    },

    callbacks: {
        async session({session , token, user}){

            session.user = token.user;

            return session
        },

        async jwt({token, user, account, profile, isNewUser}){

            if (account) {
                token.accessToken = account.access_token
                token.user = user;
              }

            return token
        }


    }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, authOptions };