
+++
date = "2015-04-12T12:21:50-07:00"
draft = false
title = "Getting a Distributed Static Website Running with Maelstrom"
pic = "/files/Bittorrent-Logo-Purple.jpg"
+++

<p>BitTorrent's <a href="http://project-maelstrom.bittorrent.com/">Project Maelstrom</a> is a web browser for the decentralized web that downloads assets via torrent instead of web server.  It was recently released to the public as a beta, and with it a simple Python tool to create torrents optimized for Maelstrom from static websites.  That got me really excited, so I went through the simple process of serving up my own static site via torrent.</p>

<p>What better content to serve this way than <a href="http://multitasq.com/">Multitasq</a>, a backend-less HTML5 app I wrote awhile back.  If you're following along with the article and need something to serve up, grab the <a href="git@github.com:justinmc/multitasq.git">source code</a>, run <code>npm install</code>, <code>bower install</code>, and <code>gulp</code>, and then all your static assets will be in the dist/ directory.</p>

<p><img src="http://justinmccandless.com/img/posts/maelstrom/browser.png" alt="maelstrom multitasq screenshot" /></p>

<h2 id="creatinganoptimizedtorrent">Creating an Optimized Torrent</h2>

<p>First we're going to create the torrent file that will be used the same way that a url is used on the everyday web.  Start by cloning BitTorrent's <a href="https://github.com/bittorrent/torrent-web-tools">torrent-web-tools</a> project from Github.  Use generator.py as described in the README to create a torrent for whatever static site you want to serve.  Make sure that you have an index.html in the root directory.</p>

<p>Right now it's also important to note that when we seed this torrent file with our torrent client, it's going to look for the files in its default download directory.  So, you might want to move the root directory of your static website content into ~/Downloads/ or wherever that is before generating the torrent file.</p>

<pre><code>generator.py ~/Downloads/multitasq/
</code></pre>

<p><br></p>

<h2 id="seedingyourtorrent">Seeding Your Torrent</h2>

<p>Now you just need to seed the torrent you created so that Maelstrom has a place to download the site's assets from.  The torrent-web-tools README suggests using only uTorrent or BitTorrent for this right now, so open up either of those and add your torrent file.  As long as it can find your files in the download directory ok, you should see that it's seeding your content.</p>

<p><img src="http://justinmccandless.com/img/posts/maelstrom/torrent.png" alt="torrent screen shot" /></p>

<h2 id="openitinmaelstrom">Open it in Maelstrom</h2>

<p>From here we can open up the site just like a normal site in a web browser.  Open Maelstrom and then open the torrent file that you created.  It might be slow at first, but you should see your torrent program start uploading the content of your torrent and Maelstrom should load up the page.</p>

<h2 id="fromhere">From Here</h2>

<p>Anyone with the torrent file you created (or magnet link) should be able to use your website in Maelstrom, all without a centralized server.  For example, you can view the copy of Multitasq that I created while writing this article here: <a href="bittorrent://f5baf0471f0d40a9b1dbd1b5fde3d22f7800aef4/index.html">bittorrent://f5baf0471f0d40a9b1dbd1b5fde3d22f7800aef4/index.html</a> (sorry if I'm not always seeding!).</p>

<p>This technology has a lot of potential and I'm excited to see where it goes from here.  I guess that depends on the developers that are using it and what we create though, so get hacking!</p>