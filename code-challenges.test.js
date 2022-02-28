// ASSESSMENT 2: Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

describe('mult3', () => {
    it('take in an array of numbers and returns an array with all the numbers multiplied by 3', () => {
        const numbersArray1 = [6, 7, 8, 9, 10]
        // Expected output: [18, 21, 24, 27, 30]
        const numbersArray2 = [24, 27, 30, 33, 36]
        // Expected output: [72, 81, 90, 99, 108]

        expect(mult3(numbersArray1)).toEqual([18, 21, 24, 27, 30])
        expect(mult3(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
})
// Good Failure

// PSEUDO CODE:
// create a function named mult3
// mult3 will take in a parameter of an array named array
// will iterate through that array and return a new array with each element multiplied by three
// will then return that new array

// b) Create the function that makes the test pass.

// will iterate through that array and return a new array with each element multiplied by three
 const mult3 = array => array.map(value => value * 3)

// Test Passed


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

//const num1 = 15
// Expected output: "15 is divisible by three"
//const num2 = 0
// Expected output: "0 is divisible by three"
//const num3 = -7
// Expected output: "-7 is not divisible by three"

describe('divisibleBy3', () => {
    it('take a number as an argument and decides if the number is evenly divisible by three or not', () => {
        const num1 = 15
        // Expected output: "15 is divisible by three"
        const num2 = 0
        // Expected output: "0 is divisible by three"
        const num3 = -7
        // Expected output: "-7 is not divisible by three"

        expect(divisibleBy3(num1)).toEqual("15 is divisible by three")
        expect(divisibleBy3(num2)).toEqual("0 is divisible by three")
        expect(divisibleBy3(num3)).toEqual("-7 is not divisible by three")
    })
})

// Good failure

// PSEUDO CODE for a & b:
// create a function named divisibleBy3
// divisibleBy3 will have a parameter of number - which will be a number
// will check if that number is divisible by three or not
// will return a string with the number with the remarks "is divisble by three", " is not divisible by three"



// b) Create the function that makes the test pass.

// will check if that number is divisible by three or not
// will return a string with the number with the remarks "is divisble by three", " is not divisible by three"

const divisibleBy3 = number => number % 3 === 0 ? `${number} is divisible by three` : `${number} is not divisible by three`

// Test Passed


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe('capitalizedWords', () => {
    it('take in an array of words and returns an array with all the words capitalized', () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

        expect(capitalizedWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitalizedWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

// Good failure

// PSEUDO CODE for a & b:
// create a function named capitalizedWords
// capitalizedWords will take in an array of strings named array
// will loop over the array and transform the first letter in the string to uppercase for each element using the buil-in methods toUpperCase and .charAt
// get just the first letter and capitalizing it and then add the rest of the string (except the first letter)
// will then return the new array of capitalized words


// b) Create the function that makes the test pass.



const capitalizedWords = array => array.map(value => value.charAt(0).toUpperCase() + value.slice(1))

// Test passed

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

//const vowelTester1 = "learn"
// Expected output: 1
//const vowelTester2 = "academy"
// Expected output: 0
//const vowelTester3 = "challenges"
// Expected output: 2

describe('indexOfFirstVowel', () => {
    it('take in a string and logs the index of the first vowel', () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2

        expect(indexOfFirstVowel(vowelTester1)).toEqual(1)
        expect(indexOfFirstVowel(vowelTester2)).toEqual(0)
        expect(indexOfFirstVowel(vowelTester3)).toEqual(2)
        
    })
})

// Good failure

// PSEUDO CODE for a & b:
// create a function named indexOfFirstVowel to hold the value for the indexes of the first vowels
// firstIndexOfVowel will take in a string named string
// define what vowels are in the created function
// iterate through each character in the string
// determine if the character is a vowel by converting character to lowercase and comparing with our defined vowels
// this will handle any uppercase letters that may be passed to our function
// find the first occurrence of a vowel and return it

// b) Create the function that makes the test pass.




const indexOfFirstVowel = string => {
    const vowels = 'aeiou'

    return string.split('').findIndex(value => vowels.includes(value.toLowerCase()))
}

// Test passed