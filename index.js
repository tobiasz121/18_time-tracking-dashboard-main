const button = document.querySelector('button')

button.addEventListener('click', event => {
    fetch('./data.json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
        })
    
})
