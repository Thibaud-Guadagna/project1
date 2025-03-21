const all = document.getElementById("all");
const asiatique = document.getElementById("asiatique");
const burger = document.getElementById("burger");
const italien = document.getElementById("italien");
const mexicain = document.getElementById("mexicain");

let zoom = document.querySelector(".zoom");

all.addEventListener("click", () => {
    if (getComputedStyle(zoom).display != "none") {
        zoom.style.display = "none";
    } else {
        zoom.style.display = "flex";
    }
})