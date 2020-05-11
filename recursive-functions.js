const isVowel = char => 'aeiou'.includes(char) ? 1 : 0
const countVowels = str => str.length ? isVowel(str[0]) + countVowels(str.slice(1)) : 0

console.log(countVowels('sam is cool'))

// Palindrome checker

// Base case, single string or empty string is a palindrome
// Simplest case two chars, if the same are a palindrome
// Remove the outside chars and if the inside is a palindrome the whole thing is

const equal = (a, b) => a === b

const isPalindrome = str => 
    str.length > 1 
    ? equal(str[0], str.slice(-1)) 
        ? isPalindrome(str.slice(1, -1)) 
        : false 
    : true

console.log(isPalindrome('a'))
console.log(isPalindrome(''))
console.log(isPalindrome('aa'))
console.log(isPalindrome('aba'))
console.log(isPalindrome('abba'))
console.log(isPalindrome('abcba'))
console.log(isPalindrome('no'))
console.log(isPalindrome('abc'))