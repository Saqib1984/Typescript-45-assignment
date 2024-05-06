import chalk from "chalk";

// Exercise 1.

// Install Node.js, TypeScript and VS Code on your computer
// Installed.

// Exercise 2.

// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let personname : string = "Hamza"

// Print a message to that person

console.log("Hello",personname,"would you like to take coffee with me?");

// Exercise 3.

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// Store a person’s name in a variable

let Name : string = "Saqib samar"

//  Print a person’s name in lowercase

console.log("Lowercase :", Name.toLowerCase())

//  Print a person’s name in uppercase

console.log("Uppercase :", Name.toUpperCase())

//  Print a person’s name in titlecase

console.log("Titlecase :", Name.replace(/\b\w/g, (char) => char.toUpperCase()))

// Exercise 4.

// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”



// Famous Quote including the quotation marks

console.log("Quad e Azam M Ali Jinah once said,\"Think a hundred times before you take a decision, but once that decision is taken, stand by it as one man.\"");

// Exercise 5.

// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

// store the famous person’s name in a variable called famous_person

let famous_person : string = "Quad e Azam M Ali Jinnah"

// Compose a message and store it in a new variable called message.

let message : string = "once said, \"Think a hundred times before you take a decision, but once that decision is taken, stand by it as one man.\""

console.log(famous_person, message)

// Exercise 6.

// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.



// Store a person’s name, and include some whitespace characters at the beginning and end of the name

let personName : string = "\n\t Saqib Samar Siddiqui \t\n"

// Print a message with whitespace

console.log(personName)

// Print a message without whitespace

console.log(personName.trim())

// Exercise 7.

// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// Write addition, subtraction, multiplication, and division operations that each result in the number 8

// Addition

console.log(5 + 3)

// Subtraction

console.log(11 - 3)

// Multiplication

console.log(4 * 2)

// Devision

console.log(16 / 2)

// EXERCISE 8

// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.

console.log("." .repeat(58));
console.log(5 + 3);
 
console.log("." .repeat(58));
console.log(11 - 3);
 
console.log("." .repeat(58));
console.log(4 * 2);

console.log("." .repeat(58));
console.log(16 / 2)

// Exercise 9.

// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let fav_number : number = 7
 console.log(`My faverate number is`, fav_number)

 // Exercise 10.

 // Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// Adding Comments

// Store a person’s name in a variable 

let pName : string = "Hamza ali"

// Print a message to that person

console.log("Hello",pName,"would you like to take coffee with me?")


//  Print a person’s name in lowercase

console.log("Lowercase :", pName.toLowerCase())

//  Print a person’s name in uppercase

console.log("Uppercase :", pName.toUpperCase())

//  Print a person’s name in titlecase

console.log("Titlecase :", pName.replace(/\b\w/g, (char) => char.toUpperCase()))

// Exercise 11.

// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

// Store the names of a few of your friends in a array called names

let friends_name = ["Ali", "Hamza", "Khawar", "Imran"]

// . Print each person’s name by accessing each element in the list, one at a time.

friends_name.forEach(friend => console.log(friend))

// Exercise 12.

// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.


// . Print each person’s name and message (The text of each message should be the same)

friends_name.forEach(friend => console.log(`Hello ${friend}, hope you are doing well.`))

// Now above statement through for loop

let new_friends_name = ["Ali", "Hamza", "Khawar", "Imran"]

for(let i = 0; i < new_friends_name.length; i++){
    console.log(`Hello ${new_friends_name[i]}, hope you are doing well.`);
}

// Exercise 13.

// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// assignment no 13

let transportationVehicle = ["Honda 125 Bike", "Toyota Corolla", "Honda Civic" ]

transportationVehicle.forEach(transport_vehicle => console.log(`I would like to own a ${transport_vehicle}.`))

// through for loop

for(let i = 0; i < transportationVehicle.length; i++){
    console.log(`I would like to own a ${transportationVehicle[i]}.`);
}

// Exercise 14.

// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// Guest List 

let guest_list = ["Ali Raza", "Safi Ullah", "Owais Ishrat", "Zia ul Hassan"]

guest_list.forEach(guest => console.log(`Hello ${guest}, today would you like to take dinner with me?`))

// Exercise 15.

// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

/* • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */

// Changing Guest

// one guest not available for dinner

let guest_not_available = guest_list[2]

// print guest who is not coming

console.log(guest_not_available, "not come in dinner")

// replacing the name of the guest who can’t make it with the name of the new person

guest_list.splice(2, 1, "Usama Khalid")

//  Print a second set of invitation messages, one for each person who is stil

guest_list.forEach(new_guest_list => console.log(`Hello ${new_guest_list}, would you like take dinner with us on sunday`))

// Exercise 16.

/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/

// Changing Guest

let guestList = ["Ali Raza", "Safi Ullah", "Owais Ishrat", "Zia ul Hassan"]

// one guest not available for dinner

let guestNotAvailable = guestList[2]

// print guest who is not coming

console.log(guestNotAvailable, "not come in dinner")

// replacing the name of the guest who can’t make it with the name of the new person

guestList.splice(2, 1, "Usama Khalid")

console.log("I found a bigger table for dinner that is why i am arranging to big party")

guestList.unshift("Kabeer Khan")

guestList.push("Saeed Ahmed")

let middleGuest : number = Math.floor(guestList.length / 2)

guestList.splice(middleGuest, 0, "Hamza Abbasi")

console.log("Updated guest list for dinner party")

guestList.forEach(newGuestInvited => console.log(`Hello ${newGuestInvited}, would you like to take dinner with us on sunday`))

// Exercise 17.

/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

console.log("Unfortunately our new big table for dinner won’t arrive in time for the dinner, and we have space for only two guests.")

while (guestList.length > 2) {
    let removeList = guestList.pop()
    console.log(`Sorry ${removeList}, you are not invite for dinner party due to not arrangment of enough place`)
}
console.log("still you are invited in dinner party")
guestList.forEach(finalList => console.log(`luckily ${finalList}, still you are invited for dinner party on sunday`))

// remove last two guest and print empty list 
guestList.pop()
guestList.pop()

console.log(`empty list [], ${guestList}`)

// Exercise 18.

/* Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/

// Seeing the World: Think of at least five places in the world would like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.


let worldPlaces : string[] = ["Makkah", "Madina", "Karachi", "Kashmir", "Ghaza", "Hunza"];

// Print the array in its original order.

console.log("Original Order.", worldPlaces);

// Print the array in alphabetical order without modifying the actual list.

console.log("Alphabatical Order.", worldPlaces.slice().sort());

// Show that the array is still in its original order by printing it.

console.log("Original Order.", worldPlaces);

// Print  array in reverse alphabetical order without changing the order of the original list.

console.log("Reversed Order.", worldPlaces.slice().reverse());

// Show that array is still in its original order by printing it again

console.log("Original Order.", worldPlaces);

// Reverse the order of your list. Print the array to show that its order has changed.

worldPlaces.reverse();
console.log("Reversed Order.", worldPlaces)

// Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log("Original Order", worldPlaces.reverse());
console.log("Original Order", worldPlaces)

// Sort the array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

worldPlaces.sort();
console.log("Sort Order", worldPlaces)

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
worldPlaces.reverse()
console.log("Changed or Updated Order",worldPlaces)

// Exercise 19.

// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

// Print the array in its original order.

console.log("Original Order.", guestList);

// Print the array in alphabetical order without modifying the actual list.

console.log("Alphabatical Order.", guestList.slice().sort());

// Show that the array is still in its original order by printing it.

console.log("Original Order.", guestList);

// Print  array in reverse alphabetical order without changing the order of the original list.

console.log("Reversed Order.", guestList.slice().reverse());

// Show that array is still in its original order by printing it again

console.log("Original Order.", guestList);

// Reverse the order of your list. Print the array to show that its order has changed.

guestList.reverse();
console.log("Reversed Order.", guestList)

// Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log("Original Order", guestList.reverse());
console.log("Original Order", guestList)

// Sort the array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

guestList.sort();
console.log("Sort Order", guestList)

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
guestList.reverse()
console.log("Changed or Updated Order",guestList)

// Exercise 20.

// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let languages: string[] =["Arabic", "Urdu", "English", "Chineese", "French", "Japnese", "Turkish", "Sindhi"]

languages.forEach(language => {console.log(language);});

// Exercise 21.

// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let objectHomeApplication: {[key: string]: any} ={
    "split":{
        name: "split",
        price: "100000",
        description: "split is a good choice for your home",
     },
     "ledtv":{
        name: "ledTv",
        price: "70000",
        description: "led tv is a good choice for your home",
     },
     "furniture":{
        name: "furniture",
        price: "200000",
        description: "furniture is a good choice for your home",
     },
}
console.log(objectHomeApplication)

// Exercise 22.

// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// Original

let withoutIntError : string[]= ["Vermicelli", "Milk", "Sugar"];
console.log(withoutIntError);
console.log(withoutIntError[1]);

// Intentional Error

// let intnError : number[]= ["Vermicelli", "Milk", "Sugar"];
// console.log(intnError);

// After correction of error

let afterCorrIntnError : string[]= ["Vermicelli", "Milk", "Sugar"];
console.log(afterCorrIntnError);

// Exercise 23.

// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// Test No 1.

let eid = "10th Apr 2024";

console.log("is eid == '10th Apr 2023'? I pridict False.");

console.log(eid == "10th Apr 2023");

// Test No 2.

console.log("is eid == '10th Apr'? I pridict False.");

console.log(eid == "10th Apr");

// Test No 3.

console.log("is eid === '10th Apr'? I pridict False.");
console.log(eid === "10th Apr");

// Test No 4.

console.log("is eid !== '10th Apr 2024'? I pridict False.");
console.log(eid !== "10th Apr 2024");

// Test No 5.

console.log("is eid.lenght > 15? I pridict False.");

console.log(eid.length > 15);

// Test No 6.

console.log("is eid.lenght < 15? I pridict True.");

console.log(eid.length < 15);

// Test No 7.

console.log("is eid.toUpperCase() !== '10th Apr 2024'? I pridict True.");

console.log(eid.toUpperCase() !== '10th Apr 2024');

// Test No 8.

console.log("Is eid.includes('h')? I predict True.");

console.log(eid.includes('h'));

// Test No 9.

console.log("Is eid.starWith(10)? I predict True.")

console.log(eid.startsWith('10'));

// Test No 10.

console.log("Is eid.endsWith('2024)? I predict True.")

console.log(eid.endsWith('2024'));

// Exercise 24.

/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/

// 1- string equility and inequility
let myName : string = "Saqib Samar"
// true
if (myName == "Saqib Samar") {
    console.log(chalk.green.bold("1-True"))
}else {
    console.log(chalk.red.bold("1-False"))
}

// false
if (myName == "SaqibSamar") {
    console.log(chalk.green.bold("1-True"))
}else {
    console.log(chalk.red.bold("1-False"))
}
// 2- Lowercase Function
// true

if(myName.toLowerCase()== "saqib samar"){
    console.log(chalk.green.bold("2-True"))
}else{
    console.log(chalk.red.bold("2-False"))
}
// false

if(myName.toLowerCase()== "Saqib Samar"){
    console.log(chalk.green.bold("2-True"))
}else{
    console.log(chalk.red.bold("2-False"))
}
// 3- Numerical Comperision

let x = 10
let y = 20
let z = 30

// 3-i less then and greater then

// true

if (y > x){
    console.log(chalk.green.bold("3-i- True"))
}else{
    console.log(chalk.red.bold("3-i- False"))
}
// false

if (y < x){
    console.log(chalk.green.bold("3-i- True"))
}else{
    console.log(chalk.red.bold("3-i- False"))
}

// 3-ii less then or equal and greater then or equal

// true

if (y >= x){
    console.log(chalk.green.bold("3-ii- True"))
}else{
    console.log(chalk.red.bold("3-ii- False"))
}
// false

if (y <= x){
    console.log(chalk.green.bold("3-ii- True"))
}else{
    console.log(chalk.red.bold("3-ii- False"))
}
// 4- Logical Opt "and"

// true

if (y > x && y < z){
    console.log(chalk.green.bold("4-i- True"))
}else{
    console.log(chalk.red.bold("4-i- False"))
}
// false

if (y < x && y > z){
    console.log(chalk.green.bold("4-i- True"))
}else{
    console.log(chalk.red.bold("4-i- False"))
}
// 4- Logical Opt "or"

// true

if (y > x || y > z){
    console.log(chalk.green.bold("4-ii- True"))
}else{
    console.log(chalk.red.bold("4-ii- False"))
}
// false

if (y < x || y > z){
    console.log(chalk.green.bold("4-ii- True"))
}else{
    console.log(chalk.red.bold("4-ii- False"))
}

// 5- check item in array

let friendsName : string[] = ["Ali Raza", "Saeed Ahmed", "Khawar Khan"]

// True

if(friendsName[1]== "Saeed Ahmed"){
    console.log(chalk.green.bold("5- True"))
}else{
    console.log(chalk.red.bold("5- False"))
}
// false

if(friendsName[1]== "Ali Raza"){
    console.log(chalk.green.bold("5- True"))
}else{
    console.log(chalk.red.bold("5- False"))
}

// 6- check item not in array

// True

if(friendsName[2]!== "Ali Raza"){
    console.log(chalk.green.bold("6- True"))
}else{
    console.log(chalk.red.bold("6- False"))
}
// false

if((friendsName[2]!== "Khawar Khan")){
    console.log(chalk.green.bold("6- True"))
}else{
    console.log(chalk.red.bold("6- False"))
}

// Exercise 25.

let alien_color :string = "green"

// Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.


if (alien_color === "green") {
    console.log("Player just earned 5 points.")
}

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)


if (alien_color === "red") {
    console.log("Player just earned 5 points.")
}

// Exercise 26.

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.



if (alien_color === "green") {
    console.log("player just earned 5 points for shooting the alien.")
}else {
    console.log("You just earned 10 points")
}

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.



if (alien_color === "red") {
    console.log("player just earned 5 points for shooting the alien.")
}else {
    console.log("You just earned 10 points")
}

// Exercise 27.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.


// • If the alien is green, print a message that the player earned 5 points.


if (alien_color === "green") {
    console.log("You just earned 5 points for shooting the green alien.");

// • If the alien is yellow, print a message that the player earned 10 points.
    
} else if (alien_color === "yellow") {
    console.log("You just earned 10 points for shooting the yellow alien.");
}
// • If the alien is red, print a message that the player earned 15 points.

else {
    console.log("You just earned 15 points for shooting the red alien.");
}

let alien_color1: string = "yellow";

// • If the alien is green, print a message that the player earned 5 points.


if (alien_color1 === "green") {
    console.log("You just earned 5 points for shooting the green alien.");

// • If the alien is yellow, print a message that the player earned 10 points.
    
} else if (alien_color1 === "yellow") {
    console.log("You just earned 10 points for shooting the yellow alien.");
}
// • If the alien is red, print a message that the player earned 15 points.

else {
    console.log("You just earned 15 points for shooting the red alien.");
}


let alien_color2: string = "red";

// • If the alien is green, print a message that the player earned 5 points.


if (alien_color2 === "green") {
    console.log("You just earned 5 points for shooting the green alien.");

// • If the alien is yellow, print a message that the player earned 10 points.
    
} else if (alien_color2 === "yellow") {
    console.log("You just earned 10 points for shooting the yellow alien.");
}
// • If the alien is red, print a message that the player earned 15 points.

else {
    console.log("You just earned 15 points for shooting the red alien.");
}

// Exercise 28.

// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

// • If the person is less than 2 years old, print a message that the person is a baby.

let age: number = 2;

if (age < 2) {
    console.log("The person is a baby.");
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} 
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} 
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
// • If the person is age 65 or older, print a message that the person is an elder.

else {
    console.log("The person is an elder.");
}

// Exercise 29.

/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

let favorite_fruits: string[] = ["mango", "peach", "cherry"];

if (favorite_fruits.includes("mango")) {
    console.log("You really like mangos");
}

if (favorite_fruits.includes("peach")) {
    console.log("You really like peaches");
}

if (favorite_fruits.includes("cherry")) {
    console.log("You really like cherry");
}

if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}

if (favorite_fruits.includes("kiwi")) {
    console.log("You really like kiwis!");
}

// Exercise 30.

/* Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/

let usernames: string[] = ["Saqib", "Khawar", "Qasim", "admin", "Zia"];



    for (let username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }

// Exercise 31.

/* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/

function grUsers(usernames: string[]): void {
if (usernames.length === 0) {
    console.log("We need to find some users!")
    return;
}

    for (let username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
grUsers(usernames);

// Remove all usernames
usernames = [];

// Call the function again with an empty array
grUsers(usernames)

// EXERCISE 32

/* Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
 • Make a list of five or more usernames called current_users.
 • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
 • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
 • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

let currentUsers : string [] = ["Ali","Saqib","admin","Hamza","Khawar"];
let newUsers : string [] = ["Ali","Khawar","admin","Tariq","Owais"];
let currentUsers_lower : string [] =  currentUsers.map(user => user.toLocaleLowerCase());

for (let newUser of newUsers){
    if (currentUsers_lower.includes(newUser.toLocaleLowerCase())){
        console.log(`Sorry ${newUser}, that name is taken`);
    } else {
        console.log(`Yes ${newUser}, is still in available list`);
    }
}



// EXERCISE 33

/* Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
 • Store the numbers 1 through 9 in a array.
 • Loop through the array.
 • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/

let numbersAll : number [] = [1,2,3,4,5,6,7,8,9];

for (let number of numbersAll){
    
    if (number === 1) {
        console.log(`${number}st`);

    } else if (number === 2){
        console.log(`${number}nd`);

    } else if (number === 3){
        console.log(`${number}rd`);

    } else {
        console.log(`${number}th`);
    }
}


// EXERCISE 34

/* Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
 • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
 • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/

let favPizza : string [] = ["BBQ Chicken","Pepperoni","Vegetable","Pesto Chicken"];

for(let pizza of favPizza ){
    console.log(pizza);
}

for(let pizza of favPizza ){
    console.log(`I really love ${pizza} pizza`);
}
console.log("\n I love large fajita pizza!");




// EXERCISE 35

// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

// Define a list of animals

let animals_pet: string[] = ["Dog", "Cat", "Cow", "Horse"];

// Print each animal

console.log("List of animals:");
for (let i = 0; i < animals_pet.length; i++) {
  console.log(animals_pet[i]);
}

// Print statement about each animal

console.log("Statements about each animal:");

for (let animal of animals_pet) {
  switch (animal) {
    case "Dog":
      console.log("A dog would make a great pet.");
      break;
    case "Cat":
      console.log("Cats are known for their graceful movements");
      break;
    case "Cow":
      console.log("Cows provides us milk.");
      break;
    case "Horse":
      console.log("Horses are magnificent animals known for their strength and beauty.");
      break;

    default:
      console.log("This animal is not in array.");
  }
}

// Print common characteristic
console.log("Any of these animals would make a great pet! but i prefare to Cat because i can have inside my home");

// EXERCISE 36

// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


function make_shirt(size:string, message:string) {
    console.log(`you ordered a ${size} T-shirt with message ${message}`);
}

make_shirt("large", "Just Do It!");
make_shirt("medium", "PEECHAY TO DEKHO.");
make_shirt("small", "Let's Play in Style!");


// EXERCISE 37

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shiirt(size:string = 'large', message:string = 'i love typescript!.') {
    console.log(`you ordered a ${size} T-shirt with message ${message}`);
}

make_shiirt();
make_shiirt("medium");
// DIFFERENT MESSAGE
make_shiirt("small" ,"Let's Play in Style!");



// EXERCISE 38

// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function  describe_city( city: string, country: string = 'pakistan')  {
    console.log(`${city} , is in ${country}`);
}
// default sentence
describe_city("Karachi"); 
describe_city("Hunza"); 
describe_city("Mumbai", "India"); 


// EXERCISE 39

/* City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
 "Lahore, Pakistan"
 Call your function with at least three city-country pairs, and print the value that’s returned.*/

function city_country(city: string , country: string) : string {
    return (`${city} , ${country}`)
}

let country1 = city_country('Madina', 'Saudia Arabia');
let country2 = city_country('New Yark', 'USA');
let country3 = city_country('Karachi', 'Pakistan');

console.log(country1);
console.log(country2);
console.log(country3);



// EXERCISE 40

// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artist: string , title: string): {artist: string , title: string} {
    let dictionaries = {
        artist: artist.charAt(0).toLocaleUpperCase() + artist.slice(1),
        title: title.charAt(0).toLocaleUpperCase() + title.slice(1)    
    };
    return dictionaries;
}
let album1 = make_album("Saqib","Green");
console.log(album1);

let album2 = make_album("Khawar" , "Red");
console.log(album2);

let album3 = make_album("Zia","White");
console.log(album1);
console.log(album2);
console.log(album3);



// EXERCISE 41

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians_4(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician.charAt(0).toLocaleUpperCase() + magician.slice(1));
   }
}
let magician : string[] = ["Khawar", "Safi", "Owais","Kabeer"];
show_magicians_4(magician);


// EXERCISE 42

// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function make_great1( magician: string[]) {
    for(let i = 0; i < magician.length; i++) {
        magician[i] =   magician[i] + ' you are The Great '
    }                          
}
let magician1: string[] = ["Khawar", "Safi", "Owais","Kabeer"];
function show_magician (magician : string[]) {
    console.log(magician);
}

make_great1(magician);
show_magician(magician1);

// EXERCISE 43

// // Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function make_great( magicians: string[]) : string[] {
    let greatMagicians :string[] = [];
    for(let i = 0; i < magicians.length; i++) {
    greatMagicians.push( magicians[i]  +  '  The Great');
    }  
    return greatMagicians;                        
}
let magicians : string[] = ["Khawar", "Safi", "Owais","Kabeer"];
let greatMagicians : string[] = make_great(magicians);
function show_magicians(magicians:string[]){
    console.log(magicians);
}
show_magicians(magicians);
show_magicians(greatMagicians);



// EXERCISE 44


// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwich(...items : string[]) {
    console.log("sandwich summary:");
    for (let i = 0; i < items.length; i++){
        console.log(items[i])
    }
}
sandwich ();
sandwich ('onion','chili sauas','green chili', 'ketchup');
sandwich ('chili sauas','mayo garlic','black peeper','chicken');




// EXERCISE 45

//Cars: Write a function that stores information about a car in a Object. The function should always receive a amanufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

type car = {
    manufacture : string,
    model : string,
    [key : string] : any;
}
function createcar(manufacture : string, model : string, optional : Record<string,any>) : car{
    return{
        manufacture,
        model,
        ...optional
    }
}
let mycar : car = createcar("Nissan","Suzuki",{ color : "White" , year : "2022"});
console.log(mycar);
















