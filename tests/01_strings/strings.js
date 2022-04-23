/* eslint-disable no-unused-vars */
function cap(str, letter) {
  const index = str.indexOf(letter);

  if (index === -1) {
    return 'sorry not found';
  }

  return str[index + 1].toUpperCase();
}

function firstCharacter(str1, str2) {

}

module.exports = { cap, firstCharacter };
