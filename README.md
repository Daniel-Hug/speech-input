speech-input
============

Simple speech input for `<input>` elements — replaces deprecated `x-webkit-speech` attribute

Use:
----

1. Include **speech-input.css** and **speech-input.js**
2. Add an `si-input` class to your input field. 
3. Wrap the input in a `<div>` with an `si-wrapper` class.
4. Add a button with an `si-btn` class as a sibling to the input. For the default style use the button markup in the example below:

```
<div class="si-wrapper">
    <input type="text" class="si-input" placeholder="What's up?">
    <button class="si-btn">
        speech input
        <span class="si-mic"></span>
        <span class="si-holder"></span>
    </button>
</div>
```

And you're done! The input field should look like this now:

![speech-input demo](http://f.cl.ly/items/3m0n2Q0y0h1a0N2P2s0Y/screenshot-by-nimbus.png)

### [License (MIT)](http://hug.mit-license.org/)
