/* eslint-disable no-unused-vars */
function multiply(arr) {

  let total = 1 ;
  let numValues = arr.flat();
  
  for ( let i = 0 ; i <= numValues.length-1 ; i ++){
    total *= numValues[i]
  }
  return total 

}

function includesCopy(arr, searchValue) {


}

function inventory(arr) {
  
  // const arrToStr = arr.toString().split(",")
  // console.log(arrToStr);
  const arrFlat = arr.flat();
  console.log(arrFlat);
  const arr0 = arrFlat.shift();
  console.log(arr0);
  const arr1 = arrFlat.pop();
  console.log(arr1);
  const arr_1_0 = arr1.shift();
  console.log(arr_1_0);
  const arr_1_1 = arr1.pop();
  console.log(arr_1_1);

 let string = `the ${arr_1_0} ${arr0} is ${arr_1_1} dollars.`;
 console.log(string);

 const newArray = string.split(' ');
 console.log(newArray);

}

function camelCase(str) {

}

function joiner() {

}

module.exports = {
  multiply, includesCopy, inventory, camelCase, joiner,
};
