
+++
date = "2016-02-27T22:08:27-08:00"
draft = false
title = "Setting up HTTPS on Node for Free with Let's Encrypt"
pic = "/files/letsencrypt-logo-horizontal-small.png"
+++

<p>Given how vitally important running your site in HTTPS is, it's disappointing how high the barrier to entry is.  Some services like Heroku do make it easy to set up, but you will have to pay for that simplicity.</p>

<p>Recently, the EFF and several other organizations put together a project called <a href="https://letsencrypt.org/">Let's Encrypt</a>, which hopes to lower this barrier to entry.  Let's Encrypt is a free certificate authority and collection of software that makes it easy to obtain and autorenew certificates for any site.  As someone who is passionate about the cause for encryption, but has also cheaped out on spending the time and money to set up HTTPS on a few too many side projects, this was exactly what my conscience needed.</p>

<p>Getting set up was not without its headaches though; Let's Encrypt is a new and very ambitious project with support spread across many different platforms.  In this article, I'll do my best to point you in the right direction using what I learned while setting up HTTPS for an Express app.</p>

<h2 id="letsencryptexpress">Let's Encrypt Express</h2>

<p>We're going to be using a great library called <a href="https://github.com/Daplie/letsencrypt-express">letsencrypt-express</a>.  This will generate our certificate, store it on the filesystem, and renew the certificate whenever needed, without taking down the server.</p>

<p>If you were to jump into Let's Encrypt straight from the <a href="https://letsencrypt.org/getting-started/">getting started guide</a> on their site, you'd realize how much letsencrypt-express is doing for you.  The Let's Encrypt site introduces a command line tool for generating certificates that is much more manual.  If you're looking to use Let's Encrypt on another platform or on a server like nginx, that might be a good place to start, but if you're on Node, stick with letsencrypt-express or other implementations by the same author, <a href="https://github.com/Daplie">Daplie</a>.</p>

<h2 id="code">Code</h2>

<p>The <a href="https://github.com/Daplie/letsencrypt-express">letsencrypt-express README</a> has two different sections of code that you'll need to include in your app (if you just want to see it already set up in a working app, check out my <a href="https://github.com/justinmc/letsencrypt-express-example">example project</a>).  The first section is <a href="https://github.com/Daplie/letsencrypt-express#setup-same-for-all-examples">setup</a>, which creates the <code>lex</code> object with some configuration.  Be sure to change the email to your actual email address, and also take a look at <code>configDir</code>.  This is where your certificates will be installed.  Your app will have to have read and write permissions in this directory.</p>

<p>The <a href="https://github.com/Daplie/letsencrypt-express#express">Express section</a> has the next bit of code you'll need to include.  It sets up your app to listen on both production HTTP and HTTPS ports, so if your situation is different, be sure to change those ports.  In reality you'll probably want to set up a conditional depending on what environment your app is running on.</p>

<h2 id="runit">Run It</h2>

<p>If you run the server at this point, accessing it at a non-HTTPS port should access your app like normal.  Accessing it via HTTPS should also bring up your app, and if you look at the server's output on the command line, you'll see detailed output telling you that letsencrypt-express has generated and started using your certificate.  If you open the directory you specified earlier, you should see a folder containing the generated files.</p>

<h2 id="troubleshooting">Troubleshooting</h2>

<p>With this setup, you'll have to be doing this on a web server; the app won't load via HTTPS on your local machine.  If you try you might get an error like <code>Error creating new authz :: DNS name does not have enough labels</code>.</p>

<p>Also, as of this writing, the current version of letsencrypt-express has a few problems.  If you get the error <code>TypeError: dest.end is not a function</code> when accessing the server, then you might want to try downgrading to the <code>1.1.1</code> version.  If the server complains about missing the http2 module when starting, just install it manually.</p>

<p>If you can't access your app via HTTPS at all, make sure that your server is configured to allow connections on port 443.</p>

<h2 id="testingmode">Testing Mode</h2>

<p>Assuming you got everything running using the code from the README, you are currently running in testing mode.  letsencrypt-express uses a non-production certificate in this mode that your browser might complain about.  To use it in production mode and use a certificate that your browser should accept, just remove the <code>.testing()</code> call and include it like this instead: <code>var LEX = require('letsencrypt-express');</code>.</p>

<h2 id="fromhere">From Here</h2>

<p>When your certificate expires, letsencrypt-express should generate a new one in the background without you needing to do anything.  You now have a working HTTPS app with a free and open certificate authority!  Now go use this setup for all your apps and let's build a more secure internet.</p>