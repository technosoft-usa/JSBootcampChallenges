/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function deleteProp(obj, prop) {
delete obj[prop];
return obj
}

function numObjectProps(obj) {

return Object.keys(obj).length;
}

function shoppingCart(cart) {


  let total = 0;
    for( let i = 0; i < cart.length; i++) {
      const cartTotal = cart[i].amount
      total += cartTotal
    }

    
  return  total;
 

}

function compareObjects(obj1, obj2) {
const obj1Keys = Object.keys(obj1);
const obj2Keys = Object.keys(obj2);

if (obj1Keys.length !== obj2Keys.length){
  return false;
}

for(let i = 0; i < obj1Keys.length; i++) {
  if (obj1[obj1Keys[i]] !== obj2[obj2Keys[i]]
     || obj1Keys[i] !== obj2Keys[i]) {
      return false
     }
} 

return true
}

module.exports = {
  compareObjects, deleteProp, numObjectProps, shoppingCart,
};
