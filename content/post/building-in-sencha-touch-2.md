
+++
date = "2012-07-18T06:16:19-07:00"
draft = false
title = "Building in Sencha Touch 2"
pic = "/files/sencha.jpg"
+++

Sencha released some big changes in their build process with
    Sencha Touch 2.0, but unfortunately right now there is an obvious lack of documentation on how
    to use it.&nbsp; After a lot of work building my app, I thought I'd write
    out some pointers for others having similar problems building Sencha Touch apps.<br>

    <br>

    <br>

      First of all, there are a couple of things that you need to make
    sure you're doing right before you start.<br>

    <br>

    <br>

1. Include all dependencies in app.json, and none in index.html.&nbsp; Do
    not do any normal js or css includes in index.html like these:<br>

    <br>


<pre>
&lt;link rel="stylesheet" href="style.css"&gt;
&lt;script type="text/javascript" src="jquery.js"&gt;&lt;/script&gt;
</pre>

    <br>

      Instead, include these files in Sencha Touch's app.json in the
    js and css arrays.&nbsp; Be sure to set "update": "delta" unless you
    don't want a file to be updated.<br>

<br>

However, do not just copy the app.js format and say <span class="code">"bundle": true</span> on a 
js file you're including.&nbsp; I made this admittedly stupid mistake, and 
my app would not start when I built to the package and native 
environments.&nbsp; I got console errors saying <span class="code">"Uncaught Error: 
[Ext.Loader] Failed loading 
'file:///Users/apps/Documents/repositories/smartots/www/ParentAppActivityFeedPack/www/sdk/src/event/Dispatcher.js', 
please verify that the file exists"</span>.&nbsp; Removing that <span class="code">"bundle": true</span> line 
fixed the problem after a ton of troubleshooting.
<br>

    <br>

    2.&nbsp; Under Build Options in app.json, ensure that logger is set to
    false (that's boolean false, not false in quotes, or "no", or
    anything like that).&nbsp; This caused me huge headaches until I stumbled
    onto a <a href="http://www.sencha.com/forum/archive/index.php/t-228747.html?s=0a4e841fec6ea2b91ef484d4eae5b587">random helpful post in the Sencha forums</a>.&nbsp;
    So you're Build Options might look like this:<br>

    <br>


<pre>    
/**
 * Build options

 */
"buildOptions": {
  "product": "touch",
  "minVersion": 3,
  "debug": false,
  "logger": false
},
</pre>

    <br>

    <br>

      Now you can start the actual build.&nbsp; You should not use the <a href="http://docs.sencha.com/touch/2-0/#%21/guide/building">old
    process that is still in the documentation</a>.&nbsp; Instead,
    there is a new command that will build things the new way.&nbsp; It
    actually can be found in the documentation, but for some reason it's
    buried on the <a href="http://docs.sencha.com/touch/2-0/#%21/guide/command">Sencha Command page</a> instead of the
    out of date Using and Creating Builds page linked above.&nbsp; Be sure to
    check out that Sencha Command page, because it provides a good
    explanation of the different build environments you'll have to
    choose from and gives some troubleshooting help.<br>

    <br>

    Now <span class="code">cd</span> into your application's webroot and go ahead and type the base
    command to get a description of how to use it:<br>

    <br>


<pre>$ sencha app build
</pre>

    <br>

      You'll see a shorter description of each build environment and
    some example build commands.&nbsp; Make sure you use the -d flag and
    build to a new directory if you don't want to disrupt your
    development files.&nbsp; If you're ready, run a build command based on what
    you want, something like this:<br>

    <br>


<pre>$ sencha app build -e testing -d /path/to/deploy/myapp
</pre>

    <br>

      The app should build to your deploy directory and work like the
    development version, except much smaller and faster and bundled as specified.<br>

    <br>

    If you're build either failed with an error, or your built app won't start, there are a few things you can try.
    Make sure you try building the most basic versions first to help pinpoint the problem.  If you want to build 
    <span class="code">-e production</span>, try building <span class="code">-e testing</span> first and see
    if it works.  Same thing with <span class="code">-e native</span> and <span class="code">-e package</span>.
    Also, make sure you've read my pitfalls in this article and learn from my mistakes!
    <br>

      When I was first trying this without changing logger to false in
    the build options, my app wouldn't get past Sencha's flashing
    loading screen.&nbsp; I got console errors telling me there were problems
    with the Logger.js file like <span class="code">"The following classes are not declared
    even if their files have been loaded: 'Ext.log.Logger'"</span>.&nbsp; Manually
    including Logger.js just brought problems with other files instead.&nbsp;
    Finally changing logger to false fixed it.<br>

    <br>

      I also once or twice ran into a built project rendering a
    correct looking but completely disabled UI on the screen.&nbsp; This
    seemed to have been caused by building a working build on top of an
    older broken one.&nbsp; I fixed it just by deleting the entire directory
    and building again to an empty directory.<br>

    <br>

      Finally, in case you're interested, here is another useful link
    if you're looking to understand how the new build process works a
    bit more, from Sencha's blog:
    <a href="http://www.sencha.com/blog/behind-sencha-command-and-the-build-process/">http://www.sencha.com/blog/behind-sencha-command-and-the-build-process/</a>.<br>

    <br>

      I hope this guide helps someone out there, and good luck with
    Sencha Touch.<span id="pastemarkerend">&nbsp;</span>