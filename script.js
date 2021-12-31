const outerContainer = document.querySelector('.outer-container');

function createEtchSquare(gridSize) {
    let totalNumber = gridSize * gridSize;
    let  squareSize = 500 / gridSize;

    for (i = totalNumber; i > 0; i-- ){
    
        outerContainer.appendChild(document.createElement('div')).style.cssText = `
                height:${squareSize}px; 
                width:${squareSize}px;
                `}   
    let sketchSquares = document.querySelectorAll('.outer-container > div');
    for (i = 0; i < sketchSquares.length; i++ ) {
        document.querySelectorAll('.outer-container > div')[i].addEventListener('mouseover', () => {
            document.querySelectorAll('.outer-container > div')[i].classList.add('hovered');
        })
    }

}

createEtchSquare(16);