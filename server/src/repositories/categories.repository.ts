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

  async findAll() {
    return prisma.category.findMany();
  }     

  async findById(id: string) {
    return prisma.category.findUnique({
      where: { id },
    });
  } 

  async update(id: string, name: string, type: string) {
    return prisma.category.update({
      where: { id },
      data: { name, type },
    });
  }

  async delete(id: string) {
    return prisma.category.delete({
      where: { id },
    });
  } 
 
 
}