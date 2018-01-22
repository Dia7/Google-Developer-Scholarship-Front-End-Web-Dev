One thing to take notice of in all the examples you've seen so far is the use of semicolons ; at the end of each line. Semicolons make it clear where one statement ends and another begins. This is especially handy when multiple lines of code are written on the same line (which is valid JavaScript, but definitely not recommended!). For instance:

<code>var totalAfterTax = 53.03 var tip = 8 // this is incorrect!</code>

<strong>Uncaught SyntaxError:</strong> Unexpected token var

vs.

<code>var totalAfterTax = 53.03; var tip = 8; // this is correct!</code>

Not adding semicolons to the end of each line can cause bugs and errors in your programs. JavaScript does have ways to occasionally predict where semicolons should be, but just like how type coercion can result in some unexpected quirky behavior in JavaScript, it's good practice to not depend on it.

<h3>Directions:</h3>
Define two variables called thingOne and thingTwo and assign them values. Print the values of both variables in one console.log statement using concatenation. For example,

<code>red blue</code>

where "red" is the value of thingOne and "blue" is the value of thingTwo. Don't forget to use semicolons!
