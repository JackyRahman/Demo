import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { MataKuliahService } from './mataKuliah.service';

@ApiTags('mata-kuliah')
@Controller('demo/v1/mata-kuliah')
export class MataKuliahController {
  constructor(private readonly mataKuliahService: MataKuliahService) {}

  @Get('by-sks')
  @ApiQuery({ name: 'sks'})
  getAllMataKuliah( @Query('sks') sks: number) {
    return this.mataKuliahService.getMataKuliahBySKS(sks);
  }

}
