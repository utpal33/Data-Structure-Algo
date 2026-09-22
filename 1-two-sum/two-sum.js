/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let sortedNums = nums.map((value, index) => ({
        value,
        index
    })).sort((a, b) => a.value - b.value);

    let i = 0;
    let j = sortedNums.length - 1;

    while (i < j) {
        let sum = sortedNums[i].value + sortedNums[j].value;

        if (sum === target) {
            return [sortedNums[i].index, sortedNums[j].index];
        }

        if (sum > target) {
            j--;
        } else {
            i++;
        }
    }

    return [];
};