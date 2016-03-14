
+++
date = "2014-12-13T16:52:26-08:00"
draft = false
title = "A Starting Point for Routed Meteor Apps"
pic = "/files/meteor-logo-pages-small.png"
+++

<p>There are a lot of really cool demos out there for simple, single page Meteor apps.  When you want to get a bit more practical and add a few different states with routes, Meteor still works great, but the initial work for getting this running can be a bit more strenuous.  This post and my open source boilerplate project <a href="https://github.com/justinmc/meteorplate">Meteorplate</a> aim to help get you up and running in the shortest time possible.</p>

<p><br /></p>

<h2>Get Started Now</h2>

<p>If you want to play around with this and see if it fits your app, <a href="http://meteorplate.meteor.com">check out the live demo</a>.  If you want to jump into the code right now, clone the <a href="https://github.com/justinmc/meteorplate">Meteorplate Github repo</a>, run <code>meteor</code>, and start hacking on your app.</p>

<p><br /></p>

<h2>Meteorplate</h2>

<p>Back in the early days of Meteor, I recommended using the Backbone router and views to solve this problem <a href="http://www.justinmccandless.com/blog/A+Starting+Point+for+Meteor+and+Backbone+Apps">in another article</a>.  Since then, Meteor has come a long way, and the community around it has too.  This time around, we're going to solve this problem in Meteor 1.0+ using native Meteor templates directly as views and the widely used <a href="https://github.com/EventedMind/iron-router">Iron Router</a> for routes.</p>

<p>With just a little boilerplate, we'll allow page structure to be rendered with a changing main view, permissions for pages based on user accounts, and even let Google Analytics track page changes.  All this will still be reactive and take full advantage of Meteor's live real-time setup.</p>

<h2>App Structure</h2>

<p>Meteorplate is fittingly using <a href="http://html5boilerplate.com/">HTML5 Boilerplate</a>, along with the typical Meteor <code>client/</code>, <code>public/</code>, and <code>server/</code> directories at the top level, so the folder structure should be familiar.  Inside of <code>client/</code>, we've put all of the templates in the <code>templates/</code> directory as plain html (such as <a href="https://github.com/justinmc/meteorplate/blob/master/client/templates/home.html">this one for the homepage</a>).</p>

<p>Inside <code>client/js/</code>, <a href="https://github.com/justinmc/meteorplate/blob/master/client/js/main.js">main.js</a> kicks off the app and sets everything up for Meteor.  The <code>views/</code> director contains all definitions of template methods and events (such as the <a href="https://github.com/justinmc/meteorplate/blob/master/client/js/views/colors.js">colors page view</a>).</p>

<p>The last big piece is where we use Iron Router in <a href="https://github.com/justinmc/meteorplate/blob/master/client/js/routes.js">routes.js</a>.  In here, we've just provided a light wrapper around Iron Router's usual functionality in order to provide the nice features mentioned above.  To add a route, just define a new Iron Router route in the <code>define</code> method and call <code>render()</code> with the Meteor template that you want to render.</p>

<p><br /></p>

<p>All of this will provide you a nice setup for a fully featured Meteor app.  To get started, clone the <a href="https://github.com/justinmc/meteorplate">Meteorplate repo</a> and start building your app quickly on top of this solid foundation.</p>