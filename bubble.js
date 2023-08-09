function bubbleSort(arr) {
	let n = arr.length;
	let swapped;

	do {
		swapped = false;
		for (let i = 0; i < n - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				// Swap the elements using destructuring
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				swapped = true;
			}
		}
		n--; // Reduce n, because the largest element is now in the right position
	} while (swapped); // If no two elements were swapped, the array is sorted

	return arr;
}

module.exports = bubbleSort;
