import { prisma } from '@/sever/db/client';
export default async function handler(req, res) {
  const { id } = req.query;
  switch (req.method) {
    case 'DELETE':
      const product = await prisma.product.delete({
        where: {
          id: parseInt(id),
        },
      });
      res.status(201).json({ status: true, product });
      break;
    default:
      res.setHeader('Allow', ['DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
