
+++
date = "2009-08-05T16:04:23-07:00"
draft = false
title = "PHP + SQL = FUN"
pic = ""
aliases = [
  "/blog/PHP+++SQL+=+FUN"
]
+++

<p>
I think I have the majority of the bugs ironed out of my new blog software, pending a few pictures I'm still uploading on the
terribly sketchy internet.  I swear, I get 10 times as much stuff done in the same time in Michigan as I do here only because of
the difference in the internet.  But anyways, here's what I did with the site.
</p>
<p>
The old site (being nothing but hand-written html and css), was a pain to update and maintain, so I came up with a solution.  The
new site uses a MySQL database to hold all of the entries, along with some other data like their title, date, category, and a reference
number.  All of the files actually on the site are now .php files, not .html, and they all reference the database for the entry
information that they need.  That way, any changes made to the database will automatically appear on the website, since you are
changing what they reference.  Nothing needs to be changed in any of the files on the server.  No FTP is needed, everything is
done automatically when the database is updated.
</p>
<p>
Using this same logic and a bit more php, I can also automatically and dynamically control other parts of the website.  The
archives, for example, print all of the titles, dates, and categories of each entry (or each entry from a given category) into
a table simply by looking up all of this information in the database.  The links to the next/previous news item is also calculated
given the number of the entry that is on the page.
</p>
<p>
This allows me to have a complex site with over 100 pages, and still update it all more quickly and easily than I could update the
old site.  One quick change in the database, and all 100+ pages of the site change themselves to adapt.
</p>
<p>
The site can even be updated from a simple system that can be accessed from a web browser, which is what I'm doing over at 
<a href = "http://www.arcoiris.org.ec">Arcoiris</a>.
Basically, I can get all the fields from a given entry into an
html form using php, and I can then rewrite any changes that the user makes back to the database again just as easily.  And obviously,
I can add an entirely new entry with the same logic.  I'll write my own adaptation of this type of update system for this site when I 
get the chance.  
</p>
<p>
I've been doing a lot of stuff with improving these ideas as well in other tests.  I have written a php file that can be duplicated
an unlimited number of times, changing only the filename and not the file at all, and have each one still be able to display a 
different, unique piece of data.  Like an entry in this case.  This saves me from having to manually edit each file to have it
reference a different row in the database.  It's a lot faster to simply copy the file a hundred times.
</p>
<p>
The way I do this is by having the file look at it's own filename, and then call the correct database entry based on that info.  The
command in php is:
</p>
<p>
getname($_SERVER["PHP_SELF"]);
</p>
<p>
I have even written something to display an unlimited number of entries using a single file.  A whole blog full of entries can be
navigated using a single php file.  I do this by having the same file link to itself with "?foo=$bar" added to the end of it, so it is as if
it was called by an html form using the get method.  I can then, within the same file, use php's REQUEST function to retrieve this
data, and access a different part of the database.  And notice that these are real links; the user could, for example, bookmark
the location with the get information and the link would always work.
</p>
<p>
This blog still does not use a lot of this stuff, as I have been developing it while working on the 
<a href = "http://www.arcoiris.org.ec">Arcoiris</a> 
news system and some crazy all new stuff on the 
<a href = "http://www.turkiball.com">Turkiball</a> 
website.  I'll get to it, though.  The point is that after going from static html, to dynamic content
using perl and javascript, to this php and SQL combination, I am amazed at some of the stuff I can do.  This may not be anything new
the web, but it's new to my tiny view of what it's like to develop for the web.  I had no experience in anything
but html and css at the start of this summer, and I have improved the stuff I can do incredibly just by teaching myself the things
mentioned above.  I'm proud.
</p>
<p>
I might get to a tutorial or something over in the
<a href = "http://www.justinmccandless.com/solutions">solutions</a>
section of the site if I get a chance.  Maybe even posting some of my php functions and stuff.  I also have a perl program that batch copies
files which I might share, and I may write my htmltojs converter file in a htmltophp style.  It would be useful to me at least.  And last
random wish for the site is rss feeds at the main page and each category.  I'll get back to work.
</p>