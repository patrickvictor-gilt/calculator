const displayElem = document.getElementById("display");

function display(input){
    displayElem.value += input; 
}
function clearDisplay(){
    displayElem.value ="";

}
function calculate(){
displayElem.value = eval(displayElem.value);
}