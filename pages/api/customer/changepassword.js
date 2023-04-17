import { prisma } from '../../../sever/db/client';
export default async function handler(req, res) {
  const { method, body } = req;
  switch (method) {
    case 'PUT':
      const { email, currentPassword, newPassword } = body;
      const user = await prisma.customer.findUnique({
        where: {
          email,
        },
      });
      if (user.password === currentPassword) {
        const details = await prisma.customer.update({
          where: {
            email,
          },
          data: {
            password: newPassword,
          },
        });
        res.status(201).json(details);
      } else {
        res
          .status(401)
          .json({ status: false, message: 'Incorrect Current Password' });
      }
      break;
    default:
      res.setHeader('Allow', ['PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
