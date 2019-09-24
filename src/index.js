module.exports = function multiply(first, second) {
	
	let result = 0; //declare variable

	result = BigInt(first) * BigInt(second);	// convert numbers to BigInt

	return result.toString(); // convert result to String

}
