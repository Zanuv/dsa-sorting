function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let minIdx = i; // assume the smallest value is at the current index
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIdx]) {
				minIdx = j; // update the minIdx if a smaller value is found
			}
		}
		// if minIdx has changed, then swap
		if (minIdx !== i) {
			[arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
		}
	}
	return arr;
}

module.exports = selectionSort;
