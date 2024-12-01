# Asclepius API

API untuk menganalisis gambar dan memberikan prediksi apakah gambar tersebut mengindikasikan kanker kulit atau tidak, serta memberikan saran untuk penanganan lebih lanjut.

## Fitur

- **Prediksi kanker kulit**: API menerima gambar dan memberikan hasil prediksi apakah gambar tersebut menunjukkan tanda-tanda kanker kulit.
- **Riwayat Prediksi**: Menyimpan dan menampilkan riwayat prediksi sebelumnya.

## Cara Menjalankan

### Prasyarat

Pastikan Kamu sudah menginstal Node.js dan npm pada sistem Kamu. Jika belum, Kamu dapat mengunduhnya di [sini](https://nodejs.org/).

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

# Dokumentasi API Asclepius

## 1. Endpoint: `/predict`

### Deskripsi
Endpoint ini digunakan untuk mengirim gambar yang ingin diprediksi apakah mengindikasikan kanker kulit atau tidak. Gambar tersebut akan dianalisis menggunakan model pembelajaran mesin.

### Detail Endpoint

- **URL Endpoint**: `/predict`
- **HTTP Method**: `POST`
- **Content-Type**: `multipart/form-data`
- **Request Body**:
  - **image**: File gambar yang dikirimkan melalui form-data.
    - **Format**: JPEG atau PNG
    - **Ukuran Maksimal**: 1MB (1000000 byte)

### Respons API

#### Jika gambar mengindikasikan kanker:

```json
{
  "status": "success",
  "message": "Model is predicted successfully",
  "data": {
    "id": "77bd90fc-c126-4ceb-828d-f048dddff746",
    "result": "Cancer",
    "suggestion": "Segera periksa ke dokter!",
    "createdAt": "2023-12-22T08:26:41.834Z"
  }
}
```
Jika gambar tidak mengindikasikan kanker:
```json
{
  "status": "success",
  "message": "Model is predicted successfully",
  "data": {
    "id": "77bd90fc-c126-4ceb-828d-f048dddff746",
    "result": "Non-cancer",
    "suggestion": "Penyakit kanker tidak terdeteksi.",
    "createdAt": "2023-12-22T08:26:41.834Z"
  }
}
```
Jika gambar lebih dari 1MB (Payload Too Large):
```json
{
  "status": "fail",
  "message": "Payload content length greater than maximum allowed: 1000000"
}
```
Jika terjadi kesalahan saat memproses gambar :
```json
{
  "status": "fail",
  "message": "Terjadi kesalahan dalam melakukan prediksi"
}
```

## Endpoint: /predict/histories
### Deskripsi
Endpoint ini digunakan untuk mengambil riwayat prediksi yang telah dilakukan sebelumnya. Riwayat mencakup informasi tentang hasil prediksi dan saran yang diberikan.
### Detail Endpoint
* URL Endpoint: /predict/histories
* HTTP Method: GET
* Content-Type: application/json
* Request Body: Tidak diperlukan request body pada endpoint ini.
### Respons API
Jika permintaan berhasil, respons API akan mengembalikan status "success" dengan data riwayat prediksi dalam bentuk array.
Contoh Respons:
```json
{
  "status": "success",
  "data": [
    {
      "id": "0011b2c7-bd40-43d5-8b6b-8da77c74446b",
      "history": {
        "id": "0011b2c7-bd40-43d5-8b6b-8da77c74446b",
        "result": "Non-cancer",
        "suggestion": "Penyakit kanker tidak terdeteksi.",
        "createdAt": "2024-12-01T08:49:06.499Z"
      }
    },
    {
      "id": "027b9706-cf4b-458e-ac9d-af1f81cae94d",
      "history": {
        "id": "027b9706-cf4b-458e-ac9d-af1f81cae94d",
        "result": "Cancer",
        "suggestion": "Segera periksa ke dokter!",
        "createdAt": "2024-12-01T10:05:51.894Z"
      }
    }
  ]
}
```
### Keterangan
* id: ID unik untuk setiap prediksi atau riwayat.
* result: Hasil prediksi, dapat berupa "Cancer" atau "Non-cancer".
* suggestion: Saran yang diberikan berdasarkan hasil prediksi.
* createdAt: Tanggal dan waktu saat prediksi atau riwayat dibuat.
