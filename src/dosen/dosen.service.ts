import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DosenService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async getByName(name: string) {
    return await this.prisma.dosen.findMany({ where: { Nama: { startsWith: name} }})
  }

  async getByKodeMataKuliah(kodeMK: string) {
    return this.prisma.dosen.findMany({
      where: { MataKuliah: { some: { Kode: kodeMK } } },
    });
  }

}
