
+++
date = "2013-01-12T06:59:12-08:00"
draft = false
title = "Introducing Multitasq"
pic = "/files/multitasqScreenshotSmall.png"
aliases = [
  "/blog/Introducing+Multitasq"
]
+++

I've been working on this open source side project of mine for a bit, and I just <a href="https://developer.mozilla.org/en-US/demos/detail/multitasq">submitted it to Mozilla Demo Studio</a>, so I thought I'd make a quick post about it here.  I wanted to take a tried and true design, the simple notebook-paper-stuck-on-your-fridge task list that you've probably seen other apps replicate, and completely reimagine it using the web and HTML5.  The result still isn't much more than a concept, but I think it's a great example of something you can do with the web.  And it's enough to make me stop keeping track of my own tasks on paper at least.<br>

<h2><br>
</h2>
<h2>Why another task list?</h2>

<br>

While trying to manage the tasks that I had to work on in programming projects using paper or sticky notes, it quickly became evident how well a tree structure fit this model of things I had to do.&nbsp; I have a couple of big projects I need to work on, and within each of those I have a bunch of things to build, and each time I try to work on one of those I wind up finding a whole mess of new stuff that needs to get done first.<br>

<br>

That's nothing new though, plenty of task programs and websites allow you to add subtasks (like Google Tasks).&nbsp; As I worked though, it still felt unnatural to me to move down a list.&nbsp; As I jumped from task to task, grinding away at a small detail of one then suddenly backing up working out the overall details of another, I found that what I was doing was more like traversing a tree.<br>

<br>

<img unselectable="on" src="http://justinmccandless.com/img/posts/multitasq/multitasqScreenshotUnderpants.png" alt="multitasq basic" style="text-align: center; cursor: default;">
<br>

<br>

This is the visualization that I've tried to replicate on paper or with existing mind mapping software for awhile now, but because I've never truly liked anything I used, I thought that I would take the opportunity to build something new from the ground up.<br>

<br>

<h2><br>
</h2>
<h2>Goal 1: Scale</h2>

I wanted something that was useful even if you only wanted to remind yourself of a handful of points, but that could scale to also hold several huge software projects.&nbsp; This led me to SVG and the rescaling functionality, so that everything fits nicely on screen regardless of how many tasks you have going on, and the subtree deleting that allows you to work with lots of tasks at once.<br>

<br>

<img unselectable="on" src="http://justinmccandless.com/img/posts/multitasq/multitasqBig.png" alt="big multitasq" style="text-align: center; cursor: default;">
<br>

<h2><br>
</h2>
<h2>Goal 2: Focus</h2>

A huge scaled task tree lets you see the big picture of everything you have going on, but once you dive into a task, you really don't care about a lot of the unrelated things on your list for awhile.&nbsp; This led two other features, minimize/maximize and up/down.&nbsp; The plus and minus buttons let you temporarily hide all subtrees, so that you can focus on what's on top and not clutter the screen with details when they're not needed.&nbsp; The up and down arrow buttons basically do the opposite.&nbsp; These let you bring a specific subtree to the top of the screen, hiding tasks above and letting you focus on the details that you're working on.
<br>

<br>

<img unselectable="on" src="http://justinmccandless.com/img/posts/multitasq/multitasqGroceries.png" alt="big multitasq" style="text-align: center; cursor: default;">
<br>

<h2><br>
</h2>
<h2>Goal 3: Be Usable</h2>

Though I'm by no means a designer, I wanted to create a completely new user experience that was still very intuitive.&nbsp; I also wanted it to be usable on touch screen mobile devices, which lead to a lot of the click based interaction that you see.&nbsp; If you want to see the full list of all the UI commands and shortcuts, check the README on the <a href="https://github.com/justinmc/multitasq">github page</a>.<br>

<br>

<img unselectable="on" src="http://justinmccandless.com/img/posts/multitasq/multitasqLogo.png" alt="multitasq" style="text-align: center; cursor: default;">
<br>

<br>
<br>
Even though it's a bit rough still, I'm happy with the current state of the project after starting from scratch.&nbsp; The latest stable build is up on <a href="http://www.multitasq.com">multitasq.com</a>, and I have a lot of plans for future development.&nbsp; Hopefully I'll be able to add a backend to it and allow users to save tasks on the web.<br>
