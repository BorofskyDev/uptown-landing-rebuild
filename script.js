const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const links = document.querySelectorAll('.nav-links li')
const nav = document.querySelector('.nav')
const contactBtn = document.querySelector('.contact-btn')
const portalBtn = document.querySelector('.portal-btn')

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open')
    links.forEach(link => {
        link.classList.toggle('fade')
    })
    contactBtn.classList.toggle('fade')
    portalBtn.classList.toggle('fade')
})

window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}