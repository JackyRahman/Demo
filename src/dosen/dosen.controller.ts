import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { DosenService } from './dosen.service';

@ApiTags('dosen')
@Controller('demo/v1/dosen')
export class DosenController {
  constructor(private readonly dosenService: DosenService) {}

  @Get('by-initial')
  @ApiQuery({ name: 'initial'})
  getDosenByInitial( @Query('initial') initial: string) {
    return this.dosenService.getByName(initial);
  }

  @Get('by-kode-mk')
  @ApiQuery({ name: 'kodeMK'})
  getAllDosen( @Query('kodeMK') kodeMK: string) {
    return this.dosenService.getByKodeMataKuliah(kodeMK);
  }

}
