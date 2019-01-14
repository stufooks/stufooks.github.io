//transform hamburger menu and show nav links on click
let bars = document.querySelectorAll('.hamburger-container div')
let hamburgerContainer = document.querySelector('.hamburger-container')
let linksContainer = document.querySelector('.links-container')

const navClickHandler = () => {
    for (let i = 0; i < bars.length; i++) {
        bars[i].classList.toggle(`change${i + 1}`)
    }
    linksContainer.classList.toggle('display-nav')
}

hamburgerContainer.addEventListener('click', navClickHandler)


//display social icons on click
let name = document.querySelector('.name')
let iconsContainer = document.querySelector('.icons-container')
let contactLink = document.querySelector('.contact-link')

const nameClickHandler = (evt) => {
    let target = evt.target.tagName
    if (target === 'H1') {
        iconsContainer.classList.toggle('display-icons')
    } else {
        iconsContainer.classList.add('display-icons')
    }
}

name.addEventListener('click', nameClickHandler)
contactLink.addEventListener('click', nameClickHandler)