
+++
date = "2012-05-23T21:14:46-07:00"
draft = false
title = "confirm-link: An Easy and Elegant Way to Prompt the User to Confirm a Link Click"
pic = "/files/Screenshot from 2012-06-19 23:22:27.png"
+++

<p>
A simple bit of javascript, but I just wanted to package it up nicely and post it here since I find myself repeatedly going back and looking this up.&nbsp; Check the links or scroll down if you just want the code.</p>

<p style="text-indent: 0;">
Source code: <a href="http://github.com/justinmc/confirm-link">github.com/justinmc/confirm-link</a><br>

Live demo: <a href="http://www.justinmccandless.com/demos/confirm-link/index.html">justinmccandless.com/demos/confirm-link/index.html</a></p>

<p>
&nbsp;</p>

<p>
If you want your users to be presented with a yes/no kind of choice before proceeding, javascript's confirm() function might be a nice simple way to accomplish that.&nbsp; An alert style box will pop up with two buttons, OK and Cancel, and the result will be passed back to javascript.&nbsp;</p>

<p>
I often use this to make the user verify their choice on things like delete buttons where a simple misclick can have really bad results.&nbsp; Customization is pretty limited, but if this fits the requirements for you then you can't get much more simple.&nbsp; Here's the javascript (using jQuery):</p>

<p>
<br>

&nbsp;</p>


<pre>    
$(document).ready(function () {
    $('a[data-confirm-link]').click(function () {
        if (confirm($(this).data('confirm-link')))
            window.location = $(this).attr('href');
        return false;
    });
});
</pre>

<p>
<br>

&nbsp;</p>

<p>
Then, any time you include the data-confirm-link attribute on an &lt;a&gt; tag, the user will be prompted with a confirm box with the text of the attribute.&nbsp; So the html might look like this:</p>

<pre>&lt;a data-confirm-link="Are you sure?  Don't go crying to the webmaster if you delete something you didn't want to." href="delete.html"&gt;Delete&lt;/a&gt;
</pre>

<p>
&nbsp;</p>

<p>
And there you go, any link you set up like that will automatically prompt the user before following the link.&nbsp; Hope it helps, I'll probably be coming back to this page myself in the near future.</p>