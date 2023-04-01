let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let ans = document.getElementById("answer");

document.getElementById("add").addEventListener("click", function(){
    ans.value = Number(num1.value)+Number(num2.value);
});
document.getElementById("min").addEventListener("click", function(){
    ans.value = Number(num1.value)-Number(num2.value);
});
document.getElementById("mul").addEventListener("click", function(){
    ans.value = Number(num1.value)*Number(num2.value);
});
document.getElementById("div").addEventListener("click", function(){
    ans.value = Number(num1.value)/Number(num2.value);
});