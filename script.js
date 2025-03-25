const button = document.getElementById('burgerBtn');
const bar1 = document.getElementById('barre1');
const bar2 = document.getElementById('barre2');
const bar3 = document.getElementById('barre3');
button.addEventListener('click', () => {
  const buttons = document.getElementById("openMenu")
  buttons.classList.toggle('translate-x-full')

  bar1.classList.toggle('rotate-45')
  bar1.classList.toggle('translate-y-2.5')

  bar2.classList.toggle('opacity-0')

  bar3.classList.toggle('-rotate-45')
  bar3.classList.toggle('-translate-y-2.5')
})




