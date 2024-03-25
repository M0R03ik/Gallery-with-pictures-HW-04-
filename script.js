const button = document.querySelector('.button')
const buttonMoore = document.querySelector('.button_moore')
const loader = document.querySelector('.loader')

button.addEventListener('click', () => {
  getContent().then(() => (buttonMoore.style.display = 'block'))
})

buttonMoore.addEventListener('click', getContent)

async function getContent() {
  try {
    showLoader()
    let promise = await fetch('https://dog.ceo/api/breeds/image/random/20')
    if (!promise.ok) {
      throw new Error('Произошла ошибка')
    }
    let data = await promise.json()
    data = data.message
    createImage(data)
  } catch (e) {
    console.error(e)
  } finally {
    hideLoader()
  }
}

function createImage(images) {
  const gallery = document.querySelector('.gallery')
  for (let url of images) {
    let image = document.createElement('img')
    image.className = 'gallery__image'
    image.src = url
    gallery.appendChild(image)
  }
}

function showLoader() {
  loader.style.display = 'inline-block'
}

function hideLoader() {
  loader.style.display = 'none'
}
