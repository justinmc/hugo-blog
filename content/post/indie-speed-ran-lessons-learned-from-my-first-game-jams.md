
+++
date = "2013-10-10T00:39:10-07:00"
draft = false
title = "Indie Speed Ran - Lessons Learned from My First Game Jams"
pic = "/files/Screenshot from 2013-10-10 11:21:12.png"
aliases = [
  "/blog/Indie+Speed+Ran+-+Lessons+Learned+from+My+First+Game+Jams",
  "/blog/indie+speed+ran+-+lessons+learned+from+my+first+game+jams"
]
+++

<p>I've finished my entry to Indie Speed Run 2013, it's called Going Up and it's <a href="http://www.escapistmagazine.com/content/indie-speed-run/?game=680">on The Escapist right now</a>! (And here's a <a href="http://justinmccandless.com/demos/going-up/index.html">version I'm hosting myself</a> since the Escapist site is causing the game to have problems)</p>

<p>This time around, after learning quite a bit from my <a href="http://justinmccandless.com/blog/Ludum+Dare+27+this+Weekend">entry into Ludum Dare</a> a few weeks ago, I made many improvements to my development process.  However, I was still plagued by bugs, an incomplete implementation, and worst of all some compatibility problems with the iframe display format on The Escapist.</p>

<p>The resulting game is actually quite similar to my Ludum Dare entry in that it's a cool idea only partially realized.  Having these two basic prototypes is nice, and I'm very excited to turn them into full games on my own schedule shortly.  However, the biggest value in creating some of the first games I've ever made is in the lessons learned.  Before I get myself into another heap of work fleshing out these games, let's take a look at what I learned most from this round of crazy game jam.</p>

<h2 id="prepare">Prepare!</h2>

<p>In Ludum Dare, you are limited to only using code publicly available besides what you write in the 48 hours.  In Indie Speed Run, you are able to use any private codebase you have lying around.  In both cases I was horribly unprepared.  Whichever style you are competing in, there are a few things you need to have ready to go, polished, and know like the back of your hand.</p>

<h3 id="setupaframework">Set Up a Framework</h3>

<p>In both Ludum Dare and Indie Speed Run, you are presented with a theme in some way or another when you start the competition.  Before I started each I had very little basic code down, because I didn't want to limit myself.  What if the idea that came to me was a top down city builder, or a side scrolling platformer, or a single screen puzzle game?  I figured I would write everything as I thought of it.</p>

<p>This was a horrible mistake in both competitions.  Trust me when I say that whatever the theme is, you can adapt your style of game development to it.  Maybe if you are a very experienced game developer with lots of base code that you know well, then you can still keep your options open.  But that certainly didn't describe me going into these competitions, and I should have at the very least had the basics for one type of game written, tested, and ready to go.</p>

<p>This especially includes boilerplate code that should be a given.  You had better not spend 1 minute of your 48 hours making sure your game will run on a server versus as a static file.  Do not waste time checking to see that your game fits different screen sizes.  If it's at all possible to do it beforehand, do it, and make sure it is solid.</p>

<h3 id="practice">Practice</h3>

<p>During the competition, you should not be doing anything that you've never done before.  Do you plan to record some audio and use it in your game?  Get everything installed and set up for that now, and try to get some test audio into a test game.  Expect to use pixel art in your game?  Don't think you're ready to go just because you've screwed around in Gimp before; go through the process of creating an entire sprite sheet for a character and animating it in a game.  These basic things are more involved than they seem, and you want to be just going through a process when you do them, not figuring out anything new.</p>

<h3 id="ensureafull48hoursofwork">Ensure a Full 48 Hours of Work</h3>

<p>You're going to need all 48 of those hours and you will still be compromising in your game.  Make sure you have no distractions the whole time.  A small errand can take up more time than you think including commuting and mentally removing and restarting yourself on the project.  Make sure you have food and anything else you need easily accessible, with no distractions, beforehand.</p>

<p><br /></p>

<p>A lot of my reasoning for entering these competitions was just to motivate me to create a complete game in a short amount of time.  I went into it thinking that I could do the whole thing in 48 hours, but really this is not how it's supposed to go.  You should spend much more than this just getting ready, even building a complete test game before the competition starts.  That way you'll be ready to actually spend the 48 hours making a game, not reinventing the wheel.</p>

<h2 id="workefficiently">Work Efficiently</h2>

<p>When the competition starts, you need to budget your breaks just as wisely as your work.  It helps me to work in bursts of about 45 minutes each, then regroup my mind with a short break and start again.  You could easily spend all 48 hours trying to get your character's walking animation looking how you want it, so don't let yourself fall into these time traps.</p>

<p>Also don't think that you can work through all 48 hours without sleeping.  You will work efficiently for the first 12 hours or so and then be a zombie for the next 36.  You need to fit about 8 hours of sleep in there somewhere.  Save your giant case of Red Bull for the final night and spend your time crashing after the deadline.</p>

<h2 id="dontworryasmuchaboutcodingstyle">Don't Worry As Much About Coding Style</h2>

<p>As a code organization Nazi, it really pains me to write that.  However, if you've just written a module, it works, and it's doubtful you'll touch it again before the end of the competition, then don't waste time making the code pretty.  I was tempted many times to go back and rewrite pieces of Going Up, but if you're only spending 48 hours with the codebase, then it's not very likely to pay off.</p>

<p>Keep in mind this is only during the competition, though.  For any base code that you set up before the competition, the exact opposite applies.  Make sure that stuff is a sacred temple of organization and you know exactly how to write proper code on top of it.</p>

<h2 id="focusonaminimumviableproduct">Focus on a "Minimum Viable Product"</h2>

<p>When you first start forming an idea for a game in your head, pare it down to a minimum viable product and focus your work on that.  Then stop and pare it down even more, because you are probably still aiming way too high for the scope of the competition.  You want to spend zero time working on things that won't make it into your entry if at all possible.</p>

<p>In Going Up, I spent a lot of time writing the code for a fully functional elevator.  Like it is callable from any floor, has its own movement speed, and can handle button presses inside to any floor.  In the submitted game, literally an animation with a timer would have worked fine.  Focus on an MVP and dodge traps like this.</p>

<h2 id="andlastlydoit">And Lastly, Do It</h2>

<p>You should totally enter a game competition and make a game.  Even if you're unsure about your ability to create a game, you will only learn by doing.  Both of the games I wrote are horribly incomplete and buggy, and yet I'm very happy with making it through the competitions.</p>

<p>I've been incredibly passionate about games for my whole life, yet I've spent most of that time not making games.  I always thought that I would someday have the time to make some gloriously complicated game and release it to the world to instant universal praise.  Maybe I will someday, but I'm a lot closer now after incrementally building smaller games than by sitting and brooding on untested ideas.</p>

<p>At the end of the competition you might not have the world changing game you've always dreamed of.  You'll have to make a lot of compromises and you'll probably even make more mistakes than are on this list, but you'll have something that you created, and you'll be proud of it.  Whether it's for Ludum Dare, Indie Speed Run, <a href="http://www.onegameamonth.com/">One Game a Month</a>, or just for yourself, make a game!</p>

<p><br /></p>

<p><i>This article was cross posted on Medium: <a href="https://medium.com/what-i-learned-building/c172a552d051">https://medium.com/what-i-learned-building/c172a552d051</a>.</i></p>