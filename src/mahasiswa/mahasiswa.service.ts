import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { InsertNewMahasiswa } from './dto/mahasiswa.dto';

@Injectable()
export class MahasiswaService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async getAll() {
    return await this.prisma.mahasiswa.findMany();
  }

  async getNomorAndNama() {
    return await this.prisma.mahasiswa.findMany({ select :{ NoMhs: true, Nama: true}});
  }

  async getByNIKDosen(nikDosen: string) {
    return this.prisma.mahasiswa.findMany({
      where: { Nilai: { some: { MataKuliah: { Dosen: { NIK: nikDosen } } } } },
      select: { Nama: true },
    });
  }

  async deleteMahasiswaByNoMhs(noMhs: string){
    const deleted =  await this.prisma.mahasiswa.delete({
      where: {
        NoMhs: noMhs,
      },
    });

    return { deleted }
  }

  async createNewMahasiswa(dto: InsertNewMahasiswa){
    return await this.prisma.mahasiswa.create({
      data:dto
    });
  }
}
