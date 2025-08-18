// ===== menambahkan efek blur pada header saat scroll =====
const blurHeader = () => {
    const header = document.getElementById("header"); // mendapatkan elemen header by id

    // jika posisi scroll vertikal lebih besar atau sama dengan 50, tambahkan kelas 'blur-header'
    // jika tidak, hapus kelas 'blur-header'
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
}

// menambahkan event listener pada jendela untuk mendeteksi saat pengguna menggulir
window.addEventListener('scroll', blurHeader);

// ----------------------------------------------------------
// ===== mengelola menu hamburger =====
const menuBtn = document.querySelector(".menu-btn"); 
const navbar = document.querySelector(".navbar"); 

// menambahkan event listener pada tombol menu
menuBtn.addEventListener("click", () => {
    // Toggle kelas 'active' pada elemen tombol dan navbar ketika tombol diklik
    menuBtn.classList.toggle("active");
    navbar.classList.toggle("active");
});

// ------------------------------------------------------
// ===== menentukan halaman aktif pada navigasi =====
document.addEventListener("DOMContentLoaded", function() {
    // mendapatkan URL halaman saat ini
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    // mendapatkan semua tautan menu di navbar
    const menuLinks = document.querySelectorAll(".navbar-items a, .navbar-nav .logo-nav a");

    // loop melalui semua tautan dan tambahkan kelas 'active' pada tautan yang sesuai dengan halaman saat ini
    menuLinks.forEach(link => {
        // memeriksa apakah href dari tautan cocok dengan halaman saat ini
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // menambahkan kelas 'active' untuk menunjukkan halaman aktif
        }
    });
});

// ---------------------------------------------------------
// ===== menampilkan tombol scroll-up saat menggulir ====
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up'); // mendapatkan elemen scroll-up berdasarkan ID
    
    // jika posisi scroll vertikal lebih tinggi dari 350, tambahkan kelas 'show-scroll'
    // jika tidak, hapus kelas 'show-scroll'
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
}

// menambahkan event listener pada jendela untuk mendeteksi saat pengguna menggulir
window.addEventListener('scroll', scrollUp);
