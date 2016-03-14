
+++
date = "2010-10-16T14:21:50-07:00"
draft = false
title = "Adventures in Starting a Minecraft Server"
pic = ""
+++

<p>Ever since I started playing <a href="http://www.minecraft.net/">Minecraft</a>  at the end of the summer, I&nbsp;have wanted to start my own server.&nbsp;  Unfortunately, it's pretty much taken me this whole time to accomplish  that.&nbsp; So, I&nbsp;thought I'd post a small tutorial here in case anyone else  is having similar problems.</p>
<p>First of all, my goals exactly.&nbsp; I&nbsp;wanted to get the paid version of  the Minecraft server up and running on an Ubuntu server that I&nbsp;had  otherwise used as a web server.&nbsp; I&nbsp;wanted to have multiple people be  able to connect to this server through external ip addresses.&nbsp; If you're  looking to do something similar, see if this helps.</p>
<p>First you'll need to install Java if it's not installed already.&nbsp; You might be able to do this by typing</p>
<p><code>sudo apt-get install sun-java6-jre<span style="font-family: Arial,Verdana,sans-serif;"> </span></code></p>
<p>But, if you can't find the right package, just Google it, the exact names change all the time.</p>
<p>Now you'll need to open port 25565, the default port used by  Minecraft.&nbsp; This port in NOT open by default, so you won't be able to  connect to your server without opening it.&nbsp; Fortunately you can open it  quite simply using <code>iptables</code>, the linux kernel firewall.&nbsp; Just type the following lines:</p>
<pre>
/sbin/iptables -I INPUT -p tcp --dport 25565 -m state --state NEW,ESTABLISHED -j ACCEPT
/sbin/iptables -I OUTPUT -p tcp --sport 25565 -m state --state ESTABLISHED -j ACCEPT
service iptables save
</pre>
<p>Finally, copy <code>minecraft_server.jar </code>over to whatever directory you want on your server.&nbsp; This is the file you get from <code>http://minecraft.net/download.jsp</code>, if you've paid for the game of course.&nbsp; Now you can use the command to start the server that Notch gives on the same page:</p>
<p><code>java -Xmx1024M -Xms1024M -jar minecraft_server.jar nogui</code></p>
<p>As long as the responses coming back on the terminal show the server  starting, you are set to connect to your server.&nbsp; Open up Minecraft, go  to multiplayer, and type in your ip address.&nbsp; You should connect and be  playing on the server.&nbsp; Give some friends your ip address to joing and  have fun.</p>
<p>&nbsp;</p>
<p>Troubleshooting:</p>
<ul>
    <li>If you are still having problems connecting, you may want to try  rebooting your server to make sure it opens port 25565 correctly.&nbsp;  Opening this port was my biggest problem in getting my server started.</li>
</ul>
<p>&nbsp;</p>
<ul>
    <li>In case you get errors saying 'can't reserve enough space on the  heap', you can scale back the two memory values and write something  like:</li>
</ul>
<p><code>java -Xmx1024M -Xms1024M -jar minecraft_server.jar nogui</code></p>
<p>Which will allow the server to start, but it may not run all that smoothly on less RAM.</p>
<p>&nbsp;</p>
<ul>
    <li>If your server is running behind a router, opening port 25565 in  iptables probably won't be enough.&nbsp; You'll need to forward that port in  your router, which you might be able to accomplish with the help of <a href="http://www.portforward.com/">portforward.com</a>.</li>
</ul>