# Intro to JavaScript

* Give a general outline of the history of JavaScript and its most recent changes
* Identify the key differences between Ruby and JavaScript
* Explain how JavaScript is loaded, interpreted, and executed in the browser
* Identify which data types are pass-by-value and which are pass-by-reference
* Write correct JavaScript syntax
* Run tests on labs

## History

* Early Days
  _ Created by Brandon Eich at Netscape in 10 days in 1995
  _ Was not a highly respected programming language for about 10 years
  _ Based off of functional languages with some object-oriented patterns
  _ Applications like Google Maps and Gmail were where JavaScript shone again
* Standards
  _ The standard for JavaScript implementations is called ECMAScript
  _ The standard is updated yearly and the standard for that year is called ECMAScript 20xx (or ES 20xx)
  _ [Browser Wars](https://en.wikipedia.org/wiki/Browser_wars) still leave us with legacy JavaScript implementations (and weirdness)
  _ We can use transpiling to write JavaScript according to the standard we want and convert it to code that can be used for the majority of JavaScript applications

## Request-Response Lifecycle

* Request-Response lifecycle
  _ Some code makes a request to a server
  _ We get a response back with data in binary, text, HTML, or JSON \* We use that data in our application
* In the browser
  _ A user enters an address in the address bar (or clicks a link)
  _ A request is made to a server, which typically serves HTML
  _ The user usually sees a loading indicator (like a spinning circle) near the address bar
  _ Included in that HTML are links to images, fonts, stylesheets, and scripts
  _ Each one of those links means another request by the browser but without refreshing the page
  _ When all the external links have loaded, the page itself is finished loading
* Loaded JavaScript
  _ JavaScript can be written directly in HTML through a `script` tag
  _ It can also be loaded externally through a `script` tag with a `src` attribute \* When the browser sees JavaScript, it attempts to run it immediately
* JavaScript implementations
  _ Each browser has its own [JavaScript engine](http://en.wikipedia.org/wiki/JavaScript_engine) or implementation
  _ The [Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Model) is the interface between the loaded HTML and the JavaScript code we write \* Most browsers are converging on agreeing on web standards, but browsers need ability to add proprietary features to CSS, JS, and DOM

## Data Types

1. Symbol
2. Undefined
3. Null
4. Boolean
5. Number
6. String
7. Object
