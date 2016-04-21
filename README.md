# d3-text

Some tools to help with dealing with text in D3.

## Installing

If you use NPM, `npm install d3-text`. Otherwise, download the [latest release](https://github.com/vlandham/d3-text/releases/latest).

## API Reference


### Textwrap

Splits a `text` element into a number of `tspan` elements so as to automatically wordwrap the text, given

<a href="#textwrap" name="textwrap">#</a> <b>textwrap</b>()

Constructs new textwrap helper.

```js
var textwrap = d3_text.textwrap();
```

<a name="textwrap_bounds" href="#textwrap_bounds">#</a> <i>textwrap</i>.<b>bounds</b>({<i>bounds</i>})

*bounds* is expected to be an object with the values `x`, `y`, `width`, and `height`.

<a name="textwrap_padding" href="#textwrap_padding">#</a> <i>textwrap</i>.<b>padding</b>({<i>padding</i>})

*padding* is expected to be an object with `x` and `y` values.




## Also See

Inspired or remixed or duplicated by:

* [d3textwrap](https://github.com/vijithassar/d3textwrap)
* [d3-circle-text](https://github.com/musically-ut/d3-circle-text)
