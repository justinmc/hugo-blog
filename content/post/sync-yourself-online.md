
+++
date = "2009-08-02T18:04:23-07:00"
draft = false
title = "Sync Yourself Online"
pic = ""
aliases = [
  "/blog/Sync+Yourself+Online"
]
+++

<p>
I use several different computers, and several different operating systems, and I wanted to be able to have all
my browser settings, contacts, and calendar info available on all of them.  Without restricting my self to
solely using web apps.  And for free.  Here's how I did it.
</p>
<p>
I was able to sync my favorite software for all of the above tasks using a few featurs and add ons.  The
software I synced was:
</p>
<br>
<ul>
<li> <a href = "http://www.firefox.com/">Firefox</a> on any computer using the add on <a href = "http://labs.mozilla.com/projects/weave/">Mozilla Weave</a>

<li> <a href = "http://www.mozillamessaging.com/thunderbird">Thunderbird</a> contacts on any computer and my Gmail contacts using the add on <a href = "http://www.zindus.com/">Zindus</a>
<li> <a href = "http://www.mozilla.org/projects/calendar/lightning/">Lightning</a> or <a href = "http://www.mozilla.org/projects/calendar/sunbird/">Sunbird</a> on any computer and Google Calendar using a feature called CalDAV
</ul>
<br>
<p>
Starting with Firefox, the Mozilla-made add on Weave will sync all of your browser settings when you use any
computer with the add on installed.  This includes bookmarks, forms, history, passwords, preferences, and
even any tabs you recently had open and saved.  Not bad.  The software is still in the experimental stages,
but for my uses it has work fine so far.

</p>
<p>
To get it running, first make sure you have the latest version of Firefox installed, which as of this writing
was the newly released 3.5.  Check your version with Help->About in Firefox, and/or go to <a href = "http://www.firefox.com">firefox.com</a> to get
the latest version if you need to update.
</p>
<p>
Now head to <a href = "http://labs.mozilla.com/projects/weave/">labs.mozilla.com/projects/weave/</a> and click the "Download and Install" link.  It'll do just that,
and prompt you to restart Firefox when it's done.  Now you can follow the prompts and set up your account,
and you'll be set to install the add on on whatever other machine or operating system you want and be all
synced up.  Notice also that the program has a small icon in the lower left hand corner of Firefox; you can
manage your settings, login, sync, etc. by right clicking there.
</p>
<br>
<p>
Now on to syncing your contacts.  Thunderbird (a great multiplatform email client from Mozilla) can be synced
bidirectionally to your Gmail contacts, and this can be done on all the systems you run Thunderbird on.
Therefore, you can set up a sort of central server at Gmail, with all instances of Thunderbird you set up
storing your contacts and receiving updates from there.  Any Thunderbird you set up, as well as your Gmail
contacts obviously, will all be in sync.  This creates a pretty nice system.
</p>
<p>
The way I did it was with Zindus, a third party app.  It can sync you're Tbird contacts with
Gmail or Zimbra, so Zimbra users are covered too.  The only thing I think it misses is you're mailing lists
in Thunderbird.  It'll get all the contacts in them, just not the lists themselves.  This is supposedly in
development, though, so even that should be covered soon.
</p>
<p>
Just head to <a href = "http://www.zindus.com/">zindus.com</a> and download the add on there.  Save it to
your desktop or another convenient place.  Then open Thunderbird, go to Tools->Add Ons, and click on Install
in the lower left corner.  Select the file you just downloaded, and Thunderbird will take care of the rest
of the installation.

</p>
<p>
Restart Thunderbird and you'll have your new add on.  Notice the new little black and grey box in the lower
right corner.  If you're not already being prompted to set up Zindus, right click that and click on Settings
(or Tools->Zindus in the drop down menus).
Click add, select either Zindus or Gmail depending on what you want to sync, and enter the required info.
Remember to include @gmail.com if you're syncing with Gmail.  Click ok, try to sync and make sure everything
goes ok, and you're done.  Note that all of you're Gmail contacts are now in your Thunderbird address book,
as well as you're Tbird contacts on your Gmail account.
</p>
<p>
Again, as I do, you can set this up on a different Thunderbird on another operating system or computer to
create a chain, connecting Thunderbird to Gmail to Thunderbird wherever you go.
</p>
<br>
<p>
Finally, you might also find it useful to sync your calendar all across the net.  I use this excessively to
keep track of things I have to do; I can set up an event wherever I am and know that it will follow me
wherever I go.  This makes it kind of hard to escape your obligations, but most of the time it turns out for
the better that way.
</p>
<p>
Sundbird is a cross platform calendar application from Mozilla.  It also has a counterpart that integrates
with Thunderbird in the form of the Lightning add on, as well as another that's a part of the Seamonkey 
internet suite.  This syncing method works among all of them, with Google Calendar being the central hub.
And though I haven't tried it, you could even set this up to include Apple's iCal.  
</p>
<p>
CalDAV is what makes it all happen, which actually isn't separate software at all, just a syncing method
provided by Google.  Open up Google calendar, and notice the Sync button in the top right corner next to
Settings, etc.  Click on that, and go to the part about syncing with Sunbird using CalDAV (or iCal, if
that's what you're going for).  Google will kindly walk you through all the steps you need to get everything
running in concert.  Basically they want you to start a new network calendar in Sunbird, use the CalDAV
standard, and enter some info about your Google Calendar account.  After that, any changes you make in
any Sunbird/Lightning/Seamonkey calendar you set this up on, or any changes you make on Google Calendar,
will all be synchronized. 
</p>

<br>
<p>
And that's it; you officialy have all your browser settings, contacts, and calendar info with you wherever
you happen to be accessing the internet from.  Awesome.
</p>
<p>
As an epilogue, you may even be able to make this system even more OCD by syncing to your cellphone.  Weave, 
Gmail, and Google Calendar all support syncing to some types of cells, as you might have noticed during
your perusal of all that software.  I would definitely try this myself, but I happen to be in Ecuador at
the moment, and I'm using a temporary cell phone while my Blackberry is in the US.  If this ends up being
at all feasable for me later on, I'll be sure to try it out.  Potential followup to come.
</p>