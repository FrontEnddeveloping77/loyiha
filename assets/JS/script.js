const hello = document.querySelector(".hello")
setInterval(() => {
    let date = new Date();
    let days = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours > 12) {
        hours -= 12;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    hello.textContent = "0" + days + ":" + hours + ":" + minutes + ":" + seconds;
    hello.style.fontSize = "50px";
    hello.style.fontweight = "bold"
}, 1000);

const hellooo = document.querySelector(".hellooo")
setInterval(() => {
    let date = new Date();
    let days = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours > 12) {
        hours -= 12;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    hellooo.textContent = "0" + days + ":" + hours + ":" + minutes + ":" + seconds;
    hellooo.style.fontSize = "50px";
    hellooo.style.fontweight = "bold"
}, 1000);

let swiper = new Swiper(".product", {
    slidesPerView: 4,
    navigation: {
        nextEl: ".keyingi",
        prevEl: ".orqa",
    },
});


let swiper2 = new Swiper(".categories", {
    slidesPerView: 6,
    spaceBetween: 0,
    navigation: {
        nextEl: ".keyingi1",
        prevEl: ".orqa1",
    },
});

let swiper3 = new Swiper(".cards-container", {
    slidesPerView: 6,
    spaceBetween: 50,
    navigation: {
        nextEl: ".keyingi2",
        prevEl: ".orqa2",
    },
});

function heart() {
    let el = document.getElementById("heart");
    if (el.classList.contains("active")) {
        el.classList.remove("active");
    } else {
        el.classList.add("active");
    }
}