let block = document.querySelector(".snakeBody");
let foodBlock = document.querySelector(".food");
let body = document.querySelector("body");
foodBlock.style.left = Math.random()*900 + 100 + 'px';
foodBlock.style.top = Math.random()*600 + 100 + 'px';
let snake = [block];
let foodCoords =foodBlock.getBoundingClientRect();
let speed = 1;
let direction = "none";
let coords = block.getBoundingClientRect();
console.log(snake.length);
body.addEventListener("keydown", function(event){
    if(event.keyCode === 37){
        direction = "left";
    }
    else if(event.keyCode === 38){
        direction = "top";
    }
    else if(event.keyCode === 39){
        direction = "right";
    }
    else if(event.keyCode === 40){
        direction = "bottom";
    }
});


function move(){
    switch(direction){
        case "left":
            block.style.left = (coords.left - 50 ) + 'px';
            break;
        case "top":
            block.style.top = coords.top - 50  + 'px';
            break;
        case "right":
            block.style.left = coords.left + 50 + 'px';
            break;
        case "bottom":
            block.style.top = coords.top + 50 + 'px';
            break;
        default:
            break;
        
    }
}

function blockMoves(){
    coords = block.getBoundingClientRect();
    console.log(coords.left);
    move();
    if(((coords.left <= foodCoords.right && coords.left >= foodCoords.left) || (coords.right >= foodCoords.left && coords.right <= foodCoords.right)) &&( (coords.bottom >= foodCoords.top && coords.bottom <= foodCoords.bottom) || (coords.top >= foodCoords.top && coords.top <= foodCoords.bottom) ) ){
        let div = document.createElement("div");
        div.className = "snakeBody";
        body.appendChild(div);
        snake.push(div);
        foodBlock.style.left = Math.random()*900 + 100 + 'px';
        foodBlock.style.top = Math.random()*600 + 100 + 'px';
        foodCoords =foodBlock.getBoundingClientRect();
    }
    for(let size = snake.length - 1; size >= 0; size-- ){
        if(size != 0){
            let nextBlockCoords = snake[size - 1].getBoundingClientRect();
            snake[size].style.left = nextBlockCoords.left + 'px';
            snake[size].style.top = nextBlockCoords.top + 'px';
        }
    }
    setTimeout(blockMoves, 500);
}
blockMoves();