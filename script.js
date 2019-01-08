function add(a, b) {
    return a + b
  }
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b
  }
function divide(a,b) {
    return a / b
}
function operate(a,b,operand) {
    operand(a, b);
}
const btn = document.getElementsByClassName('content-output');
Array
  .from(btn)
  .forEach(addEvent)

let numArray = []
function addEvent(element){
    element.addEventListener('click', function(e){
        numArray.push(e.target.innerHTML)
        document.getElementById('top').value = numArray.join('')
        let numString = numArray.toString()
        numString = numString.replace(/,/gi, "")
        document.getElementById('bottom').value = eval(numString);

    })
}
function calculate() {
    let numString = numArray.toString()
    numString = numString.replace(/,/gi, "")
    document.getElementById("top").value = eval(numString)
    numArray = [eval(numString)]

}
function deleter() {
    numArray = []
    numString = []
    document.getElementById('top').value = numArray
    document.getElementById("bottom").value = numString

}
let equals = document.getElementById('equally')
equals.addEventListener('click',function(){
    calculate();
})
let delet = document.getElementById('delete')
delet.addEventListener('click',function(){
    deleter();
})
window.addEventListener('keypress', function(e) {
    if(e.key === '0' || e.key === "/" || e.key === "*" || e.key === "+"
            || e.key === "-" || e.key === "1" || e.key === "2" || e.key === "3"
            || e.key === "4" || e.key === "5" || e.key === "6" || e.key === "7" 
            || e.key === "8" || e.key === "9"){
        numArray.push(e.key)
        document.getElementById('top').value = numArray.join('')
        let numString = numArray.toString()
        numString = numString.replace(/,/gi, "")
        document.getElementById('bottom').value = eval(numString);
        }else if(e.key === "Enter"){
            calculate();}
            else if(e.key === "Delete"){
                deleter();
            }
    

})
