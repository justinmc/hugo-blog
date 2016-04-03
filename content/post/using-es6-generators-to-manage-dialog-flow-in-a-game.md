
+++
date = "2015-04-19T21:07:44-07:00"
draft = false
title = "Using ES6 Generators to Manage Dialog Flow in a Game"
pic = "/files/dialoggame.png"
aliases = [
  "/blog/Using+ES6+Generators+to+Manage+Dialog+Flow+in+a+Game",
  "/blog/using+es6+generators+to+manage+dialog+flow+in+a+game"
]
+++

<p>Remember how great it was when you first started using promises to combat javascript callback hell?  Your code was much more concise, easier to understand, and didn't nest a million levels deep...</p>

<p>Well EcmaScript 6 generators promise (no pun intended) to bring about a similar revolution in the way we deal with asynchronous code.  We've been hearing about how complex code dealing with API calls and user interactions will be able to look just like synchronous code, with everything happening in one flow and being much easier to follow.  It sounded great, I looked over some brief code examples and it made sense, I played around with it myself and started to understand all the <code>function*</code>s and <code>yield</code>s, but I was waiting for one more thing: a example of a real world app benefiting from generators.</p>

<p>I ran into a nice use case in a side project today, so I decided to write that generator example app myself.  Feel free to jump ahead to the full <a href="http://justinmccandless.com/demos/gen/index.html">live demo</a> and its <a href="https://github.com/justinmc/es6-generator-dialog">source code</a>.</p>

<h2 id="gamedialoggoodandbad">Game Dialog Good and Bad</h2>

<p><a href="http://justinmccandless.com/demos/gen/index.html" target="_blank"><img src="http://184.106.225.148/public/U8iOe5Vedy.gif" alt="screenshot" title="screenshot" style="width: 600px;" /></a></p>

<p>A series of dialog text in a game is a great example of where generators excel.  In the game designer's mind, a series of dialog blurbs come into the game one after the other in a very linear and simple way based on the user's input.  Using callbacks and nesting each blurb another level deep just gets in the way.</p>

<pre><code>makeTextbox('Hello!  Click to continue.');

events.on('click', function() {

  makeTextbox('I\'m the second text bubble, yay!');

  events.on('click', function() {
    makeTextbox('I hope we don\'t have too many more of these...');
  });
});
</code></pre>

<p><br></p>

<p>There is no benefit to the developer for nesting all of these like this.  And this is not even considering branching options or more complex conditions.</p>

<p>With generators, we can flatten it out like this:</p>

<pre><code>makeTextbox('Hello!  Click to continue.');

yield events.on('click', function() {
  makeTextbox('I\'m the second text bubble, yay!');
  generator.next();
});

yield events.on('click', function() {
  makeTextbox('And we can have as many more as we want without nesting.');
  generator.next();
});
</code></pre>

<p><br></p>

<h2 id="howgeneratorswork">How Generators Work</h2>

<p>I won't bother repeating what's already <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator">well documented on MDN</a> and explained in a <a href="http://www.2ality.com/2015/03/es6-generators.html">very thorough article at 2ality</a>, but here's the basics that you need to get through this article.</p>

<p>When using ES6 generators, you'll be declaring a generator function with the function* syntax:</p>

<pre><code>function* gen() { 
  yield 1;
  yield 2;
  yield 3;
}
</code></pre>

<p>Then using it to create a generator:</p>

<pre><code>var g = gen();
</code></pre>

<p>And calling <code>next</code> to progress through the yield statements:</p>

<pre><code>g.next()  // 1
g.next()  // 2
g.next()  // 3
</code></pre>

<p><br></p>

<p>Notice how in the generator function, execution pauses until we call <code>next</code> again.  This is what we will exploit to write code that "waits" for something external to happen, like an API call to return or a user to perform an action.</p>

<h2 id="gettingsetup">Getting Set Up</h2>

<p>As of this writing, native support for generators is not very thorough.  An easy way to get around this and start using generators now is to use something like <a href="https://babeljs.io/">Babel</a>, a compiler that compiles ES6 to ES5.</p>

<p>Even easier, my example project mentioned above (<a href="https://github.com/justinmc/es6-generator-dialog">available on Github</a>) will give you a full setup with Gulp, Browserify, and Babel, and compile any changes to the code automatically for you.</p>

<h2 id="afullyfeaturedexample">A Fully Featured Example</h2>

<p>Go ahead and run through the <a href="http://justinmccandless.com/demos/gen/index.html">live demo</a> really quickly.  Let's take a look at the generator code that makes that happen (you can see the full source of this file <a href="https://github.com/justinmc/es6-generator-dialog/blob/master/app/scripts/main.js">here</a>).</p>

<script src="https://gist.github.com/justinmc/7c33d43c645baeb23c16.js"></script>

<p>That sure is a lot easier to read than a ton of nested callbacks or promises.</p>

<p>We're using the <code>yield</code> operator to show when our code will pause, and <code>this.flowGen.next()</code> to indicate that the previous event has happened and we can continue.  The result is a flat code structure despite having many layers of asynchronous code waiting for user input.</p>

<h2 id="fromhere">From Here</h2>

<p>I encourage you to pull down the <a href="https://github.com/justinmc/es6-generator-dialog">demo source code</a> and play around with it or build something yourself, as building something real that takes advantage of generators is really the hardest part of learning them.</p>