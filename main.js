
const canvas = document.querySelector('.canvas');
let opacity = 0;

function createCanvas (size){
    size = parseInt(size);
    canvas.innerHTML = '';
    for (let i = 0; i < size*size; i ++){
        const div = document.createElement('div');
        div.classList.add('pixel');
        if (size === 16){
            div.classList.add('size-16-grid');
        } else if (size === 32) {
            div.classList.add('size-32-grid')
        } else if (size === 64) {
            div.classList.add('size-64-grid')
        }
        canvas.appendChild(div);
    }
    draw();
}

function draw (color){
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', (pixel) => {
            
            if (color === "black"){
                pixel.target.style.backgroundColor = "black";
            } else if (color === "progressive-black"){
                pixel.target.style.backgroundColor = "black";
                pixel.target.style.opacity = 0.2 * pixel.target.style.opacity;
                
                
                
            } else if (color === "random"){
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                pixel.target.style.backgroundColor = "#" + randomColor;
            }
        });
    });
}

function changeSize (){
    const sizes = document.querySelectorAll('.grid-size');
    sizes.forEach((size) => {
        size.addEventListener('click', () => {
            createCanvas(size.getAttribute("value"));
        })
    }); 
}

function changeColor (){
    const colors = document.querySelectorAll('.color');
    colors.forEach((color) => {
        color.addEventListener('click', () => {
            draw(color.getAttribute("id"))
        })
    }); 
}

function startApp() {
    createCanvas(16);
    draw("black");
    changeSize();
    changeColor();

    // eraseListener();
}

startApp();