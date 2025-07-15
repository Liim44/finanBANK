import { CategoryRepository } from '../repositories/categories.repository';

export class CategoryService {
  private categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  async create(name: string) {
    // Aqui você pode adicionar lógica de negócio, como verificar se a categoria já existe
    const existingCategory = await this.categoryRepository.findByName(name);
    if (existingCategory) {
      throw new Error('Categoria com este nome já existe.');
    }
    return this.categoryRepository.create(name);
  }

  // ... Outros métodos de serviço (findAll, findById, update, delete)
}