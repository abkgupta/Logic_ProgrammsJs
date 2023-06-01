// Input: arr[] = {1, 2, 4, 6, 3, 7, 8}, N = 8
// Output: 5
// Explanation: The missing number between 1 to 8 is 5

// Input: arr[] = {1, 2, 3, 5}, N = 5
// Output: 4


let arr = [1, 2, 4, 6, 3, 7, 8];
let n = arr.length+1
// console.log(n)
let sum = n*(n+1);
sum = sum/2;
for(let i=0;i<n-1;i++)
{
    sum = sum - arr[i]
}

console.log(sum)