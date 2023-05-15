const img = document.querySelector('img')
const searchBtn = document.querySelector('#search-button')
const input = document.querySelector('#search-input')


async function searchGif(search) {
    try {
        const result = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=STRPA5sB9XUZJ1mZDvdcx3o4AKSUovJC&s=${search}`, {mode: 'cors'})
        const apiData = await result.json()
        img.src = apiData.data.images.original.url
    } catch(error) {
        defaultImage()
        throw new Error(error)
    }
    // fetch(`https://api.giphy.com/v1/gifs/translate?api_key=STRPA5sB9XUZJ1mZDvdcx3o4AKSUovJC&s=${search}`, {mode: 'cors'})
    //     .then(response => response.json())
    //     .then(response => img.src = response.data.images.original.url)
    //     .catch(function(err) {
    //         defaultImage(err)
    //         throw new Error(err)
    //     })
}

async function defaultImage() {
    try {
        const result = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=STRPA5sB9XUZJ1mZDvdcx3o4AKSUovJC&s=cat`, {mode: 'cors'})
        const catData = await result.json()
        img.src = catData.data.images.original.url
    } catch(err) {
        throw new Error(err)
    }
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    searchGif(input.value);
})
