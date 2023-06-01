"use strict";
let str = "abbdscba"
let fact = true;

let i=0,n=str.length;
let j=n-1;

while(i<n && j>0)
{
    if(str.charAt(i)!=str.charAt(j))
    {
        fact = false;
        break;
    }
    i++;
    j--;
}
console.log(fact)
// console.log(n)