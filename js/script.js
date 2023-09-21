let arr = [1, 0, -2, -1, 58, -4];
let arr1 = [1, 2, 3, 5, 10, -7, 11];

console.log(getMin(arr)); // -4
console.log(getMax(arr)); // 58
console.log(getSum(arr1)); // 25


function getMin(dataArr) {
    let min = dataArr[0];

    for (let i = 1; i < dataArr.length; i++) {
        
        if (min > dataArr[i]) {
            min = dataArr[i];
        } 
    }

    return min;
};



function getMax(dataArr) {
    let max = dataArr[0];

    for (let i = 1; i < dataArr.length; i++) {
        
        if (max < dataArr[i]) {
            max = dataArr[i];
        } 
    }

    return max;
};



function getSum(dataArr) {
    let sum = 0;

    for (i = 0; i < dataArr.length; i++) {
        sum += dataArr[i];
    }
    
    return sum;
};










// getMin = -4
// getMax = 58
// getSum = 6 (second mas)