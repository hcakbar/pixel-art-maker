let heightValue;
let widthValue;
document.addEventListener('DOMContentLoaded', function () {
    let height = document.getElementById('inputHeight');
    let width = document.getElementById('inputWidth');
    let canvas = document.getElementById('pixelCanvas');
    let sizePicker = document.getElementById('sizePicker');
    let colorPicker = document.getElementById('colorPicker');


    //eventListener on submit get height and width
    //prevent browser default action and get user input
    sizePicker.addEventListener('submit', function (event) {
        event.preventDefault();
        heightValue = height.value;
        widthValue = width.value;
        console.log('Height input: ' + heightValue);
        console.log('Width input:  ' + widthValue);

        //createElement (row and col);
        let rowElement = document.createElement('tr');
        let colElement = document.createElement('td');
        for (let row = 0; row < heightValue; row++) {
            let tr = canvas.insertRow(rowElement);
            for (let col = 0; col < widthValue; col++) {
                tr.insertCell(colElement);
            }
        }
    });

    //set grid color color
    let cell = canvas.getElementsByTagName('td');
    console.log('cell length ' + cell.length);
    for (var k = 0; k < cell.length; k++) {
        cell[k].addEventListener('click', function (event) {
            let color = colorPicker.value;
            event.target.setAttribute('style', 'background-color: ' + color);
            console.log('click');
        })
    }


})


