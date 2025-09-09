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

function updateTime() {
    const now = new Date();

    const months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"];

    const dayNumber = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("day").innerText = dayNumber;
    document.getElementById("hour").innerText = hours;
    document.getElementById("minute").innerText = minutes;
    document.getElementById("second").innerText = seconds;
}



setInterval(updateTime, 1000);
updateTime();

function heart() {
    let el = document.getElementById("heart");
    if (el.classList.contains("active")) {
        el.classList.remove("active");
    } else {
        el.classList.add("active");
    }
}