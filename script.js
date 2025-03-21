const button = document.getElementById('burgerBtn');
button.addEventListener('click', () => {
    const buttons = document.getElementById("openMenu")
  buttons.classList.toggle('hidden')
})