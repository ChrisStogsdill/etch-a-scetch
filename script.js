const outerContainer = document.querySelector('.outer-container');

createEtchSquare(16);

function createEtchSquare(gridSize) {
    let totalNumber = gridSize * gridSize;
    let  squareSize = 500 / gridSize;

    
    while (outerContainer.firstChild) {
        outerContainer.removeChild(outerContainer.firstChild)
    }
    
    
    

    for (i = totalNumber; i > 0; i-- ){
    
        outerContainer.appendChild(document.createElement('div')).style.cssText = `
                height:${squareSize}px; 
                width:${squareSize}px;
                `}   
    let sketchSquares = document.querySelectorAll('.outer-container > div');

    for (i = 0; i < sketchSquares.length; i++ ) {
        document.querySelectorAll('.outer-container > div')[i].addEventListener('mouseover', (event) => {
           event.target.classList.add('hovered');
           
        })
    }

}

document.getElementById('reset-button').addEventListener('click', () => {
    let userInput = prompt('Please enter a number between 1 and 100')
    if (userInput < 0 || userInput > 100) {
        alert('outside of range')
    }
    else {
        createEtchSquare(userInput);
    }
})


