import { PrismaClient } from '@/prisma/generated/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma || new PrismaClient();  // Hapus $extends(withAccelerate())

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
