// api
const apiKey = 'lPp6pLfm6YiW5I6rJzkGVkf2FBpH7NfO6a24hSeb';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

// fungsi untuk mengambil data dari api
function fetchAPOD() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // menampilkan data API di console log
            console.log(data);

            // menyimpan data dalam variabel
            const imageUrl = data.hdurl;
            const imageLink = data.url;
            const imageAlt = data.title;
            const title = data.title;
            const date = data.date;
            const copyright = data.copyright ? `Copyright: ${data.copyright}` : '';
            const explanation = data.explanation;

            // mengatur background untuk elemen main
            document.querySelector('main').style.backgroundImage = `url(${imageUrl})`;

            // membuat elemen-elemen baru
            const linkElement = document.createElement('a');
            linkElement.href = imageLink;
            linkElement.target = '_blank';

            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgElement.alt = imageAlt;

            linkElement.appendChild(imgElement);

            const titleElement = document.createElement('h2');
            titleElement.className = 'title';
            titleElement.textContent = title;

            const dateElement = document.createElement('p');
            dateElement.className = 'date';
            dateElement.textContent = date;

            const copyrightElement = document.createElement('p');
            copyrightElement.className = 'copyright';
            copyrightElement.textContent = copyright;

            const explanationElement = document.createElement('p');
            explanationElement.className = 'explanation';
            explanationElement.textContent = explanation;

            // mengatur isi elemen
            const apodContainer = document.getElementById('apod-container');

            const imgContainer = document.createElement('div');
            imgContainer.className = 'img-apod';
            imgContainer.appendChild(linkElement);

            const apodDataContainer = document.createElement('div');
            apodDataContainer.className = 'apod-data';

            const titleContainer = document.createElement('div');
            titleContainer.className = 'apod-title';
            titleContainer.appendChild(titleElement);

            const preDataContainer = document.createElement('div');
            preDataContainer.className = 'pre-data';
            preDataContainer.appendChild(dateElement);
            preDataContainer.appendChild(copyrightElement);

            const dataContainer = document.createElement('div');
            dataContainer.className = 'data';
            dataContainer.appendChild(explanationElement);

            // menyusun elemen-elemen dalam container utama
            apodDataContainer.appendChild(titleContainer);
            apodDataContainer.appendChild(preDataContainer);
            apodDataContainer.appendChild(dataContainer);

            apodContainer.appendChild(imgContainer);
            apodContainer.appendChild(apodDataContainer);
        })
        .catch(error => console.error('Error fetching the APOD data:', error)); // menangani kesalahan jika ada terjadi masalah
}

// Memanggil fungsi untuk mengambil dan menampilkan data APOD
fetchAPOD();
