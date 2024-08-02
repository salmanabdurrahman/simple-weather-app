# Simple Weather App

## Deskripsi

Simple Weather App adalah aplikasi cuaca sederhana yang memungkinkan pengguna untuk mencari dan menampilkan informasi cuaca berdasarkan lokasi yang dimasukkan. Aplikasi ini menggunakan API dari OpenWeatherMap untuk mendapatkan data cuaca secara real-time.

## Fitur Utama

-   Menampilkan informasi cuaca berdasarkan nama kota yang dimasukkan.
-   Menampilkan suhu, kondisi cuaca, dan waktu saat ini.
-   Mengubah ikon cuaca berdasarkan kondisi cuaca yang diterima.

## Teknologi yang Digunakan

-   HTML5
-   CSS3 (TailwindCSS)
-   JavaScript
-   OpenWeatherMap API
-   SweetAlert2 untuk notifikasi

## Struktur Direktori

```
simple-weather-app/
├── public/
│   └── css/
│       └── style.css
├── src/
│   ├── icons/
│   │   └── icon.png
│   ├── css/
│   │   └── input.css
│   ├── images/
│   │   ├── 01d@2x.png
│   │   ├── 02d@2x.png
│   │   ├── ...
│   └── js/
│       └── script.js
├── index.html
├── package.json
├── README.md
└── ...

```

## Cara Menjalankan

1. Clone repositori ini ke dalam direktori lokal Anda.
    ```bash
    git clone https://github.com/salmanabdurrahman/simple-weather-app.git
    ```
2. Masuk ke direktori proyek.
    ```bash
    cd simple-weather-app
    ```
3. Install npm package yang diperlukan.
    ```bash
    npm install
    ```
4. Install TailwindCSS, PostCSS, dan Autoprefixer.
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    ```
5. Jalankan perintah berikut untuk membangun CSS menggunakan TailwindCSS.

    ```bash
    npm run build-css
    ```

    Perintah ini akan menjalankan `npx tailwindcss -i ./src/css/input.css -o ./public/css/style.css --watch` untuk memproses file CSS.

6. Buka file `index.html` di peramban Anda.
7. Masukkan nama kota pada kolom input dan tekan tombol `SET`.
8. Aplikasi akan menampilkan informasi cuaca untuk kota yang dimasukkan.

Selamat mencoba!
