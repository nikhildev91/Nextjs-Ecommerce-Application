import { prisma } from '@/sever/db/client';
export default async function handler(req, res) {
  const { id } = req.query;
  switch (req.method) {
    case 'GET':
      const user = await prisma.vendor.findUnique({
        where: {
          email: id,
        },
      });

      const products = await prisma.product.findMany({
        where: {
          vendorId: user.id,
        },
      });

      res.status(201).json({ products, user });

      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
