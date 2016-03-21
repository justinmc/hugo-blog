
+++
date = "2013-10-16T21:24:06-07:00"
draft = false
title = "JavaScript's function.bind and Why You Should Know it Exists"
pic = "/files/Screenshot from 2013-10-17 11:24:16.png"
aliases = [
  "/blog/JavaScript's+function.bind+and+Why+You+Should+Know+it+Exists"
]
+++

<p>I was getting really carried away with fancy JavaScript objects while working on a side project recently, and I ran into a difficult problem.  I needed an object to produce instances of any given object with any initial parameters.  I hit a few obvious dead ends before discovering something I was surprised I hadn't used before: <code>function.bind</code>.</p>

<h2 id="thedeadends">The dead ends</h2>

<p>My first thought was to pass an initial object in and create deep copies of it.  However, deep copying is not so easy in JavaScript, especially for complicated objects.  Trying to do it manually, I ran into the problem where my object contained a cyclical reference.  My simple recursive solution wound up in an infinite loop, and avoiding this in all cases looked like more trouble than it was worth.</p>

<p>Admitting defeat and looking towards jQuery, <a href="http://api.jquery.com/clone/">jquery.clone</a> only works for DOM objects, and <a href="http://api.jquery.com/jQuery.extend/">jquery.extend</a> simply wasn't working for objects created with <code>new</code> that have arguments.</p>

<p>Another somewhat sketchy solution was to have the constructor and all arguments passed in as an array.  Then I would call the constructor in my object.  <code>function.apply</code> works nicely for spreading an array as a list of arguments.  However, it doesn't work with the <code>new</code> keyword!  A very well written <a href="http://www.2ality.com/2011/08/spreading.html">article from 2ality</a> pointed me in the right direction...</p>

<h2 id="bindtotherescue">Bind to the rescue</h2>

<p><code>function.bind</code> takes a <code>this</code> argument and a series of arguments and produces a new function with the given <code>this</code> set and and the arguments provided already set.  Here's the definition from <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind">the MDN article on bind</a>:</p>

<pre><code>fun.bind(thisArg[, arg1[, arg2[, ...]]])
</code></pre>

<p>Let's take a look at how you might use this in a simple case.  Here we have a function getFullName, and we'll use <code>bind</code> to create a new function getMyName.</p>

<pre><code>var getFullName = function(title, firstName, lastName) {
    return title + " " + firstName + " " + lastName;
};

var getMyName = getFullName.bind(null, "Mr.", "Justin", "McCandless");

console.log(getMyName()); // "Mr. Justin McCandless"
</code></pre>

<p>So by using <code>bind</code>, I created a function that calls an original function with a specific set of arguments.  This becomes especially useful because it works with objects created with <code>new</code>, like this:</p>

<pre><code>var Dog = (function() {

    Dog.prototype.name = "Noname";
    Dog.prototype.color = "unknown";

    function Dog(name, color) {
        this.name = name;
        this.color = color;
    }

    return Dog;

})();

var rover = new Dog("Rover", "red");

var Rover = Dog.bind(this, "Rover", "red");

var rover2 = new Rover();
</code></pre>

<p>Our new object Rover creates a dog with the same arguments as rover.  Since this is javascript, you can pass this function wherever you want, or set it as a parameter of another object, and it you will still be able to create a rover object with a simple <code>new Rover()</code>.</p>

<p>This saved the day for me, where my original object needed to create other objects.  I simply pass in a bound function and invoke it with <code>new</code> whenever I need to create one.  This is much easier than I realized was possible, and I imagine see more uses for <code>function.bind</code> now that I realize something so useful exists.</p>