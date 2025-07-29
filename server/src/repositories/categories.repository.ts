import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CategoryRepository {
  async create(name: string, type: string) {
    return prisma.category.create({
      data: { name, type },
    });
  }

  async findByName(name: string) {
    return prisma.category.findUnique({
      where: { name },
    });
  }

  // ... Outros métodos de repositório (findAll, findById, update, delete)
}