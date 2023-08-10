// An array of choices to pick answers from
const CHOICES = [
  'Pick me!', // choose this with pick(0)
  null, // choose this with pick(1)
  undefined, // choose this with pick(2) etc ...
  -12,
  3.14,
  10000000n,
  'hey',
  [1, 2, 3],
  { i: 'object!' },
  2 > 1, // HINT: Is this true or false?
  3 === 4 // HINT: Is this true or false?
]

// Use the following function to 'pick' an answer to the questions below
// NOTE: Answers are numbered from 0

// examples
let pickMe = pick(0) // to pick the 1st answer use 0
pickMe = pick(4) // to pick the 4th answer use 3 etc
pickMe = pick(0) // Back to the correct sample answer

function pick(n) {
  return CHOICES[n]
}

// 1. Pick true using the pick function - by changing 0 to pick your answer
const imTrue = pick(9) // Index 9 corresponds to the value '2 > 1' which is true

// 2. Pick a real number
const aReal = pick(4) // Index 4 corresponds to the value 3.14

// 3. Pick a string
const aString = pick(6) // Index 6 corresponds to the value 'hey'

// 4. Pick an array
const anArray = pick(7) // Index 7 corresponds to the array [1, 2, 3]

// 5. Pick a (simple) number
const aNumber = pick(3) // Index 3 corresponds to the value -12

// 6. Pick an object
const anObject = pick(8) // Index 8 corresponds to the object { i: 'object!' }

// 7. Pick false
const imFalse = pick(10) // Index 10 corresponds to the value 3 === 4 which is false

// 8. Pick a BigInt
const imBigInt = pick(5) // Index 5 corresponds to the BigInt value 10000000n

// 9. Pick undefined
const imUndefined = pick(2) // Index 2 corresponds to the value undefined

// 10. Pick null
const imNull = pick(1) // Index 1 corresponds to the value null

// Do not edit below this line
module.exports = {
  pickMe,
  imTrue,
  aReal,
  aString,
  anArray,
  aNumber,
  anObject,
  imFalse,
  imBigInt,
  imNull,
  imUndefined
}
