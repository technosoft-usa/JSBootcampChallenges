factorial: write a function named factorial that accepts a number as an argument and multiplies all the numbers between 1 and the given number

stringReverse: write a function named stringReverse that takes a string as an argument and returns the reverse Ex: 'hello' => 'olleh'

addTheEvens: write a function named addTheEvens that takes a number as an argument and returns the sum of all the even numbers between zero and the given number including the given number


slicer: Write a function slicer that accepts up to three arguments:

// originalString (string)
// startIdx (number, optional)
// endIdx (number, optional)
// slicer should return a string. The returned string should be a copy of the original string. If a startIdx is passed, the returned string should start at that index:

// slicer('slicer', 2)    // => icer
// If the user defined an endIdx, the returned string should end at the last index before the endIdx:

// slicer('slice and dice', 2, 5)    // => ice
// If the user doesn't define either the startIdx or the endIdx, return the entire originalString:

// slicer('slice and dice')    // => slice and dice
// You can assume the startIdx will always be less than or equal to the endIdx.

// Do not use the slice string method.