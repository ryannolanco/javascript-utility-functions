let testData = {
	ryan: ['chicken', 'rice', 'apples'],
};

/**
 * Validates that all elements in the given array are non-empty strings.
 *
 * @param {Array} array - The array to validate.
 * @throws {Error} If any element in the array is not a string or is an empty string (including strings with only whitespace).
 * @returns {boolean} Returns `true` if all elements in the array are valid strings.
 *
 * Example Usage:
 *   checkArrayValuesAreValidStrings(["hello", "world"]); // Returns true
 *   checkArrayValuesAreValidStrings(["hello", ""]); // Throws an Error
 *   checkArrayValuesAreValidStrings([123, "world"]); // Throws an Error
 */

function checkArrayValuesAreValidStrings(array) {
	array.forEach((element) => {
		if (typeof element !== 'string' || element.trim() === '') {
			throw new error('All items in array must be a string and not empty');
		}
	});

	return true;
}

//this specific function takes an object, and stores them in local storage in relation to each other.
// It also has a check to make sure any arrays only contain valid strings.

function storeItemsFromObjectInLocalStorage(dataObject) {
	if (typeof input !== 'object' || input === null || Array.isArray(input)) {
		return 'Input must be a valid object';
	}

	Object.keys(dataObject).forEach((key) => {
		if (Array.isArray(dataObject[key])) {
			let dataArray = dataObject[key];
		}
	});
}
