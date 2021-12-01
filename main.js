/* menu mobile */

const nav = document.querySelector('nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* menu mobile - esconder menu ao clicar na lista */
const itemMenu = document.querySelectorAll('.menu ul li a')

for (const element of itemMenu) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
