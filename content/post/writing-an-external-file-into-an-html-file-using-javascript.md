
+++
date = "2009-07-09T16:04:23-07:00"
draft = false
title = "Writing an External File into an HTML File using Javascript"
pic = ""
aliases = [
  "/blog/Writing+an+External+File+into+an+HTML+File+using+Javascript",
  "/blog/writing+an+external+file+into+an+html+file+using+javascript"
]
+++

<p>
    I've been writing a bunch of somewhat useful little programs during my web design jobs and here's one that might 
    possibly prove useful to someone else.  It's in Perl, and free of course.  Feel free edit the code, and really do whatever you
    want with it.  As long as you don't claim it's yours or anything like that, we're cool.  The link's at the bottom.
    </p>
    <br>
    <p>
    A lot of times I use a javascript file full of document.write statements to write a bunch of html into an html
    page.  This is usually because I'm generating the javascript dynamically using a Perl program or something.
    Anyway, I often find myself needing to convert large amounts of html that I have previously written into this
    form of javascript.  But that obviously gets annoying by hand, especially when I have to escape quotation
    marks, etc.  So that's where this program comes in.
    </p>
    <p>
    The program takes as input an html file, and puts each line of it into a document.write statement in a new
    javascript file of the same name with a js extension, in the same directory.  It will mercilessly erase any file
    with that name that might already exist in the directory, however, so watch out.
    </p>
    <p>
    Here are some basic instructions for using it in a Unix based OS.  Download the file, and move it to the directory
    with the html file(s) you want to convert.  Open a shell and navigate to this directory.  Chmod the file to 755
    if it's not already, like this : "chmod 755 htmltojs.pl".  Then run the file, using this command: "./htmltojs.pl".
    Read the instructions, do what it says, and you're converting html to javascript.
    </p>
    <p>
    There is some fairly detailed text about the program within the code itself, including how to use it with filetypes
    other than html.  Just open it with a text editor.  If anyone needs me to modify the program for various purposes such
    as running on a server, taking command line input, working with other filetypes, etc. just let me know and I'd be
    happy to help.  And as always any other questions, comments, or spam about South African bank accounts are welcome
    at my email.
    </p>
    <p>
    <a href = "mailto: justin@justinmccandless.com"> justin@justinmccandless.com </a>
    </p>
    <br><br>
    <p>
    And finally, here's the download link:    
    </p>
    <a href = "htmltojs.pl">htmltojs.pl</a>