
+++
date = "2011-11-26T10:04:37-08:00"
draft = false
title = "Set Up Tinyproxy in Ubuntu"
pic = "/files/babyproxy.png"
+++

<p>
    This article is about the process I went through setting up Tinyproxy on my Ubuntu machine in the US, so that I could use it as a proxy server while abroad to access blocked sites.  There are a lot of other reasons you might want to set this up, but I use it to listen to Pandora while I'm in Peru and allow friends in China to use facebook.<br />
    <br />
    Tinyproxy is a much smaller and more lightweight version of proxy software like Squid.  Squid is more feature packed and probably better if you're going to be setting up a proxy for an internal corporate network or something, but if you have smaller needs like me I think Tinyproxy is a lot easier to get going.<br />
     </p>

<h3>
    Install Tinyproxy</h3>

<p>
    Simply use the Ubuntu repositories:</p>

<pre>
sudo apt-get install tinyproxy
</pre>

<h3>
     </h3>

<h3>
    Configure Tinyproxy</h3>

<p>
    In the file<br />
    <br />
    /etc/tinyproxy.conf</p>

<p>
    you need to add a line to allow the ip addresses you want to allow to use your proxy.  You probably don't want just anyone using it, and all external ips are blocked by default anyway.  If you're planning to connect from an external machine like I am (not on the same network as the proxy server), then you need to add your external ip address.  One way to find this is by navigating to www.whatismyip.com while on the machine (and network) that you will use to connect to the proxy.  If my external ip is "111.111.11.11" then I add the following line, preferrably down where the other Allow statements are:<br />
     </p>

<pre>
Allow 111.111.11.11/24</pre>

<p><br />
<br /></p>

<p>
    The /24 allows a bunch of subdomains from your ip, just in case.  That's all you really need to do to the config file to get Tinyproxy to work like I want it to work.  You can also do things like block certain sites if you want, check my sources at the bottom for more info.<br />
    <br />
    Before you close this, note the port that Tinyproxy will be listening on.  By default it's 8888, as given by the line<br />
     </p>

<pre>
Port 8888</pre>

<p>
     </p>

<p>
     </p>

<h3>
    Set up a cron task to restart Tinyproxy periodically to save memory</h3>

<p>
    This isn't absolutely necessary to get this running, but if you're going to leave Tinyproxy running all the time and not restart your machine, then it will eventually eat all your memory and lock up your server.  Open up root's crontab:</p>

<pre>
sudo crontab -e</pre>

<p><br /></p>

<p>
    And add the following lines<br />
     </p>

<pre>
0 22    * * *   root    /etc/init.d/Tinyproxy restart</pre>

<p><br />
<br /></p>

<p>
    That's a tab after the 22, tab after the last *, and tab after root.  Also add a final return at the end so you have one extra blank line in the file.<br />
     </p>

<p>
     </p>

<h3>
    Open the port that Tinyproxy uses</h3>

<p>
    This is the same as in my Minecraft server tutorial.  You need to open the port specified in the config file (8888 by default).  Otherwise linux itself will block any connections to the proxy server you might attempt from another machine.  You can open the port with iptables using the following commands:</p>

<pre>
/sbin/iptables -I INPUT -p tcp --dport 8888 -m state --state NEW,ESTABLISHED -j ACCEPT
/sbin/iptables -I OUTPUT -p tcp --sport 8888 -m state --state ESTABLISHED -j ACCEPT</pre>

<p><br /></p>

<p>
    Just replace 8888 in the first two lines with a different port if you're not using 8888.  You can check which ports are open on your machine if you want to make sure it worked, use the command</p>

<pre>
netstat -l</pre>

<p>
     </p>

<p>
     </p>

<h3>
    Restart Tinyproxy</h3>

<p>
    Now we just need to restart Tinyproxy for the changes to take place.  Just type</p>

<pre>
sudo /etc/init.d/tinyproxy stop
sudo /etc/init.d/tinyproxy start</pre>

<p><br /></p>

<p>
    Make sure to do this any time you make a change to Tinyproxy.<br />
     </p>

<p>
     </p>

<h3>
    Configure your browser</h3>

<p>
    Now hop on the computer that you want to use to connect through the proxy and we'll set up your browser to connect using the proxy server we just set up.  This computer should have an ip address that you allowed when editing the config file!  Open up firefox (you can use whatever browser and the steps will be pretty similar).  Go to Preferences -> Advanced -> Network tab.  Click Settings where it says "Configure how Firefox connects to the internet".  Check "Manual proxy configuration" and type your proxy server's ip address in the HTTP Proxy box.  Also enter the port you chose (default 8888) in the Port box.  Don't worry about SSL, FTP, etc. unless you know you want to use that with the server.  Click ok and see if you can open a website in Firefox.  If it works, you're now connecting through your proxy server!  <br />
    <br />
    You can also set up your whole system to use a proxy, but here is just an easy way to connect using your browser.<br />
     </p>

<h3>
    Troubleshooting</h3>

<p>
    Check which ports on your server are open</p>

<pre>
netstat -l</pre>

<p><br /></p>

<p>
    Check Tinyproxy's log</p>

<pre>
/var/log/tinyproxy/tinyproxy.log</pre>

<p>
     </p>

<p>
    Make iptables write to a log</p>

<pre>
sudo iptables -I INPUT 5 -m limit --limit 5/min -j LOG --log-prefix "iptables denied: " --log-level 7</pre>

<p>
    Will write to /var/log/syslog</p>

<p>
     </p>

<h3>
    Sources</h3>

<p>
    I figured all this out with help from the following sources:<br />
    <br />
    <a href="http://ubuntuforums.org/showthread.php?t=122011&highlight=tinyproxy">http://ubuntuforums.org/showthread.php?t=122011&highlight=tinyproxy</a><br />
    <a href="http://forums.whyweprotest.net/threads/setting-up-tinyproxy-under-linux-debian-ubuntu-etc.69970/">http://forums.whyweprotest.net/threads/setting-up-tinyproxy-under-linux-debian-ubuntu-etc.69970/</a></p>