
+++
date = "2014-12-13T17:28:26-08:00"
draft = false
title = "Formatting Currency in Javascript"
pic = "/files/J$.png"
aliases = [
  "/blog/Formatting+Currency+in+Javascript",
  "/blog/formatting+currency+in+javascript"
]
+++

<p>I just had more trouble than I should have trying to figure out how to properly format currency, so it's going up as a blog post.  <code>Intl</code>, the new feature available in modern browsers for internationaliztion, is actually really great for localizing and formatting things like currency, but here's to hoping this saves someone time digging through the spec.</p>

<p>Here's the code you want for USD:</p>

<pre><code>var nf = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
nf.format(123456.789); // '$123,456.79'
</code></pre>
<br>
<p>The <code>minimumFractionDigits</code> and <code>maximumFractionDigits</code> options are what took me so long to find.  When you format currency, at least for USD in English, you usually don't want any more than 2 "cents" places displayed, or any less as well (it's $3.50, not $3.5).  These two options will ensure you always get 2 digits of cents.</p>

<p>If you'd like more info on Intl, NumberFormat, and what they can do, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat">MDN explains this</a> very thoroughly.  I ran into this while using <a href="http://formatjs.io/">Formatjs</a>, which has been great while doing fully featured internationalization with Handlebars.  Lastly, keep in mind that Intl is <a href="https://github.com/andyearnshaw/Intl.js/">shimmed</a> if you need better browser support.</p>