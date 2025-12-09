tailwind css

live server

eslint

es7(react)

mongodb 

node -snippets 

npm intellisense

auto rename







ls - List all directories

ls -al



https://github.com/burakorkmez/mern-thinkboard



What is HTML?

Hyper text - link one text to other just like hyperlink



Mark-Up - tag or annotations that we use to give to a set of text some meaning or structure



markup language - A set of rules that we need to follow in order to get the desired markup  in browsers or processors



content="width=device-width " - this will  change the width of the device based on its width



<nav>- navigation

&nbsp; 

<ul> - list items (unordered)

<li> - ordered	

<iframe width>- <iframe src="URL" width="500" height="300"></iframe>



Types of css:

Inline css -> inside html tag

Internal css  -> inside style tag

external css -> in an another .css file



ID Attribute	Class Attribute

Uniquely identifies one element.	Can be applied to multiple elements.

Primarily used for styling or JavaScript.	Also used for styling or JavaScript.

Only one element can have a specific ID.	Multiple elements can share the same class.

Written as id="example".	Written as class="example".

Accessed in CSS with #example selector.	Accessed in CSS with .example selector.

Often used for unique page elements.	Commonly used for styling groups of elements.







# 

# DAY 4

# JAVASCRIPT

Client side 

Dynamically typed

use with html in order to make it more interactive.

ex: a = 5;

a="hello world"

It is interpreted - reads code one line at a time.

JavaScript is the programming language of the web.

Variables declared with the var always have Global Scope.

//IIFE --> immediately Invoked function Exection these fns executes first

//Temporal Dead zone - cant access function of variables before invoking it 
it will prevent us fromm accessing let and const variable before definition
//Hoiting - shift all the variables and functions at the top for it to be accessible
it will make all functions and varibles at the top of the scope before it is even declared and also let and const but TDZ block it and results in an error but we can use var variables but it will result in an undefined output

Callback function is a function that can be accessed with another function . it is a function within a function
function display(uname){
console.log("your name is :",name);
}
function func1(){
display("bala");
}
func1();


promise - it will ensure it  will return a value if it is not it will give a negative review if it is vice versa

status in promises:
pending 
fulfilled
rejected