document.addEventListener('DOMContentLoaded', function () {
    makeGrid();
});

function makeGrid() {

    let height = document.getElementById('inputHeight');
    let width = document.getElementById('inputWidth');
    let canvas = document.getElementById('pixelCanvas');
    let sizePicker = document.getElementById('sizePicker');
    let colorPicker = document.getElementById('colorPicker');

    //eventListener on submit get height and width
    //prevent browser default action and get user input
    sizePicker.addEventListener('submit', function (event) {
        event.preventDefault();
        canvas.innerHTML = '';

        //createElement (row and col);
        let rowElement = document.createElement('tr');
        let colElement = document.createElement('td');
        for (let row = 0; row < height.value; row++) {
            let tr = canvas.insertRow(rowElement);
            for (let col = 0; col < width.value; col++) {
                tr.insertCell(colElement);
            }
        }

        //set grid color color
        let cell = canvas.getElementsByTagName('td');
        for (var k = 0; k < cell.length; k++) {
            cell[k].addEventListener('click', function (event) {
                let color = colorPicker.value;
                event.target.setAttribute('style', 'background-color: ' + color);
            });
            cell[k].addEventListener('dblclick', function (event) {
                event.target.setAttribute('style', 'background-color: ' + document.body.style.backgroundColor);
            });
        }
    });
}



