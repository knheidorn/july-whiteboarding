//recursion reversal of array
function reverseArray(array) {
  let length = array.length
  if (length == 0 || length == 1) {
    return array
  } else {
    return reverseArray(array.slice(1)).concat(array[0])
  }
}

// let array = ["H", "e", "l", "l", "o"]
// reverseArray(array)


// reverse string standard
function reverseString(string) {
  let array = string.split("")
  let length = array.length
  if (length == 0 || length == 1) {
    return string
  } else {
    let reversed = array.reverse()
    let newString = reversed.join("")
    return newString
  }
}

// let string = "Hello, world"
//
// reverseString(string)
