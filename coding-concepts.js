// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Alpha 2022"
// console.log(cohort.split(""))

// a) Your answer: ['A', 'l', 'p', 'h', 'a', ' ', '2', '0', '2', '2']

// b) Verify and explain: Correct - The built-in method .split() divides a string into an ordered list of substrings (individual characters). These substrings are put into an array and returns it as an array.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))


// a) Your answer: Undefined
// b) Verify and explain: Correct - This is an incomplete function. It's missing the "Return" block which is the output of a function. Without a Return, a function will log Undefined.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
//  console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: Correct - .map() will do something to each item in an array and return an array of the same length. For this case, each value is multiplied  by 2.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain:Correct - .filter() will make a decision about each item in an array and return a subset based on the criteria given. For this case, only ODD numbers are returned in the array.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: Correct - the concept of Object Destructuring was used and it allows you to take something like an array or an object and unpack their values into individual variables. When destructuring an object you are essentially taking the properties of an object and breaking them out into individual, recallable variables. Breakdown: myCodingSkills into languuages, into [0] Javascript. 


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Alpha",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: {student: 'George', cohort: 'Alpha', year: 2022 }
// b) Verify and explain:Correct - Classes are a particular type of function that contain data and behavior which make it the blueprint for an object. When an object is being created from this blueprint, we are giving it an argument that "George" will be assigned to the student property. The constructor method was used for creating and initializing the obejct of that particular class.
