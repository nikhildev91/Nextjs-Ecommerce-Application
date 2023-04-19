import { prisma } from '@/sever/db/client';
export default async function handler(req, res) {
  const { method, body } = req;
  switch (method) {
    case 'POST':
      const {
        vendorId,
        productName,
        catchyDescription,
        description,
        productDetails,
        price,
        sizes,
        tags,
        totalStock,
        color,
        image,
      } = body;
      const slugify = (str) =>
        str
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, '')
          .replace(/[\s_-]+/g, '-')
          .replace(/^-+|-+$/g, '');

      const product = await prisma.product.create({
        data: {
          vendorId: vendorId,
          productName,
          catchyTitle: catchyDescription,
          description,
          productDetails,
          price: parseFloat(price),
          size: sizes,
          tags,
          totalStock: parseInt(totalStock),
          color,
          image,
          slug: slugify(productName),
        },
      });
      res.status(201).json(product);
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
