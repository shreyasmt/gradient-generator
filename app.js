var css = document.querySelector("h3");
var color1 = document.getElementById(".color1");
var color2 = document.getElementById(".color2");
var body = document.querySelector("body");
var gradient = document.getElementById("gradient");
var option;
function linear(){
    body.style.background = "linear-gradient(to right, "+ color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background;   
}
function radial(){
    body.style.background = "radial-gradient(circle at center," + color1.value + "," + color2.value +")";
    css.textContent = body.style.background;
}



gradient.onchange = function() {
    var x = document.getElementById("gradient").value;
        if(x == "radial"){
            console.log(x);
            color1.addEventListener('input',radial);
            color2.addEventListener('input',radial);
        }else if(x == "linear"){
            console.log(x);
            color1.addEventListener('input',linear);
            color2.addEventListener('input',linear);
        }
}


