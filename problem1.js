/*
	Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

	For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

	Bonus: Can you do this in one pass?
*/

function addsToK (numbers, k) {

	for (let i = 0; i < numbers.length; i++) {
		const num = numbers[i];
		for (let x = i + 1; x < numbers.length; x++) {
			if(numbers[x] + num === k) {
				return true;
			}
		}
	}
	return false;
}

// Tests
// check negative numbers, empty array and a variety of true/false cases
console.assert(addsToK([10, 15, 3, 7], 17) === true);
console.assert(addsToK([10, 15, 3, 7], 20) === false);
console.assert(addsToK([-10, 122, -8, 0], -18) === true);
console.assert(addsToK([], 0) === false);
console.assert(addsToK([1000, -1000, 25, -25], 0) === true);
console.assert(addsToK([1000, 1000, 1000, 1000], 2000) === true);
console.assert(addsToK([1, 2, 3, 4, 5, 6, 7, 8], 15) === true);
console.assert(addsToK([2, 9, 100, -4], 20) === false);