// function minus(a, b) {
//   return a - b;
// };

// const result = minus(1, 2);

// const subtract = (a, b) => a - b;

// const square = (a, a) => a * a;

// const getFullName = (firstName, lastName) =>
//   capitalize(firstName) + " " + capitalize(lastName);
// console.log(getFullName("john", "doe"));

// const getFullName = (firstName, lastName) => firstName + " " + lastName;
// const result = getFullName("Ray", "Yong");
// console.log(result);
// firstName = firstName[0].toUpperCase() + firstName.slice(1);
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
const capitalizeWords = (word) => {
  const words = word.split(" ");
  const capitalizeWords = words.map((word) => capitalize(word));
  return capitalizeWords.join("-");
};
console.log(capitalizeWords("united states of america"));
