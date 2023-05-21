import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';
import { PrismaModule } from './prisma/prisma.module';
import { MataKuliahModule } from './mataKuliah/mataKuliah.module';
import { DosenModule } from './dosen/dosen.module';
import { NilaiModule } from './nilai/nilai.module';

@Module({
  imports: [
    MahasiswaModule,
    MataKuliahModule,
    DosenModule,
    NilaiModule,
    PrismaModule
  ],
  providers: [PrismaService],
})
export class AppModule {}
