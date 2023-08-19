
function selectionSort(arr,n){
     
    var i,j, min_idx;
    for(i=0;i<n-1;i++)
    {
        min_idx = i;
        for(j=i+1;j<n;j++)
        {
            if(arr[j]<arr[min_idx])
            {
                 min_idx = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;
    }
}
function printArray(arr,n)
{
    for(let i=0;i<n;i++)
    {
        console.log(arr[i]);
    }
}

var arr = [64, 25, 12, 22, 11];
    var n = 5;
    selectionSort(arr, n);
    console.log("Sorted array: <br>");
    printArray(arr, n);