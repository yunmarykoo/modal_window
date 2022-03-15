const $btn = document.querySelector('.btn')
const $modalContainer = document.querySelector('.container')
const $close = document.querySelector('.close')
const $accept = document.querySelector('.accept')

function closeModal() {
  $modalContainer.classList.remove('show')
}

function openModal() {
  $modalContainer.classList.add('show')
}

$btn.addEventListener('click', () => {
  openModal()
})

$close.addEventListener('click', () => {
  closeModal()
})

$modalContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('container')) {
    closeModal()
  }
})

window.addEventListener('keyup', e => {
  if (e.key === 'Escape') {
    closeModal()
  }
})

window.addEventListener('keyup', e => {
  if (e.key === 'c') {
    closeModal()
  }
})

$accept.addEventListener('click', () => {
  const askPhoneNumber = prompt('Введите свой номер (без 0 и 996)')
  const askText = prompt('Введите ваш текст')

  window.open(`https://api.whatsapp.com/send?phone=+996${askPhoneNumber}&text=${askText}`, '_blank')
})

