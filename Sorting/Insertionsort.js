
function insertionSort(arr,n)
{
    for(let i=1;i<n;i++)
    {
        let key = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>key)
        {
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = key;
    }
}
function printArray(arr,n)
{
    for(let i=0;i<n;i++)
    {
        console.log(arr[i]);
    }
}

let arr = [12, 11, 13, 5, 6 ,1]; 
let n = arr.length; 

insertionSort(arr, n); 
printArray(arr, n); 