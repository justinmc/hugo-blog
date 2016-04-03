
+++
date = "2012-08-02T18:21:13-07:00"
draft = false
title = "Getting a Very Simple Backbone.js Project Up and Running"
pic = "/files/backbone.png"
aliases = [
  "/blog/Getting+a+Very+Simple+Backbone.js+Project+Up+and+Running",
  "/blog/getting+a+very+simple+backbone.js+project+up+and+running"
]
+++

<p>The other weekend I found myself feeling unsatisfied about the data management of a javascript based side project I'm working on, and I decided to take the day and get organized.  I wanted to set it up in an available framework, so I jumped on the opportunity to try out backbone.js since I had read about it previously.  In this article, I'll show the process of getting the most basic backbone.js setup just for organizing your data.
<br></p>

<p><br></p>

<p>Backbone provides a nice full MVC style framework for organizing and displaying your data, but what I wanted initially with my already built app was much simpler.  I just wanted to organize the structure of my data using a model, manage the ajax and the whole data set using a collection, and tie that directly into my app.  After a bit of tinkering, I found out that this is possible, and not too hard.
<br></p>

<p>Just as a side note, the V and C sides of backbone's MVC framework that I'm leaving out here are actually quite simple and flexible, and if they fit your app well, you might want to plan to implement those right off the start as well.  Another big reason that I did not at first is because I am working mainly with SVG and canvas, and backbone's views don't tie in to these quite as easily as they do to the usual html objects.
<br></p>

<p><br></p>

<p>Alright now that that is out of the way, let's look at my example of a super simplified task to-do type of app.  This follows the nice documentation on <a href="http://backbonejs.org">http://backbonejs.org</a> pretty closely, so definitely keep that page handy if you attempt this.  The way I set this up was in three steps centered around three files.
<br></p>

<p><br></p>

<h4>1.  models/task.js</h4>

<p><br>
First of all the most fun part, where you get to set up how each item of data will look.  You can just declare the variable of your model in this file with no other overhead and get to filling it out.  The good stuff goes in "defaults", and you'll also at least need a "clear" function.  Just return the default data item in "defaults", and keep the "clear" function as it is unless you're do something much fancier than I am.
<br></p>

<pre>   
var Myapp_Task = Backbone.Model.extend({

    // The default values for a task
    defaults: function() {
        // get current date
        var now = new Date;
        var date = now.getUTCFullYear() + '-' + now.getUTCMonth() + '-' + now.getUTCDate() + 'T' + now.getUTCHours() + ':' + now.getUTCMinutes() + ':' + now.getUTCSeconds() + '.000Z';
        return {
            title: 'New Task',
            updated: date,
            status: 'needsAction',
            completed: null
      };
    },

    // Any functions you need go here

    // Destroy the task
    clear: function() {
      this.destroy();
    }
});
</pre>

<p><br></p>

<p><br></p>

<h4>2. collections/tasks.js</h4>

<p><br>
Now set up the collection in a similar way, which at its bare minimum is just where to get the data and a reference to your model.
<br></p>

<pre>
var Myapp_TaskList = Backbone.Collection.extend({

    // Reference the model you made!
    model: Myapp_Task,

    // Url to call to get the task list (mine is just a static local file)
    url: '/js/tasklist.json',
    // Any functions you need go here
});
</pre>

<p><br></p>

<h4>3.  index.html</h4>

<p><br>
That's it, we can already get over to our app.  We'll need to bootstrap our new backbone stuff for best practice first, and then we can go ahead and use it.  Be sure to include backbone.js itself, then your model file, and then your collection file in the html.  After this open a script tag and a <span class=""code"">window.onload</span>, and we'll bootstrap and use the framework here.
<br></p>

<p>Backbone's definition of good practice bootstrapping means manually writing your initial javascript array into your code so you can have something to work with before an ajax call is made.  If you're using a server-side language like PHP or Ruby then this isn't too hard:
<br></p>

<pre>
&lt;script&gt;

// bootstrap backbone
window.onload = function(){

    // create an instance of your collection
    var mytasks = new Myapp_TaskList;

    // use the reset function to set your initial pre-ajax data
    mytasks.reset(<?php echo file_get_contents('js/tasklist.json'); ?>);

    ...

</pre>

<p><br /></p>

<p>And that's it, everything is set up, loaded, and ready to use in your app.  If you're using backbone's supplementary utility library underscore.js, you can output each item's title like this to prove it works:
<br /></p>

<pre>
&lt;script&gt;

// bootstrap backbone
window.onload = function(){

    // create an instance of your collection
    var mytasks = new Myapp_TaskList;

    // use the reset function to set your initial pre-ajax data
    mytasks.reset(<?php echo file_get_contents('js/tasklist.json'); ?>);

    // now you can use your data in your app!
    mytasks.each(function(obj, key) {
        console.log(obj.get('title'));
    });
};

&lt;/script&gt;

</pre>

<p><br></p>

<p><br></p>

<p>And now you have a working app that uses backbone.js.  A very simple example here, but I just wanted to show two things: how to set up the basics of your files and your scope to get everything up and running, and how to do that without using views and the rest of backbone.js, since these are both not as well covered in the documentation.
<br></p>

<p>Well I hope to be doing a lot more with this project soon, and now I have a much nicer data platform to build on!</p>

<p><br><br>
<i>Update 2014.04.20:</i> Here is a <a href="https://gist.github.com/justinmc/11128428">gist</a> demonstrating the full project.</p>