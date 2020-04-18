const options = document.querySelectorAll('.opt')
const buttonMenu = document.getElementById('button-menu')

buttonMenu.addEventListener('click', function () {
  options.forEach(opt => {
    opt.classList.toggle('active')
  })

  this.classList.toggle('open-menu')

  if (this.classList.contains('open-menu')) {
    this.setAttribute('src', './img/close.png')
  } else {
    this.setAttribute('src', './img/menu.png')
  }
})
