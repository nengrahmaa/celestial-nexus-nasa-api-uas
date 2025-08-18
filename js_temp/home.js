// fungsi untuk menampilkan data di halaman beranda
function dislayhomedata() {
    // mendapatkan elemen dengan id 
    const homedata = document.getElementById("home-data");

    // membuat elemen h3 untuk judul "Welcome To Celestial Nexus"
    const title = document.createElement('h3');
    title.textContent = 'Welcome To Celestial Nexus'; 
    title.classList.add("home-subtitle"); 
    homedata.appendChild(title);

    // membuat elemen h1 untuk judul "explore"
    const title2 = document.createElement('h1');
    title2.textContent = "explore"; 
    title2.classList.add("home-title"); 
    homedata.appendChild(title2);

    // membuat elemen h1 untuk judul "the universe"
    const title3 = document.createElement('h1');
    title3.textContent = "the universe"; 
    title3.classList.add("home-title"); 
    homedata.appendChild(title3);

    // membuat elemen paragraf untuk deskripsi
    const deschome = document.createElement('p');
    deschome.textContent = 'Embark on an extraordinary journey through the cosmos with Celestial Nexus. Discover breathtaking images, intriguing facts, and the latest news about the universe. From the fiery surface of the Sun to the icy rings of Saturn, Celestial Nexus brings the wonders of space right to your fingertips. Dive in and explore the infinite mysteries of our galaxy and beyond!';
    deschome.classList.add("home-decs"); 
    homedata.appendChild(deschome);

    // membuat elemen tombol untuk "Get Started"
    const buthome = document.createElement('button');
    buthome.textContent = 'Get Started'; 
    buthome.classList.add("button-home"); 
    homedata.appendChild(buthome);
}
dislayhomedata();

// ===== untuk form login =====
// Event listener yang dieksekusi ketika dokumen telah dimuat sepenuhnya
document.addEventListener('DOMContentLoaded', () => {
    // mendapatkan elemen 
    const formWrap = document.querySelector('.form-wrap');
    const closeIcon = document.querySelector('.icon-close');
    const buttonHome = document.querySelector('.button-home');
    const loginLink = document.querySelector('.login-link');
    const regisLink = document.querySelector('.regis-link');
    const loginForm = document.querySelector('.form-box.login');
    const registerForm = document.querySelector('.form-box.register');

    // menambahkan event listener pada tombol "Get Started"
    buttonHome.addEventListener('click', () => {
        formWrap.style.display = 'block'; // menampilkan form dengan mengubah gaya display
        loginForm.classList.add('active'); // menambah kelas CSS "active" dari form login
    });

    // menambahkan event listener pada icon close
    closeIcon.addEventListener('click', () => {
        formWrap.style.display = 'none'; // menyembunyikan form dengan mengubah gaya display
        loginForm.classList.remove('active'); // menghapus kelas CSS "active" dari form login
        registerForm.classList.remove('active'); // menghapus kelas CSS "active" dari form registrasi
    });

    // menambahkan event listener pada link registrasi
    regisLink.addEventListener('click', () => {
        loginForm.classList.remove('active'); // menghapus kelas CSS "active" dari form login
        registerForm.classList.add('active');  // menambah kelas CSS "active" dari form registrasi
    });

    // menambahkan event listener pada link login
    loginLink.addEventListener('click', () => {
        registerForm.classList.remove('active'); // menghapus kelas CSS "active" dari form registrasi
        loginForm.classList.add('active'); // menambah kelas CSS "active" dari form login
    });
});
