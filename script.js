const button = document.querySelector('.button')
const buttonMoore = document.querySelector('.button_moore')

button.addEventListener('click', () => {
  getContent().then(() => (buttonMoore.style.display = 'block'))
})

buttonMoore.addEventListener('click', getContent)

async function getContent() {
  try {
    let promise = await fetch('https://dog.ceo/api/breeds/image/random/20')
    if (!promise.ok) {
      throw new Error('Произошла ошибка')
    }
    let data = await promise.json()
    data = data.message
    createImage(data)
  } catch (e) {
    console.error(e)
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
