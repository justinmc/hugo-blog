
+++
date = "2014-10-12T18:05:27-07:00"
draft = false
title = "Sharing JavaScript Between the Front and Back End"
pic = "/files/frontback.png"
aliases = [
  "/blog/Sharing+JavaScript+Between+the+Front+and+Back+End"
]
+++

<p>There are a lot of advantages to running Nodejs, but one that's not taken advantage of as much as it could be is sharing code between the front and back ends.  You're running the same language on both sides of the stack, so why rewrite code that's run on both?</p>

<p>You can get pretty fancy with this.  If you're familiar with <a href="http://www.meteor.com">Meteor</a>, you know how easy this platform makes it to forget the distinction between frontend and backend altogether.  Even without a huge framework though, doing something like sharing data models on both sides is quite a nifty trick to prevent having to write things like validation twice.</p>

<p>One place that this sort of code sharing can quickly and easily make a difference is in config.  You probably have a few constants that are needed by both the frontend and backend, and instead of defining them twice or fetching them from the server, you can simply share the config code on both sides.</p>

<p>Here's how that might look:</p>

<script src="https://gist.github.com/justinmc/e143e7ff5027db2eba86.js"></script>

<p>This code could be run by the frontend and the backend without any trouble.  On the frontend, config would be assigned as a global variable, and on the backend, it would be exported as a node module.  All in the same file, without repeating any config.</p>

<p>This is a super simple example, but if you have been repeating any code in your javascript front and back ends, I hope you see how easy it is to share code to both.</p>