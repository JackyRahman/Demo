-- CreateTable
CREATE TABLE "MataKuliah" (
    "Kode" VARCHAR(10) NOT NULL,
    "NIKDosen" VARCHAR(20) NOT NULL,
    "Nama" VARCHAR(100) NOT NULL,
    "SKS" SMALLINT NOT NULL
);

-- CreateTable
CREATE TABLE "Dosen" (
    "NIK" VARCHAR(20) NOT NULL,
    "Nama" VARCHAR(100) NOT NULL,
    "TanggalLahir" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Mahasiswa" (
    "NoMhs" VARCHAR(20) NOT NULL,
    "Nama" VARCHAR(100) NOT NULL,
    "TanggalLahir" TIMESTAMP(3) NOT NULL,
    "TanggalMasuk" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "Nilai" (
    "KodeMK" VARCHAR(10) NOT NULL,
    "NoMhs" VARCHAR(20) NOT NULL,
    "Nilai" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Nilai_pkey" PRIMARY KEY ("KodeMK","NoMhs")
);

-- CreateIndex
CREATE UNIQUE INDEX "MataKuliah_Kode_key" ON "MataKuliah"("Kode");

-- CreateIndex
CREATE UNIQUE INDEX "Dosen_NIK_key" ON "Dosen"("NIK");

-- CreateIndex
CREATE UNIQUE INDEX "Mahasiswa_NoMhs_key" ON "Mahasiswa"("NoMhs");

-- AddForeignKey
ALTER TABLE "MataKuliah" ADD CONSTRAINT "MataKuliah_NIKDosen_fkey" FOREIGN KEY ("NIKDosen") REFERENCES "Dosen"("NIK") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nilai" ADD CONSTRAINT "Nilai_KodeMK_fkey" FOREIGN KEY ("KodeMK") REFERENCES "MataKuliah"("Kode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nilai" ADD CONSTRAINT "Nilai_NoMhs_fkey" FOREIGN KEY ("NoMhs") REFERENCES "Mahasiswa"("NoMhs") ON DELETE RESTRICT ON UPDATE CASCADE;
