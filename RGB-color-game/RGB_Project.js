var squares = document.getElementsByClassName("square");
var spans = document.querySelectorAll("span");
var h1 = document.querySelector("h1");
var button = document.querySelectorAll("button");

function isCorrect(targetColor, size) {
    spans[1].textContent = "Correct!";
    for (let index = 0; index < size; index++) {
        squares[index].style.backgroundColor = targetColor;
    }
    h1.style.backgroundColor = targetColor;
    button[0].textContent = "PLAY AGAIN?"
}

function isWrong(index) {
    spans[1].textContent = "Try Again";
    squares[index].style.backgroundColor = "#232323";
}

function randomOneColor() {
    let rgb = new Array(3);
    for (let i = 0; i < rgb.length; i++) {
        rgb[i] = Math.floor(Math.random() * 256);
    }
    return "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
}

function randomColors(num) {
    let colors = new Array(num);
    for (let i = 0; i < colors.length; i++) {
        colors[i] = randomOneColor();
    }
    return colors;
}

function peackedColor(colors, size) {
    let index = Math.floor(Math.random() * size);
    return colors[index];
}

function reset(num) {
    var size = num;
    var colors = randomColors(size);
    var targetColor = peackedColor(colors, size);

    spans[0].textContent = targetColor;
    spans[1].textContent = "";
    button[0].textContent = "NEW COLORS"
    h1.style.backgroundColor = "steelblue";
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "#232323";
    }

    for (let index = 0; index < size; index++) {
        squares[index].style.backgroundColor = colors[index];

        squares[index].onclick = function () {
            if (squares[index].style.backgroundColor == spans[0].textContent) {
                isCorrect(spans[0].textContent, size);
            } else {
                isWrong(index);
            }
        };
    }
}

var model = "easy";
button[1].classList.add("selected");
button[2].classList.remove("selected");
button[3].classList.remove("selected");
reset(3);

button[1].addEventListener("click", function () {
    model = "easy";
    button[1].classList.add("selected");
    button[2].classList.remove("selected");
    button[3].classList.remove("selected");
    reset(3);
});

button[2].addEventListener("click", function () {
    model = "medium";
    button[2].classList.add("selected");
    button[1].classList.remove("selected");
    button[3].classList.remove("selected");
    reset(6);
});

button[3].addEventListener("click", function () {
    model = "hard";
    button[3].classList.add("selected");
    button[1].classList.remove("selected");
    button[2].classList.remove("selected");
    reset(9);
});

button[0].addEventListener("click", function () {
    if (model === "easy") {
        reset(3);
    } else if (model === "medium") {
        reset(6);
    } else if (model === "hard") {
        reset(9);
    }
});