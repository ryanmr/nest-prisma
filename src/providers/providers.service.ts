import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProvidersService {
  constructor(private readonly prisma: PrismaService) {}

  async getProviderById(id: Prisma.ProviderWhereUniqueInput) {
    return this.prisma.provider.findUnique({
      where: id,
    });
  }
}
