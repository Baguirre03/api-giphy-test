const img = document.querySelector('img')
const searchBtn = document.querySelector('#search-button')
const input = document.querySelector('#search-input')

async function searchGif(search) {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=STRPA5sB9XUZJ1mZDvdcx3o4AKSUovJC&s=${search}`, {mode: 'cors'})
        .then(response => response.json())
        .then(response => img.src = response.data.images.original.url)
        .catch(function(err) {
            defaultImage(err)
            throw new Error(err)
        })
}

function defaultImage() {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=STRPA5sB9XUZJ1mZDvdcx3o4AKSUovJC&s=cat`, {mode: 'cors'})
        .then(response => response.json())
        .then(response => img.src = response.data.images.original.url)
        .catch(function(err) {
            throw new Error(err)
        })
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    searchGif(input.value);
})
