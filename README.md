speech-input
============

Simple speech input for `<input>` and `<textarea>` elements — replaces the now defunct `x-webkit-speech` attribute

## Use:

1. Include **speech-input.css** and **speech-input.js**
2. Add a `speech-input` class to your `<input>` or `<textarea>`

And you're done! Here's a demo:

[![speech-input demo][1]][2]

## Extra options

### Other languages
It uses the value of the `lang` attribute on the `<html>` element by default. But you can override this by specifying a `lang` attribute on the input fields themselves. You may then also want to customize the "Speak now" text for that language with a `data-ready` attribute on that field:

```html
<input type="text" class="speech-input" lang="es" data-ready="Habla ahora">
```

### Button size
If, for any reason, you want to change the button size, you can use the `data-buttonsize` attribute:

```html
<input type="text" class="speech-input" data-buttonsize="20">
```

### Speech time limit
By default, it will wait a full 6 seconds after you finish speaking until it stops listening. You can change this time with the `data-patience` attribute:

```html
<input type="text" class="speech-input" data-patience="2">
```

### Submit when done
If you add the `data-instant-submit` attribute, the form that the input is in will automatically be submitted after listening stops:

```html
<input type="text" class="speech-input" data-instant-submit>
```


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
