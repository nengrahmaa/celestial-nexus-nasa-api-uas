# Celestial Nexus – UAS Pelatihan Web (Integrasi NASA API)

**Deskripsi Proyek**  
Celestial Nexus merupakan proyek UAS untuk pelatihan pengembangan web dengan tema **antariksa**, khususnya memanfaatkan **NASA Open APIs**. Proyek ini bertujuan menyajikan data dan visualisasi antariksa secara interaktif lewat antarmuka web yang menarik dan edukatif.

---

## Demo 
Tautan live demo:  
[Celestial Nexus Demo](https://celestial-nexus-nasa-api-uas-web.vercel.app/)

---

## Daftar Isi  
- [Fitur](#fitur)  
- [Tata Letak Proyek](#tata-letak-proyek)  
- [Instalasi & Menjalankan Proyek](#instalasi--menjalankan-proyek)  
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)

---

## Fitur  
- Menampilkan gambar harian dari **Astronomy Picture of the Day (APOD)**  
- Menampilkan foto-foto dari **Mars Rover** (jika tersedia dalam proyek)  
- Informasi objek antariksa seperti planet, asteroid, dsb.  
- Tampilan responsif dan user-friendly  
- Navigasi antarmuka yang intuitif (sidebar/menu)

---

## Tata Letak Proyek  
```text
celestial-nexus-nasa-api-uas/
│
├── index.html            # Halaman utama
├── about.html            # Halaman mengenai tema antariksa / proyek
├── apod.html
├── epic.html
├── search.html
├── css/
│   └── styles.css    # Gaya tampilan
├── js/
│   └── main.js       # Logika fetch API & interaksi UI
├── assets/
│   └── img/
│       └── (gambar lokal)
└── README.md             # Dokumen ini
```

---

## Instalasi & Menjalankan Proyek  
1. **Clone repository**  
   ```bash
   git clone https://github.com/nengrahmaa/celestial-nexus-nasa-api-uas.git
   cd celestial-nexus-nasa-api-uas
   ```

2. **Jalankan secara lokal**  
   - Buka `index.html` langsung di browser
     
---

## Teknologi yang Digunakan  
- **HTML** – Struktur halaman web  
- **CSS** – Styling dan layout responsif  
- **JavaScript** – Logika fetch API, manipulasi DOM

---

## Info Tambahan  
- Proyek ini adalah UAS untuk pelatihan web dengan tema antariksa  
- Tujuan utama adalah edukasi dan visualisasi data antariksa dari NASA  
- Jika kamu memiliki ide untuk API tambahan atau fitur interaktif (seperti dark mode, filter, dsb.), tambahkan di bagian **Fitur**
