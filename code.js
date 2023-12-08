//when load the whole page
document.addEventListener('DOMContentLoaded', () => {

    let popupBtn = document.querySelector('#popup');
    let size;

    popupBtn.addEventListener('click', () => {
        size = getSize();
        createBoard(size);
    })


    console.log('hi');
    document.querySelector('body').addEventListener('mousedown', () => { 
        document.querySelectorAll('.pixel').forEach(pixel => {
            pixel.addEventListener('mouseover', () => {
                pixel.style.backgroundColor = "red";
            })
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

function getSize() {
    let input = prompt("What will be the size of the borad?");
    let message = document.querySelector('#message');
    if(input == "") {
        message.innerHTML = "Please provide a number!!";
    }
    else if (input > 100 || input < 1 )
        message.innerHTML = "Provide a number between 1 and 100!!"
    else  {
        message.innerHTML = "Now you can play!!"
        return input;
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