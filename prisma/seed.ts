import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const cryptoProducts = [
    {
      title: 'MANA',
      description: 'Decentraland',
      price: 0.35871342,
      createdAt: new Date(),
    },
    {
      title: 'ICP',
      description: 'Internet Computer',
      price: 10.16,
      createdAt: new Date(),
    },
    {
      title: 'KCS',
      description: 'KuCoin Token',
      price: 9.88,
      createdAt: new Date(),
    },
    {
      title: 'ORDI',
      description: 'Ordinals',
      price: 39.4,
      createdAt: new Date(),
    },
    {
      title: 'SOL',
      description: 'Solana',
      price: 169.53,
      createdAt: new Date(),
    },
  ];

  for (const product of cryptoProducts) {
    await prisma.product.create({
      data: {
        title: product.title,
        description: product.description,
        price: product.price,
        createdAt: product.createdAt,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
