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
        event.currentTarget.classList.add('active');
        const period = event.currentTarget.textContent.toLowerCase();
        const data1 = fetch('./data.json').then((response)=>{
            return response.json();
        }).then((data)=>{
            let i = 0;
            hrs.forEach((hr)=>{
                hr.textContent = `${data[i].timeframes[period].current}hrs`;
                i += 1;
            });
        });
    });
});

//# sourceMappingURL=index.bec5db41.js.map
