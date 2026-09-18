/* =========================================
   PAGE LOADER
========================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 1200);

});



/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});



/* =========================================
   SCROLL PROGRESS
========================================= */

const progressBar =
    document.querySelector(".scroll-progress");


window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width = progress + "%";

});



/* =========================================
   FLOATING HEARTS
========================================= */

const heartContainer =
    document.querySelector(".background-hearts");


function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML =
        Math.random() > .5 ? "♥" : "♡";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (8 + Math.random() * 14) + "px";

    heart.style.animationDuration =
        (8 + Math.random() * 8) + "s";

    heart.style.animationDelay =
        Math.random() * 2 + "s";

    heartContainer.appendChild(heart);


    setTimeout(() => {
        heart.remove();
    }, 18000);

}


setInterval(createHeart, 900);


/* Create some immediately */

for (let i = 0; i < 12; i++) {
    setTimeout(createHeart, i * 300);
}



/* =========================================
   SURPRISE CARD
========================================= */

const surpriseCard =
    document.getElementById("surpriseCard");

const openCard =
    document.getElementById("openCard");


openCard.addEventListener("click", (event) => {

    event.stopPropagation();

    surpriseCard.classList.add("open");

});


surpriseCard.addEventListener("click", () => {

    surpriseCard.classList.toggle("open");

});



/* =========================================
   PARALLAX EFFECT
========================================= */

const heroGlow =
    document.querySelector(".hero-glow");


window.addEventListener("scroll", () => {

    const scroll =
        window.scrollY;

    if (heroGlow) {

        heroGlow.style.transform =
            `translateY(${scroll * 0.15}px) scale(${1 + scroll * 0.0002})`;

    }

});



/* =========================================
   PHOTO PARALLAX
========================================= */

const photoCards =
    document.querySelectorAll(".memory-photo");


window.addEventListener("scroll", () => {

    photoCards.forEach((photo, index) => {

        const rect =
            photo.getBoundingClientRect();

        const center =
            window.innerHeight / 2;

        const distance =
            rect.top - center;

        if (
            rect.top < window.innerHeight &&
            rect.bottom > 0
        ) {

            const movement =
                distance * 0.025;

            photo.style.marginTop =
                `${movement}px`;

        }

    });

});



/* =========================================
   MUSIC
========================================= */

const musicBtn =
    document.getElementById("musicBtn");

const music =
    document.getElementById("backgroundMusic");

let musicPlaying = false;


musicBtn.addEventListener("click", () => {

    if (!music.src) {

        alert(
            "Add your music file in index.html first."
        );

        return;

    }


    if (musicPlaying) {

        music.pause();

        musicBtn.innerHTML = "♫";

        musicPlaying = false;

    } else {

        music.play();

        musicBtn.innerHTML = "❚❚";

        musicPlaying = true;

    }

});



/* =========================================
   SMOOTH MOUSE MOVEMENT
========================================= */

document.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 2;


    const glow =
        document.querySelector(".hero-glow");

    if (glow) {

        glow.style.marginLeft =
            `${x * 25}px`;

        glow.style.marginTop =
            `${y * 25}px`;

    }

});