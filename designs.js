//grid size and color assignments
var gridHeight = document.getElementById ('inputHeight');
var gridWidth = document.getElementById ('inputWidth');
var gridSize = document.getElementById ('sizePicker');
var grid = document.getElementById ('pixelCanvas');
var color = document.getElementById ('colorPicker');


// create grid function based on user input for the grid dimensions
gridSize.addEventListener ('submit', function(event) {
    pixelCanvas.innerHTML = '';
    event.preventDefault();
    makeGrid (gridHeight.value, gridWidth.value);
});



function makeGrid (height, width) {
    for (var i=0; i <= height -1; i++) {
        let row=grid.insertRow(i);
        for (let m=0; m <= width-1; m++) {
            let cell = row.insertCell(m);        
            cell.addEventListener('click',(event)=>{
                cell.style.backgroundColor = color.value;
            });
        }
    }
    //
};
