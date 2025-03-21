const sideNav = document.getElementById("burgerBtn");

sideNav.onclick = openNav;
sideNav.onclick = closeNav;

function openNav() {
    sideNav.classList.add("active");
    let isOpen = true
    console.log(isOpen)
}

