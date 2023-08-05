let n = 153;
let temp = n;
let p = 0;
 
/*function to calculate
the sum of individual digits */
while (n > 0) {
 
    let rem = n % 10;
    p = (p) + (rem * rem * rem);
    n = Math.floor(n / 10);
}
 
/* condition to check whether
   the value of P equals
   to user input or not. */
if (temp == p) {
    console.log("Yes. It is Armstrong No.");
}
else {
    console.log("No. It is not an Armstrong No.");
}