
+++
date = "2013-01-09T04:31:44-08:00"
draft = false
title = "A Tutorial for Getting Started with Grunt"
pic = "/files/grunt.png"
aliases = [
  "/blog/A+Tutorial+for+Getting+Started+with+Grunt"
]
+++

<p>
If you're looking for an easy way to get all of your front end code ready for production with one command, a tool called <a href="http://gruntjs.com/">grunt</a> can help you do just that.  Well, depending on your definition of easy.  Once you have it set up and know what you're doing, grunt makes it incredibly simple to compile coffeescript/sass/compass, lint your js, minify, concatenate, and a lot more.  However, since it is very new and the documentation is still not fully complete, getting your first simple build off the ground can be more tricky than just doing everything by hand one more time.  This tutorial hopes to make this first step into grunt a bit more straightforward.
</p>

<p><br /><br /></p>

<h2>The Concept of Grunt</h2>

<p>
Before we start with an example, let's take a look at what grunt does and where you can find documentation for it.  Grunt is a command line tool that runs on Nodejs and automates your JavaScript project's build process.  After installing it and the plugins you need, you create a config file Gruntfile.js (grunt.js on older versions < 4) that specifies everything that you want to happen in your build process, task by task.  Then, anytime you run the command <span class="code">grunt</span> in any directory of your project, grunt will perform all these tasks for you.
</p>

<h2>The Online Resources You'll Be Using</h2>

<p>
The most up-to-date documentation for grunt resides in its current <a href="https://github.com/gruntjs/grunt">github repo</a> (don't be mislead by creator cowboy's <a href="https://github.com/cowboy/grunt/">old github repo</a>).  The <a href="https://github.com/gruntjs/grunt/wiki">wiki</a> is where you'll find the documentation, though watch out for some incomplete sections as of this writing.
</p>

<p>
This is not everything you'll need to get started, however.  Grunt is very modular and requires plugins in order to actually function.  Even the basic functionality that may in some places be called "built-in" does not work without including its plugin.  Open up <a href="https://github.com/gruntjs">gruntjs's list of projects on github</a> to see where you'll truly find information about everything you need to get a project going.  Most importantly, the plugin <a href="https://github.com/gruntjs/grunt-contrib">grunt-contrib</a> contains all of the main functionality you expect from grunt, and the README has links to all of the main components (which themselves can be separate plugins) with documentation for each.
</p>

<h2>Getting Started</h2>

<p>
So let's assume that you already have a project you're working on, and you want to add grunt to your workflow (though don't overlook the power of <a href="https://github.com/gruntjs/grunt-init">grunt-init</a> if you're just starting a project).  Open up the <a href="https://github.com/gruntjs/grunt/wiki/Getting-started">Getting Started</a> guide from the main grunt wiki referenced above, and let's try to make sense of what you need to do to get started.
</p>

<h2>Installation (grunt v0.4)</h2>

<p>
I mentioned that grunt runs on Node, so what we'll be doing here is installing all of the node modules locally for your project using <a href="https://npmjs.org/">npm</a> (so make sure you have npm installed!).  The only package that we need to install globally (-g flag) is grunt-cli, the command line interface that can allow you to build a project that has implemented grunt simply by using the <span class="code">grunt</span> command.
</p>

<p>
So go ahead and do that by running
</p>

<p><br /></p>

<pre class="code">
npm install -g grunt-cli
</pre>

<p><br /></p>

<p>
Now you'll need to install grunt locally for your project, as well as any needed plugins.  Just like in any npm project, you can do that easily via a package.json file.  Go ahead and create a default one using this command: 
</p>

<p><br /></p>

<pre class="code">
npm init
</pre>

<p><br /></p>

<p>
Now edit the created package.json file and fill out any name/author/version parameters you want for your project.  The important parameter here will be <span class="code">devDependencies</span>, which will contain all of the dependencies for the project.
</p>

<p>
We now need to install grunt locally for our project.  The <a href="https://github.com/gruntjs/grunt/wiki/Getting-started">wiki's getting started guide</a> that we're using tells us to run the command <span class="code">npm install grunt --save-dev</span>, but this will actually install an out of date pre v0.4 version of grunt as of this writing.  Instead, just add the new version of grunt as a dependency to your package.json file, and then let npm install it from there.  So add the dependency to your package.json so it looks something like this:</p>
<br />
<pre class="code">
{
  "author": "Justin McCandless",
  "name": "gruntableProj",
  "version": "0.3.14",
  "devDependencies": {
    "grunt": "~0.4.0"
  }
}
</pre>
<br />
<p>
Then go ahead and run this command:
</p>

<p><br /></p>

<pre class="code">
npm install
</pre>

<p><br /></p>

<p>
That command tells npm to install all dependencies in your packages.json file locally, which in this case is the newest version of grunt.
</p>

<h3>Installing Plugins, Which Are Necessary!</h3>

<p>
You now have grunt installed, but it won't do much without any plugins.  To do any of the basic functionality like copy files, lint, uglify, minify, etc. you'll need to add plugins if you don't want to write all of that code over again.  As mentioned above, all of this functionality is included in the <a href="https://github.com/gruntjs/grunt-contrib">grunt-contrib</a> plugin, so let's install that.  Note that this plugin is actually a collection of all of these basic plugins, so it might introduce a little bit of bloat if you're not using all of its functionality.  Once you know exactly what functionality you want, you might want to look at the links to "Included Tasks" in <a href="https://github.com/gruntjs/grunt-contrib">grunt-contrib's README</a> and only install the ones that you will use.
</p>

<p>
Like many grunt plugins, grunt-contrib is an npm module, so we can just install it using this command:
</p>

<p><br /></p>

<pre class="code">
npm install grunt-contrib --save-dev
</pre>

<p><br /></p>

<p>
This will install grunt-contrib locally and automatically add it to our package.json.  The flag <span class="code">--save-dev</span> tells npm to put the dependency correctly under devDependencies, so anytime you install a grunt plugin, be sure to use that flag.
</p>

<h2>Setting Up Your Gruntfile</h2>

<p>
Now let's set up our grunt file to tell grunt what to do.  Create a file called Gruntfile.js and fill it with this:
</p>

<pre class="code">
module.exports = function(grunt) {

  // Configuration goes here
  grunt.initConfig({

  });

  // Load plugins here

  // Define your tasks here

};
</pre>

<p>
This is a valid grunt file, but as you might have guessed, it doesn't do anything.  Trying to run grunt now will complain about not being able to find a default task.  So let's create one!
</p>

<p>
Let's do one of the most basic things we can during our build: copy our files from our development folder to our production folder.  First of all we need to load our grunt-contrib plugin, which we already installed above.
</p>

<p><br /></p>

<pre class="code">
module.exports = function(grunt) {

  // Configuration goes here
  grunt.initConfig({

  });

  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib');

  // Define your tasks here

};
</pre>

<p><br /></p>

<p>
You'll have to include a line like this for every plugin that you install, so if you install any others using npm, don't forget to add this to include them in your grunt file.
</p>

<p>
Now let's set up our copy task.  Open the <a href="https://github.com/gruntjs/grunt-contrib">grunt-contrib README</a>, find the copy task, and click it to go to <a href="https://github.com/gruntjs/grunt-contrib-copy">copy's github repo</a>.  As for all of those tasks, the README is a great source of documentation for how to use the plugin.  Under Usage Examples you can see a great example of config for copy that should go in our grunt.initConfig in the grunt file.  Let's paste that into our grunt file, changing the directories to wherever your project's code might be:
</p>

<p><br /></p>

<pre class="code">
module.exports = function(grunt) {

  // Configuration goes here
  grunt.initConfig({

    // Configure the copy task to move files from the development to production folders
    copy: {
      target: {
        files: {
          'prod/': ['dev/**']
        }
      }
    },
  });

  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib');

  // Define your tasks here

};
</pre>

<p><br /></p>

<p>
This configuration will copy all files from the dev/ folder, including subdirectories and their contents, into the prod/ folder.  You can get a lot more fancy than this with the copy task, so if you have more complicated requirements, check out more of the README and go for it.
</p>

<p>
Now we just need to define our default task in order to get this working.  The default task is the task that is run whenever you enter the <span class="code">grunt</span> command without any parameters.  Add one more line to your grunt file so that it looks like this:
</p>

<p><br /></p>

<pre class="code">
module.exports = function(grunt) {

  // Configuration goes here
  grunt.initConfig({

    // Configure the copy task to move files from the development to production folders
    copy: {
      target: {
        files: {
          'prod/': ['dev/**']
        }
      }
    },
  });

  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib');

  // Define your tasks here
  grunt.registerTask('default', ['copy']);

};
</pre>

<p><br /></p>

<p>
Now we have a working grunt project!  Simply run the command <span class="code">grunt</span> in any folder of your project and grunt will copy the files just like we told it to.  You should see some nice output on the command line telling you that everything went well.
</p>

<h2>A Little Bit Fancier...</h2>

<p>
For me, simply getting something this simple running was the hardest part of starting to use grunt.  From here you can use any other plugin you can find by following a very similar process.  If your needs start to extend beyond grunt-contrib, you can try <a href="https://npmjs.org/">searching npm's packages</a> and installing some new plugins, or even creating your own.
</p>

<p>
Since copying files from one directory to another isn't all that useful in reality, let's try one more example with a bit more functionality.
</p>

<p>
Let's say your build process involves compiling any coffeescript files in your working directory, moving everything over to a production directory except the .coffee files, linting the javascript, and then zipping everything up into a file named after the current name and version.  There's something a little more realistic.  We can do this all with plugins included with grunt-contrib, but let's use their individual plugins to save a bit of space.
</p>

<p>
We'll need four plugins for this then: grunt-contrib-copy, grunt-contrib-coffee, grunt-contrib-jshint, and grunt-contrib-compress.  Install them with the command: 
</p>

<p><br /></p>

<pre class="code">
npm install grunt-contrib-copy grunt-contrib-coffee grunt-contrib-jshint grunt-contrib-compress --save-dev
</pre>

<p><br /></p>

<p>
Our package.json would then look something like this:
</p>

<p><br /></p>

<pre class="code">
{
  "author": "Justin McCandless",
  "name": "gruntableProj",
  "version": "0.3.14",
  "devDependencies": {
    "grunt": "~0.4.0",
    "grunt-contrib-coffee": "~0.3.2",
    "grunt-contrib-copy": "~0.3.2",
    "grunt-contrib-jshint": "~0.1.0"
    "grunt-contrib-compress": "~0.3.3"

  }
}
</pre>

<p><br /></p>

<p>
Now let's configure our grunt file.  We need to do three things for each plugin: load it with grunt.loadNpmTasks, define it as part of our default task, and include its config in grunt.initConfig.  The first two are simple: add a line for the plugin name and then include it in your default task just like before.  Getting the config right probably means finding the plugin in <a href="https://github.com/gruntjs/grunt-contrib">grunt-contrib's README</a> and then reading a bit of its documentation, but it's the same idea as before.  When we've done that for each of the tasks in our requirement stated above, the grunt file might look like this:
</p>

<p><br /></p>

<pre class="code">
module.exports = function( grunt ) {

  // Configuration goes here 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Coffee to JS compilation
    coffee: {
      app: {
        src: ['dev/scripts/**.coffee'],
        dest: 'prod/scripts/**.js'
      }
    },

    // Move other files to production folder
    copy: {
      target: {
        files: {
          'prod/': ['dev/*.html', 
                    'dev/styles/**', 
                    'dev/images/**', 
                    'dev/scripts/**.js']
        }
      }
    },

    // Lint the javascript
    lint: {
      files: [
        'grunt.js',
        'prod/scripts/**.js'
      ]
    },

    // Some typical JSHint options and globals
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true
      }
    },

    // Zip everything up
    compress: {
      target: {
        files: {
          'pack/<%= pkg.name %>.v<%= pkg.version %>.zip': ['prod/**']
        }
      }
    },

  });

  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compress');

  // Define your tasks here
  grunt.registerTask('default', ['coffee', 'copy', 'jshint', 'compress']);

};
</pre>

<p><br /></p>

<p>
And there we have a much more featured exampled.  Simply running <span class="code">grunt</span> will compile the coffeescript, copy the files, lint the javascript, and zip everything.
</p>

<h2>Writing Your Own Task</h2>

<p>
I won't go through the details here, but it is also very easy to write your own custom task for grunt if you have specific needs.  A tutorial that helped me first understand grunt has a section that <a href="http://merrickchristensen.com/articles/gruntjs-workflow.html">explains this very well</a>, so I highly recommend that if you're looking for more grunt help.
</p>

<h2>Taking Your Workflow Even Further</h2>

<p>
Looking at other examples and documentaion, you may have noticed that grunt is a lot more powerful than shown in the small tutorial here.  If you want to check out a project that creates a fully featured workflow for you using grunt, I recommend <a href="http://yeoman.io/">Yeoman</a>.  This implements grunt's watch and phantomjs to create a live updating workspace, which can be very useful for front end development.
</p>

<p><br /></p>

<p><i>Update:</i> You may have heard of a new frontend build tool called <a href="http://gulpjs.com/">Gulp</a>, which purports to make up for Grunt's complicated configuration with a programmatic approach.  I've written a tutorial for it to go parallel to this one, and you can find it here: <a href="http://www.justinmccandless.com/blog/A+Tutorial+for+Getting+Started+with+Gulp">A Tutorial for Getting Started with Gulp</a></p>