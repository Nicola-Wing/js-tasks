var colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'magenta',
    'pink'
];

let timeoutId = null;

window.onload = function () {
    let count = parseInt(prompt("Count of div?", ""));

    for( let i = 0; i < count; i++){
        let newDiv = document.createElement('div');
        newDiv.id = 'el'+i;
        newDiv.className = 'square';

        newDiv.style.position = 'absolute';
        newDiv.style.width = (count - i) * 50 + 'px';
        newDiv.style.height = (count - i) * 50 + 'px';
        newDiv.style.top = 25 + 'px';
        newDiv.style.left = 25 + 'px';

        if(i != 0){
            let lastDiv = document.getElementById('el'+(i-1));
            lastDiv.appendChild(newDiv);
        }
        else{
            document.body.appendChild(newDiv);
        }

        changeOneColor(newDiv);
    }

    timeoutId = setInterval( changeColorForRandomSquare, 2000);
};

function changeOneColor(div){
    var randomize = Math.floor(Math.random() * colors.length);
    div.style.backgroundColor = colors[randomize];
}

function changeColorForRandomSquare(){
    let squares = document.getElementsByClassName('square');
    let square = squares[Math.floor(Math.random() * squares.length)];
    changeOneColor(square);
    checkAllColors();
}

function checkAllColors(){
    let squares = document.getElementsByClassName('square');
    for (let i = 0; i < squares.length; i++) {
        if(window.getComputedStyle(squares[i]).backgroundColor == window.getComputedStyle(squares[i+1]).backgroundColor){
            if(i == squares.length - 2){
                clearInterval(timeoutId);
                alert('Готово');
                break;
            }
            continue;
        }
        break;
    }
}
