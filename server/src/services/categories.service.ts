import { CategoryRepository } from '../repositories/categories.repository';

export class CategoryService {
  private categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  async create(name: string, type: string) {
    // verificar se a categoria já existe
    const existingCategory = await this.categoryRepository.findByName(name);
    if (existingCategory) {
      throw new Error('Categoria com este nome já existe.');
    }
    return this.categoryRepository.create(name, type);
  }

  async findAll() {
    return this.categoryRepository.findAll();
  }

  async findById(id: string) {
    const category = await this.categoryRepository.findById(id);  
    if (!category) {
      throw new Error('Categoria não encontrada.');
    }
    return category;
  }

  async update(id: string, name: string, type: string) {
    const existingCategory = await this.categoryRepository.findById(id);  
    if (!existingCategory) {
      throw new Error('Categoria não encontrada.');
    } 
    return this.categoryRepository.update(id, name, type);
  } 
  async delete(id: string) {
    const existingCategory = await this.categoryRepository.findById(id);  
    if (!existingCategory) {
      throw new Error('Categoria não encontrada.');
    } 
      return this.categoryRepository.delete(id);
    }
  }
  