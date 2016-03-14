
+++
date = "2013-07-13T02:16:39-07:00"
draft = false
title = "Pinterest-Style Staggered Masonry List in Android"
pic = "/files/masonry_small.png"
+++

<p>The more I work with native mobile code the more I miss HTML5.  I was recently trying to implement one of those Pinterest-like offset grids in an Android app, and while a beautiful open source library called <a href="http://masonry.desandro.com/">Masonry</a> exists to do this for Javascript, in Android there isn't anything quite as well accepted.</p>

<p>Rumor has it that Google was working on a native implementation of a staggered GridView, but it was dropped from the latest release of Android.  However, plenty of apps are currently using their own implementations of this type of view (such as Pinterest), and it can be a pretty nice looking and convenient way to display a list.</p>

<p>So if you still want to add something like this in your own app, here are your options.</p>

<h2 id="1justuseagridlisthttpdeveloperandroidcomdesignbuildingblocksgridlistshtml">1. Just Use a <a href="http://developer.android.com/design/building-blocks/grid-lists.html">Grid List</a></h2>

<p>Grid Lists might not be exactly what you're looking for, but they are natively supported by Google with all of the stability that that entails.  If you can get by without having offset rows of different sizes, this is a very easy and solid way to go.  Check out Android's default Gallery app to see what this looks like, and see the <a href="http://developer.android.com/design/building-blocks/grid-lists.html">Grid List documentation</a> for more.</p>

<h2 id="2tryamodifiedgridviewwithstaggeredgridviewhttpsgithubcommaurycywstaggeredgridview">2. Try a Modified GridView with <a href="https://github.com/maurycyw/StaggeredGridView">Staggered Grid View</a></h2>

<p>This Github project provides a pretty near clone of what Google was trying to do with their native staggered GridView.  It's a widely used and well supported project, but watch out for the absense of an onItemClick method (as of this writing).  It is also lacking support for a scroll listener, but there does exist a <a href="https://github.com/GoMino/StaggeredGridView">fork that supports it</a>.</p>

<h2 id="3tryamodifiedlistwithpinterestlikeadapterviewhttpsgithubcomhuewupinterestlikeadapterview">3. Try a Modified List with <a href="https://github.com/huewu/PinterestLikeAdapterView">Pinterest Like Adapter View</a></h2>

<p>This project modifies a more typical List, making it pretty easy to drop in if you are already using something similar.  Performance is pretty snappy and it looks fine, but this project also lacks onItemClick support.  If you can get by using buttons in your views like in the example, then this is a pretty solid option.</p>

<h2 id="4ortrytwosyncedlistviewswithpinterestlistviewhttpsgithubcomvladexologijapinterestlistview">4. Or Try Two Synced List Views with <a href="https://github.com/vladexologija/PinterestListView">Pinterest List View</a></h2>

<p>This project has a good level of support, but it suffers from a few performance issues.  I started to see laggy scrolling in a test with 12+ medium resolution photos.  You also might notice some unexpected jerks between the two columns when scrolling rapidly up or down.  However, if your list is short and simple like in the example, you might be able to get by using this.</p>

<h2 id="nothingsperfect">Nothing's Perfect...</h2>

<p>The only other native Android implementations that I could find were significantly less-supported and buggy than those above (like <a href="https://github.com/expilu/AntipodalWall">Antipodal Wall here</a>).  Even among the fairly widely used projects above, you'll be making a compromise no matter what you choose.  Nothing quite lives up to the flexibility of <a href="http://masonry.desandro.com/">Masonry</a> in HTML, so unless you're going to hack your own implementation like Pinterest, you'll have to weigh the costs and benefits of each to your specific goals.  If you do, please, please open source it.</p>

<p>In the meantime, an HTML5 hybrid is looking pretty attractive...</p>