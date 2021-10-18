canvas = document.getElementById("myCanvas");
color = "red";
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.rect(150, 143, 430, 200)
ctx.arc(200,200,40,0,2);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("X = " + mouse_x + ",Y = " + mouse_y);
    circle(mouse_x , mouse_y)
}

function circle(mouse_x , mouse_y) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI)
    ctx.stroke();
}

function clearcanvas() {
    ctx.clearRect(0,10, ctx.canvas.width, ctx.canvas.height);
}