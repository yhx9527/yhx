/**
 *题目
 */
// Given an array, rotate the array to the right by k steps, 
// where k is non-negative.
// 就是一个实现尾部出去跑到头部

/**
 *题目演示例子
 */
// Example 1:
// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]

// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

/**
 *题目要求和分析题目
 */
// 题目要求如下：
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 *我的代码解答
 */
 
var rotate = function(nums, k) {
    while(k--){
        var temp = nums.pop()
        nums.unshift(temp)
    }
};

/**
 *他人的更好的解答
 */
var rotate = function(nums, k) {
    nums.unshift(...nums.splice(nums.length-k, k))
    console.log(nums)
};

/**
 *总结心得
 */ 


// Given an array, rotate the array to the right by k steps, 
// where k is non-negative.
// 就是一个实现尾部出去跑到头部

// Example 1:

// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

var rotate = function(nums, k) {
    /*while(k--){
        var temp = nums.pop()
        nums.unshift(temp)
    }*/
    nums.unshift(...nums.splice(nums.length-k, k))    console.log(nums)
};
rotate([100,11,113,12],2)