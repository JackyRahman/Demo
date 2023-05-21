import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class UpdateNilaiDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    NoMhs: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    KodeMk: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    Nilai: number;
}

export class UpdateNilaiByDosenNameDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    DosenName: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    Nilai: number;
}