import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MataKuliahService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async getMataKuliahBySKS(sks: number) {
    return await this.prisma.matakuliah.findMany({ where: { SKS: +sks }})
  }

}
