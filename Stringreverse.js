let s = "abhi";
let len = s.length;
let chars = s.split(''); // Convert the string to an array of characters

for (let i = 0; i < len / 2; i++) {
  let tmp = chars[i];
  chars[i] = chars[len - 1 - i];
  chars[len - 1 - i] = tmp;
}

let reversed = chars.join(''); // Convert the array back to a string
console.log(reversed);
console.log(s)

// let s  = "abhi";
// let len = s.length;                      // not work cuz string is immutable 
// let rev = s;
// for(let i=0;i<len/2;i++)
// {
//     let tmp = rev[i];
//     rev[i] = rev[len-i-1]
//     rev[len-i-1] = tmp;
// }
// let rs = rev;
// console.log(rs);
