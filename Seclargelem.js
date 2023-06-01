const arr = [23,5,45,1,8,9,44]


let largest = arr[0]; // Assume the first element as the largest
let secondLargest = Number.MIN_SAFE_INTEGER;

function func(arr)
{
      for(let i=0;i<arr.length;i++)
      {
         if(arr[i]> largest)
         {
            // secondLargest = 
            largest = arr[i];
         }
       else if(arr[i]>secondLargest && secondLargest<largest)
         {
             secondLargest = arr[i];
         }
      }
      return secondLargest;
}
console.log(func(arr))