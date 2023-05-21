import { Body, Controller, Delete, Get, Put, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { NilaiService } from './nilai.service';
import { UpdateNilaiByDosenNameDto, UpdateNilaiDto } from './dto/nilai.dto';

@ApiTags('nilai')
@Controller('demo/v1/nilai')
export class NilaiController {
  constructor(private readonly nilaiService: NilaiService) {}

  @Get('highes-nilai/by-kode-mata-kuliah')
  @ApiQuery({ name: 'kodeMK'})
  getHighesNilaiByKodeMk( @Query('kodeMK') kodeMK: string) {
    return this.nilaiService.getHighestNilaiByKodeMK(kodeMK);
  }

  @Get('average/mata-kuliah')
  getAverageNilaiByMataKuliah() {
    return this.nilaiService.getAverageNilai();
  }

  @Put('update-nilai/by-no-mahasiswa-and-kode-mata-kuliah')
  updateNilaiMahasiswaByNoMhsAndKodeMk(@Body() dto: UpdateNilaiDto){
    return this.nilaiService.updateNilai(dto);
  }

  @Put('update-nilai/by-nama-dosen')
  updateNilaiByDosenName(@Body() dto: UpdateNilaiByDosenNameDto){
    return this.nilaiService.changeAllScoreMahasiswaByDosenName(dto);
  }

  @Delete('kosongkan-nilai')
  clearAllNilai(){
    return this.nilaiService.clearNilai();
  }
}
