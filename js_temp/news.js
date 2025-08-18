// membuat array objek
const articles = [
    {
        title: "Take a Summer Cosmic Road Trip With NASA's Chandra and Webb",
        url: "https://www.nasa.gov/image-article/take-a-summer-cosmic-road-trip-with-nasas-chandra-and-webb/",
        img: "https://www.nasa.gov/wp-content/uploads/2024/07/chandrawebb3.jpg?resize=2000,2000"
    },
    {
        title: "Two Years Since Webb's First Images: Celebrating with the Penguin and the Egg",
        url: "https://www.nasa.gov/image-article/two-years-since-webbs-first-images-celebrating-with-the-penguin-and-the-egg/",
        img: "https://www.nasa.gov/wp-content/uploads/2024/07/stsci-01j06y2cnayapkbw5ekm4s94xj.png?resize=1467,2048"
    },
    {
        title: "Prepare for Perseids!",
        url: "https://science.nasa.gov/solar-system/skywatching/night-sky-network/prepare-for-perseids/",
        img: "https://science.nasa.gov/wp-content/uploads/2017/10/perseids-2023-preston-dyches-6048x4024-1.jpg?w=1536&format=webp"
    },
    {
        title: "What's Up: July 2024 Skywatching Tips from NASA",
        url: "https://science.nasa.gov/solar-system/skywatching/whats-up-july-2024-skywatching-tips-from-nasa/",
        img: "https://science.nasa.gov/wp-content/uploads/2024/07/skychart-moon-and-planets-july-30-2024.jpg?w=1536&format=webp"
    },
    {
        title: "NASA Invites Media to Discuss Exploration Science Program Update",
        url: "https://www.nasa.gov/news-release/nasa-invites-media-to-discuss-exploration-science-program-update/",
        img: "https://www.nasa.gov/wp-content/uploads/2024/07/moon-full-image.jpg"
    },
    {
        title: "NASA's Hubble Traces Dark Matter in Dwarf Galaxy Using Stellar Motions",
        url: "https://science.nasa.gov/missions/hubble/nasas-hubble-traces-dark-matter-in-dwarf-galaxy-using-stellar-motions/",
        img: "https://science.nasa.gov/wp-content/uploads/2024/07/hubble-dracodwarf-darkmatter-annotated-stsci-01j01t760tzq2tcweb5ey1gg6j.jpg?w=1536&format=webp"
    }
];

// mengambil element dari html by id
const topNewsContainer = document.getElementById('top-news');

articles.forEach(article => {
    // membuat inner-news div
    const innerNews = document.createElement('div');
    innerNews.classList.add('inner-news');

    // membuat img-news div
    const imgNews = document.createElement('div');
    imgNews.classList.add('img-news');
    imgNews.style.backgroundImage = `url('${article.img}')`;

    // membuat text div
    const textDiv = document.createElement('div');
    textDiv.classList.add('text');

    // membuat title-news div
    const titleNews = document.createElement('div');
    titleNews.classList.add('title-news');

    // membuat link element
    const link = document.createElement('a');
    link.href = article.url;
    link.target = "_blank";
    link.textContent = article.title;

    // Append link ke title-news div
    titleNews.appendChild(link);

    // Append title-news ke text div
    textDiv.appendChild(titleNews);

    // Append img-news and text div ke inner-news div
    innerNews.appendChild(imgNews);
    innerNews.appendChild(textDiv);

    // Append inner-news div ke top-news container
    topNewsContainer.appendChild(innerNews);
});
