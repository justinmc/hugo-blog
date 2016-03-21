
+++
date = "2013-06-18T06:39:07-07:00"
draft = false
title = "Getting a Yeoman App Working on a New Machine after Cloning"
pic = "/files/yeomanClone.png"
aliases = [
  "/blog/Getting+a+Yeoman+App+Working+on+a+New+Machine+after+Cloning"
]
+++

<p>If you're working on a Yeoman app from a git repository, you won't be able to simply <code>git clone</code> and then start the Yeoman workflow.  There's a small amount of setup to do, so I thought I'd write that out here in a simple list for anyone that also goes through the process.</p>

<p>Scroll down to the bottom if you just want the commands!</p>

<p>Starting out, let's say that you already have a Yeoman project created and in a git repository that you just cloned, and you already have Yeoman, Bower, and Grunt installed (if you're still setting up Yeoman, you can check out the <a href="yeoman.io/gettingstarted.html">official documentation</a>).  If you just try running <code>grunt</code> right off the bat now, you'll probably get an error message.</p>

<pre><code>grunt-cli: The grunt command line interface. (v0.1.9)

Fatal error: Unable to find local grunt.

If you're seeing this message, either a Gruntfile wasn't found or grunt
hasn't been installed locally to your project. For more information about
installing and configuring grunt, please see the Getting Started guide:

http://gruntjs.com/getting-started
</code></pre>

<p>The local npm dependencies shouldn't just be copied around with the git repository, and you'll notice that the default .gitignore file ignores the node_models/ directory containing these.  You can fix that easily by running <code>npm install</code>, which will install all the dependencies that are already defined in the package.json file.</p>

<p>Now try running <code>grunt</code> again.  You'll probably get another error:</p>

<pre><code>Warning: Errno::ENOENT on line ["33"] of /var/lib/gems/1.9.1/gems/compass-0.12.2/lib/compass/exec/global_options_parser.rb: No such file or directory - /path/to/your/app/bower_components
</code></pre>

<p>The Bower dependencies of the project are also not copied over, as noted by the fact that app/bower_components/ is also ignored by .gitignore.  We can fix that by running <code>bower update</code>.</p>

<p>Now if you run <code>grunt</code> this time, the app should compile like normal, and you'll be up and running.</p>

<p>Here are the steps given above without all the talk:</p>

<p><br /></p>

<ol>
<li>Make sure you have all dependencies installed (<a href="http://nodejs.org/">nodejs</a> including npm, <a href="http://www.ruby-lang.org">ruby</a> and the Compass gem (<code>gem install compass</code>), and <a href="http://yeoman.io">Yeoman</a> including yo, grunt, and bower).</li>
<li><code>npm install</code></li>
<li><code>bower update</code></li>
</ol>