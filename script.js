<<<<<<< HEAD
const button = document.getElementById('burgerBtn');
button.addEventListener('click', () => {
    const buttons = document.getElementById("openMenu")
  buttons.classList.toggle('hidden')
})
=======
const sideNav = document.getElementById("burgerBtn");

sideNav.onclick = openNav;
sideNav.onclick = closeNav;

function openNav() {
    sideNav.classList.add("active");
    let isOpen = true
    console.log(isOpen)
}

>>>>>>> 35c090863a028a8c678e5d6ca68857494ab4ef4b
