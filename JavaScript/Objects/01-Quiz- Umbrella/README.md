<h3>Directions:</h3>
Using the umbrella example from the previous video, see if you can follow the example open() method and create the close() method. It's alright if you have trouble at first! We'll go into more detail later in this lesson.
<br/>
<br/>
<code>var umbrella = { </code></br>
<code>  color: "pink",</code></br>
<code>  isOpen: false,</code></br>
<code>  open: function() { </code></br>
<code>    if (umbrella.isOpen === true) {</code></br>
<code>      return "The umbrella is already opened!";</code></br>
<code>    } else {</code></br>
<code>      umbrella.isOpen = true;</code></br>
<code>      return "Julia opens the umbrella!";</code></br>
<code>    }</code></br>
<code>   }</code></br>
<code>};</code></br>
<br/>
<blockquote>TIP: Remember to put all of your object's properties and methods inside curly braces: var myObject = { greeting: "hello", name: "Julia" };. Also, remember that an object is just another data type. Just like how you would put a semicolon after a string variable declaration var myString = "hello";, don't forget to put a semi-colon at the end of your object's declaration.<blockquote>
