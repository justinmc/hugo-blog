
+++
date = "2014-03-10T00:03:32-07:00"
draft = false
title = "Building a Requirejs Project to a Single, Reusable File"
pic = "/files/requirejssingle2.png"
aliases = [
  "/blog/Building+a+Requirejs+Project+to+a+Single,+Reusable+File",
  "/blog/building+a+requirejs+project+to+a+single,+reusable+file"
]
+++

<p><a href="http://requirejs.org/">Requirejs</a> is great for breaking up JavaScript projects into multiple files, but what happens when you want to use your Requirejs code in another project?  Ideally, no one should have to individually import your modules, or even use Requirejs at all.  Luckily this is all part of the plan for Requirejs projects, and with a bit of tweaking with the finicky r.js tool, you'll be able to build to a single file with no dependencies.</p>

<h2 id="setup">Setup</h2>

<p>We'll be using two tools to do this: the command line <a href="https://github.com/jrburke/r.js">r.js</a> tool, and <a href="https://github.com/jrburke/almond">almond</a>.  Feel free to use <a href="http://gruntjs.com/">Grunt</a> or <a href="http://gulpjs.com/">Gulp</a> with their respective Requirejs plugins <a href="https://github.com/gruntjs/grunt-contrib-requirejs">grunt-contrib-requirejs</a> and <a href="https://github.com/weisuke/gulp-module-requirejs">gulp-module-requirejs</a> instead of the command line tool itself, as the config is exactly the same, but in this article we'll use the command line tool for simplicity.</p>

<p>Start off by installing r.js via npm:</p>

<pre><code>npm install -g requirejs
</code></pre>

<p>Also grab the almond.js file either from the <a href="https://github.com/jrburke/almond">repo</a> or from bower:</p>

<pre><code>bower install almond
</code></pre>

<p><br></p>

<h2 id="thecommandlinetool">The Command Line Tool</h2>

<p>You can find the official documentation for compiling a Requirejs project into one file under the <a href="http://requirejs.org/docs/optimization.html">optimization section of the Requirejs site</a>.  That means we're talking exclusively about using r.js with the <code>-o</code> flag, which is used like this:</p>

<pre><code>r.js -o <build configuration>
</code></pre>

<p>Your build configuration can be one of two things.  It can be a path to your build file, or it can be your series of options directly on the command line.  In this article we're going to use a separate build file for clarity, but first an important distinction:</p>

<p><strong>Your main Requirejs file is not the same thing as your build file.</strong></p>

<p>You've probably written a main file for Requirejs before that looks something like this:</p>

<script src="https://gist.github.com/justinmc/9460674.js"></script>

<p>The config section might look similar to some of the build parameters given on the Requirejs site under optimization, but this is not what's used directly by <code>r.js -o</code>; you need a separate build configuration.</p>

<h2 id="buildconfig">Build Config</h2>

<p>The <a href="http://requirejs.org/docs/optimization.html">Requirejs optimization page</a> also gives a description of most of the parameters used in the build file, and there is also a <a href="https://github.com/jrburke/r.js/blob/master/build/example.build.js">super detailed example in the repo</a>.  Our basic build file for the sake of this article looks like this:</p>

<script src="https://gist.github.com/justinmc/9460650.js"></script>

<p>Here, r.js would be run from the root of the project (containing the <code>app/</code> folder) like this:</p>

<pre><code>r.js -o build.js
</code></pre>

<p>This build file references a Requirejs config file with <code>mainConfigFile</code>; again note that they are two different things.  r.js will look in the given config file for any Requirejs config given with <code>requirejs.config</code>.  Most importantly, it will grab your <code>paths</code> parameter from there and use those paths to find all of your modules.  If you're not using a <code>mainConfigFile</code> parameter in your build file, you can also specify the paths here, but this approach of referencing the config file avoids needing to repeat information.</p>

<p><code>baseUrl</code> determines the directory for the later <code>include</code> parameter and also for the paths given in the config file.</p>

<p><code>out</code> gives the output file path relative to where r.js was run.</p>

<p>The <code>optimize</code> parameter here is just telling r.js to minify the code when it concatenates everything, which is nice for your build process but not necessary.</p>

<p><code>include</code> points to an array of main Requirejs files to include, or just the single main file in our case.  Other files specified by <code>paths</code> will still be included without repeating them here.  Note that this main file is the same as our <code>mainConfigFile</code>.  That's because the this file contains our config as well as the entry point for our app and is used independently for each.</p>

<p>The <code>name</code> parameter is pointing to almond, relative to our <code>baseUrl</code>, which will include almond in the build process.</p>

<p>Keep in mind that r.js is incredibly finicky about these paths and you must get everything perfectly right!</p>

<h2 id="theresult">The Result</h2>

<p>Running this setup will gather all files in your project, concatenate them, minify them, and output them into the specified output file in a way that can be used by external projects.</p>

<p>However, if you're not using almond, you'll notice that the user of your project still needs to include Requirejs!</p>

<h2 id="almond">Almond</h2>

<p>Almond allows you to build to a file without depending on Requirejs.  It's a bare bones AMD loader that replaces the minimal needed functionality of Requirejs and sticks itself into your final built file.</p>

<p>If you included almond in the <code>name</code> attribute in your build file as shown above, your output file will be ready to go.</p>

<h2 id="fromhere">From Here</h2>

<p>Requirejs can add a lot of headaches with how finicky it can be, but the benefits of breaking up your JavaScript nicely with AMD are pretty great.  Stick to a configuration similar to the above and you should be able to get your setup working smoothly.  And don't forget that you can stick the parameters in your build file into the task options for Grunt and use this easily in your build process.</p>