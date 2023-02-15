/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
  if (str.includes(letter)) {
    return true;
  }
  return false;
}

function cap(str, letter) {
  const index = str.indexOf(letter);
  if (index === -1) {
    return 'sorry not found';
  }
  const returnLetter = str[index + 1];
  return returnLetter.toUpperCase();
}

function firstCharacter(str1, str2) {
  const firstChar1 = str1[0].toLowerCase();
  const firstChar2 = str2[0].toLowerCase();
  if (firstChar1 === firstChar2) {
    return true;
  }
  return false;
}

module.exports = {
  cap, firstCharacter, doesInclude,
};
