---
title: "Migrating from PHP to JS: The Stuff That Sucks"
description: "For a short-term summer job, I helped a company migrate their entire codebase from PHP to JS. Here's what I learned."
pubDate: "Jun 03 2023"
tags: ["development", "internship"]
---

## The Task
For a summer internship, I was tasked with helping a company migrate their entire codebase from PHP to JS. I mostly worked on rewriting backend scripts that called APIs, manipulated data, and automated scheduled tasks. Through this translation work, I discovered the best and worst parts of each programming language. I feel the translation process gave me a deeper understanding of programming languages and the aspects to consider when choosing a particular one.

## PHP Pitfalls
PHP is a scripting language made for the web. It runs on the server, and can be used for anything from templating to data fetching to form validation. PHP offers some built-in functions that are extremely useful for web development, which is one of the reasons why it is loved by many. 

However, PHP is not the end all be all. It is decreasing in popularity as other programming languages can now run on the server like JavaScript with Node.js. While translating PHP to JS, here are the PHP problems I ran into. 

### PHP Arrays
PHP arrays are not arrays. They are JS Objects or Maps, or Python dictionaries. This means that each element is a key value pair. If you don't specify a key, then PHP will give your value a key based on the index of the element. 

```php
$arrList = array('hello', 'world');
echo $arrList; // array('0'=>'hello', '1'=>'world');

$arrMap = array('name'=>'Alexa', 'coolness'=>5);
echo $arrMap; // array('name'=>'Alexa', 'coolness'=>5);
```

This doesn't seem too annoying at first, but the intended purpose of a PHP array can be ambiguous (list or map). Specifically, in a case like below where several arrays are declared near the top of the file and then actually used 600 lines later...

```php
$cats = array();
$dogs = array();
$owners = array();
```

Upon seeing this, I may assume that `cats`, `dogs`, and `owners` are meant to act as lists, so I translate it to this JS code.
```js
const cats = [];
const dogs = [];
const owners = [];
```
However, 600 lines later I notice that `owners` is actually meant to act as a map where the owner's name is a key and value is an array of the animals they own. Now, I have to go back in the code and change the logic everywhere I used the `owners` array. 

And you're probably like "Alexa, why didn't you read the entire script before translating it!". Yes, analyzing the control flow of the program before translating certainly helps mitigate mistakes like this, however it doesn't catch them all. At my internship, I translated PHP scripts that referenced several other scripts, databases, and external APIs. This made it difficult to track down the data I was sending and receiving. Imagine having to constantly combine and manipulate PHP arrays acting as lists and maps, but not being entirely sure which was which. 

### PHP extract()
PHP `extract()` takes in an array and outputs variables with names corresponding to each elements' `key` and variable values corresponding to each elements `value`.
```php
$arr = array('name'=>"Alexa", 'coolness'=>10);
echo $name; // "Alexa"
echo $coolness; // 10
```
This seems very convenient, but only when one knows the contents of the array. Imagine using this function on the result of a database call.
```php
$result = sql_query("SELECT * FROM cats");
extract($result);
```
First, if I don't know the shape of the data, I don't know the variables that were extracted. It's hard to keep track of variables I don't know exist. `extract()` leads to a plethora of problems relating to variable collision, security risks (extracting user input), and code readability. JS destructuring does a much better job at minimizing these risks. 

### PHP require()
PHP imports have similar problems. They don't tell you what is being imported and they have the ability to import random variables from included files. 
```php
require("/../../randomFile.php");
require("/../../anotherFile.php");

$stuff = getStuff();
$otherStuff = getOtherStuff();
```
I don't know what variables, functions, or other files `randomFile.php` and `anotherFile.php` are importing unless I explicitly look at the contents of those files. Opening these files seems like a trivial task, but it can become time consuming and distracting to constantly have to look through them. The JS ES6 import syntax along with destructuring mitigates some of these problems. 

## JavaScript Pitfalls

### Formatting Dates
The simplest looking line of PHP code:
```php
$date = date("m-d-Y"); // literally one line of code to get mm-dd-yyyy
```
The JS translation:
```js
const date = new Date();
const year = date.toLocaleString("en-us", { year: "numeric" });
const month = date.toLocaleString("en-us", { month: "2-digit" });
const day = date.toLocaleString("en-us", { day: "2-digit" });
const formattedDate = `${year}-${month}-${day}`;
```
This is the "cleanest" method I found for formatting a date in JS. Please tell me there's a better (native) way. 

### Lack of Built-ins
It's just hard to go from doing this:
```php
$email = "john.doe@example.com";
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

} // FILTER_VALIDATE_EMAIL is a PHP built-in
```
To doing this:
```js
const email = "john.doe@example.com";
if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) !== null) {

} // strange regex from the internet
```

## Both languages are bad?
No, not necessarily. They were just made for slightly different purposes. PHP is written in C, which is why it may assume developers responsibly use `require()`. JavaScript is a high-level scripting language, which, by definition, should abstract most of these concepts. All in all, I found that translating code from one programming language to another was one of the most eye-opening experiences for me as a developer.

