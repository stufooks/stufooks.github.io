let emailLogo = document.querySelector('.email-logo')
let email = document.querySelector('.email')

const clickHandler = () => {
  email.classList.toggle('email-open')
}

emailLogo.addEventListener('click', clickHandler)