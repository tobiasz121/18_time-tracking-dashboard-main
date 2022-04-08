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
const buttons = [
    ...document.querySelectorAll('.header-interval > button')
];
const hrs = [
    ...document.querySelectorAll('.card-content p:first-child')
];
buttons.forEach((button)=>{
    console.log(button);
});
buttons.forEach((button)=>{
    // console.log(button.textContent)    
    button.addEventListener('click', (event)=>{
        buttons.forEach((btn)=>{
            btn.classList.remove('active');
        });
        hrs.forEach((hr)=>{
            console.log(hr.textContent);
        });
        event.currentTarget.classList.add('active');
        const period = event.currentTarget.textContent;
        const data1 = fetch('./data.json').then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log(data.timeframes[period]);
            return data;
        });
    });
});

//# sourceMappingURL=index.bec5db41.js.map