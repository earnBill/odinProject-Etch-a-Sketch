//when load the whole page
document.addEventListener('DOMContentLoaded', () => {
    createBoard(16);
    console.log('hi');

    document.querySelectorAll('.pixel').forEach(pixel => {
            pixel.addEventListener('mouseover', () => {
                pixel.style.backgroundColor = "red";
            })
        })
})

function createBoard(size) {
    let board = document.querySelector('.board');
    
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`; 
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement('div');
        div.classList.add('pixel');     
        board.style.backgroundColor = "yellow"
        board.insertAdjacentElement('beforeend', div);
    }
}




// document.addEventListener('DOMContentLoaded', () => { 
//     console.log('hi')

//     let div = document.createElement('div');
//     let container = document.querySelector('.board');

//     for (let i = 0; i < 16; i++) {
//         for (let j = 0; j < 16; j++) {
//             div = document.createElement('div');
//             container.append(div);
//         }
//     }

// });