
+++
date = "2014-02-23T16:50:45-08:00"
draft = false
title = "A Tutorial for Getting Started with Gulp"
pic = "/files/shlurp.png"
aliases = [
  "/blog/A+Tutorial+for+Getting+Started+with+Gulp"
]
+++

<p>Awhile back I wrote a <a href="http://www.justinmccandless.com/blog/A+Tutorial+for+Getting+Started+with+Grunt">tutorial covering the basics of Grunt</a>. Now that a new frontend build tool has entered the scene, I thought I'd take a look and see if I could write a simple guide for <a href="http://gulpjs.com/">Gulp</a> at the same level. This guide will take you from installation and getting set up through examples of real world build processes while laying out all of the tools out there to help you on the way.</p>

<h2 id="resources">Resources</h2>

<p>This article aims to be thorough, but you'll also be referring to a few other resources while working with Gulp.</p>

<p>The <a href="https://github.com/gulpjs/gulp/">Gulp Github repo</a> is the main place to go for help. The README has a nice sample gulpfile, and the repo also contains <a href="https://github.com/gulpjs/gulp/tree/master/docs">Gulp's documentation</a>. The <a href="https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md">getting started doc</a> shows you how to install and create a blank gulpfile.</p>

<p>The <a href="http://gulpjs.com/">Gulp website</a> mainly just refers to the Github repo, but it does contain an invaluable <a href="http://gulpjs.com/plugins/">plugin directory</a> as well.</p>

<h2 id="whyafrontendbuildtool">Why a Frontend Build Tool?</h2>

<p>Sure you can just upload your raw development files to a web server and call it a day, but there are a lot of tools out there that can make a developer's life a lot easier, from <a href="http://coffeescript.org/">CoffeeScript</a> to <a href="http://www.jshint.com/">jshint</a> to <a href="http://pivotal.github.io/jasmine/">Jasmine</a> testing. If you're going to utilize even a very simple build process, a tool like Gulp can make things much more automated.</p>

<p>Gulp is a command line tool that you run at various points in your build process?—?or even continuously. If your build process previously consisted of compiling <a href="http://sass-lang.com/">Sass</a> and minifying your JavaScript, Gulp could handle both of those for you at once, and it's much easier to configure than a bunch of bash commands. Even more importantly, it's portable thanks to npm, so you can build on any machine you check out your repo to after a simple <code>npm install</code>.</p>

<h2 id="gulpandgrunt">Gulp and Grunt</h2>

<p>The main difference you'll want to keep in mind between <a href="http://gruntjs.com/">Grunt</a> and Gulp is that Grunt is controlled through configuration and Gulp is controlled through code. You tell Grunt what to do through a json file, but you create your Gulp build process by writing JavaScript and invoking Gulp's API.</p>

<p>Besides that, you've got two pretty similar tools. Both have the goal of automating your frontend build process. Both are written mainly in Node and set up with a variety of plugins using npm. And both have a friendly root level file to tell them what to do (Gruntfile.js and gulpfile.js).</p>

<h2 id="installation">Installation</h2>

<p>The documentation contained in the <a href="https://github.com/gulpjs/gulp">Gulp Github repo</a> for getting up and running is actually quite effective, so check out the <a href="https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md">official getting started guide</a> referenced above. You'll just be installing Gulp globally and then locally to your project using npm, so make sure you have <a href="http://nodejs.org/">Node</a> installed. Just two simple commands here:</p>

<p><br /></p>

<pre><code>npm install -g gulp
npm install --save-dev gulp
</code></pre>

<p><br /></p>

<h2 id="helloworld">Hello World</h2>

<p>You can continue with the getting started guide to create a minimal gulpfile. Here's what my idea of a super basic one might look like:</p>

<script src="https://gist.github.com/justinmc/9179795.js"></script>

<p>You could now jump back to the command line and run this with the command <code>gulp</code>. As you can probably tell, the only thing this does is output 'Hello world. '</p>

<p>Let's take a look at what 's going on in this gulpfile. The first thing you might notice is that this is just JavaScript, it's not a json config file like with Grunt. It's using Node's require function to include <code>gulp</code>, then defining a task.</p>

<p>Tasks are the same concept from Grunt: you can define arbitrary tasks and run them from the command line with <code>gulp <taskname></code>. <code>default</code> is the task called when no parameter is given. In Gulp though, tasks are just functions, and you can place whatever code you want inside of them.</p>

<h2 id="ausefulgulpfilecopyingfiles">A Useful Gulpfile - Copying Files</h2>

<p>Now to a gulpfile that does something useful. This is might be a setup you have for a simple <a href="http://yeoman.io/">Yeoman</a> style app/ working directory and dist/ production directory. All it does is copy the javascript and html from the app/ directory to the dist/ directory.</p>

<script src="https://gist.github.com/justinmc/9179801.js"></script>

<p>Let's look at that <code>paths</code> object we're defining. That's not something specific to Gulp - remember, we're just writing JavaScript here. We can define any sort of variable we like and use it however. Just notice the actual path strings I'm setting. They work just like in Grunt, so <code>**</code> is a wildcard meaning this and any subdirectory, and <code>*</code> is a typical wildcard for the filename. Prepending a path with an exclamation mark tells Gulp to exclude that directory.</p>

<p>In Gulp, you define the instructions for each task in a function passed as an argument to the task. <code>gulp.src</code> takes an array of source paths. <code>gulp.dest</code> copies results to a given directory. And <code>pipe</code> chains tasks together.</p>

<p>Note how I'm concatenating the two paths arrays we defined in <code>paths</code>. Again, you might be used to being stuck in the confines of Grunt's configuration specifics, but here we're just passing a parameter to a function. <code>gulp.src</code> accepts an array of paths, so we can pass that however we want.</p>

<p>Try this gulpfile out if you want, and you'll see the specified .html and .js files in the app/ directory will be copied into the new dist/ directory.</p>

<h2 id="arealgulpfile">A Real Gulpfile</h2>

<p>Let's take a look at one more example, this time something you might find in a real app. The main idea for this gulpfile is similar to our above example; we're still building development files from an app/ folder into a production dist/ folder, we're just doing a little bit of processing in between.</p>

<script src="https://gist.github.com/justinmc/9149719.js"></script>

<p>We're using five new plugins this time around: gulp-clean, gulp-jshint, gulp-concat, gulp-uglify, and gulp-imagemin. You can see the full list of plugins in the plugin directory on the Gulp site. Just like in Grunt, when you use a new plugin in Gulp, you'll have to install it with npm. So to install these plugins and write them to your package.json, use something like this:</p>

<p>npm install --save-dev gulp-clean gulp-jshint gulp-concat gulp-uglify gulp-imagemin</p>

<p>Notice the default task definition down towards the bottom of this gulpfile. You can define a task as a sequence of other tasks by passing an array of task names instead of a function. Here, the default task runs <code>clean</code>, <code>scripts</code>, <code>imagemin</code>, and <code>copy</code>, so let's take a close look at each of these.</p>

<h3 id="gulpclean"><a href="https://github.com/peter-vilja/gulp-clean">gulp-clean</a></h3>

<p>This plugin will simply delete files for you, allowing you to get rid of old or transitional files. The first thing this gulpfile does is run gulp-clean on the production dist/ directory, just to make sure that nothing created in a previous build and later removed in app/ could be lingering around.</p>

<h3 id="scripts">scripts</h3>

<p>The scripts task is going to lint and uglify all of the app's JavaScript, concatenate it all into one file, and output it into our production directory.</p>

<h3 id="gulpjshint"><a href="https://github.com/wearefractal/gulp-jshint">gulp-jshint</a></h3>

<p><code>jshint</code> is a great tool for catching errors and bad habits in your code, and this plugin just runs it on the given files. Note that we also need to use a reporter here if we want to see jshint's output on the command line. <code>jshint.reporter('default')</code> is fine if you're not picky about what it shows you, but go ahead and look at the <a href="https://github.com/wearefractal/gulp-jshint">Github repo</a> if you want to get more specific. And don 't forget that this plugin will be looking in the root of your project for a <code>.jshintrc</code> file to get your configuration preferences.</p>

<h3 id="gulpuglify"><a href="https://github.com/terinjokes/gulp-uglify">gulp-uglify</a></h3>

<p>This plugin will minify your code by removing extra whitespace and other stuff that only matter to a human reader, not the browser. Pipe in the files you want it to operate on like normal.</p>

<h3 id="gulpconcat"><a href="https://github.com/wearefractal/gulp-concat">gulp-concat</a></h3>

<p>This will concatenate all given files into one file to reduce the number of HTTP requests required to get your code. Just pass in the filename that you want it output as. Note that you should still add a <code>gulp.dest</code> to the end of this to actually output the file into a given directory like normal.</p>

<h3 id="gulpimagemin"><a href="https://github.com/sindresorhus/gulp-imagemin">gulp-imagemin</a></h3>

<p>This plugin reduces the weight of your images. Here it's used with <code>gulp.src</code> and <code>gulp.dest</code> like normal to output the final files to the production folder.</p>

<h3 id="multipleinstructionsinonetask">Multiple Instructions in One Task</h3>

<p>The copy task is very basic, just like in the previous example. Notice that this time we're creating multiple sets of instructions in one task, copying independent <code>gulp.src</code> files to independent <code>gulp.dest</code> destinations within the task function. This is perfectly OK in Gulp. Once again, it 's just JavaScript.</p>

<h3 id="cwdoption">cwd Option</h3>

<p>Note the cwd parameter I'm passing to gulp.src in most tasks. The basic usage of this does what you might expect, changing the working directory of the task so you don't have to repeat redundant subdirectories on all of your paths.</p>

<p>It can also be used to tell Gulp to preserve your directory structure when outputting files, however. If you use the directory wildcard in your cwd like <code>app/**</code> in the libs portion of the <code>copy</code> task, Gulp will compare the directories it finds there with the paths provided in the base path in the first parameter, and use this to reconstruct your directory structure in the output. If this is omitted, all of your output files will be flattened into a single directory level.</p>

<h3 id="watch">watch</h3>

<p>The last thing to notice in this gulpfile is the <code>watch</code> task. This watches the given path for any files to change, and executes the array of tasks when they do. This is great for when you're in the middle of development. It's a pain to switch to the terminal and run <code>gulp</code> every time you make a small change, so set up a watch task like this to save you the trouble. It's not included in the <code>default</code> task here, so keep in mind you would run it with <code>gulp watch</code> from the command line.</p>

<h3 id="tasksinparallelandseries">Tasks in Parallel and Series</h3>

<p>A big caveat to watch out for when using Gulp is that <strong>all tasks are executed in parallel by default</strong>.  This is very useful, but can cause problems if you're not careful.</p>

<p>In the gulpfile above, our clean task must complete before any of our tasks that output files into the dist/ folder (scripts, imagemin, and copy).  We indicate that by passing <code>['clean']</code> in as the second parameter to the definitions of these tasks.  This parameter is an array of any tasks that need to complete before the task being defined is run, so you can include as many as you want.</p>

<p>Just make sure that your task that you want to complete first returns the Gulp stream (which is the result of a Gulp operation) when it completes, as done above in the clean task.  This tells Gulp that it has completed.  You can also take a callback as the parameter to your task and call it when the task completes, in case you aren't generating a stream.  The <a href="https://github.com/gulpjs/gulp/blob/master/docs/recipes/running-tasks-in-series.md">documentation explains this in detail</a></p>

<h2 id="fromhere">From Here</h2>

<p>You should be able to set up the build process for a sizeable app with this guide alone, but I hope you don't stop there with learning Gulp. Don't forget to refer to the <a href="http://gulpjs.com/plugins/">Gulp plugin directory</a> to get ideas on how you can use Gulp to automate much more than is covered in this article. There are already hundreds of plugins available, but Gulp is still lagging far behind Grunt in this area. If you're feeling really adventurous, check out the <a href="https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md">documentation on creating your own plugin!</a></p>

<p><br />
<em>Update 2014.04.13</em>
I added the above clarification about tasks in parallel and series due to running into problems with this in my own Gulp projects.</p>