
+++
date = "2011-11-13T02:47:27-08:00"
draft = false
title = "Installing Imagick on Ubuntu 11.10 and Using it to Dynamically Edit Images"
pic = ""
aliases = [
  "/blog/Installing+Imagick+on+Ubuntu+11.10+and+Using+it+to+Dynamically+Edit+Images"
]
+++

<p>
	<span style="font-family:verdana,geneva,sans-serif;">Imagick is a PHP wrapper for the Image Magick library.&nbsp; It lets you use PHP to edit images on the fly.&nbsp; I&#39;m working on a Pictures section of this website, and I found it useful to resize a images as users request them, without having to use GIMP to create a bunch of different sized images and then uploading them all.&nbsp;&nbsp; This install method uses PEAR and assumes you already have Apache and PHP up and running.</span></p>
<p>
	<span style="font-family:verdana,geneva,sans-serif;">First, you need to install a few packages from the repositories:</span></p>
<p>
	&nbsp;</p>
<p>
	&nbsp;</p>
<pre>
sudo apt-get install php5-dev php-pear imagemagick libmagick9-dev
</pre>
<p>
	<span style="font-family:verdana,geneva,sans-serif;"><code><span class="html">Now use PEAR to install Imagick</span></code></span>:</p>
<p>
	&nbsp;</p>
<p>
	&nbsp;</p>
<pre>
sudo pecl install Imagick
</pre>
<p>
	&nbsp;</p>
<p>
	&nbsp;</p>
<p>
	<code><span class="html"><span style="font-family:verdana,geneva,sans-serif;">It should tell you that the installation succeeded, and ask you to add a line to php.ini.&nbsp; The line does not need to go in php.ini though, it needs to go in the imagick.ini file instead.&nbsp; This shouldn&#39;t exist yet, so create the file:</span></span></code></p>
<p>
	&nbsp;</p>
<pre>
/etc/php5/apache2/conf.d/imagick.ini 
</pre>
<p>
	<code><span class="html"><span style="font-family:verdana,geneva,sans-serif;">And just add the following line to it:</span></span></code></p>
<p>
	&nbsp;</p>
<pre>
extension=imagick.so
</pre>
<p>
	<span style="font-family:verdana,geneva,sans-serif;">Now you just need to restart Apache and everything should be ready to go for Imagick:</span></p>
<p>
	&nbsp;</p>
<pre>
sudo /etc/init.d/apache2 restart
sudo /etc/init.d/apache2 reload
</pre>
<p>
	&nbsp;</p>
<p>
	Now you should probably test it by getting a basic example running.&nbsp; In a directory hosted by Apache, create the following php file:</p>
<pre>
&lt;?php
 
header(&#39;Content-type: image/jpeg&#39;);
 
// Config
$file = &quot;myPic.jpg&quot;;
$x = 600;
$y = 450;

$image = new Imagick($file);
$image-&gt;adaptiveResizeImage($x,$y);

echo $image;
 
?&gt;
</pre>
<p>
	<span style="font-family: verdana,geneva,sans-serif;">This file will take the image </span><span style="font-family: verdana,geneva,sans-serif;"><span style="font-family:courier new,courier,monospace;">$file <span style="font-family:verdana,geneva,sans-serif;">and resize it to the size specified by <span style="font-family:courier new,courier,monospace;">$x <span style="font-family:verdana,geneva,sans-serif;">and <span style="font-family:courier new,courier,monospace;">$y<span style="font-family:verdana,geneva,sans-serif;">.&nbsp; </span></span></span></span></span></span></span><span style="font-family: verdana,geneva,sans-serif;">Make sure you change <span style="font-family:courier new,courier,monospace;">$file <span style="font-family:verdana,geneva,sans-serif;">to a real image</span></span></span>.</p>
<div class="phpcode">
	&nbsp;</div>
<div class="phpcode">
	But, how is this file used?&nbsp; Well let&#39;s say you named it magick.php and put it in your document root, you could open it up in a web browser (the hosted file in Apache, not the file itself, so <span style="font-family:courier new,courier,monospace;">localhost/magick.php<span style="font-family:verdana,geneva,sans-serif;">).</span></span>&nbsp; This would simply display the resized image in your web browser.&nbsp; You should probably check to see that this happens now to make sure everything is working.&nbsp; If you get an error like:</div>
<div class="phpcode">
	&nbsp;</div>
<div class="phpcode">
	&nbsp;</div>
<pre>
The image &quot;http://localhost/magick.php&quot; cannot be displayed because it contains errors.
</pre>
<div class="phpcode">
	&nbsp;</div>
<div class="phpcode">
	&nbsp;</div>
<div class="phpcode">
	<span style="font-family: courier new,courier,monospace;"><span style="font-family:verdana,geneva,sans-serif;">Then double check your filepath to the image and your installation!&nbsp; </span></span>If you get a lot of crazy characters, then perhaps you forgot the header telling the server that this is an image.</div>
<div class="phpcode">
	&nbsp;</div>
<div class="phpcode">
	If you got it working that&#39;s great, but you might be wondering how this is useful...&nbsp; You dynamically edited an image and made a page out of it, but you can&#39;t really add any other html to this...&nbsp; The way that you actually use this image in a page is by referencing the PHP file you created just as if you were referencing an image.&nbsp; So you could create this index.html file:</div>
<pre>
&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot; &quot;http://www.w3.org/TR/html4/loose.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;                                                                            
&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html;charset=utf-8&quot;&gt;
&lt;title&gt;The Personal Blog of Justin McCandless&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h1&gt;Justin&#39;s Cool Picture&lt;/h1&gt;
&lt;p&gt;Hey faithful readers, here is a picture from my latest adventure, automatically resized to fit this page even though it is a 10 megepixel beast on the server:&lt;/p&gt;

&lt;img src = &quot;magick.php&quot;&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>
<div class="phpcode">
	<span style="font-family: verdana,geneva,sans-serif;">And when the page is called, the server would automatically resize your <span style="font-family:courier new,courier,monospace;">myPic.jpg</span> file referenced in <span style="font-family:courier new,courier,monospace;">magick.php<span style="font-family:verdana,geneva,sans-serif;"> and display it like a normal <span style="font-family:courier new,courier,monospace;">img</span> tag.</span></span></span>&nbsp; You can see how this is really useful on a site with lots of different sized copies of pictures.&nbsp; You don&#39;t want to solve the problem of having a million image files on your site by having a million PHP files instead though, so here is a more useful and dynamic example of the <span style="font-family:courier new,courier,monospace;">magick.php<span style="font-family:verdana,geneva,sans-serif;"> file above for resizing:</span></span></div>
<pre>
&lt;?php
header(&#39;Content-type: image/jpeg&#39;);

$file = $_REQUEST[&quot;file&quot;];
$x = $_REQUEST[&quot;x&quot;];
$y = $_REQUEST[&quot;y&quot;];

$image = new Imagick($file);
$image-&gt;adaptiveResizeImage($x,$y);

echo $image;
?&gt;
</pre>
<div class="phpcode">
	<span style="font-family:verdana,geneva,sans-serif;">This version allows you to specify the file and the new size as URL paramaters, so you only need one <span style="font-family:courier new,courier,monospace;">magick.php <span style="font-family:verdana,geneva,sans-serif;">file to handle any image.&nbsp; You could then use it like this:</span></span></span></div>
<pre>
&lt;img src = &quot;magick.php?file=myPic1.jpg&amp;x=600&amp;y=450&quot;&gt;
&lt;br&gt;&lt;br&gt;
&lt;img src = &quot;magick.php?file=myPic2.jpg&amp;x=300&amp;y=225&quot;&gt;
</pre>
<p>
	&nbsp;</p>
<div class="phpcode">
	<span style="font-family:verdana,geneva,sans-serif;">And you&#39;ve already got a ton of opportunities opened up by the awesomeness of Imagick.&nbsp; It does a lot more than resizing too, like adding watermarks, rotating, and even much more advanced image editing, all dynamically.</span>&nbsp; You should be able to see it in action soon on the Pictures section of this site.</div>
<p>
	<span style="font-family: verdana,geneva,sans-serif;"><span style="font-family: courier new,courier,monospace;"><span style="font-family: verdana,geneva,sans-serif;">Lastly, if you&#39;re looking for more information and examples about Imagick, php.net is what I used to write this article and it&#39;s <a href="http://php.net/manual/en/book.imagick.php.">amazing as always</a>.</span></span></span></p>
