# Menggunakan image Node.js versi 22.11.0
FROM node:22.11.0

# Set direktori kerja
WORKDIR /usr/src/app

# Menyalin package.json dan package-lock.json
COPY package*.json ./

# Menginstal dependensi
RUN npm install

# Menyalin semua file ke dalam image
COPY . .

# Mengekspos port
EXPOSE 3001

# Menjalankan aplikasi
CMD ["node", "src/server.js"]
