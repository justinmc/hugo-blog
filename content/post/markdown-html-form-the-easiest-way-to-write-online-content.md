
+++
date = "2013-06-11T05:12:49-07:00"
draft = false
title = "Markdown-HTML-Form: The Easiest Way to Write Online Content"
pic = "/files/markdown-html-form.png"
+++

<p>I've always found myself bouncing back and forth with how I write articles for this blog.  Whether I'm writing straight HTML, using a WYSIWYG editor, or compiling markdown, I'm never quite satisfied however I'm doing it.  So I decided to hack together a solution combining the best of all of them.  That resulted in the open source project <a href="https://github.com/justinmc/markdown-html-form">Markdown-HTML-Form</a>, which I'm happily using to type this right now.  The idea was to use exising open source projects to create a markdown input that syncs with an editable WYSIWYG preview, and make it a snap to integrate into an HTML form on top of that.</p>

<p>Take a look at the <a href="http://justinmccandless.com/demos/markdown-html-form/examples/hallo/index.html">live demo</a> of the full implementation so you know what we're talking about.</p>

<p>There are a few projects out there that get you pretty close to this (check out <a href="http://hallojs.org/demo/markdown/">Hallo's own markdown demo</a>), and a few commercial WYSIWYG editors that do a lot more, but I wanted to create something that was bundled up and incredibly easy to use for this purpose, and that wasn't going to introduce a lot of bloat.</p>

<p>With Markdown HTML Form, all you have to do is add a class to your form elements and include the javascript and it works right away.</p>

<p>Check out the <a href="https://github.com/justinmc/markdown-html-form">Github project</a> for more info on how to use it and another example.  This is something that I wished someone else had written awhile ago, and I'm now using it myself right on this blog, so I hope it helps a few other people out.</p>