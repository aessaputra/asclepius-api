# Asclepius API

API untuk menganalisis gambar dan memberikan prediksi apakah gambar tersebut mengindikasikan kanker kulit atau tidak, serta memberikan saran untuk penanganan lebih lanjut.

## Fitur

- **Prediksi kanker kulit**: API menerima gambar dan memberikan hasil prediksi apakah gambar tersebut menunjukkan tanda-tanda kanker kulit.
- **Riwayat Prediksi**: Menyimpan dan menampilkan riwayat prediksi sebelumnya.

## Cara Menjalankan

### Prasyarat

Pastikan Anda sudah menginstal Node.js dan npm pada sistem Anda. Jika belum, Anda dapat mengunduhnya di [sini](https://nodejs.org/).

### Langkah 1: Clone Repository

```bash
git clone https://github.com/aessaputra/asclepius-api.git
cd asclepius-api
```
### Langkah 2: Clone Repository

Jalankan perintah berikut untuk menginstal dependensi yang diperlukan:

```bash
npm install
```

### Langkah 3: Konfigurasi File .env
Salin file .env.example ke .env dan sesuaikan konfigurasi (seperti, kunci Firebase atau modelnya).
```bash
cp .env.example .env
```

### Langkah 4: Jalankan Server
```bash
npm run dev
```
Atau, untuk menjalankan server dalam mode produksi, gunakan perintah:
```bash
npm start
```

API akan berjalan pada http://0.0.0.0:8000.
