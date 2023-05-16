//Chapters 35 TO 38

function foo(){
    var newVar = Date();
    console.log(newVar);
}
foo();

function greetUser() {
    var firstName = prompt("Enter Your First Name");
    var lastName = prompt("Enter Your Last Name");
    var fullName = firstName + lastName;
    alert("Assalam o Alaikum " + fullName);
}

greetUser();

function addNumber() {
    var num1 = +prompt("Enter First Number");
    var num2 = +prompt("Enter Second Number");
    var sumOf = num1 + num2;
    alert("Your Added Value Is " + sumOf);
}

addNumber();

function calculator() {
    var num1 = +prompt("Enter First Number");
    var num2 = +prompt("Enter Second Number");
    var operator = prompt("Enter Your operator");

    if (operator === "+") {
        alert("Your Answer Is " + (num1 + num2));
    } else if (operator === "-") {
        alert("Your Answer Is " + (num1 - num2));
    }else if (operator === "/") {
        alert("Your Answer Is " + (num1 / num2));
    }else if (operator === "x") {
        alert("Your Answer Is " + (num1 * num2));
    }
    else{
        alert("Please Enter Correct Operator");
    }

}

calculator();

function square(number) {
    return number * number;
}

var result = square(12);
console.log(result);

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}
var result = factorial(5)
console.log(result);

function startToEnd() {
    var startNum = +prompt("Enter Starting Number");
    var EndingNum = +prompt("Enter Ending Number");
    var counting = [];
    for (let i = startNum; i <= EndingNum; i++) {
        counting.push(i);
    }
   document.write(counting.join("" + "<br>"))
}

startToEnd();

function calculateHypotenuse(base, perpendicular) {

    function calculateSquare(number) {
        return number * number
    }

    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);

    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);

    return hypotenuse;
}

var results = calculateHypotenuse(3, 4);
console.log(results);

function calculateHypotenuse() {
    var base = +prompt("Enter Your Base For Solving");
    var perpendicular = +prompt("Enter Your Perpendicular For Solving");

    function calculateSquare(number) {
        return number * number;
    }

    var baseSquare = calculateSquare(base);
    var perpendicular = calculateSquare(perpendicular);

    var hypotenuseSquare = baseSquare + perpendicular;
    var hypotenuse = Math.sqrt(hypotenuseSquare);

    return hypotenuse;

}

var results = calculateHypotenuse();
console.log(results);

//Area For Rectangle Area

function calculateArea(width, height) {
    var area = width * height;
    return area;
}

var MyWidth = +prompt("Enter Your Width");
var MyHeight = +prompt("Enter Your Height");
var result = calculateArea(MyWidth, MyHeight);
alert("Your Value Is " + result);

function palindrome(str) {

    var formattedStr = str.toLocaleLowerCase().replace(/[^a-z0-9]/g, '');

    var reversedStr = formattedStr.split("").reverse("").join("");

    if (formattedStr === reversedStr) {
        alert("Your Character Is Palindrome");
        return true;
    } else {
        alert("Your Character Is Not Palindrome")
        return false;
    }
}

var string = prompt("Enter The Full Name That Is Palindrome");
var result = palindrome(string);
console.log(result);

function capitalizeFirstLetter(str) {

    const words = str.split(' ');
    const capitalizedWords = words.map(word => {
        const firstLetter = word.charAt(0).toUpperCase();
        const restOfWord = word.slice(1);
        return firstLetter + restOfWord;
    });
    const capitalizedString = capitalizedWords.join(' ');
    return capitalizedString;
}

const capitalize = 'the quick brown fox';
const output = capitalizeFirstLetter(capitalize);
console.log(output);

function findLongestWord(str) {
    var words = str.split(" ");

    var longestWord = "";
    var maxLength = 0;

    for (var i = 0; i < words.length; i++) {
        var currentWord = words[i];
        if (currentWord.length > maxLength) {
            maxLength = currentWord.length;
            longestWord = currentWord;
        }
    }
    return longestWord;
}

var inputString = 'Web Development Tutorial';
var longestWord = findLongestWord(inputString);
document.write(longestWord);

function findLongestWord(str) {
    var words = str.split(" ");

    var longestWord = "";
    var maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        var currentWord = words[i];
        if (currentWord.length > maxLength) {
            maxLength = currentWord.length;
            longestWord = currentWord;
        }

    }
    return longestWord;
}
var charString = prompt("Enter Your Longest Character");
var longestChar = findLongestWord(charString);
document.write(longestChar);

function countLetter(string, letter) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === letter) {
            count++;
        }
    }
    return count;
}
var CountLetter = countLetter("JSResourceS.com", "o");
document.write(CountLetter);

function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    console.log("Your Value Is " + circumference.toFixed(2));
}

function calArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    console.log("The Area Is " + area.toFixed(2));
}

calcCircumference(5);
calArea(5);