speech-input
============

Simple speech input for `<input>` elements — replaces the now defunct `x-webkit-speech` attribute

## Use:

1. Include **speech-input.css** and **speech-input.js**
2. Add a `speech-input` class to your input field

And you're done! Here's a demo:

[![speech-input demo][1]][2]

## FAQ

### Why does it keep asking me to allow the microphone?
To have the microphone permissions persist, use https: http://stackoverflow.com/a/15999940/552067

### I clicked the mic button but it didn't do anything.
Make sure you're using it on an actual server — it won't work on a `file://` URL. Try [starting up a simple static HTTP server](https://gist.github.com/willurd/5720255).

### [Can I use](http://caniuse.com/#feat=web-speech) this in non-webkit browsers?
Not yet.

## [License (MIT)](http://hug.mit-license.org/)


[1]: http://f.cl.ly/items/3m0n2Q0y0h1a0N2P2s0Y/screenshot-by-nimbus.png
[2]: http://daniel-hug.github.io/speech-input/
