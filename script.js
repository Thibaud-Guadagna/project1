const button = document.getElementById('burgerBtn');
const button1 = document.getElementById('burgerBtn1');
const bar1 = document.getElementById('barre1');
const bar2 = document.getElementById('barre2');
const bar3 = document.getElementById('barre3');
const menu = document.getElementById("openMenu")

button.addEventListener('click', () => {
  button.classList.add('z-999999')
  menu.classList.toggle('translate-x-full')
  console.log('click')


  bar1.classList.toggle('rotate-45')
  bar1.classList.toggle('translate-y-2.5')

  bar2.classList.toggle('opacity-0')

  bar3.classList.toggle('-rotate-45')
  bar3.classList.toggle('-translate-y-2.5')
})
button1.addEventListener('click', () => {
  button.classList.add('z-999999')
  menu.classList.toggle('translate-x-full')
  console.log('click')


  bar1.classList.toggle('rotate-45')
  bar1.classList.toggle('translate-y-2.5')

  bar2.classList.toggle('opacity-0')

  bar3.classList.toggle('-rotate-45')
  bar3.classList.toggle('-translate-y-2.5')
})




