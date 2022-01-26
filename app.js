let output = document.querySelector(".display");
//max digits = 12

//add
function add(a, b) {
	return a + b;
}
//subtract
function subtract(a, b) {
	return a - b;
}
//multiply
function multiply(a, b) {
	return a * b;
}
//divide
function divide(a, b) {
	return a / b;
}

let inputDigits = document.querySelectorAll(".digits");
let a = output.innerText;

inputDigits.forEach((digit) => {
	digit.addEventListener("click", () => {
		if (output.innerText == 0) {
			output.innerText = digit.innerText;
		} else {
			output.innerText += digit.innerText;
		}
	});
});

let del = document.querySelector(".del");

del.addEventListener("click", () => {
	output.innerText = output.innerText.slice(0, output.innerText.length - 1);
	if (output.innerText.length === 0) {
		output.innerText = "0";
	}
});

let clr = document.querySelector(".clear");

clr.addEventListener("click", () => {
	output.innerText = "0";
});
