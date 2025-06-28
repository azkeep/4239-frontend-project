// by Oleksandr Braiko

const popularArtists = [
    {
        name: "John Echo",
        imagePath: "img/index/popular-artists/guitar-boy-blue.webp",
        location: "New York"
    },
    {
        name: "Electric Mirage",
        imagePath: "img/index/popular-artists/hustler-graffiti.webp",
        location: "Puerto Rico"
    },
    {
        name: "Serenade",
        imagePath: "img/index/popular-artists/girls-orange-blue.webp",
        location: "San Francisco"
    },
    {
        name: "Hurricane",
        imagePath: "img/index/popular-artists/drummer-orange.webp",
        location: "Vienna"
    },
    {
        name: "Velvet Skyline",
        imagePath: "img/index/popular-artists/girl-red.webp",
        location: "Washington"
    }
];

const lineStyles = [
    "line-one",
    "line-two",
    "line-three",
    "line-four"
];

function renderPopularArtists(popularArtists) {
    const popularArtistsListHTML = [];
    const listDuplicates = 1;
    for (let i = 0; i < listDuplicates; i++) {
        for (let artist of popularArtists) {
            let randomLineIndex = Math.trunc(((Math.random() * 10) % lineStyles.length));
            popularArtistsListHTML.push(`<li class="popular-artists__carousel__item">
                    <div class="item__image-block">
                        <img src="${artist.imagePath}" class="item__image" alt="${artist.name}"/>
                    </div>
                    <div class="item__info">
                        <p class="item__info__name">${artist.name}</p>
                        <span class="item__info__line">
                            <span class="item__info__line ${lineStyles[randomLineIndex]}"></span>
                        </span>
                        <p class="item__info__location">${artist.location}</p>
                    </div>
                </li>`);
        }
    }
    const popularArtistsListContainer = document.querySelector(".popular-artists__carousel__list");
    popularArtistsListContainer.innerHTML = popularArtistsListHTML.join("");
}

renderPopularArtists(popularArtists);

const artistsCarousel = document.querySelector('.popular-artists__carousel__list');
const artistCard = document.querySelector('.popular-artists__carousel__item');
const artistNextButton = document.getElementById('popularArtistNext');
const artistPrevButton = document.getElementById('popularArtistPrev');
const artistCardWidth = artistCard.offsetWidth;
let artistIndex = 0;
let artists = Array.from(artistsCarousel.children);

function getVisibleCount() {
    return Math.trunc(artistsCarousel.offsetWidth / artistCardWidth);
}

function cloneSlides() {
    const visible = getVisibleCount();
    const originalSlides = artists.filter(s => !s.classList.contains('clone'));

    artists.forEach(slide => {
        if (slide.classList.contains('clone')) {
            artistsCarousel.removeChild(slide);
        }
    });

    for (let i = 0; i < visible; i++) {
        const firstClone = originalSlides[i].cloneNode(true);
        const lastClone = originalSlides[originalSlides.length - 1 - i].cloneNode(true);
        firstClone.classList.add('clone');
        lastClone.classList.add('clone');
        artistsCarousel.appendChild(firstClone);
        artistsCarousel.insertBefore(lastClone, artistsCarousel.firstChild);
    }

    artists = Array.from(artistsCarousel.children);
}

function setInitialPosition() {
    const slideWidth = artists[0].getBoundingClientRect().width;
    artistIndex = getVisibleCount();
    artistsCarousel.style.transition = 'none';
    artistsCarousel.style.transform = `translateX(-${slideWidth * artistIndex}px)`;
}

function moveToSlide() {
    const slideWidth = artists[0].getBoundingClientRect().width;
    artistsCarousel.style.transition = 'transform 0.5s ease-in-out';
    artistsCarousel.style.transform = `translateX(-${slideWidth * artistIndex}px)`;
}

artistsCarousel.addEventListener('transitionend', () => {
    const slideWidth = artists[0].getBoundingClientRect().width;
    const visible = getVisibleCount();

    if (artists[artistIndex].classList.contains('clone')) {
        artistsCarousel.style.transition = 'none';

        if (artistIndex >= artists.length - visible) {
            artistIndex = visible;
        } else if (artistIndex === 0) {
            artistIndex = artists.length - visible * 2;
        }

        artistsCarousel.style.transform = `translateX(-${slideWidth * artistIndex}px)`;
    }
});

artistNextButton.addEventListener('click', () => {
    artistIndex++;
    moveToSlide();
})

artistPrevButton.addEventListener('click', () => {
    artistIndex--;
    moveToSlide();
})

function rebuildCarousel() {
    cloneSlides();
    setInitialPosition();
}

window.addEventListener('resize', () => {
    rebuildCarousel();
})

rebuildCarousel();