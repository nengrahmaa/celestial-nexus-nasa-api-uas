const apiKey = 'PdkOUvbeUpl1DqQVh6dGxI0iKIb48oXx71HKB2iP';
const apiUrl = `https://api.nasa.gov/EPIC/api/natural?api_key=${apiKey}`;
let currentIndex = 0; //untuk melacak idx gambar yg sdg di tampilkan
let data = []; // tamp untuk menyimpan data dari api

// fungsi untuk mengambil data dari api
function fetchEpicData() {
    fetch(apiUrl)
        .then(response => response.json()) 
        .then(fetchedData => {
            console.log('API Response:', fetchedData);
            data = fetchedData; //data dari api disimpan di variabel data
            displayEpicImages();
            displayEpicData(data[0]); 
        })
        .catch(error => {
            console.error('Error fetching EPIC data:', error); // menangani kesalahan jika ada terjadi masalah
        });
}

// fungsi untuk memformat tanggal dari format API ke format yang lebih mudah dibaca
function formatDate(dateStr) {
    const date = new Date(dateStr.split(' ')[0]); //  membuat objek Date baru dari string tanggal dengan memisahkan bagian waktu
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options); // mengembalikan tanggal dalam format lokal dengan opsi untuk menampilkan tahun, bulan, dan hari.
}

// Fungsi untuk menampilkan gambar-gambar EPIC
function displayEpicImages() {
    const imagesWrapper = document.getElementById('images-wrapper');
    imagesWrapper.textContent = ''; // Mengosongkan isi elemen images-wrapper sebelum menambahkan gambar baru.

    data.forEach((item, index) => {
        // Mendapatkan tanggal dan membentuk URL gambar
        const dateStr = item.date;
        const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${dateStr.split(' ')[0].replace(/-/g, '/')}/png/${item.image}.png`;  // URL gambar dari data API berdasarkan tanggal dan nama gambar.

        // membuat elemen img baru untuk menampilkan gambar
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl; // menetapkan sumber gambar ke URL di atas
        imgElement.alt = item.caption; // untuk alternatif gambar di ambil dari caption data

        // menambahkan event listener untuk mengatur gambar yang aktif saat diklik, jadi nanti tahu posisi kita sedang di gambar ke berapa
        imgElement.addEventListener('click', () => {
            currentIndex = index; // mengatur currentIndex ke indeks gambar yang diklik
            updateImage();
        });

        // menambahkan elemen gambar ke dalam container imagesWrapper
        imagesWrapper.appendChild(imgElement);
    });
    // fungsi untuk memperbarui tampilan gambar sesuai dengan indeks saat ini.
    updateImage();
}

// untuk tampilan data epic
function displayEpicData(item) {
    const dateStr = item.date;
    const formattedDate = formatDate(dateStr); // format tanggal menjadi bentuk yang mudah dibaca menggunakan fungsi tersebut
    const caption = item.caption;

    document.getElementById('image-date').textContent = formattedDate;
    document.getElementById('image-caption').textContent = caption;
}

// untuk memperbarui tampilan gambar yang saat ini dipilih.
function updateImage() {
    const imagesWrapper = document.getElementById('images-wrapper');
    const offset = -currentIndex * imagesWrapper.children[0].offsetWidth; //untuk menggeser gambar yang ditampilkan berdasarkan indeks saat ini
    imagesWrapper.style.transform = `translateX(${offset}px)`; // menerapkan transformasi horizontal pada elemen dengan menggesernya sejauh offset pixel
    
    
    displayEpicData(data[currentIndex]); // untuk memperbarui tampilan informasi tambahan seperti tanggal dan deskripsi gambar.
    updateImageIndex(); //memperbarui tampilan yang menunjukkan indeks gambar saat ini dan total gambar
    updateArrows(); // memperbarui status panah navigasi (kiri dan kanan) tergantung pada posisi gambar yang sedang ditampilkan.
}

//untuk menampilkan posisi indeks gambar saat ini dibandingkan dengan jumlah total gambar
function updateImageIndex() {
    const currentIndexElement = document.getElementById('current-image-index');
    currentIndexElement.textContent = `${currentIndex + 1} of ${data.length}`; // Mengatur teks elemen dengan format "current index of total images".
}

// untuk menampilkan atau menyembunyikan panah navigasi
function updateArrows() {
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    leftArrow.style.display = currentIndex > 0 ? 'block' : 'none'; // akan muncul jika idx lebih dari 0
    rightArrow.style.display = currentIndex < data.length - 1 ? 'block' : 'none'; // akan hilang jika sudah mencapai page terakhir
}

//event listener pada panah kanan untuk menggeser gambar ke kanan
document.getElementById('right-arrow').addEventListener('click', () => {
    if (currentIndex < data.length - 1) {
        currentIndex++;
        updateImage();
    }
});
//event listener pada panah kiri untuk menggeser gambar ke kiri 
document.getElementById('left-arrow').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
});

fetchEpicData();
