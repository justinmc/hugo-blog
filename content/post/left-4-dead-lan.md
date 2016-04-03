
+++
date = "2008-11-18T17:04:23-08:00"
draft = false
title = "Left 4 Dead LAN"
pic = ""
aliases = [
  "/blog/Left+4+Dead+LAN",
  "/blog/left+4+dead+lan"
]
+++

<p>
    As it appears at first glance, Left 4 Dead (pc) has launched without any LAN support.  Which is terrible.  However,
    for anybody who has wondered about this, there is a less obvious way to run a LAN game,  even offline using only
    one Steam account.  It's a just a little bit more difficult than most games make it, for whatever reason.
    </p>
    <p>
    So here is what you need to do to get this to work.  On one of your x number of computers that will be participating
    in your awesome Left 4 Dead LAN party (preferably the fastest), start a dedicated server.  This is done under the 
    Tools tab in Steam, though you may have to install the tool if you haven't already.  Then, make sure that all 
    instances of Steam are in offline mode.  Start L4D like on each computer, including the one that is running the 
    dedicated server if you so desire.
    </p>
    <p>
    You may notice that your dedicated server appears on the main menu screen and appears joinable.  Well it is, but only
    if you are signed into Steam.  Which sucks if you want to LAN with only one Steam account.  Luckily, there IS a way
    around this.
    </p>
    <p>
    You now need to access the console on each computer.  It should just be a simple strike of the tilde key, but console
    may be disabled if you haven't used it on L4D before.  To enable it, go to Options on the main menu, then
    Keyboard/Mouse.  Enable developer console here, then return to the main menu.  Ok, the tilde key should open up the 
    console now.
    </p>
    <p>
    Type "openserverbrowser" into the console and press return.  This will bring up the familiar Valve server browser.
    You can then find your LAN game and join it.  If you can not join the game, you may have some of the settings messed
    up on your dedicated server, or you can try typing "connect <ip address>" into the console, where <ip address> is the
    ip address of your dedicated server.    
    </p>
    <p>
    I hope that helped.  I really don't know why Valve didn't include support for this without having to type commands
    into the dev console.  Maybe it's something to do with their weird lobby system they're using to match games...    
    </p>