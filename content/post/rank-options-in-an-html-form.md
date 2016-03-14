
+++
date = "2012-01-05T03:23:53-08:00"
draft = false
title = "Rank Options in an HTML Form"
pic = "/files/Screenshot from 2012-06-20 21:32:33.png"
+++

<br />code: <a href="https://github.com/justinmc/Rank-Form">http://github.com/justinmc/Rank-Form</a><br>

demo: <a href="http://www.justinmccandless.com/demos/Rank-Form/index.html">www.justinmccandless.com/demos/Rank-Form/index.html</a>
<p>
I wrote this quick open source project to be a nice way to allow users to rank a series of options in an HTML form.&nbsp; It just uses jQuery in addition to simple HTML and CSS.&nbsp; Here's an example of how it works:</p>

<p>
&nbsp;</p>

<script type="text/javascript" src="http://www.justinmccandless.com/js/rank.js"></script> <!-- Here is the link to the js for Rank Form -->
<p>

<div class = "rankContainer">
	<div class = "rankElement" id = "el0">
		<input type="hidden" name="0">
		<font class = "rankDisp" id = "el0">1</font>
		&nbsp;&nbsp;&nbsp;
		Bronze
		<b class = "down">&nbsp;&#9660;</b>
		<b class = "up">&#9650;&nbsp;</b>
	</div>
	<div class = "rankElement" id = "el1">
		<input type="hidden" name="1">
		<font class = "rankDisp" id = "el1">2</font>
		&nbsp;&nbsp;&nbsp;
		Platinum
		<b class = "down">&nbsp;&#9660;</b>
		<b class = "up">&#9650;&nbsp;</b>
	</div>
	<div class = "rankElement" id = "el2">
		<input type="hidden" name="2">
		<font class = "rankDisp" id = "el2">3</font>
		&nbsp;&nbsp;&nbsp;
		Gold
		<b class = "down">&nbsp;&#9660;</b>
		<b class = "up">&#9650;&nbsp;</b>
	</div>
	<div class = "rankElement" id = "el3">
		<input type="hidden" name="3">
		<font class = "rankDisp" id = "el3">4</font>
		&nbsp;&nbsp;&nbsp;
		Silver
		<b class = "down">&nbsp;&#9660;</b>
		<b class = "up">&#9650;&nbsp;</b>
	</div>
	<div class = "rankElement" id = "el4">
		<input type="hidden" name="4">
		<font class = "rankDisp" id = "el4">5</font>
		&nbsp;&nbsp;&nbsp;
		Diamond
		<b class = "down">&nbsp;&#9660;</b>
		<b class = "up">&#9650;&nbsp;</b>
	</div>
</div>


<br>
<br>

<p>
You can use the arrows to swap options up and down on the list, and a nice animation moves them for you and changes the numerical rank.&nbsp; It uses an automatically updated hidden input for each option, so you can stick this directly in a form and use it right away.&nbsp; Of course everything is scalable and customizable so it's easy to change the look of things or the number of options.</p>

<p>
This is a huge step up from a simple form to select rank:</p>

<p>
&nbsp;</p>


<select name="rankHTML0">

<option value="1">1</option>


<option value="1">2</option>


<option value="1">3</option>


<option value="1">4</option>


<option value="1">5</option>

</select>

 Bronze<br>


<select name="rankHTML0">

<option value="1">1</option>


<option value="1">2</option>


<option value="1">3</option>


<option value="1">4</option>


<option value="1">5</option>

</select>

 Platinum<br>


<select name="rankHTML0">

<option value="1">1</option>


<option value="1">2</option>


<option value="1">3</option>


<option value="1">4</option>


<option value="1">5</option>

</select>

 Gold<br>


<select name="rankHTML0">

<option value="1">1</option>


<option value="1">2</option>


<option value="1">3</option>


<option value="1">4</option>


<option value="1">5</option>

</select>

 Silver<br>


<select name="rankHTML0">

<option value="1">1</option>


<option value="1">2</option>


<option value="1">3</option>


<option value="1">4</option>


<option value="1">5</option>

</select>

 Diamond
<p>
&nbsp;</p>

<p>
Besides the fact that this plain HTML version is really ugly, it is also possible for the user to select the same rank for multiple options.&nbsp; You'll have to validate that after the user submits, which is a bit more annoying.</p>

<p>
Anyway I hope it helps someone, feel free to contribute on github if you think it could be improved.</p>

<p>
&nbsp;</p>

code: <a href="https://github.com/justinmc/Rank-Form">https://github.com/justinmc/Rank-Form</a><br>

demo: <a href="http://www.justinmccandless.com/demos/Rank-Form/index.html">www.justinmccandless.com/demos/Rank-Form/index.html</a>