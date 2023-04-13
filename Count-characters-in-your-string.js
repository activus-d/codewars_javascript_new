/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/
function count(string) {
  // TODO
  string === '' ? {} : '' 
  let countObj = {}
  splitedString = string.split('')
  for (let i = 0; i <= splitedString.length - 1; i++) {
    const property = string[i]
    if (countObj[property] === undefined) {
        countObj[property] = 1
    }else {
        countObj[property] = countObj[property] + 1
    }
  }
  return countObj;
}
count("hello")