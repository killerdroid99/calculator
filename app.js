let output = document.querySelector(".display");
let mini = document.querySelector(".mini");

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
//exponent
function power(a, b) {
	return Math.pow(a, b);
}
//square-root
function root(a, b) {
	return Math.pow(a, 1 / b);
}

let inputDigits = document.querySelectorAll(".digits");

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
	mini.innerText = "";
});

let ops = document.querySelectorAll(".operators");
let evaluate = document.querySelector(".evaluate");

let a = 0;
let b = 0;
let operation;
ops.forEach((op) => {
	op.addEventListener("click", () => {
		operation = op.innerText;
		mini.innerText = output.innerText + op.innerText;
		a = parseFloat(output.innerText);
		output.innerText = "";
	});
});

evaluate.addEventListener("click", () => {
	mini.innerText = output.innerText + "=";
	b = parseFloat(output.innerText);
	if (operation == "+") {
		output.innerText = add(a, b);
	} else if (operation == "−") {
		output.innerText = subtract(a, b);
	} else if (operation == "x") {
		output.innerText = multiply(a, b);
	} else if (operation == "/") {
		output.innerText = divide(a, b);
	} else if (operation == "^") {
		output.innerText = power(a, b);
	} else if (operation == "√") {
		output.innerText = root(b, a);
	}
});
