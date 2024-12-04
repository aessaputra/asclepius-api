# Panduan Deploy Aplikasi di Google Cloud Run

Dokumentasi ini menjelaskan langkah-langkah untuk mendepoy aplikasi ke Google Cloud Run.

## Prerequisites

- Akun Google Cloud Platform (GCP)
- Google Cloud SDK terinstal di mesin lokal Kamu
- Proyek GCP yang sudah dibuat

## Langkah-langkah Deploy

1. **Setel Proyek GCP**

```bash
bash gcloud config set project {ProjectID}
```

2. **Build Docker Image**

```bash
bash gcloud run deploy asclepius-api
--image gcr.io/innovatehub-2024/asclepius-api
--platform managed
--region asia-southeast2
--allow-unauthenticated
```

## Verifikasi Deployment

Setelah proses deploy selesai, Kamu akan melihat URL layanan yang baru saja Kamu deploy. Kunjungi URL tersebut untuk memastikan aplikasi berfungsi dengan baik.

## Catatan

- Pastikan Kamu telah mengonfigurasi semua dependensi dan file yang diperlukan sebelum melakukan deploy.
