const outerContainer = document.querySelector('.outer-container');

function createEtchSquare(gridSize) {
    let totalNumber = gridSize * gridSize;
    let  squareSize = 500 / gridSize;

    for (i = totalNumber; i > 0; i-- ){
    
        outerContainer.appendChild(document.createElement('div')).style.cssText = 
                `height:${squareSize}px; 
                width:${squareSize}px;`
        
        document.querySelectorAll('.outer-container > div');
    }   
}