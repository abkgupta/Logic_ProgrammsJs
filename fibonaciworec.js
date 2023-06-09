// 0 1 1 2 3 5 8 13 21

let a = 0,b =1;

let n = 8;
let c =0;
for(let i=2;i<=8;i++)
{
     c = a + b;
     a = b;
     b = c;
     console.log(c)
}