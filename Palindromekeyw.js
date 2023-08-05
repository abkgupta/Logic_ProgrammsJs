function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLow
    return (str == str.split('').reverse().join(''));
  }
//   For example:
  
  console.log(isPalindrome("level"));                   // logs 'true'
  console.log(isPalindrome("levels"));                  // logs 'false'
  console.log(isPalindrome("A car, a man, a maraca"));  