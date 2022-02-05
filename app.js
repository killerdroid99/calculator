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

let flagEval = 0;

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
let flagOp = 0;
ops.forEach((op) => {
	op.addEventListener("click", () => {
		if (flagOp < 1) {
			operation = op.innerText;
			mini.innerText = output.innerText + op.innerText;
			a = parseFloat(output.innerText);
			output.innerText = "";
			flagOp++;
			flagEval = 1;
		}
	});
});

evaluate.addEventListener("click", () => {
	if (flagEval < 2) {
		mini.innerText = output.innerText + "=";
		b = parseFloat(output.innerText);
		if (operation == "+") {
			output.innerText = add(a, b);
		} else if (operation == "-") {
			output.innerText = subtract(a, b);
		} else if (operation == "*") {
			output.innerText = multiply(a, b);
		} else if (operation == "/") {
			output.innerText = divide(a, b);
		} else if (operation == "^") {
			output.innerText = power(a, b);
		} else if (operation == "√") {
			output.innerText = root(b, a);
		}
		flagOp = 0;
		flagEval++;
	}
});

// Key-Board support

addEventListener("keydown", (event) => {
	if (
		event.key === "1" ||
		event.key == "2" ||
		event.key == "3" ||
		event.key == "4" ||
		event.key == "5" ||
		event.key == "6" ||
		event.key == "7" ||
		event.key == "8" ||
		event.key == "9" ||
		event.key == "0" ||
		event.key == "."
	) {
		if (output.innerText == "0") {
			output.innerText = event.key;
		} else output.innerText += event.key;
	} else if (
		event.key == "+" ||
		event.key == "-" ||
		event.key == "/" ||
		event.key == "*" ||
		event.key == "e" ||
		event.key == "r"
	) {
		if (flagOp < 1) {
			if (event.key == "e") {
				operation = "^";
			} else if (event.key == "r") {
				operation = "√";
			} else {
				operation = event.key;
			}
			mini.innerText = output.innerText + operation;
			a = parseFloat(output.innerText);
			output.innerText = "";
			flagOp++;
			flagEval = 1;
		}
	} else if (event.key == "Backspace") {
		output.innerText = output.innerText.slice(0, output.innerText.length - 1);
		if (output.innerText.length === 0) {
			output.innerText = "0";
		}
	} else if (event.key == "c") {
		output.innerText = "0";
		mini.innerText = "";
	} else if ((event.key = "Enter")) {
		if (flagEval < 2) {
			mini.innerText = output.innerText + "=";
			b = parseFloat(output.innerText);
			if (operation == "+") {
				output.innerText = add(a, b);
			} else if (operation == "-") {
				output.innerText = subtract(a, b);
			} else if (operation == "*") {
				output.innerText = multiply(a, b);
			} else if (operation == "/") {
				output.innerText = divide(a, b);
			} else if (operation == "^") {
				output.innerText = power(a, b);
			} else if (operation == "√") {
				output.innerText = root(b, a);
			}
			flagOp = 0;
			flagEval++;
		}
	}
});
