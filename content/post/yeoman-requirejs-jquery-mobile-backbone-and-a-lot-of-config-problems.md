
+++
date = "2013-03-18T08:19:56-07:00"
draft = false
title = "Yeoman, Requirejs, jQuery Mobile, Backbone, and a Lot of Config Problems"
pic = "/files/front.png"
+++

<p>
The helpfulness of using several third party tools can have a price when you try to get them to all play nice together, as I learned when using the combination of Yeoman, Requirejs, jQuery Mobile, and Backbone.  There is a lot of help out there though; the jQuery Mobile site itself has an <a href="http://jquerymobile.com/test/docs/pages/backbone-require.html">example on using jQuery Mobile, Backbone, and Requirejs</a> together, and on Stack Overflow there are plenty of <a href="http://stackoverflow.com/questions/10904433/jquery-mobile-require-js-and-backbone">helpful questions</a> and answers on <a href="tp://stackoverflow.com/questions/9522421/separating-jquery-mobile-1-1-0-from-amd-requirejs">similar</a> <a href="http://stackoverflow.com/questions/9522421/separating-jquery-mobile-1-1-0-from-amd-requirejs
http://stackoverflow.com/questions/10288483/how-to-get-jquery-mobile-and-dependend-plugins-to-work-with-require-js">combinations</a>.  But when it came time for me to hit <span class="code">yeoman build</span> on my particular setup, nothing given on the internet worked quite as expected.  Here is the working setup that I finally found.
</p>
<br /><br />
<p>
The closest thing that I could find online to my very complicated setup was <a href="http://stackoverflow.com/a/10953809/257494">this Stack Overflow answer</a>.  After a bit more tweaking I was able to get mine working with the following setup.  This is my working main.coffee file:
</p>
<br />
<script src="https://gist.github.com/justinmc/4705499.js"></script>
<br />
<p>
And here is my jquery.mobile.config, which sets the necessary config parameters in jquery mobile at just the right time:
</p>
<pre class="code">
define(['jquery'], function ($) {

    $(document).on("mobileinit", function () {
        // Prevents all anchor click handling
        $.mobile.linkBindingEnabled = false

        // Disabling this will prevent jQuery Mobile from handling hash changes
        $.mobile.hashListeningEnabled = false

        //$.mobile.ajaxEnabled = false;
        //$.mobile.pushStateEnabled = false;
    });

});
</pre>
<br />
<p>
Notice the very specific order that things are loaded.  You need your jQuery Mobile configuration to set the `mobileinit` event before jQuery Mobile itself is loaded.  On top of that, your router can't change the page until after jQuery Mobile has loaded and the `pageinit` event has fired for your first page.  It's a delicate balance to get right using the Requirejs setup, and it's made even more difficult by how strictly `yeoman build` puts everything together.
</p>
<p>
Also notice that fastButtons and toolbarPolyfill are jQuery Mobile plugins, so you can get plugins to work as well by following this order.  App.init() is simply where I instantiate my Backbone app, including the router, in the referenced "app" file.
</p>
<br />
<p>
If you find yourself with a slightly different configuration and still can't quite get it to build, there are plenty of other permutations to check out on stack overflow and elsewhere.  Take a look at all of the links in my first paragraph and good luck.
</p>