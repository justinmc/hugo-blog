
+++
date = "2012-09-18T05:59:13-07:00"
draft = false
title = "Patching jQuery's Lack of SVG Support"
pic = "/files/jquerysvg.png"
aliases = [
  "/blog/Patching+jQuery's+Lack+of+SVG+Support",
  "/blog/patching+jquery's+lack+of+svg+support"
]
+++

<p>jQuery has a lot of convenient functions for working with the DOM, but if 
you've tried using it in a similar way with SVG, you may 
have noticed that for some things it just doesn't work. Digging into 
the bug tracking of jQuery shows that for some of the issues, there is 
actually <a href="http://bugs.jquery.com/ticket/4850">not much interest in fixing this</a>. Here I'll quickly go over a few options for circumventing this and some quick code to patch a few. </p>

<p>While there never seems to be enough information online about working with SVG in HTML5, a few resources do exist to help circumvent these problems.&nbsp; If you want to avoid your problem altogether and use a full js library, <a href="http://raphaeljs.com/">Raphaël</a> is one of the bigger and more well supported.&nbsp; <a href="http://keith-wood.name/svg.html">jQuery SVG</a> also exists if you want to stick with jQuery and take the plugin route, which has some nice features and directly implements many of the broken functions. </p>

<p>When I ran into this problem, I had a smaller requirement for just a few specific functions.&nbsp; I decided to hack together my own implementations instead of making the much more large-scale switch to Raphaël or jQuery SVG.&nbsp; These just use simple string manipulation to get around the problem, which may not be exactly how jQuery would do it, but they got the job done fine in my case. </p>

<p><strong>Update:</strong> Thanks a ton to <a href="http://brokensquare.com/">Shaw</a> in the comments for improving my code and adding a <code>removeClass</code> function. </p>

<p><script src="https://gist.github.com/justinmc/8876659.js"></script></p>