import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { MahasiswaService } from './mahasiswa.service';
import { InsertNewMahasiswa } from './dto/mahasiswa.dto';

@ApiTags('Mahasiswa')
@Controller('demo/v1/mahasiswa')
export class MahasiswaController {
  constructor(private readonly mahasiswaService: MahasiswaService) {}

  @Get('all')
  getAllMahasiswa() {
    return this.mahasiswaService.getAll();
  }

  @Get('nomor-and-nama')
  getNomorAndNamaMahasiswa() {
    return this.mahasiswaService.getNomorAndNama();
  }

  @Get('by-nik-dosen')
  @ApiQuery({ name: 'nikDosen'})
  getByNikDosen( @Query('nikDosen') nikDosen: string) {
    return this.mahasiswaService.getByNIKDosen(nikDosen);
  }

  @Delete('delete-by-no-mahasiswa/:noMhs')
  @ApiParam({name: 'noMhs'})
  deleteMahasiswaByNoMhs(@Param('noMhs') noMhs:string){
    return this.mahasiswaService.deleteMahasiswaByNoMhs(noMhs)
  }

  @Post()
  createNewMahasiswa(@Body() dto: InsertNewMahasiswa ){
    return this.mahasiswaService.createNewMahasiswa(dto)
  }
}
