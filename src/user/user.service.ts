import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly PrismaClient: PrismaService) {}

  async getMainPage() {
    return 'User Main Page';
  }

  async getProduct() {
    return this.PrismaClient.products.findMany();
  }
}
