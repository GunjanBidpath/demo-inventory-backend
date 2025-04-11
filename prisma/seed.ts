import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';

const prisma = new PrismaClient();

async function main() {
  const data = JSON.parse(fs.readFileSync('./prisma/seed.json', 'utf-8'));

  // 🔥 Clear data in the correct order to avoid foreign key issues
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  // 🌱 Seed categories first
  if (data.categories && data.categories.length > 0) {
    await prisma.category.createMany({ data: data.categories });
  }

  // 🌱 Then seed products
  if (data.products && data.products.length > 0) {
    await prisma.product.createMany({ data: data.products });
  }

  console.log('🌱 Seed data inserted successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
