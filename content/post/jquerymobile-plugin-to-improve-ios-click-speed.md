
+++
date = "2012-10-23T01:26:02-07:00"
draft = false
title = "jQueryMobile Plugin to Improve iOS Click Speed"
pic = "/files/jqm.png"
+++

<p>
The main thing that people jump to criticize HTML5 apps about over their native counterparts is speed.  One of the easiest ways to make up this difference (and one of the obvious shortcomings of jQuery Mobile in iOS) is in click speed.  By making sure your click events are firing as fast as possible, you can often cut a lot of the lag in page transitions and other events without much work.  That's the idea behind this simple jQuery Mobile plugin I wrote.
</p>

<br>

<br>

Code: <a href="https://github.com/justinmc/jquery.mobile.fastButtons">github.com/justinmc/jquery.mobile.fastButtons</a>
<br>

Demo/Metrics: <a href="http://www.justinmccandless.com/demos/jquery.mobile.fastButtons/index.html">http://www.justinmccandless.com/demos/jquery.mobile.fastButtons/index.html</a>
<br>

<br>

<br>

<p>
All the plugin does is remove all 'click' events on document, and reset them as 'vclick' events.  Vclick is jQuery Mobile's own event that handles taps in touchscreen devices in a much nicer, and faster, way than the default web browser click event.  The result is much faster buttons that respond without waiting for the 300ms delay programmed into iOS.
</p>

<p>
To use this plugin, just include it AFTER you include jQuery Mobile.  That's it, all 'click' events will be reset as 'vlick' without any modifications to your code.  Check out the source below, or click over to the <a href="https://github.com/justinmc/jquery.mobile.fastButtons">repository on Github</a>.
</p>

<br>


	<link rel="stylesheet" href="http://gist-it.appspot.com/assets/embed.css">

	<link rel="stylesheet" href="http://gist-it.appspot.com/assets/prettify/prettify.css"><div class="gister-gist">
<div class="gist-file">
    <div class="gist-data">

<pre class="prettyprint"><span class="com">// jquery.mobile.fastButtons.js</span><span class="pln"><br>

</span><span class="com">// Justin McCandless</span><span class="pln"><br>

</span><span class="com">// justinmccandless.com</span><span class="pln"><br>

</span><span class="com">// jQuery 1.6.4+</span><span class="pln"><br>

</span><span class="com">// jQuery Mobile 1.0.1+</span><span class="pln"><br>

<br>

</span><span class="com">// This jQuery Mobile plugin makes click events faster, especially iOS</span><span class="pln"><br>

</span><span class="com">// It does this by simply replacing 'click' events on document with 'vclick'</span><span class="pln"><br>

<br>

</span><span class="kwd">var</span><span class="pln"> fastButtons </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"><br>

&nbsp; &nbsp; &nbsp; &nbsp; <br>

&nbsp; &nbsp; &nbsp; &nbsp; replace</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln"><br>

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span class="com">// copy the current click events on document</span><span class="pln"><br>

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span class="kwd">var</span><span class="pln"> clickEvents </span><span class="pun">=</span><span class="pln"> jQuery</span><span class="pun">.</span><span class="pln">hasData</span><span class="pun">(</span><span class="pln"> document </span><span class="pun">)</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> jQuery</span><span class="pun">.</span><span class="pln">_data</span><span class="pun">(</span><span class="pln"> document </span><span class="pun">).</span><span class="pln">events</span><span class="pun">.</span><span class="pln">click</span><span class="pun">;</span><span class="pln"><br>

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; clickEvents </span><span class="pun">=</span><span class="pln"> jQuery</span><span class="pun">.</span><span class="pln">extend</span><span class="pun">(</span><span class="kwd">true</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{},</span><span class="pln"> clickEvents</span><span class="pun">);</span><span class="pln"><br>

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br>

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span class="com">// remove these click events</span><span class="pln"><br>

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $</span><span class="pun">(</span><span class="pln">document</span><span class="pun">).</span><span class="pln">off</span><span class="pun">(</span><span class="str">'click'</span><span class="pun">);</span><span class="pln"><br>

&nbsp; &nbsp; &nbsp; &nbsp; <br>

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span class="com">// reset them as vclick events</span><span class="pln"><br>

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i </span><span class="kwd">in</span><span class="pln"> clickEvents</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"><br>

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $</span><span class="pun">(</span><span class="pln">document</span><span class="pun">).</span><span class="pln">on</span><span class="pun">(</span><span class="str">'vclick'</span><span class="pun">,</span><span class="pln"> clickEvents</span><span class="pun">[</span><span class="pln">i</span><span class="pun">].</span><span class="pln">handler</span><span class="pun">);</span><span class="pln"><br>

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span class="pun">}</span><span class="pln"><br>

&nbsp; &nbsp; &nbsp; &nbsp; </span><span class="pun">}</span><span class="pln"><br>

</span><span class="pun">};</span><span class="pln"><br>

<br>

fastButtons</span><span class="pun">.</span><span class="pln">replace</span><span class="pun">();</span></pre>

    </div>

    <div class="gist-meta">
        <a href="https://github.com/justinmc/jquery.mobile.fastButtons/blob/master/jquery.mobile.fastButtons.js">This Gist</a> by <a href="http://gist-it.appspot.com">gist-it</a>
        <span style="float: right; color: #369;"><a href="https://github.com/justinmc/jquery.mobile.fastButtons/raw/master/jquery.mobile.fastButtons.js">view raw</a></span>
        <span style="float: right; margin-right: 8px;">
            <a style="color: rgb(102, 102, 102);" href="https://github.com/justinmc/jquery.mobile.fastButtons/blob/master/jquery.mobile.fastButtons.js">jquery.mobile.fastButtons.js</a></span>
            <!-- Generated by: http://gist-it.appspot.com -->
    </div>

</div>

</div>

<br>

<br>

<p>
UPDATE: I wrote a really nice <a href="http://www.justinmccandless.com/demos/jquery.mobile.fastButtons/index.html">demo page</a> that let's you actually see and measure the kind of speed gains you'll get in your browser.  It's now included at the top of the article.
</p>
