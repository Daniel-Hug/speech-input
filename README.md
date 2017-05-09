speech-input
============

Simple speech input for `<input>` and `<textarea>` elements — replaces the now defunct `x-webkit-speech` attribute

## Use:

1. Include **speech-input.css** and **speech-input.js**
2. Add a `speech-input` class to your `<input>` or `<textarea>`

And you're done! Here's a demo:

[![speech-input demo][1]][2]

## FAQ

### Does it support recognition in other languages?
Yes. It uses the value of the `lang` attribute on the `<html>` element by default. But you can override this by specifying a `lang` attribute on the input fields themselves. You may then also want to customize the "Speak now" text for that language with a `data-ready` attribute on that field:

```html
<input type="text" class="speech-input" lang="es" data-ready="Habla ahora">
```

### Extra options

**Button Size**

If, for any reason, you want  to change the button size, you can use the data attribute `buttonsize`.

```html
<input type="text" class="speech-input" data-buttonsize="20">
```

**Speech time limit**

By default, the speech limit is 6 seconds. If you want to change this, you can use the data attribute `patience`.

```html
<input type="text" class="speech-input" data-patience="2">
```

*(The above example will give 2 seconds limit after you stop speaking)*


### Why does it keep asking me to allow the microphone?
To have the microphone permissions persist, use https: http://stackoverflow.com/a/15999940/552067

### I clicked the mic button but it didn't do anything.
Make sure you're using it on an actual server — it won't work on a `file://` URL. Try [starting up a simple static HTTP server](https://gist.github.com/willurd/5720255).

### [Can I use](http://caniuse.com/#feat=web-speech) this in non-webkit browsers?
Not yet.

## [License (MIT)](http://hug.mit-license.org/)


[1]: http://f.cl.ly/items/3m0n2Q0y0h1a0N2P2s0Y/screenshot-by-nimbus.png
[2]: http://daniel-hug.github.io/speech-input/
