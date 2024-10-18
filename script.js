let js = "amazing";
console.log(55 + 10);

// values and variables
console.log("jonas");
console.log(34);

let firstName = "Matlida";
console.log(firstName);

// variable names must be create letters , underscores or the dollar sign

let last_Name = "khan";

// reserved key words means already define in javascript

// let new = 6;

let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";
console.log(myFirstJob);

let country = "Pakistan";
console.log(typeof country);

let continent = "Asia";
console.log(typeof continent);

let population = 235.8
console.log(typeof population)


// Data Types in Javascript 

// There are 7 datatypes

//  1. Number: Floating point numbers 👉 Used for decimal and numbers  let age = 23;
//  2. String: Squence of Characters 👉 Used for text let firstName = "jonas";
//  3. Boolean: Logical type that can be true or false 👉 Used for taking decisions let fullAge = true;
//  4 undefined: Value taken by a Variable that is not yet define (empty value) like this let children;
//  5 Null: Also means Empty Value
//  6 Symbol (Es2015): Value that a unique and cannot be changed [Not useful for now]
//  7 Bigint (Es2020): Larger integers than the number type can hold


// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof "javascript");
// javascriptIsFun = "yes!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// let isIsland = "Canada";
// isIsland = true;
// console.log(typeof isIsland)
// let language;
// console.log(typeof language);

// let isFelling = true;
// console.log("he is speaking truth");

//     let age = 30;
//     age = 31;

//     const birthYear = 2005;

//     const language = "English";

//    var  job = "programmer";
//    job = "teacher";


//    lastName = "schemdman";
//    console.log(lastName);


//   Operators is js 
// Math Operators
// const now = 2024
// const ageHamza = now - 2005
// const ageSarah = now - 2007
// console.log(ageHamza, ageSarah);
// console.log(ageHamza * 2, ageHamza / 10, 2 ** 3)


// const myFirstName = "Hamza";
// const myLastName = "Khan";
// console.log(myFirstName + ' ' + myLastName);

// Assignment Operators

// For example …

// x = 7   # assigns the value, 7, to x
// x += 4  # adds 4 to 7, and assigns the result, 11, to x

let x = 10 + 5;
x += 10;
x *= 4;
// x /= 2;
x++;    // x = x + 1
x--;    // x = x - 1
x--;
console.log(x);

// Comparison Operators

//  Less than (<) — returns true if the value on the left is less than the value on the right, otherwise it returns false.
// Greater than (>) — returns true if the value on the left is greater than the value on the right, otherwise it returns false.
// Less than or equal to (<=) — returns true if the value on the left is less than or equal to the value on the right, otherwise it returns false.
// Greater than or equal to (>=) — returns true if the value on the left is greater than or equal to the value on the right, otherwise it returns false.
// Equal to (===) — returns true if the value on the left is equal to the value on the right, otherwise it returns false.
// Not equal to (!==) — returns true if the value on the left is not equal to the value on the right, otherwise it returns false.

// console.log(ageHamza > ageSarah);
// console.log(ageSarah >= 18)

 
  const  now = 2037;
  const ageJonas = now - 1991;
  const ageSarah = now - 2018;
  console.log(ageJonas,ageSarah);

  console.log(now - 1991 > now - 2018);

  
  const ageAverage = ageJonas + ageSarah / 2
  console.log(ageSarah,ageJonas,ageAverage);

//   Template Literals 

   const myFirstName = "Hamza";
   const myjob = "Programmer";
   const birthYear = 2005;
   const year = 2024;

   console.log("I'm " + myFirstName + ", a " + (year-birthYear) + " Years old " + myjob );

   console.log( `I'm ${myFirstName} , a ${year-birthYear} Years old ${myjob} `);

   const str = " I'm \n\ a \n\ Programmer \n\  ";
   console.log(str);

   const str2 = `iam
   a 
   programmer
   and my
   job is 
   current
   `



















