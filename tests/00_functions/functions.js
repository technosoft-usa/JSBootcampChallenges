/* eslint-disable consistent-return */
function max( a, b, c) {
  if ( a >= b && a >= c){
    return a
  } else if ( b >= a && b >= c){
    return b
  } else if ( c >= a && c >= b){
    return c
  }
}

function addUnknown( a=0, b=0, c=0, d=0, e=0) {
  return a + b + c + d + e ;

}

function evenOrOdd(num) {
  if( num % 2 === 0){
    return 'even' ;
  } else{
    return 'odd' ;
  }

}


function operator( a, b, c) {

  if ( a + b === c ){
    return 'plus'
  } else if ( a - b === c ){
    return 'minus'
  } else if ( a * b === c ){
    return 'multiply'
  } else if ( a/ b === c ){
    return 'divide'
  } else {
    return null ;
  }
}

module.exports = { max, addUnknown, evenOrOdd, operator, };
