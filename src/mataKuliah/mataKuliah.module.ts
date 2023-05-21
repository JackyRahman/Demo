import { Module } from '@nestjs/common';
import { MataKuliahService } from './mataKuliah.service';
import { MataKuliahController } from './mataKuliah.controller';

@Module({
  controllers: [MataKuliahController],
  providers: [MataKuliahService],
})
export class MataKuliahModule {}
