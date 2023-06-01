// 0 1 1 2 3 5 8 13 21
// function fibon(n)
// {
//     if(n<=1)
//     return n
//     // console.log(fibon(n-1) + fibon(n-2))
//     return fibon(n-1) + fibon(n-2)              
// }

// console.log(fibon(8))
// print fibonacci series
let n1=0,n2=1,n3=0; 
console.log(0 + ' '+ 1)
function fibon(n)
{
      if(n>0)
      {
        n3 = n1+n2
        n1 = n2
        n2 = n3
        console.log(n3)
        fibon(n-1)
      }
      
}
let n=8
console.log(fibon(n-2))