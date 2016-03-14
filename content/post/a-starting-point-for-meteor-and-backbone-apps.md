
+++
date = "2013-04-05T02:16:04-07:00"
draft = false
title = "A Starting Point for Meteor and Backbone Apps"
pic = "/files/miniverse.png"
+++

<p><i>Update:</i>
If you're not tied to Backbone, check out a new rewrite I did of this project with Iron Router, called <a href="http://justinmccandless.com/blog/A+Starting+Point+for+Routed+Meteor+Apps">Meteorplate</a>.
</p>

<p><br /></p>

<p>The documentation and the examples on <a href="http://www.meteor.com">meteor.com</a> do a lot to show off the awesome things Meteor can do and get you started, but I found that I was spending a ton of time just getting my app bootstrapped when I was trying to build something more structured.  After finally getting a Meteor app up and running with Backbone's pagination and view structure, I created a boilerplate project from it that should server as a great starting point for similar projects.</p>

<p><br /></p>

<p>You can check out a live demo here: <a href="http://backbone-boilerplate.meteor.com/">backbone-boilerplate.meteor.com</a> <br>

And here is the source code: <a href="https://github.com/justinmc/meteor-backbone-boilerplate">github.com/justinmc/meteor-backbone-boilerplate</a></p>

<h2><br>

Why Meteor AND Backbone?</h2>

<p>Meteor has a nice Collection system itself and its tight integration with MongoDB can cover most of the functionality of Meteor's Models.  However, its Router and View system are are not covered by Meteor at all and can be used to create a nicely paged app with a familiar structure.  This is especially handy when simpler routers like page.js don't work out of the box with Meteor.</p>

<h2><br>

How it's done</h2>

<p>The project achieves Backbone style paging combined with Meteor's data reactivity.  The main trick to this is to use <span class="code">Meteor.render</span> to reactively render a Meteor Template whenever a Backbone View is routed to.</p>

<p>If you want more detail than that, check out the <a href="https://github.com/justinmc/meteor-backbone-boilerplate">source code</a> and play around with the <a href="http://backbone-boilerplate.meteor.com/">live demo</a>.  I really hope that this project can serve as a solid starting point for people setting up an app.  If you think you have an idea for improvements, contributions are welcome on github!</p>