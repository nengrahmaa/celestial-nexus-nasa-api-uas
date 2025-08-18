let currentPage = 1; // menyimpan nomor halaman saat ini
let searchQuery = ''; // menyimpan kueri pencarian yang dimasukkan oleh pengguna
let allResults = []; // Array untuk menyimpan semua hasil dari pencarian API

// fungsi untuk mencari gambar menggunakan API
function searchImages() {
    // mendapatkan kueri pencarian dari elemen input
    searchQuery = document.getElementById('search-input').value;

    // mengatur ulang halaman ke 1 setiap kali pencarian baru dilakukan
    currentPage = 1;

    // mendapatkan elemen
    const gallery = document.getElementById('gallery');
    const pagination = document.getElementById('pagination');

    // mengosongkan isi elemen 
    gallery.textContent = '';
    pagination.textContent = '';

    // memeriksa apakah kueri pencarian kosong, jika iya tampilkan alert dan keluar dari fungsi
    if (!searchQuery) {
        alert('Please enter a search term!');
        return;
    }

    console.log('Mencari untuk:', searchQuery);

    fetch(`https://images-api.nasa.gov/search?q=${searchQuery}`)
        .then(function(response) {
            console.log('Respons API:', response);

            // memeriksa apakah respons tidak oke, jika tidak maka lempar error
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // mengembalikan respons dalam format JSON
            return response.json();
        })
        .then(function(data) {
            // menampilkan data API di konsol untuk debugging
            console.log('Data API:', data);

            // memeriksa apakah tidak ada hasil dalam data yang dikembalikan
            if (data.collection.items.length === 0) {
                // Jika tidak ada hasil, tampilkan pesan "Tidak ada hasil yang ditemukan"
                const noResults = document.createElement('p');
                noResults.textContent = 'No results';
                gallery.appendChild(noResults);
                return;
            }

            // menyimpan semua item hasil pencarian dalam variabel allResults
            allResults = data.collection.items;

            // menampilkan halaman pertama hasil pencarian
            displayPage(1);
        })
        .catch(function(error) {
            // menangkap dan menampilkan error jika terjadi kesalahan selama pengambilan data
            console.error('Kesalahan saat mengambil data:', error);
            const errorMsg = document.createElement('p');
            errorMsg.textContent = 'Error. Please try again later.';
            gallery.appendChild(errorMsg);
        });
}

// fungsi untuk menampilkan halaman hasil pencarian tertentu
function displayPage(page) {
    // mendapatkan elemen
    const gallery = document.getElementById('gallery');
    const pagination = document.getElementById('pagination');

    // memastikan elemen galeri dan paginasi ditemukan
    if (!gallery || !pagination) {
        console.error('Elemen Galeri atau Paginasi tidak ditemukan.');
        return;
    }

    // mengosongkan isi elemen sebelum menampilkan item baru
    gallery.textContent = '';
    pagination.textContent = '';

    // menghitung indeks awal dan akhir untuk item yang akan ditampilkan
    const start = (page - 1) * 20;
    const end = page * 20;

    // memotong array allResults untuk mendapatkan item pada halaman saat ini
    const items = allResults.slice(start, end);

    // menambah margin atas jika elemen container ada
    const container = document.querySelector('.container');
    if (container) {
        container.classList.add('expanded');
    } else {
        console.warn('Elemen Container tidak ditemukan.');
    }

    // melakukan perulangan pada setiap item di halaman saat ini
    items.forEach(function(item, index) {
        // memastikan item memiliki 'links' dan 'data' yang valid
        if (item && item.links && item.links[0] && item.data && item.data[0]) {
            // membuat elemen galeri item baru
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';

            const img = document.createElement('img');
            img.src = item.links[0].href;
            img.alt = item.data[0].title;

            const title = document.createElement('h3');
            title.textContent = item.data[0].title;

            // membuat elemen tautan untuk melihat detail dan menetapkan event onclick
            const link = document.createElement('a');
            link.href = '#';
            link.onclick = function() {
                showDetails(item);
                return false; // mencegah navigasi default
            };
            link.textContent = 'Show Detail';

            // menyusun elemen ke dalam galeri item
            galleryItem.appendChild(img);
            galleryItem.appendChild(title);
            galleryItem.appendChild(link);
            gallery.appendChild(galleryItem);
        } else {
            console.warn('Struktur item tidak valid pada indeks:', index, item);
        }
    });

    // menghitung total halaman berdasarkan panjang allResults
    const totalPages = Math.ceil(allResults.length / 20);

    // membuat tombol paginasi untuk setiap halaman
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;

        // menetapkan kelas 'active' pada tombol halaman saat ini
        button.className = i === page ? 'active' : '';

        // menetapkan fungsi onclick untuk menampilkan halaman tertentu
        button.onclick = function() {
            displayPage(i);
        };
        pagination.appendChild(button);
    }
}

// memanggil fungsi displayPage dengan halaman awal untuk menampilkan hasil
displayPage(1);

// fungsi untuk menampilkan detail item yang dipilih
function showDetails(item) {
    // mendapatkan elemen
    const detailsView = document.getElementById('details-view');
    const detailsContent = document.getElementById('details-content');

    // mengosongkan isi elemen konten detail
    detailsContent.textContent = '';

    // membuat elemen 
    const title = document.createElement('h2');
    title.textContent = item.data[0].title;

    const img = document.createElement('img');
    img.src = item.links[0].href;
    img.alt = item.data[0].title;

    const description = document.createElement('p');
    description.textContent = item.data[0].description || 'Deskripsi tidak tersedia.';

    // menyusun elemen ke dalam konten detail
    detailsContent.appendChild(img);
    detailsContent.appendChild(title);
    detailsContent.appendChild(description);

    // menampilkan tampilan detail dengan menghapus kelas 'hidden'
    detailsView.classList.remove('hidden');
}

// fungsi untuk kembali dari tampilan detail ke tampilan galeri
function goBack() {
    const detailsView = document.getElementById('details-view');

    // menyembunyikan tampilan detail dengan menambahkan kelas 'hidden'
    detailsView.classList.add('hidden');
}
