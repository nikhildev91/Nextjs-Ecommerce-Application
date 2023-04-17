import { prisma } from '@/sever/db/client';
export default async function handler(req, res) {
  const { method, body } = req;
  switch (method) {
    case 'POST':
      const { email, password, firstName, lastName, phoneNumber, gender } =
        body;

      const user = await prisma.vendor.create({
        data: {
          email,
          password,
          firstName,
          lastName,
          phoneNumber,
          gender,
        },
      });
      res.status(201).json(user);
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
