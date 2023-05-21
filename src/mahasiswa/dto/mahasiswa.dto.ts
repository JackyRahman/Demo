import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from 'class-validator';

export class InsertNewMahasiswa {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    Nama: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    NoMhs: string;

    @ApiProperty()
    @IsNotEmpty()
    TanggalLahir: Date;
}