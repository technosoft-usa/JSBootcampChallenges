/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
   if (str.includes(letter)){
    return true
   }
   return false
}

function isPalindrome(str) {

   let reverseStr = '';

   for (let i = str.length -1 ; i >= 0 ; i--){
      reverseStr += str[i];
    }
    if(reverseStr === str){
      return true
    }
      return false
    
   
  

}

function cap(str, letter) {

   let strUC = str.toUpperCase();
   let letterUC = letter.toUpperCase();

   if (strUC.includes(letterUC)){
     return strUC.charAt(strUC.indexOf(letterUC)+1)
   }
   return 'sorry not found'
}

function firstCharacter(str1, str2) {

   const str1ToLC = str1.toLowerCase();
   const str2ToLC = str2.toLowerCase();

   if(str1ToLC[0] === str2ToLC[0]){
      return true
   }
   

   return false
}

module.exports = { cap, firstCharacter, doesInclude, isPalindrome };
