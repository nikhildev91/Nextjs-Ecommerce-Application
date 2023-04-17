import { prisma } from '../../../sever/db/client';
export default async function handler(req, res) {
  const { method, body } = req;
  switch (method) {
    case 'PUT':
      const {
        whereEmail,
        firstName,
        lastName,
        email,
        address,
        image,
        gender,
        phoneNumber,
      } = body;
      const user = await prisma.customer.update({
        where: {
          email: whereEmail,
        },
        data: {
          firstName,
          lastName,
          email,
          Address: address,
          image,
          gender,
          phoneNumber,
        },
      });
      res.status(201).json(user);
      break;
    default:
      res.setHeader('Allow', ['PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
