// array objek
const items = [
    {
        title: "The Sun",
        img: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001435/GSFC_20171208_Archive_e001435~large.jpg?w=1920&h=1920&fit=clip&crop=faces%2Cfocalpoint",
        link: "https://science.nasa.gov/sun"
    },
    {
        title: "Mercury",
        img: "https://science.nasa.gov/wp-content/uploads/2023/05/pia19285-mercury-jpg.webp?w=1536&format=webp",
        link: "https://science.nasa.gov/mercury/"
    },
    {
        title: "Venus",
        img: "https://science.nasa.gov/wp-content/uploads/2023/05/venus-single.png?w=1536&format=webp",
        link: "https://science.nasa.gov/venus/"
    },
    {
        title: "Earth",
        img: "https://images-assets.nasa.gov/image/PIA18033/PIA18033~medium.jpg",
        link: "https://science.nasa.gov/earth/"
    },
    {
        title: "Moon",
        img: "https://images-assets.nasa.gov/image/PIA00405/PIA00405~medium.jpg",
        link: "https://science.nasa.gov/moon/"
    },
    {
        title: "Mars",
        img: "https://images-assets.nasa.gov/image/S91-32389/S91-32389~medium.jpg",
        link: "https://science.nasa.gov/mars/"
    },
    {
        title: "Jupiter",
        img: "https://images-assets.nasa.gov/image/hubble-captures-vivid-auroras-in-jupiters-atmosphere_28000029525_o/hubble-captures-vivid-auroras-in-jupiters-atmosphere_28000029525_o~large.jpg?w=1920&h=1913&fit=clip&crop=faces%2Cfocalpoint",
        link: "https://science.nasa.gov/jupiter/"
    },
    {
        title: "Saturn",
        img: "https://images-assets.nasa.gov/image/PIA02225/PIA02225~orig.jpg?w=900&h=1000&fit=clip&crop=faces%2Cfocalpoint",
        link: "https://science.nasa.gov/saturn/"
    },
    {
        title: "Uranus",
        img: "https://images-assets.nasa.gov/image/PIA18182/PIA18182~orig.jpg?w=1720&h=1720&fit=clip&crop=faces%2Cfocalpoint",
        link: "https://science.nasa.gov/uranus/"
    },
    {
        title: "Neptune",
        img: "https://images-assets.nasa.gov/image/PIA02210/PIA02210~small.jpg",
        link: "https://science.nasa.gov/neptune/"
    }
];

// Menampilkan Object Solar dalam html
function displaySolarSystem() {
    const konten = document.querySelector('.konten');

    items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.title;

        const title = document.createElement('h3');
        title.textContent = item.title;

        const link = document.createElement('a');
        link.href = item.link;
        link.textContent = 'Learn More';
        link.target = '_blank';
        link.classList.add('learn-more');

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(link);
        konten.appendChild(card);
    });
}

displaySolarSystem();

