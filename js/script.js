const stepY = 350;
const coffee = document.querySelector(".Imgcoffee");
const coffeeTop = coffee.offsetTop;
const hum = document.querySelector(".Imghamburger");
const humTop = hum.offsetTop;
const conv = document.querySelector(".Imgconversation");
const convTop = conv.offsetTop;
const hand = document.querySelector(".Imghandshake");
const handTop = hand.offsetTop;


window.addEventListener("scroll", (evt) => {
    // console.log(window.scrollY);

    if (window.scrollY > coffeeTop - stepY) {
        coffee.classList.add("fade");
    }
    if (window.scrollY > humTop - stepY) {
        hum.classList.add("fade");
    }
    if (window.scrollY > convTop - stepY) {
        conv.classList.add("fade");
    }
    if (window.scrollY > handTop - stepY) {
        hand.classList.add("fade");
    }


})

