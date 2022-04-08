// const button = document.querySelector('button')

// button.addEventListener('click', event => {
//     fetch('./data.json')
//         .then(response => {
//             return response.json()
//         })
//         .then(data => {
//             console.log(data)
//         })
    
// })


const buttons = [... document.querySelectorAll('.header-interval > button')]
buttons.forEach(button => {
    console.log(button)
})

buttons.forEach(button => {
    // console.log(button.textContent)    
    button.addEventListener('click', event => {
        buttons.forEach(btn => {
            btn.classList.remove('active')
        })        
        event.currentTarget.classList.add('active')
        fetch('./data.json')
        .then(response => response.json())
        .then(data => console.log(data))
    })

  
})



