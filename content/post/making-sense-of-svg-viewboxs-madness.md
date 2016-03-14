
+++
date = "2012-10-24T02:23:54-07:00"
draft = false
title = "Making Sense of SVG viewBox's Madness"
pic = "/files/viewBox.png"
+++

<p>
Madness was the only thing I could call viewBox's behaviour during the first few hours I spent researching and playing with examples.  After finally figuring it out by reading way more of the <a href="http://www.w3.org/TR/SVG/coords.html#ViewBoxAttribute">W3 spec</a> than I had planned, I decided to write a more user-friendly introduction to viewBox here.
</p>

<p>I encourage you to follow along and play with different possible viewBox set ups as we go.  Open up my <a href="http://www.justinmccandless.com/demos/viewbox/index.html" target="_blank">viewBox sandbox</a> (<a href="https://github.com/justinmc/svg-viewbox-sandbox">source code</a>) and try out the examples in this article for yourself, or just use your browser's dev tools directly on the SVGs below.</p>

<p><br></p>

<h2>What is viewBox and why should I use it?</h2>

<p>
viewBox is a powerful tool for scaling, stretching, positioning, and/or dividing up parts of an SVG object.  It basically positions a child element of the parent SVG, defines a distinct coordinate system for it, and stretches or crops the child to fit the parent.  This is useful for SVG image design itself such as when applying filters or masks, but it becomes especially useful for a web developer that wants to position an SVG within some parent, especially dynamically.
</p>

<p>
Defining this child view makes use of two parameters: <span class="code">viewBox</span> and <span class="code">preserveAspectRatio</span>.  viewBox is set with four parameters, like this:
</p>

<p><br></p>

<pre class="code">
    &lt;svg viewBox="&lt;min-x&gt;, &lt;min-y&gt;, &lt;width&gt;, &lt;height&gt;"&gt;&lt;/svg&gt;
</pre>

<p><br></p>

<p>
Where &lt;min-x&gt; and &lt;min-y&gt; define the origin of the viewBox within the parent, and &lt;width&gt; and &lt;height&gt; map the area of the parent element to a coordinate system unique to the viewBox.  I told you, viewBox is madness.  We'll look at an example below, but for now just understand that these four parameters are not defining a rectangle inside of the parent in regular coordinates, they are basically defining a coordinate system for the viewBox.  Let's see how to set preserveAspectRatio.
</p>

<p><br></p>

<pre class="code">
    &lt;svg preserveAspectRatio="&lt;align&gt; &lt;meetOrSlice&gt;"&gt;&lt;/svg&gt;
</pre>

<p><br></p>

<p>
This attribute is a bit more intuitive.  When used together with the viewBox attribute, preserveAspectRatio specifies whether or not the child should keep its native aspect ratio after being placed in the viewBox, how it should be positioned within the viewBox if so, and whether it should be scaled or cropped.  MDN does a great job of <a href="https://developer.mozilla.org/en-US/docs/SVG/Attribute/preserveAspectRatio">listing out the potential values of this attribute</a>, so I won't try to replicate that here.  You can also see the effects of all of these in a <a href="http://www.w3.org/TR/SVG/images/coords/PreserveAspectRatio.svg">very thorough example from the W3</a>.
</p>

<p><br></p>

<h3>Stretch Example</h3>

<p>
Let's take a look at the simplest case for preserveAspectRatio as our first viewBox example.  If we set <span class="code">preserveAspectRatio="none"</span> on our parent, then the content will simply stretch to fit the parent, without preserving the aspect ratio of the child.
</p>

<p><i>This example is from the W3 at <a href="http://www.w3.org/TR/SVG/images/coords/ViewBox.svg">www.w3.org/TR/SVG/images/coords/ViewBox.svg</a></i>
<br></p>

<p><img unselectable="on" src="http://www.w3.org/TR/SVG/images/coords/ViewBox.svg">
<br></p>

<p><br></p>

<p>
Go ahead and open up this SVG in your developer tools and mess with the <span class="code">width</span> and <span class="code">height</span> attributes.  You'll see that whatever you set them to, the content stretches itself to fit inside of the parent and completely fill it.
</p>

<p>
So what is the <span class="code">viewBox="0 0 1500 1000"</span> attribute doing? If you try messing with the first two parameters, &lt;min-x&gt; and &lt;min-y&gt;, you'll see that any non-zero value simply translates the child image, which is also cropped at the boundaries of the parent.  This makes sense, as these parameters are simply the origin of our viewBox.  Changing the &lt;width&gt; and &lt;height&gt; parameters makes things complicated.
</p>

<p>
Before you do mess with them, notice something about their relation to the child image.  I said above that &lt;width&gt; and &lt;height&gt; define the coordinate system used in the child image.  So looking at this example, our coordinate system inside our parent element is from 0-1500 in the x direction, and from 0-1000 in the y direction.  These aren't real pixels on your screen, this is just a coordinate system defined and mapped into the parent element, which in this case is actually 500px by 100px.  Looking at the path of the red triangle, you can see that it is made of points (750,100), (250,900), and (1250, 900) in this new coordinate system.  If you compare that to the image you see on the screen, well golly doesn't it look like it fits as expected in the viewBox going from 0-1500 and 0-1000.
</p>

<p>
Now, playing with these &lt;width&gt; and &lt;height&gt; values should produce an intuitive result.
</p>

<p>
This may have seemed like the simplest of examples, but if you understood that, you already know by far the hardest parts of viewBox.  By changing the value of preserveAspectRatio to some of the more interesting <a href="https://developer.mozilla.org/en-US/docs/SVG/Attribute/preserveAspectRatio">values that it can take</a>, all you are doing is manipulating the position of the child within the parent and scaling/cropping.  Let's illustrate this with another example.
</p>

<p><br></p>

<h3>Preserving the Aspect Ratio Example</h3>

<p><i>This example is from the W3 at <a href="http://www.w3.org/TR/SVG/images/coords/PreserveAspectRatio.svg">http://www.w3.org/TR/SVG/images/coords/PreserveAspectRatio.svg</a></i>
<br></p>

<p><img unselectable="on" src="http://www.w3.org/TR/SVG/images/coords/PreserveAspectRatio.svg">
<br></p>

<p><br></p>

<p>
Now that you understand how all of these nice smiley faces are fitting inside their containers, understanding how to position them inside their parent is a small step.  When we set preserveAspectRatio to anything but "none", the child is fit inside the parent by scaling, not by stretching.  If the parent isn't also the same aspect ratio as the child, we're going to have either some extra space or some overflow.  Using these attributes, you can align the child image however you want it to appear inside the viewbox.
</p>

<p>
Don't forget that you can combine these x and y options in any way you want, too.  Again see the <a href="https://developer.mozilla.org/en-US/docs/SVG/Attribute/preserveAspectRatio">MDN list of all possible values</a> if this example isn't enough!
</p>

<p><br></p>

<p><br></p>

<p>
A bit of geometrical excercise for your brain, but that is the gist of SVG's viewBox.  Madness?  Easy to conclude at first when you're used to dealing with the more everyday world of HTML layout, but once understood viewBox is a powerful tool.  I'm currently using it to scale a dynamic SVG in my soon-to-be announced Multitasq project, and I hope to share more soon.
</p>

<p><br><br></p>

<p>
    <b>Update:</b>  Check out my project <a href="http://www.multitasq.com">Multitasq</a> to see an example of using viewBox to zoom a complex SVG.  <a href="http://www.github.com/justinmc/multitasq">Source code here</a>.
</p>
