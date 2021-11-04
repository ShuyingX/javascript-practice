// Make two variables called first and last,
// then log them out together as your name.

// 1. Mkae first variable
let first = "Lilly";

// 2. Make last variable
let last = "Xu";

// 3. Log them out, but there needs a space between
console.log(first + " " + last);

// Log that same thing out,
// whenever a person clicks a button on the page

// Make a variable for the button (GET)
var button = document.querySelector(".thisone"); //example of a special button (check html button)
// document has the same property as console,
// querySelector can go to find the first same CSS finder in the document

// Define a function
function logName() {
  console.log(first + " " + last);
}

// Whenever someone clicks the button,
// add a paragraph to the page that has your name
function appendName() {
  // Create p element
  let p = document.createElement("p");
  // Put text inside the p element
  p.innerText = first + " " + last;
  // Append the p element as a child of the page's body
  document.body.appendChild(p); // Adding the paragraph to the body
  //access body by calling document.body
}

// Attach function to click on button
button.addEventListener("click", appendName);

//Make an array of your three favorite hobbies
let hobbies = ["Shopping", "Skateboarding", "Napping"];

let ul = document.createElement("ul");

//Loop through the array and log each item using console.log()
for (let i = 0; i < hobbies.length; i++) {
  let li = document.createElement("li");
  li.innerText = hobbies[i];
  ul.appendChild(li);
}

document.body.appendChild(ul);

// hobbies.forEach((hobby) => {
//   //another way to do the for loop
//   console.log(hobby);
// });
