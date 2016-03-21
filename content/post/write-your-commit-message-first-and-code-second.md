
+++
date = "2014-08-03T11:08:45-07:00"
draft = false
title = "Write Your Commit Message First and Code Second"
pic = "/files/blogCommitMessages.JPG"
aliases = [
  "/blog/Write+Your+Commit+Message+First+and+Code+Second"
]
+++

<p>It hit me the other day at work.  I've been using git wrong all along.  The workflow for using version control shouldn't be to write a hacked together summary of all the code changes I just made every time I get the project in a sane state.  It should be to write a contract with myself describing the state of the project after some incremental improvement, and then to write that improvement.  How did I ever think otherwise?</p>

<h3 id="improvingproductivity">Improving Productivity</h3>

<p>I'm a big fan of always striving to improve my productivity as a programmer, and one of the biggest lessons learned over the years has been to work in short, manageable chunks.  This tries to maximize the use of our natural ability to focus, and it helps avoid the huge time sink of a project with tons of different ongoing improvements that will take forever to get back into a working state.  Despite my best efforts though, scope always tends to creep broader and broader as I work.</p>

<p>Writing a commit message first works wonders on reigning this in.  Whenever I start to get sidetracked with tangential work, I can look at my prewritten commit message to see exactly how the project should work when I'm finished.  Whenever I get distracted by a meeting or come back from lunch, a quick look at my commit message and see exactly what I was working on.  It helps me to plan in advance, to stay on track, and to deliver what I said I would when I actually do commit.</p>

<h3 id="tddlite">TDD Lite</h3>

<p>You might be drawing similarities between this method and test driven development.  Test driven development follows an even more strict adherence to this plan first, code second pattern, and there's a reason why many teams have found a ton of success with it.  Test driven development requires quite a bit of overhead work and buy-in from the team, however, and might not be something everyone can spend the time to commit to.</p>

<p>Commit message first development follows a similar pattern and starts to provide a lot of the same benefits, but is almost painless to implement.  You'll be planning out what you want your code to do, keeping yourself on track along the way, and delivering something to meet your original criteria just like in TDD.  The pattern is similar, but it's a lot easier to get going.</p>

<h3 id="howtowriteacommitmessagefirst">How to Write a Commit Message First</h3>

<p>Writing your commit messages first can be as easy as storing a string in a command line variable.  Plan out the state your project will be in after a manageable chunk of coding, and save a message that describes it like this:</p>

<pre><code>msg="Profile images over 4mb are rejected"
</code></pre>

<p>Later on while coding, if you need a reminder of exactly what it is you should be doing, you can output your saved message like this:</p>

<pre><code>echo $msg
</code></pre>

<p>Finally, when you're ready to commit, this is how you would commit in git with your pre-saved message:</p>

<pre><code>git commit -am "$msg"
</code></pre>

<p>Pretty simple workflow with just about zero overhead to get started.</p>

<p>Being an efficient programmer is something of a holy grail that can never be fully achieved, but if you work at it there are always new ways to improve.  Writing my commit messages first has been a great way to keep myself working efficiently, and even to write better commit messages while I'm at it.  It might not be perfect for every coding style, but there's not much holding you back from seeing for yourself how it works for you.</p>