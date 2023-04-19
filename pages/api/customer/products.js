import { prisma } from '../../../sever/db/client';
export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      const products = await prisma.product.findMany();
      res.status(201).json(products);
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
