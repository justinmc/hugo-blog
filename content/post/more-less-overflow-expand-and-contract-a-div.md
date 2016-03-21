
+++
date = "2012-07-21T01:03:26-07:00"
draft = false
title = "More Less Overflow: Expand and Contract a Div"
pic = "/files/morelessoverflow2.png"
aliases = [
  "/blog/More+Less+Overflow:+Expand+and+Contract+a+Div"
]
+++

Here's a simple jQuery project I packaged up to provide a more/less button to expand and contract a div with lots of text.&nbsp; Yet another simple concept, but implemented very nicely and easy to reuse.<br>

<br>

Github:&nbsp;     <a href="http://github.com/justinmc/More-Less-Overflow">http://github.com/justinmc/More-Less-Overflow</a> <br>

Live Demo:&nbsp;  <a href="http://www.justinmccandless.com/demos/More-Less-Overflow/index.html">http://www.justinmccandless.com/demos/More-Less-Overflow/index.html</a> <br>

<br>

Go ahead and check out the demo so you know what we're talking about.&nbsp; There you go, a simple expanding and contracting div to view more content when necessary.&nbsp; It has a few nice features besides just changing the height of a div though, so I'll go over them here.<br>

<br>

<h4>Use a more/less button only when necessary<br>

</h4>

The initial height of the div is detected and recorded, as well as the initial height of the inner element with the content.&nbsp; If the inner stuff winds up being taller than its container, then it is shortened and a button is added.&nbsp; Otherwise, the div will look just like normal.&nbsp; If you have dynamic content going into this div, don't worry about including it only when the content is long, it will only take action if it's needed.<br>

<br>

<h4>Shorten to the nearest word and append an ellipsis</h4>

The div isn't just shortened to block the inner content with <span class="code">overflow: hidden;</span>.&nbsp; The text is actually removed from the element until it is short enough to add an ellipsis to the nearest word without overflowing.&nbsp; This gives the best possible look for the user while still being conveniently automatic.<br>

<br>

<h4>Use as many as you need on a page in different configurations</h4>

Use multiple on a page, some which are short and not needed, some which are very long, and they will all work nicely together without collisions.&nbsp; You can also set the <span class="code">mlOverflow_more</span> and <span class="code">mlOverflow_less</span> data attributes and use different words for "more" and "less" on each.<br>

<br>

<br>

That's basically all there is to it.&nbsp; If you need help setting up, check the readme for usage.&nbsp; And take a look at the simple code in the demo to see an example.<br>

<span id="\" pastemarkerend\""=""></span>