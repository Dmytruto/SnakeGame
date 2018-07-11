let block = document.querySelector(".head");
let foodBlock = document.querySelector(".food");
foodBlock.style.left = Math.random()*900 + 100 + 'px';
foodBlock.style.top = Math.random()*600 + 100 + 'px';
let foodCoords =foodBlock.getBoundingClientRect();
let body = document.querySelector("body");
let bodyCoords = body.getBoundingClientRect();
let speed = 1;
let direction = "none";
body.addEventListener("keydown", function(event){
    console.log(111);
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



function blockMoves(){
    let coords = block.getBoundingClientRect();
    console.log(coords.left);
    console.log(coords.right);
    switch(direction){
        case "left":
            block.style.left = (coords.left - 16 ) + 'px';
            break;
        case "top":
            block.style.top = coords.top - 16  + 'px';
            break;
        case "right":
            block.style.left = coords.left+ 'px';
            break;
        case "bottom":
            block.style.top = coords.top + 'px';
            break;
        default:
            break;
        
    }
    if(((coords.left <= foodCoords.right && coords.left >= foodCoords.left) || (coords.right >= foodCoords.left && coords.right <= foodCoords.right)) &&( (coords.bottom >= foodCoords.top && coords.bottom <= foodCoords.bottom) || (coords.top >= foodCoords.top && coords.top <= foodCoords.bottom) ) ){
        foodBlock.style.left = Math.random()*900 + 100 + 'px';
        foodBlock.style.top = Math.random()*600 + 100 + 'px';
        foodCoords =foodBlock.getBoundingClientRect();
    }
    setTimeout(blockMoves, 30);
}
blockMoves();