// JSON.stringify(Array.zip([1,2,3],[4,5,6], function(left, right) { return left + right })) === '[5,7,9]'

Array.zip = function(left, right, combinerFunction) {
	var counter,
		results = [];

	for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
    leftItem = left[counter];
    rightItem = right[counter];
    tmp = combinerFunction(leftItem, rightItem);
    results.push(tmp);
		// Add code here to apply the combinerFunction to the left and right-hand items in the respective arrays
	}

	return results;
};
		
