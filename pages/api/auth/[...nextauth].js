import NextAuth from 'next-auth/next';
import { PrismaClient } from '@prisma/client';
import CredentialsProvider from 'next-auth/providers/credentials';
const prisma = new PrismaClient();

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (token?._id) session.user.id = token.id;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (credentials.user === 'Customer') {
          const user = await prisma.customer.findUnique({
            where: {
              email: credentials.email,
            },
          });
          if (user && credentials.password === user.password) {
            return {
              id: user.id,
              email: user.email,
              name: user.type,
            };
          }
          throw new Error('Invalid email or password');
        } else if (credentials.user === 'vendor') {
          const vendor = await prisma.vendor.findUnique({
            where: {
              email: credentials.email,
            },
          });
          if (vendor && credentials.password === vendor.password) {
            return {
              id: vendor.id,
              email: vendor.email,
              name: vendor.type,
            };
          }
          throw new Error('Invalid email or password');
        }
      },
    }),
  ],
});
