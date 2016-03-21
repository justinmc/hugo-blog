
+++
date = "2016-03-12T22:48:42-08:00"
draft = false
title = "HTML5 Audio with React"
pic = "/files/react audio.png"
aliases = [
  "/blog/HTML5+Audio+with+React"
]
+++

<p>The HTML5 audio tag provides a great way to work with simple audio in a web app, but when you’re using React’s nice pattern in the rest of your app, it can be a pain to go back to messing directly with DOM objects.  The <a href="https://www.npmjs.com/package/react-audio-player">ReactAudioPlayer</a> module provides a thin wrapper to the audio tag that fits right into a React app.</p>

<p>ReactAudioPlayer is something I wrote while working on an audio project.  It passes through all of the typical attributes that the audio tag uses (listed nicely on the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio">MDN audio article</a>).  Most importantly, it provides a nice interface to all of the <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events">events fired by the audio tag</a>.  So instead of messing with references to your audio tag and setting event listeners everywhere, you can do this:</p>

<pre><code>&lt;ReactAudioPlayer
  onPause={this.onPause}
/&gt;
</code></pre>

<p>This follows for any other event you can listen to on the audio tag.  And of course, any changes to the passed in <code>props</code> will update the audio tag immediately.  This includes the <code>src</code> attribute, which will change the currently playing or loaded media in the audio tag.</p>

<p>ReactAudioPlayer is an npm module, so you can install it in your app with <code>npm install --save react-audio-player</code>.  Check it out <a href="https://www.npmjs.com/package/react-audio-player">on npm</a> and <a href="https://github.com/justinmc/react-audio-player">on github</a>.</p>