import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateNilaiByDosenNameDto, UpdateNilaiDto } from './dto/nilai.dto';

@Injectable()
export class NilaiService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async getHighestNilaiByKodeMK(kodeMK: string) {
    const result = await this.prisma.nilai.findFirst({
      where: { KodeMK: kodeMK },
      orderBy: { Nilai: 'desc' },
      select: { Nilai: true },
    });

    return { NilaiTertinggi: result?.Nilai || 0 };
  }

  async getAverageNilai() {
    const scoreByMK = await this.prisma.nilai.groupBy({
      by: ['KodeMK'],
      _avg: {
        Nilai: true,
      },
      _count: {
        Nilai: true,
      },
      having: {
        Nilai: {
          _count: {
            gt: 0,
          },
        },
      },
      orderBy: {
        KodeMK: 'asc',
      },
    });

    console.log(scoreByMK);
    
    const result = scoreByMK.map((item) => ({
      NamaMataKuliah: item.KodeMK,
      NilaiRataRata: item._avg.Nilai,
    }));
  
    return result;
  }

  async updateNilai(dto: UpdateNilaiDto) {
    const { NoMhs, KodeMk, Nilai } = dto;
  
    // Melakukan pembaruan nilai sesuai dengan NoMhs, KodeMk, dan Nilai yang diterima
    const updatedCount = await this.prisma.nilai.updateMany({
      where: {
        NoMhs,
        KodeMK: KodeMk,
      },
      data: {
        Nilai,
      },
    });

    const nilai = await this.prisma.nilai.findMany({
      where: {
        KodeMK: KodeMk,
        NoMhs: NoMhs
      },
    })

    return {
      updated: updatedCount,
      nilai
    }
  }
  
  async changeAllScoreMahasiswaByDosenName(dto: UpdateNilaiByDosenNameDto){
    const updated =  await this.prisma.nilai.updateMany({
      where: {
        MataKuliah: {
          Dosen: { Nama: dto.DosenName }
        }
      },
      data: {
        Nilai: dto.Nilai,
      },
    });

    const nilai = await this.prisma.nilai.findMany({
      where: {
        MataKuliah: {
          Dosen: { Nama: dto.DosenName }
        }
      }
    })

    return {
      updated,
      nilai
    }
  }

  async clearNilai() {
   const deleted = await this.prisma.nilai.deleteMany({});

   return { deleted }
  }

}
