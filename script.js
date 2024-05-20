const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = [];  
    let tempSubarray = [];  

    for (const num of arr) {
        if (tempSubarray.reduce((sum, val) => sum + val, 0) + num <= n) {
            tempSubarray.push(num);
        } else {
            result.push(tempSubarray);
            tempSubarray = [num];
        }
    }

    // Add any remaining elements
    if (tempSubarray.length > 0) {
        result.push(tempSubarray);
    }

    return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
