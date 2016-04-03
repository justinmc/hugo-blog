
+++
date = "2012-12-04T07:09:05-08:00"
draft = false
title = "Open Source jQuery Carousel"
pic = "/files/opencarousel_small.png"
aliases = [
  "/blog/Open+Source+jQuery+Carousel",
  "/blog/open+source+jquery+carousel"
]
+++

<p>
Googling around for a jQuery carousel the other day, I found that the market consisted of literally tons of solutions, many of which were not open source and actually required you to pay to use them!  This was a huge change from I first created my original jQuery carousel project because there was almost nothing to be found back then.  The lack of quality caused me to go back and dust off my old project and bring it up to standards, while of course keeping it as free, open source, and easy to implement as always.
</p>

<p><br /><br />
github: <a href="http://github.com/justinmc/jQuery-Open-Carousel">github.com/justinmc/jQuery-Open-Carousel</a><br />
demo: <a href="http://justinmccandless.com/demos/jQuery-Open-Carousel/index.html">justinmccandless.com/demos/jQuery-Open-Carousel/index.html</a><br />
old blog post: <a href="http://justinmccandless.com/blog/An+Updated+Scolling+Image+Bar+jQuery+Carousel">An Updated Scrolling Image Bar</a><br />
older blog post: <a href="http://www.justinmccandless.com/blog/Scrolling+Image+Bar">Scrolling Image Bar</a><br />
<br /><br /></p>

<p>
    The main idea driving this project was to create something that was as easy to implement as possible without touching any javascript, while also being simple enough to extend to fit any more specific application.  Everything you see in the <a href="http://justinmccandless.com/demos/jQuery-Open-Carousel/index.html">demo</a> was done without touching any javascript, just by passing settings parameters and changing a bit of CSS.
</p>

<p>
    All of the setup details are in the <a href="https://github.com/justinmc/jQuery-Open-Carousel">README on Github</a>, so I'll spare reposting that here.  Instead, lets get to the point and take a look at a fully featured example implementation of the project with code.  This one is in the demo, and it's in the form of a filmstrip of pictures from my trip to Qingdao.
</p>

<p><br /><br />
<link rel="stylesheet" type="text/css" href="/css/jquery.openCarousel.css" /></p>

<style>
.example_photos {
    text-align: center;
}
    .example_photos .ocarousel_window {
        margin: 0 auto;
        background: #202020;
        border: 4px #202020 solid;
        border-radius: 12px;
        height: 180px;
        width: 900px;
    }
        .example_photos .ocarousel_window_slides img {
            padding: 8px 16px;
        }
        .example_photos_thumbs {
            text-align: center;
        }
        .example_photos_thumbs img {
            border-top: 3px #ffffff solid;
            border-left: 3px #ffffff solid;
            border-right: 3px #ffffff solid;
            border-bottom: 10px #ffffff solid;
            box-shadow: #202020 4px 4px 4px;
        }
</style>

<script src="/js/jquery.openCarousel.js"></script>

<div class="ocarousel example_photos" data-ocarousel-perscroll="3">
    <div class="ocarousel_window">
        <img src="http://www.justinmccandless.com/img/posts/qingdao/qingdao_normal_0.jpg" />
        <img src="http://www.justinmccandless.com/img/posts/qingdao/qingdao_normal_1.jpg" />
        <img src="http://www.justinmccandless.com/img/posts/qingdao/qingdao_normal_2.jpg" />
        <img src="http://www.justinmccandless.com/img/posts/qingdao/qingdao_normal_3.jpg" />
        <img src="http://www.justinmccandless.com/img/posts/qingdao/qingdao_normal_4.jpg" />
        <img src="http://www.justinmccandless.com/img/posts/qingdao/qingdao_normal_5.jpg" />
        <img src="http://www.justinmccandless.com/img/posts/qingdao/qingdao_normal_6.jpg" />
        <img src="http://www.justinmccandless.com/img/posts/qingdao/qingdao_normal_7.jpg" />
        <img src="http://www.justinmccandless.com/img/posts/qingdao/qingdao_normal_8.jpg" />
        <img src="http://www.justinmccandless.com/img/posts/qingdao/qingdao_normal_9.jpg" />
        <img src="http://www.justinmccandless.com/img/posts/qingdao/qingdao_normal_10.jpg" />
    </div>
    <br />
    <a href="#" data-ocarousel-link="left" style="float: left;">Previous</a>
    <a href="#" data-ocarousel-link="right" style="float: right;">Next</a>
    <br />
    <div class="example_photos_thumbs">
        <a href="#" data-ocarousel-link="0"><img src="http://www.justinmccandless.com/img/posts/qingdao/qingdao_small_0.jpg" /></a>
        <a href="#" data-ocarousel-link="1"><img src="http://www.justinmccandless.com/img/posts/qingdao/qingdao_small_1.jpg" /></a>
        <a href="#" data-ocarousel-link="2"><img src="http://www.justinmccandless.com/img/posts/qingdao/qingdao_small_2.jpg" /></a>
        <a href="#" data-ocarousel-link="3"><img src="http://www.justinmccandless.com/img/posts/qingdao/qingdao_small_3.jpg" /></a>
        <a href="#" data-ocarousel-link="4"><img src="http://www.justinmccandless.com/img/posts/qingdao/qingdao_small_4.jpg" /></a>
        <a href="#" data-ocarousel-link="5"><img src="http://www.justinmccandless.com/img/posts/qingdao/qingdao_small_5.jpg" /></a>
        <a href="#" data-ocarousel-link="6"><img src="http://www.justinmccandless.com/img/posts/qingdao/qingdao_small_6.jpg" /></a>
        <a href="#" data-ocarousel-link="7"><img src="http://www.justinmccandless.com/img/posts/qingdao/qingdao_small_7.jpg" /></a>
        <a href="#" data-ocarousel-link="8"><img src="http://www.justinmccandless.com/img/posts/qingdao/qingdao_small_8.jpg" /></a>
        <a href="#" data-ocarousel-link="9"><img src="http://www.justinmccandless.com/img/posts/qingdao/qingdao_small_9.jpg" /></a>
        <a href="#" data-ocarousel-link="10"><img src="http://www.justinmccandless.com/img/posts/qingdao/qingdao_small_10.jpg" /></a>
    </div>
</div>

<p><br /><br /><br /><br /></p>

<p>
    Here is the HTML to set that up:
</p>

<p><br /><br /></p>

<script src="https://gist.github.com/justinmc/9160645.js"></script>

<p><br /><br /></p>

<p>
    Simple.  All of the detail is in the javascript.  The linked thumbnails were done with the simple linking system that scrolls to the given slide in <span class="code">data-ocarousel-link</span>, but it shows the cool stuff you can do without even hacking the javascript at all.  Everything else is simply a window <span class="code">.ocarousel-window</span> that you can set to whatever size you want to view your content.  The actual slides are made up of whatever you stick inside this window.
</p>

<p>
    I rewrote the project using coffeescript this time, so all of the comments are there if you want to see how it works.  I highly recommend taking a look and changing things to suit your project if it lies beyond this initial scope.
</p>