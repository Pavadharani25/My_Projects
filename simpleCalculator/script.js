let display = document.getElementById('result');
let input = 0;

function type(el) {
if (input == 0) {
input = el.innerText;
} else {
input += el.innerText;
}
display.innerText = input;
}
document.getElementById("clear").addEventListener('click', function () {
display.innerText = 0;
input = 0;
});
document.getElementById("equal").addEventListener('click', function () {
let result = 0;
result = eval(display.innerText);
if (isNaN(result) || result == 'Infinity')
{
display.innerText = 'Math Error';
} else {
result = (result % 1 === 0) ? result : result.toFixed(15);
display.innerText = result;
}
input = result;
});
document.getElementById("delete").addEventListener('click', function () {
display = document.getElementById('result');
result = display.innerText.slice(0, -1);
display.innerText = result;
input = result;
});