function merge(arr1, arr2) {
	let mergedArr = [];
	let i = 0; // pointer for arr1
	let j = 0; // pointer for arr2

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			mergedArr.push(arr1[i]);
			i++;
		} else {
			mergedArr.push(arr2[j]);
			j++;
		}
	}

	// If there are remaining elements in arr1
	while (i < arr1.length) {
		mergedArr.push(arr1[i]);
		i++;
	}

	// If there are remaining elements in arr2
	while (j < arr2.length) {
		mergedArr.push(arr2[j]);
		j++;
	}

	return mergedArr;
}

function mergeSort(arr) {
	if (arr.length <= 1) return arr; // Base case: single element or empty array is always sorted

	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid)); // Recursive call on the left half
	let right = mergeSort(arr.slice(mid)); // Recursive call on the right half

	return merge(left, right);
}

module.exports = { merge, mergeSort };
