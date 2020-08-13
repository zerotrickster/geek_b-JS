function calcSum (a, b) {
	return a + b;
}

function calcDiff (a, b) {
	return a - b;
}

function calcMult (a, b) {
	return a * b;
}

function calcDiv (a, b) {
	return a / b;
}

function mathOperation (arg1, arg2, operation) {
	switch (operation) {
		case "Addition":
		return calcSum (arg1, arg2);
		break;

		case "Subtraction":
		return calcDiff (arg1, arg2);
		break;

		case "Multiplication":
		return calcMult (arg1, arg2);
		break;

		case "Division":
		return calcDiv (arg1, arg2);
		break;
	}
}