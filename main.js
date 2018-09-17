var div = document.querySelector("div");
var body = document.querySelector("body");
var height = document.querySelector("#rows_height");
var width = document.querySelector("#col_width");
var grid = document.querySelector("#createGrid");
var color = document.querySelector("#palette");

var table = document.createElement("table");
table.id = "canvas";
div.appendChild(table);

var canvas = document.querySelector("#canvas");

palette.addEventListener("click", function(){});

grid.onsubmit = function(e) {
    e.preventDefault();
    createGrid();
}

function createGrid() {
    for (let r = 0; r < height.value; r++) {
        let row = canvas.insertRow(r);
        for (let c = 0; c < width.value; c++) {
            const pixel = row.insertCell(c);
            pixel.className = "pixel";
            pixel.addEventListener("click", fillPixel);
        }
    }
}

function fillPixel() {
    this.setAttribute("style", `background-color: ${color.value}`);
}
