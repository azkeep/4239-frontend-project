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
    for (let i = 0; i < 5; i++) {
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

const popularArtistsCarouselBox = document.querySelector('.popular-artists__carousel');
const popularArtistsCarousel = document.querySelector('.popular-artists__carousel__list');
const slideNext = document.getElementById('popularArtistNext');
const slidePrev = document.getElementById('popularArtistPrev');

const artistCard = document.querySelector('.popular-artists__carousel__item');
const popularArtistCardWidth = artistCard.offsetWidth;
let popularArtistIndex = 0;

const artistCardPadding = parseInt((window.getComputedStyle(artistCard)).getPropertyValue('padding-right'));
const shiftAmount = popularArtistCardWidth + artistCardPadding;

const popularArtistsNumber = document.querySelectorAll('.popular-artists__carousel__item').length;
const popularArtistsTotalWidth = popularArtistCardWidth * popularArtistsNumber;

function popularArtistShiftUpdate() {
    popularArtistsCarousel.style.transform = `translateX(-${popularArtistIndex * shiftAmount}px)`;
}

slideNext.addEventListener('click', () => {
    const popularArtistsCarouselBoxWidth = popularArtistsCarouselBox.offsetWidth;
    if (((popularArtistIndex * shiftAmount) + popularArtistsCarouselBoxWidth) > popularArtistsTotalWidth) {
        popularArtistIndex = 0;
    } else {popularArtistIndex = (popularArtistIndex + 1) % shiftAmount;}

    popularArtistShiftUpdate();
})

slidePrev.addEventListener('click', () => {
    popularArtistIndex = (popularArtistIndex - 1) % shiftAmount;
    if (popularArtistIndex < 0) {popularArtistIndex = 0;}
    popularArtistShiftUpdate();
})

window.addEventListener('resize', () => {
    popularArtistShiftUpdate();
})