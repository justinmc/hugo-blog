
+++
date = "2012-07-20T22:18:03-07:00"
draft = false
title = "Correctly Fading in/out onmouseover Using jQuery"
pic = "/files/mouseoverpostbg2.png"
aliases = [
  "/blog/Correctly+Fading+in/out+onmouseover+Using+jQuery",
  "/blog/correctly+fading+in/out+onmouseover+using+jquery"
]
+++

<p>I've had a bit more trouble than I should have getting HTML objects to 
intuitively fade in or out when you mouse over them.  When I finally 
decide to invest some actual time on such a small project, I got some clean 
and solid code as a result, so I thought I would share it here.<span id="pastemarkerend"></span><br>

<br>

Here's what I'm talking about:<br>

<br>

</p>

<script>
$(document).ready(function() {
    $('.mouseme_final').mouseenter(function() {
      $(this).children('.mouseme_final_over').stop();
      $(this).children('.mouseme_final_over').fadeOut(0);
      $(this).children('.mouseme_final_over').fadeIn();
    });
    $('.mouseme_final').mouseleave(function() {
      $(this).children('.mouseme_final_over').stop();
      $(this).children('.mouseme_final_over').fadeIn(0);
      $(this).children('.mouseme_final_over').fadeOut();
    });
});
</script>

<div class="mouseme_final" style="border: 2px #000000 solid; background: #f5f5f5; height: 100px; width: 200px; padding: 8px;">
    Mouse over me!
    <br><br>
    <span class="mouseme_final_over" style="display: none; color: #4DD0FB;">Thanks</span>
</div>

<p><br></p>

<p><br></p>

<p>I've run into the idea on a few different projects where I wanted 
something to toggle fade in/out when the user clicked or hovered on an 
object.  This can be useful if you want to fade in a close button
only when the user's mouse is over the element, or an upload button
when the user mouses over their profile icon, etc.</p>

<p><br><br></p>

<p>At first simply using jQuery's fadeIn and fadeOut (or 
fadeToggle) methods seemed to work quickly and easily.  However, when the 
user can rapidly toggle between the two, I started to notice some buggy 
feeling behavior.
<br></p>

<p><br></p>

<p>Consider the code below and it's working example:
<br></p>

<pre>
  $('.hiddenFormMouseover').mouseenter(function() {
      $(this).children('.hiddenFormMouseoverButton').fadeIn();
  });
  $('.hiddenFormMouseover').mouseleave(function() {
      $(this).children('.hiddenFormMouseoverButton').fadeOut();
  });
</pre>

<p><br /></p>

<script>
$(document).ready(function() {
    $('.mouseme_broken').mouseenter(function() {
      $(this).children('.mouseme_broken_over').fadeIn();
    });
    $('.mouseme_broken').mouseleave(function() {
      $(this).children('.mouseme_broken_over').fadeOut();
    });
});
</script>

<div class="mouseme_broken" style="border: 2px #000000 solid; background: #f5f5f5; height: 100px; width: 200px; padding: 8px;">
    Mouse over me!
    <br /><br />
    <span class="mouseme_broken_over" style="display: none; color: #4DD0FB;">Thanks</span>
</div>

<p><br></p>

<p>The effect seems to be fine at first glance, but try running the 
mouse rapidly over and out of the object repeatedly.  You'll notice that 
after you stop moving your mouse, the object continues to fade in and 
out for as many times as you moused over it.  This is because the 
functions are just tossed onto the stack every time they are called by 
your mouse movement, and each must wait for the previous ones to finish 
before it can execute.  If your mouse moves quicker than the object can 
fade, then it will continue to oscillate after you finished.
<br></p>

<p><br></p>

<p>This is actually the intended result for jQuery, but it's probably not 
what you want in your interface.  If your mouse is over the object,  it 
should immediately fade in and stop.  Vice versa if your mouse moves 
outside the object.
<br></p>

<p><br></p>

<p>I next tried a few different combinations of adding things into my 
functions like jQuery's stop() (stops the fade in or out currently in 
progress) and passing 0 as the time argument to my fade functions (like 
fadeOut(0) which causes the object to immediately fade out).  I 
continued to get slightly better but still not perfect behavior, like 
objects stopping while half opaque instead of continuing to oscillate, 
until I thought out exactly what I wanted to happen and got it right.
<br></p>

<p><br></p>

<p>When the cursor enters the object, we want the object to stop any 
other fading it might be doing and run the full fadeIn animation.  When 
the cursor leaves we want the opposite; stop fading, and then run a full 
fadeOut.
<br></p>

<p><br></p>

<p>Writing that out in javascript we get an intuitively behaving solution:
<br></p>

<p><br></p>

<pre>
  $('.hiddenFormMouseover').mouseenter(function() {
    $(this).children('.hiddenFormMouseoverButton').stop();
    $(this).children('.hiddenFormMouseoverButton').fadeOut(0);
    $(this).children('.hiddenFormMouseoverButton').fadeIn();
  });

  $('.hiddenFormMouseover').mouseleave(function() {
    $(this).children('.hiddenFormMouseoverButton').stop();
    $(this).children('.hiddenFormMouseoverButton').fadeIn(0);
    $(this).children('.hiddenFormMouseoverButton').fadeOut();
  });
</pre>

<p><br></p>

<p><br></p>

<script>
$(document).ready(function() {
    $('.mouseme_final2').mouseenter(function() {
      $(this).children('.mouseme_final2_over').stop();
      $(this).children('.mouseme_final2_over').fadeOut(0);
      $(this).children('.mouseme_final2_over').fadeIn();
    });
    $('.mouseme_final2').mouseleave(function() {
      $(this).children('.mouseme_final2_over').stop();
      $(this).children('.mouseme_final2_over').fadeIn(0);
      $(this).children('.mouseme_final2_over').fadeOut();
    });
});
</script>

<div class="mouseme_final2" style="border: 2px #000000 solid; background: #f5f5f5; height: 100px; width: 200px; padding: 8px;">
    Mouse over me!
    <br><br />
    <span class="mouseme_final2_over" style="display: none; color: #4DD0FB;">Thanks</span>
</div>

<p><br></p>

<p><br></p>

<p><br></p>

<p>That's the same example as the one at the top of this post, for the 
record.  Try all the crazy mousing you want and the fading should behave 
exactly as you'd expect.
<br></p>

<p><br></p>

<p>There you have it, a simple concept but one that might otherwise 
take awhile to get implemented correctly.<br></p>

<p><br></p>

<p><br></p>

<p> 
<span id="pastemarkerend"><span id="pastemarkerend"> </span><br></p>

<p></span></p>