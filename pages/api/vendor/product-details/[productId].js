import { prisma } from '@/sever/db/client';
export default async function handler(req, res) {
  const { productId } = req.query;
  switch (req.method) {
    case 'GET':
      const product = await prisma.product.findUnique({
        where: {
          id: parseInt(productId),
        },
      });

      const user = await prisma.vendor.findUnique({
        where: {
          id: product.vendorId,
        },
      });
      res.status(201).json({ product, user });
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
