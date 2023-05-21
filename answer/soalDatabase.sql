-- 1.	Buat query select untuk keperluan dibawah ini:
    -- a.	Mendapatkan seluruh isi table Mata Kuliah
        a. SELECT * FROM "MataKuliah";

    -- b.	Mendapatkan kolom No Mhs dan kolom  Nama dari table Mahasiswa
        b. SELECT "NoMhs", "Nama" FROM "Mahasiswa";

    -- c.	Mendapatkan seluruh isi table Mata Kuliah yang SKSnya = 1
        c. SELECT * FROM public."MataKuliah"
            WHERE "SKS" = 1;

    -- d.	Mendapatkan dosen yang namanya diawali huruf “A”
        d. SELECT * FROM "Dosen"
            WHERE "Nama" LIKE 'B%';

    -- e.	Mendapatkan dosen yang mengajar matakuliah dengan kode “KOM210” (diperlukan semua kolom dosen, tidak lebih tidak kurang)
        e. SELECT "Dosen".* FROM "Dosen"
            JOIN "MataKuliah" ON "Dosen"."NIK" = "MataKuliah"."NIKDosen"
            WHERE "MataKuliah"."Kode" = 'KOM210';

    -- f.	Mendapatkan nama mahasiswa yang diajar oleh dosen dengan NIK “AB00123” (diperlukan hanya kolom Nama mahasiswa)
        f. SELECT "Mahasiswa"."Nama" FROM "Mahasiswa"
            JOIN "Nilai" ON "Mahasiswa"."NoMhs" = "Nilai"."NoMhs"
            JOIN "MataKuliah" ON "Nilai"."KodeMK" = "MataKuliah"."Kode"
            JOIN "Dosen" ON "MataKuliah"."NIKDosen" = "Dosen"."NIK"
            WHERE "Dosen"."NIK" = 'AB00123';

    -- g.	Mendapatkan nilai paling tinggi dari mata kuliah dengan kode “KOM210” (hanya 1 kolom yg diperlukan : “NilaiTertinggi”)
        g. SELECT MAX("Nilai") AS "NilaiTertinggi"
            FROM "Nilai"
            WHERE "KodeMK" = 'KOM210';

    -- h.	Mendapatkan Nilai rata –rata dari semua mata kuliah (kolom yang diperlukan : “NamaMataKuliah”, “NilaiRataRata”)
        h. SELECT "MataKuliah"."Nama" AS NamaMataKuliah, AVG("Nilai") AS NilaiRataRata
            FROM "Nilai"
            JOIN "MataKuliah" ON "Nilai"."KodeMK" = "MataKuliah"."Kode"
            GROUP BY "MataKuliah"."Nama";

-- 2.	Buat query Update untuk keperluan dibawah ini:
    -- a.	Mengubah nilai mahasiswa dengan NoMhs “AA20110200” danKodeMata Kuliah “KOM210” menjadi 90
        a. UPDATE "Nilai"
            SET "Nilai"=90
            WHERE "NoMhs" = 'AA20110200' AND "KodeMK" = 'KOM210';

    -- b.	Mengubah semua nilai mahasiswa yang dosennya bernama “SUDIRMAN” menjadi 0
        b .UPDATE "Nilai"
            SET "Nilai"=99
            WHERE "KodeMK" IN (SELECT "Kode" 
                            FROM "MataKuliah"
                            WHERE "NIKDosen" IN (SELECT "NIK" 
                                                FROM "Dosen" 
                                                WHERE "Nama" = 'Budi'));

-- 3.	Buat query DELETE untuk keperluan dibawah ini:
    -- a.	Mengosongkan table nilai
        a. DELETE FROM "Nilai";

    -- b.	Menghapus mahasiswa dengan NoMhs “AA20110201”
        b. DELETE FROM "Mahasiswa" WHERE "NoMhs" = 'AA20110201';

-- 4.	Memasukkan data mahasiswa berikut ini : Nama : “Budi”, NoMhs : “AA2011012”, TanggalLahir: 1 januari 1990
    INSERT INTO "Mahasiswa" ("Nama", "NoMhs", "TanggalLahir") VALUES ('Budi', 'AA2011012', '1990-01-01');