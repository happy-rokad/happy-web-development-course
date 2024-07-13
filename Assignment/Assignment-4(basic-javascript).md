
# Basic JavaScript

#### Question 1: What is JavaScript. How to use it? 

* javascript is a client side scripting language. 
* javascript is used to manuplate of html.
* javascript is used to dynamic html.

#### Question 2: How many type of Variable in JavaScript? 

* 3 types of variable used in javascript.
1) var - redefine & redeclare variable multiple times... scope is global.
2) let - variable is not declared that's scope is local.
3) const - variable is not redefine & not redeclare.

#### Question 3: Define a Data Types in js?

* 2 types of Data Types:
1) Primitive : It is store single value.
* number, string, boolean, undefine, null, bigInt are primitive data types.
2) Non-Primitive : It is store multiple value.
* object & array are non-primitive data types.

#### Question 4: Write a mul Function Which will Work Properly When invoked With Following Syntax. 

* mul fun is small type of multiplication of values.
* It is concept of nested function to mul() function.

```
function mul(x) {
    return function(y){
        return function(z){
            return x*y*z;
        }
    }
}
console.log(mul(2)(3)(5));
```

#### Question 5:  What the deference between undefined and undeclare in JavaScript?

* Undefine: undefine variable are declared but not give some value.
* Undeclare: undeclared variable are not been declare and define.

#### Question 6: Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another. Using console.log() print out the following quote by Mother Teresa:

* `console.log()` use print any things.
```
console.log(" 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another. ")
``` 

#### Question 7: Check if typeof '10' is exactly equal to 10. If not make it exactly equal?

* It evaluate the type of operand and returns the result as a string.
* typeof check value & types are `==` & `===`.

```
var a = 10;
var b = '10';
console.log(a == b);
console.log(a === b);
```
* `==` is used check value... if `string 10` & `number 10` then return answer is `true`.
* `===` is check value as well as type also.. `string 10` & `number 10` then return answer is `false`.


#### Question 8: Write a JavaScript Program to find the area of a triangle?

* area of triangle formula : 1/2 (b * h)
```
var b = 20;
var h = 10;

var c = 0.5 * 20 * 10;
console.log(c);
```

#### Question 9: Write a JavaScript program to calculate days left until next Christmas?
```
function daysUntilChristmas() {
        // Get the current date
        var today = new Date();

        // Get the current year
        var currentYear = today.getFullYear();

        // Calculate next Christmas
        var nextChristmas = new Date(currentYear, 11, 25); // December is 11 (months are zero-indexed)

        // Check if Christmas has already passed for this year
        if (today.getMonth() == 11 && today.getDate() > 25) {
            nextChristmas.setFullYear(currentYear + 1); // Set to next year
        }

        // Calculate the difference in milliseconds
        var timeDiff = nextChristmas.getTime() - today.getTime();

        // Convert milliseconds to days
        var daysLeft = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));

        return daysLeft;
    }

    // Usage example:
    var daysLeft = daysUntilChristmas();
    console.log("Days left until next Christmas:", daysLeft);
```


#### Question 10: What is Condition Statement?
* condition statement is used to different action based on different condition.
* 3 types of condition statement:
1) if..else 
2) if..else if 
3) switch case

* if : block of code be execute, if specific condition is true.
* else : block of code be execute, if same condition is false.
* else if : specify new condition is test, if the first condition is false.
* switch case: use alternative block of code execute.


#### Question 11: Find circumference of Rectangle formula : C = 4 * a ? 

```
var a = 2;
console.log(4 * a);
```
* `c = 4 * a` formula apply then return answer is `8`.


#### Question 12: WAP to convert years into days and days into years?

* `Years into Days convert` code:
```
    function yearToDay(year) {
        return day = year * 365;
    }
    var days = yearToDay(5);
    console.log(days);
```
* `Days into Year convert` code:
```
    function dayToYear(day) {
        return year = day / 365;
    }
    var Year = dayToYear(1825);
    console.log(Year);
```


#### Question 13: Convert temperature Fahrenheit to Celsius? (Conditional logic Question) 

* fahrenheit to celsius formula 
* c = ( f - 32 ) * 5 / 9 

```
function fahrenToCel(fahren) {
    return (fahren-32)*5/9;
}
var cel = fahrenToCel(7);
console.log(cel);
```
* suppose Fahrenheit value is `7` so output is `-13.88888888888889` - it convert in celsius.


#### Question 14: Write a JavaScript exercise to get the extension of a filename?
```
var filename = "practice.js";
console.log(filename.split('.').pop());
```
* answer : js


#### Question 15: What is the result of the expression (5 > 3 && 2 < 4)?

* it is a logical condition. (AND conition)

```
console.log( 5 > 3 && 2 < 4);
```
* 1st condition will be true & 2nd condition also be true... so both condition true so answer will be `true`.


#### Question 16: What is the result of the expression (true && 1 && "hello")? 

* It is logical condition. (AND condition)

```
console.log(true && 1 && "hello");
```
* answer will be print `hello`.


#### Question 17: What is the result of the expression true && false || false && true?

* It is logical condition. (OR condition)
```
console.log(true && false || false && true);
```
* answer will be `false` because both condition are false.


#### Question 18: What is a Loop and Switch Case in JavaScript define that?
###### Loop:
* loop is repeat block of code number of times & it's execute.
* 3 types of loops used:
1) FOR loop
2) WHILE loop
3) DO..WHILE loop

###### Switch Case :
* It is used different action based on different conditions.
* It value of expression is compare with the value of each case.
* There is match then return block of code value.
* There is not match then return default code block.


#### Question 19: What is the use of is Nan function?
* Nan function is a `Not a Number`.
* value is Nan then return true.
```
var value = 'hello' / 234;
console.log(value);            o/p: Nan
console.log(isNaN(value));     o/p: true
```


#### Question 20: What is the difference between && and || in JavaScript?
* Write method : `(1st condition) && (2nd condition)`
* && : If both condition are true then return answer is true, otherwise return answer is false.

* Write method : `(1st condition) || (2nd condition)`
* || : If any one condition is true then return answer is true, otherwise return answer is false.


#### Question 21: What is the use of Void(0)? 
* `void` is used return value of expression it & return `undefine`.
* `void(0)` is often used in contexts where an expression is required but you want it to have no effect and return `undefined`.
```
<a href="javascript:void(0)">Click me</a>
```

#### Question 22: Check Number Is Positive or Negative in JavaScript?
```
var a = prompt("enter value");
if (a > 0) {
    console.log("positive number");
} else {
    console.log("negative number");
}
```

#### Question 23: Find the Character Is Vowel or Not?
* Vowels : `a`, `e`, `i`, `o`, `u` 
```
var Vowels = prompt("enter alphabate");
if (Vowels === 'a' || Vowels === 'e' || Vowels === 'i' || Vowels === 'o' || Vowels === 'u') {
    console.log("It is Vowel");
} else {
    console.log("It is not Vowel");
}
```

#### Question 24: Write to check whether a number is negative, positive or zero?
```
var a = prompt("enter value");
if (a > 0) {
    console.log("positive number");
} else if (a < 0) {
    console.log("negative number");
} else {
    console.log("zero number");
}
```


#### Question 25: Write to find number is even or odd using ternary operator in JS? 
```
var even = prompt('enter value');
var ans = (even % 2 == 0) ? " This is even number"
    : "This is odd number";
console.log(ans);
```

#### Question 26: Write find maximum number among 3 numbers using ternary operator in JS?
```
var a = prompt("enter 1st value");
var b = prompt("enter 2nd value");
var c = prompt("enter 3rd value");

function maximum(a, b, c) {
    var ans = a > b ? (a > c ? a : c) : (b > c ? b : c);
    console.log(ans);
}
console.log(maximum(a, b, c));
```

#### Question 27: Write to find minimum number among 3 numbers using ternary operator in JS?
```
var a = prompt("enter 1st value");
var b = prompt("enter 2nd value");
var c = prompt("enter 3rd value");

function minimum(a, b, c) {
    var ans = a < b ? (a < c ? a : c) : (b < c ? b : c);
    console.log(ans);
}
console.log(minimum(a, b, c));
```

#### Question 28: Write to find the largest of three numbers in JS?
```
var num1 = prompt("enter 1st value");
var num2 = prompt("enter 2nd value");
var num3 = prompt("enter 3rd value");

let largest;

if (num1 >= num2 && num1 >= num3) {
    largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
} else {
    largest = num3;
}

console.log("the largest num is : " + largest);
```


#### Question 29: Write to show
#### 1: Monday to Sunday using switch case in JS?
```
function dayName(dayNumber) {
        let Day;
        switch (dayNumber) {
            case 1:
                Day = "Monday";
                break;
            case 2:
                Day = "Tuesday";
                break;
            case 3:
                Day = "Wednesday";
                break;
            case 4:
                Day = "Thursday";
                break;
            case 5:
                Day = "Friday";
                break;
            case 6:
                Day = "Saturday";
                break;
            case 7:
                Day = "Sunday";
                break;

            default:
                Day = "Invalid Day Number";
                break;
        }
        return Day;
    }

    console.log(dayName(2));
    console.log(dayName(5));
```
#### 2: Vowel or Consonant using switch case in JS?
```
function vowelToConsonant(char) {
switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("It is Vowel");
        break;

    default:
        console.log("It is Consonant");
        break;
}
}

console.log(vowelToConsonant('i'));
console.log(vowelToConsonant('b'));
```


#### Question 30: What are the looping structures in JavaScript? Any one Example?
* LOOP : It statement used to repeatedly execute a block of code certain number of times.
* 3 types of loop used:
1) for loop
2) while loop
3) do..while loop
* example of FOR loop : print 1 to 5 numbers
```
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

#### Question 31: Write a print 972 to 897 using for loop in JS? 
```
for (var i = 972; i >= 897; i--) {
    console.log(i);
}
```

#### Question 32: Write to print factorial of given number? 
```
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result = result * i;
        }
        return result;
    }
}
var num = prompt("enter any number");
console.log(factorial(num));
```

#### Question 33: Write to print Fibonacci series up to given numbers?



#### Question 34 : Write to print number in reverse order e.g.: number = 64728 ---> reverse =82746 in JS?
```
function reverseNum(num) {
    var reverseStr = num.toString().split('').reverse().join('');
    return reverseStr;
}
let number = reverseNum(64728);
console.log(number);
```

#### Quetion 35: Write a program make a summation of given number (E.g., 1523 Ans: 11) in JS?
```
function sumOfDigits(num) {
    while (num >= 50) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10)
        }
        num = sum;
    }
    return num;
}
let ans = sumOfDigits(1523);
console.log(ans);
```

#### Question 36: Write a program you have to make a summation of first and last Digit. (E.g., 1234 Ans: -5) in JS?
```
function firstAndLast(number) {
    let numString = number.toString();

    let firstDigit = parseInt(numString.charAt(0));
    let lastDigit = parseInt(numString.charAt(numString.length - 1));

    let sum = firstDigit + lastDigit;
    return sum;
}
let ans = firstAndLast(1234);
console.log(ans);
```            

#### Question 37 : Use console.log() and escape characters to print the following pattern in JS?
```
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
```
```
for (let i = 1; i <= 5; i++) {
    console.log(i + ' ' + '1' + ' ' + i + ' ' + (i * i) + ' ' + (i * i * i));
}
```


#### Question 38: Use pattern in console.log in JS?
1) 
```
    1
    1 0
    1 0 1
    1 0 1 0
    1 0 1 0 1
   ```
   ```
   for (let i = 1; i <= 5; i++) {
        let row = ' ';
        for (let j = 1; j <= i; j++) {
            if (j % 2 === 1) {
                row += '1 ';
            } else {
                row += '0 ';
            }
        }
        document.write(row);
        document.write('<br>');
    }
   ```

2) 
```
   A
   B C
   D E F
   G H I J
   K L M N O
   ```
   ```
   let CharCode = 65;
    for (let i = 1; i <= 5; i++) {
        for (j = 1; j <= i; j++) {
            document.write(String.fromCharCode(CharCode) + ' ');
            CharCode++;
        }
        document.write('<br>');
    }
   ```   

3) 
```
    1
    2 3
    4 5 6
    7 8 9 10
    11 12 13 14 15
```   
```
    let num = 1;
    for (let i = 1; i <= 5; i++) {
        for (j = 1; j <= i; j++) {
            document.write(num + ' ');
            num++;
        }
        document.write('<br>');
    }
```


4) 
```
    *
    * *
    * * *
    * * * *
    * * * * *
```   
```
    for (let i = 1; i <= 5; i++) {
        for (j = 1; j <= i; j++) {
            document.write('*' + ' ');
        }
        document.write('<br>');
    }
```

#### Question 39: Accept 3 numbers from user using while loop and check each numbers palindrome?




#### Question 40: Write a JavaScript Program to display the current day and time in the following format. Sample Output: Today is Friday. Current Time is 12 PM: 12 : 22 2 ?
```
function currentDateTime() {
    const weekDay = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturdaty"];

    const now = new Date();

    const dayOfweek = weekDay[now.getDate()];

    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    const minit = now.getMinutes();
    const second = now.getSeconds();
    const millisecond = now.getMilliseconds();

    const currentTimeString = ` Today is ${dayOfweek}. Current time is ${hours} ${ampm}: ${minit} : ${second} : ${millisecond} `;

    return currentTimeString;
}
const dateTime = currentDateTime();
console.log(dateTime);
```


#### Question 41: Write a JavaScript program to get the current date?
```
document.write(Date());
```

#### Question 42: Write a JavaScript program to compare two objects?
```
const a = { fruit: 'apple', fruit: 'mango' }
const b = { fruit: 'apple', fruit: 'mango' }
const c = { fruit: 'apple', fruit: 'banana' }

console.log(a.fruit === b.fruit);      o/p : true
console.log(a.fruit === c.fruit);      o/p : false
```


#### Question 43: Write a JavaScript program to convert an array of objects into CSV string?
```
var std = [
    { name: "happy", age: 25, marks: 90 },
    { name: "krisha", age: 20, marks: 80 },
    { name: "rekha", age: 45, marks: 70 }
];

console.log(std[0].name, std[0].age, std[0].marks);
```


#### Question 44: Write a JavaScript program to capitalize first letter of a string?
```
function capitalLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let string = capitalLetter("hello world");
console.log(string);
```


#### Question 45: Write a JavaScript program to determine if a variable is array?
```
function isArray(variable) {
    return Array.isArray(variable);
}

const arr = [1, 2, 3];
const notArr = "hello";

console.log(isArray(arr));
console.log(isArray(notArr));
```


#### Question 46: Write a JavaScript program to clone an array?
```
numbers = [1, 2, 3];
numberCopy = [...numbers];

numberCopy.push(4);
console.log(numberCopy);
```


#### Question 47: What is the drawback of declaring methods directly in JavaScript objects?
* It creating javascript object, I can put method declaration either in constructor function or prototype.

```
var Dog = function (name) {
    this.Name = name;
    this.Bark = function () {
        alert(this.Name + " bark");
    };
}

var dog = new Dog("Fido");
dog.Bark();
```


#### Question 48: Print the length of the string on the browser console using console.log()?
```
var str = "hello world";
console.log(str.length);
```


#### Question 49: Change all the string characters to capital letters using toUpperCase() method?
```
var str = "hello world";
console.log(str.toUpperCase());
```

#### Question 50: Repeated que 47.

#### Question 51: Write a JavaScript program to get the current date. Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy?
```
function findDate(format) {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();


    const formattedMonth = (month < 10) ? `0${month}` : month;
    const formattedDay = (day < 10) ? `0${day}` : day;

    switch (format) {
        case 'mm-dd-yyyy':
            return `${formattedMonth}-${formattedDay}-${year}`;
        case 'mm/dd/yyyy':
            return `${formattedMonth}/${formattedDay}/${year}`;
        case 'dd-mm-yyyy':
            return `${formattedDay}-${formattedMonth}-${year}`;
        case 'dd/mm/yyyy':
            return `${formattedDay}/${formattedMonth}/${year}`;
        default:
            return 'Invalid format specified';
    }
}

console.log(findDate('mm-dd-yyyy'));
console.log(findDate('mm/dd/yyyy'));
console.log(findDate('dd-mm-yyyy'));
console.log(findDate('dd/mm/yyyy'));
```


#### Question 52: Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript?
```
var sentence = "30 Days of JavaScript";
console.log('position of 1st a : ' + sentence.indexOf('a'));
```


#### Question 53: Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript?
```
var sentence = "30 Days of JavaScript";
console.log('position of last a : ' + sentence.lastIndexOf('a'));
```


#### Question 54: Form Validtion in JS? 
```
<form id="myForm" onsubmit="validateForm()">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    <button type="submit">Submit</button>
</form>
```
```
function validateForm() {
    const username = document.getElementById('username').value.trim();

    if (username.length < 3) {
        alert('username atleast 3 characters');
        return false;
    }

    return true;
}
```


#### Question 55: Form in Email, number, Password, Validation?
```
<form id="myForm" onsubmit="validateForm()">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <br><br>
    <label for="number">Number:</label>
    <input type="number" id="number" name="number" required>
    <br><br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    <br><br>
    <button type="submit">Submit</button>
</form>
```
```
function validateForm() {
    const email = document.getElementById('email').value.trim();
    const number = document.getElementById('number').value.trim();
    const password = document.getElementById('password').value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('invalid email formate');
        return false;
    }

    if (number.length <= 10) {
        alert('enter at least 10 numbers');
        return false;
    }

    if (password.length < 6) {
        alert('password must be at least 6 character');
        return false;
    }

    return true;
}
```


#### Question 56: repeat que 55


#### Question 57: how many type of JS Event? How to use it ?
* 4 types of events
1) Mouse event
    * click event
    ```
    <button onclick="oneclick()" class="btn"> Click </button>
    ```
    ```
    function oneclick() {
        alert(' Now Click ');
    }
    ```
    * double click event
    * mouse enter & mouse leave event
    * mouse down & mouse up event
2) Keyboard event
    * keypress event
    ```
    <input type="text" onkeypress="adddata(event)" placeholder="keypress" class="inputs">
    ```
    ```
    function adddata(e) {
        console.log(e.target.value);
    }
    ```
    * keydown event
    * keyup event
3) Form event
    * onchange event
    ```
    <input type="text" onchange="changedata(event)" placeholder="changedata" class="inputs">
    ```
    ```
    function changedata(h) {
        console.log(h.target.value);
    }
    ```
    * onfocus & onblur event
    * onselect & onsearch & onsubmit event
4) Window event
    * onload event
    ```
    <body onresize="myfun()">
    ```
    ```
    function myfun() {
        alert('hii window');
    }
    ```
    * onresize event



#### Question 59: What is Bom vs Dom in JS?
##### BOM : Browser Object Model
* It is a browser-speific convention reffering to all the objects exposed by the web browser.
* javascript interect with the browser.
* This object supports the window properties:
```
* window height & width
* screen height & width
* screen available height & width
* window locations 
* window history
``` 

###### DOM : Document Object Model
* It is programming interface of HTML & XML documents, It allows to create, manipulate, or delete elements from the document.
* It is manipulate of tags, classes, id, or elements of HTML.
```
* getElementById() method
* getElementByClassName() method
* getElementByTagName() method
* querySelector() method
* querySelectorAll() method
```

#### Question 60: Array vs object defences in JS?
* Array :
* Array is used when the elements are number.
* Array is multiple value stored using index.
```
var names = ['happy', 'krisha','rekha', null, undefine, true];
console.log(names);
console.log(names[1]);
```

* Object :
* Object is used when the elements are string.
* Object is multiple value stored using key value pair.
```
var obj = { name:'happy', age: 25, marks: [45,90,60]}
console.log(obj.name);
console.log(obj.marks[2]);
```


#### Question 61: Split the string into an array using split() Method?
* It is method used to convert string to array.
```
var name = "Happy Rokad";
console.log(name.split(''));
console.log(name.split(' '));
console.log(name.split('a'));
```

#### Question 62: Check if the string contains a word Script using includes() method?
* It for return true if string contain specified string or false
```
var name = "Happy Rokad";
console.log(name.includes('Rokad'));
console.log(name.includes('Hello'));
```

#### Question 63: Change all the string characters to lowercase letters using toLowerCase() Method.
* convert string uppercase to lowercase.
```
var name = "Happy Rokad";
console.log(name.toLowerCase());
```

#### Question 64: What is Character at index 15 in ’30 Days of JavaScript’ string? Use charAt() method.
```
var str = "30 Days of JavaScript";
console.log(str.charAt(15));
```

#### Question 65: copy to one string to another string in JS?
```
var str = " Hello String";
var copystr = [...str].join('');
console.log(copystr);
```

