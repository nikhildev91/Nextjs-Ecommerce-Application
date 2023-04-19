import { prisma } from '@/sever/db/client';
export default async function handler(req, res) {
  const { slug } = req.query;
  switch (req.method) {
    case 'GET':
      const product = await prisma.product.findUnique({
        where: {
          slug: slug,
        },
      });
      res.status(201).json(product);
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
