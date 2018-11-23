/*
	Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

	For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

	Follow-up: what if you can't use division?
*/

function productArray (array) {
	const result = [];
	for (let i = 0; i < array.length; i++) {
		let product = 1;
		for (let x = 0; x < array.length; x++) {
			if (x !== i) {
				product = product * array[x];
			}
		}
		result[i] = product;
	}
	return result;
};

// Tests

const problemDefTest = productArray([1, 2, 3, 4, 5]);
console.log('Expected output: [120, 60, 40, 30, 24];\n Actual output: ', problemDefTest);

const problemDefTest2 = productArray([3, 2, 1]);
console.log('Expected output: [2, 3, 6];\n Actual output: ', problemDefTest2);

const negativeTest = productArray([-10, 2, -3]);
console.log('Expected output: [-6, 30, -20];\n Actual output: ', negativeTest);

const noInputTest = productArray([]);
console.log('Expected output: [];\n Actual output: ', noInputTest);

const zerosTest = productArray([50, 0, 0]);
console.log('Expected output: [0, 0, 0];\n Actual output: ', zerosTest);