
+++
date = "2013-03-18T08:40:06-07:00"
draft = false
title = "Getting yo to Do What yeoman Did"
pic = "/files/yeoman.png"
aliases = [
  "/blog/Getting+yo+to+Do+What+yeoman+Did",
  "/blog/getting+yo+to+do+what+yeoman+did"
]
+++

<p>
Yeoman had some big changes with its 1.0 release, namely removing its abstraction of Grunt to let the user interact directly with Grunt's build process.  This gives you a lot more freedom and access to Grunt's features, but it also works very differently from the original build process.  Converting a pre-1.0 app to 1.0 is therefore a bit of a task, and <a href="http://yeoman.io/migrate.html">Yeoman's migration page</a> isn't too comprehensive.  Here are a few tricks that I had to use to get my Yeoman app to work with 1.0.
</p>
<br /><br />
<p>
The main idea of what we'll be doing here is editing the new 1.0 default Gruntfile.js to do what your old Yeoman build process did (not editing your current pre-1.0 gruntfile!).  So if you haven't already, the first thing you should do is create a new 1.0 project that's as similar in configuration to your old project as possible, and import the generated Gruntfile.js.  Try building with the <span class="code">grunt</span> command and you'll probably see some things aren't working like they used to.
</p>
<h2>Coffee Script</h2>
<p>
You'll probably notice right off the bat that your compiled coffeescript files aren't ending up in an accessible location.  I've even seen this in a happen in a newly created 1.0 app, so it's a common problem.  Here is a way to tweak your Grunt setup to get a working build process.
</p>
<p>
By default, it seems Yeoman 1.0 compiles all coffeescript files to a single .js file, but unfortunately it doesn't update its reference to it.  If you just want to compile your coffeescript directly to corresponding .js files and worry about concatenation and updating references later, we can edit the gruntfile's coffee task to do just that.
</p>
<p>
Your current 1.0 gruntfile probably looks something like this:
</p>
<h3>Before: gruntfile coffee task</h3>
<pre class="code">
coffee: {
    dist: {
        files: {
            ".tmp/scripts/coffee.js": "&lt;%= yeoman.app %&gt;/scripts/**/*.coffee"
        }
    },
...
</pre>
<p>
Like I said, that previous default gruntfile compiles all coffeescript files to one .js file in the .tmp folder and leaves it there.  Let's change it to something like this:
</p>
<h3>Before: gruntfile coffee task</h3>
<pre class="code">
coffee: {
    dist: {
        files: {
            expand: true,
            src: ['&lt;%= yeoman.app %&gt;/scripts/**/*.coffee'],
            dest: './',
            ext: '.js'
      },
...
</pre>
<p>
This will compile all coffeescript files into corresponding .js files in the same directory (scripts/main.coffee goes to scripts/main.js, for example).  Then when Grunt concatenates the scripts and copies everything over to the dist/ folder, your newly created js files will be included.  The <span class="code">grunt server</script> command will also work as expected, since the js files are with the rest of your files, in place.
</p>
<p>
With this configuration, you alse need to make sure that your coffee task comes before your jshint task when you build.  Otherwise you won't be linting your compiled coffeescript.  Change the order at the bottom of the gruntfile where "build" is registered.
</p>
<p>
Lastly as a note, if you need to tweak the above configuration at all and are looking for a bit of extra guidance, Grunt just updated their <a href="http://gruntjs.com/getting-started">documentation</a> and it's pretty thorough and helpful.  Check out the <a href="http://gruntjs.com/configuring-tasks">configuring tasks page</a> for what all of the above task config means.  Config for most commands is pretty much the same, but if you want to see more about the coffee command in specific then checkout <a href="https://github.com/gruntjs/grunt-contrib-coffee">grunt-contrib-coffee on github</a>.
</p>

<h2>JSHint</h2>
<p>
The default configuration of Yeoman is now to use a .jshintrc file for all jshint configuration, instead of doing it inline.  If you simply copy over your jshint options from your pre-1.0 gruntfile, they will not be used!  Instead, put all of these options into a .jshintrc file in your application's root directory.  Then, make sure to include it in your gruntfile like this:
</p>
<pre class="code">
jshint: {
    options: {
        jshintrc: '.jshintrc'
    }
}
</pre>
<h2>Recursive Directory Search</h2>
<p>
Most tasks in the new default gruntfile don't search directories recursively like the old one did.  Don't forget to update these paths to make sure they're finding all of your working files.  Grunt's syntax for recursively searching directories is <span class="code">**/</span>, so finding all .js files in recursively within the scripts/ directory might look like this:
</p>
<pre class="code">
scripts/**/*.js
</pre>
<h2>Imagemin</h2>
<p>
As of this writing, the imagemin task appears very broken.  Creating a brand new new yeoman project, adding an image to it, and attempting to compile results in the error "Fatal error: ENOENT, no such file or directory 'dist/images/myimage.png'".  Needless to say, you will probably also run into this error while migrating your pre-1.0 app as well.
</p>
<p>
For the time being unfortunately, I recommend simply not using the imagemin task by commenting it out in the "build" task at the bottom of the gruntfile.  If what appears to be a bug in Yeoman is fixed at some point, then you can uncomment this and use imagemin again.  If I can get it working myself in the mean time I will post an update.
</p>
<h2>Other Sketchiness</h2>
<p>
The current 1.0 release is just a beta, and because of that it does have a bit of sketchiness associated with it.  These are the main problems I ran into that were immediately solvable, but I've seen a few other things on the way that seem to be breaking even for basic simple project cases.  Desipite this, Yeoman is a great tool that I'm getting a lot of use out of, so I'll update this article with any other helpful info I come up with as I continue working with Yeoman.
</p>