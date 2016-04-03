
+++
date = "2012-08-20T06:41:38-07:00"
draft = false
title = "An Updated Scolling Image Bar jQuery Carousel"
pic = "/files/Screenshot from 2012-08-20 21:51:52.png"
aliases = [
  "/blog/An+Updated+Scolling+Image+Bar+jQuery+Carousel",
  "/blog/an+updated+scolling+image+bar+jquery+carousel"
]
+++

<p>
    <b>Update:</b> This project has been updated yet again, check out this post: <a href="http://justinmccandless.com/blog/Open+Source+jQuery+Carousel">Open Source jQuery Carousel</a>
</p>
<br /><br />
Awhile back I <a href="http://www.justinmccandless.com/blog/Scrolling+Image+Bar">posted a jQuery carousel type project</a> that I wrote, eloquently called <a href="http://github.com/justinmc/jQuery-Open-Carousel">Scrolling Image Bar</a>.  I went back and rewrote a bunch of it, making it more solid, usable, and featured, so I thought I would make another post about it to talk about the changes and how to use it.
<br>
<br>

github: <a href="http://github.com/justinmc/jQuery-Open-Carousel">github.com/justinmc/jQuery-Open-Carousel</a><br>

demo: <a href="http://justinmccandless.com/demos/jQuery-Open-Carousel/index.html">justinmccandless.com/demos/jQuery-Open-Carousel/index.html</a><br>

<br>
<br>

Most proudly, the project is now a bit more robust.  Instead of requiring a set width of each frame to be specified beforehand, width is determined in javascript, and frames of varying width are ok.  Selectors have been made more universal and renamed to something a bit more intuitive, so just add my classes into your content and it will work with what you already have.  I apologize for my original name choice, but you also don't have to only use images as frames, a div full of html content works just as well.  
<br>

Config options can now be passed as data parameters in html, so you don't need to edit the javascript file if you want to scroll at a different frequency for example.  You can even have multiple instances of this running on the same site with different settings, without interference.
<br>

Lastly, to break my original name in yet another way, I added another animation option.  Instead of scrolling, passing a <span class="code">data-imagebar-transition="fade"</span> will fade to the next frame instead of scrolling.  Be sure you have a nice looking background behind it, as it fades to transparent.
<br>

Those are the main ideas of this update, overall it should be a lot more usable now!  Usage and configuration instructions follow, taken from the README.
<br>
<br>

<h4>How to set it up</h4>

This project consists of the carousel itself, an svg indicator 
to help with navigation, and left/right buttons.  The last two 
are optional, so let's start with setting up the basic carousel
by itself.  Be sure to check out the live demo (link at the top) 
to see all of this in action.
<br>
<br>

<h5>The Carousel</h5>

The carousel itself is just your content, a container div, and a
window div.  The window div has the class "imagebar_window", and
any content below it is visible while other content is hidden.
The two important CSS properties here are <span class="code">white-space: nowrap;</span>
and <span class="code">overflow: hidden;</span>.  Other than that, just set this up where
you want your carousel content to appear.
<br>

The container div has the class "imagebar_window_slides", and it
needs to contain all of your content horizontally from left to
right.  Give it the CSS property <span class="code">white-space: nowrap;</span> as well,
and be sure to set the width to accomodate all of your content
without wrapping.
<br>

Each "slide" that will appear in the carousel should have the
class "imagebar_window_slide" and the id "imagebar_window_slide[n]"
where [n] should be replaced with the number slide, starting 
from zero.  These can be any block-level object, such as a div
or an img.  You might want to use <span class="code">float: left;</span> on each of these
in order to keep them positioned right next to eachother.
<br>
<br>


<pre><div class="imagebar_window_slides">
<img style="" unselectable="on" src="image1.jpg" class="imagebar_window_slide" id="imagebar_window_slide0">
<img style="" unselectable="on" src="image2.jpg" class="imagebar_window_slide" id="imagebar_window_slide1">
<img style="" unselectable="on" src="image3.jpg" class="imagebar_window_slide" id="imagebar_window_slide2">

</div>

</pre>

<br>
<br>

<h5>Indicators</h5>

As mentioned, indicator circles can also be used to show 
which slide is currently active and its position among 
the total number of slides.  Just set a class of 
"imagebar_indicators_circle" and an id of
"imagebar_indicators_circle[n]", where [n] is the number
of the indicator starting from zero.  I used a simple SVG
indicator with an id of "imagebar_indicators" on the svg
object, though thumbnails or any other clickable object 
could also be used to scroll to a specific slide.
<br>
<br>


<pre><svg id="imagebar_indicators" xmlns="http://www.w3.org/2000/svg" version="1.1">
   <circle class="imagebar_indicators_circle" id="imagebar_indicators_circle0" cx="126" cy="20" r="6" stroke="#afafaf" stroke-width="2" fill="#ffffff"></circle>
   <circle class="imagebar_indicators_circle" id="imagebar_indicators_circle1" cx="146" cy="20" r="6" stroke="#afafaf" stroke-width="2" fill="#ffffff"></circle>
   <circle class="imagebar_indicators_circle" id="imagebar_indicators_circle2" cx="166" cy="20" r="6" stroke="#afafaf" stroke-width="2" fill="#ffffff"></circle>
</svg>
</pre>

<br>
<br>

<h5>Forward/Back Buttons</h5>

Lastly, to provide forward/back buttons, just add the
class "imagebar_button_left" or "imagebar_button_right"
to any clickable object and it will transition in
whichever direction you click.  It will correctly wrap
back around to the start/finish if you go too far.
<br>
<br>


<pre><b class="imagebar_button_left">Left</b> | 
<b class="imagebar_button_right">Right</b>
</pre>

<br>
<br>

<h5>Configuration</h5>

<br>

You can change the default transition speed, transition
frequency, and/or animation type by passing a simple
data attribute in the imagebar_window_slides div.
<br>
<br>


<pre>data-imagebar-speed = the duration of the transition, milliseconds
data-imagebar-frequency = the time between each transition, milliseconds 
data-imagebar-animation = "fade" will give a fading transition, othwerise scrolling is used
</pre>