//================================================================
// Destructuring Array
//================================================================

// const fruits = ['apple', 'banana', 'orange'];

// const [fruit1, fruit2, fruit3] = fruits;

// console.log(fruit1); // output: 'apple'
// console.log(fruit2); // output: 'banana'
// console.log(fruit3); // output: 'orange'

//================================================================
// Destructuring Object
//================================================================

// const person = {
//     name: 'John Doe',
//     age: 30,
//     city: 'New York'
//   };
  
//   const { name, age, city } = person;
  
//   console.log(name); // output: 'John Doe'
//   console.log(age); // output: 30
//   console.log(city); // output: 'New York'

//================================================================
// Destructuring dengan Mengambil Sebagian Item
//================================================================

// const fruits = ['apple', 'banana', 'orange', 'mango'];

// const [fruit1, , fruit3] = fruits;

// console.log(fruit1); // output: 'apple'
// console.log(fruit3); // output: 'orange'

//================================================================
// Destructuring dengan Menggunakan Default Value
//================================================================

// const person = {
//     name: 'John Doe',
//     age: 30
//   };
  
//   const { name, age, city = 'New York' } = person;
  
//   console.log(name); // output: 'John Doe'
//   console.log(age); // output: 30
//   console.log(city); // output: 'New York'
//================================================================
// Destructuring dengan Menggunakan Rest Operator
//================================================================

// const fruits = ['apple', 'banana', 'orange', 'mango'];

// const [fruit1, ...restFruits] = fruits;

// console.log(fruit1); // output: 'apple'
// console.log(restFruits); // output: ['banana', 'orange', 'mango']

//================================================================
