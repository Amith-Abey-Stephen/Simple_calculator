// This function clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
 
function del() {
    var display = document.getElementById("result");
    display.value = display.value.slice(0, -1);
}


// This function evaluates the expression and returns the result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}