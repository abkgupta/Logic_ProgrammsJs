
// let num = 459;
let rev = 0;
function Reverse(num){
 
    let tmp = num;
    // console.log(tmp)
    while(tmp!=0)
    {
        rev = rev*10 + tmp%10;
        tmp = parseInt(tmp/10);
        // parseInt(tmp)
        console.log(tmp)
    }
    return rev
}
console.log(Reverse(459))