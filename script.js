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