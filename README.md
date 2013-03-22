![JavaScriptjs Logo](https://raw.github.com/peerigon/JavaScript.js/master/gfx/Logo.png)

*The next big thing from the guys behind [FunctinoScript](https://github.com/meaku/FunctinoScript), [JSONPoo](https://github.com/jhnns/JSONPoo) and [halfSource](https://github.com/meaku/halfSource). Logo by [moritzjacobs](https://github.com/moritzjacobs).*

## Synopsis

### Wished you could just run JavaScript in the browser?

Web development has been a pain in the ass lately. There are many technologies around, like CoffeeScript, Dart, TypeScript,
LESS, SASS, etc. and things are getting more complicated everyday. And you just wanted to create your own little homepage - you fool!

### JavaScript.js is here to boost your productivity!

JavaScript.js is a lightweight (~250 bytes uncompressed) JavaScript library that compiles JavaScript to JavaScript - that's
it! Just add the `lib/index.js` to your document and JavaScript.js will do its magic. It's so intuitive and blazing fast!
And what's really cool: We've also added a fallback mode in case you forgot to add it to the document. It just works.

### Fast! Fast! Fast!

JavaScript.js is really fast. Actually, 10x faster than C. It also works in the cloud.

## Installation

Our famous one-line installation:

`npm install javascript.js`

## Example

Open `examples/hello-world.html` in your favorite browser. If you can read "Hello World!" you're ready to go!

```html
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
    <meta charset="utf-8"/>
    <script src="../lib/index.js"></script>
</head>
<body>
    <script>
        document.body.innerHTML = "Hello World!";
    </script>
</body>
</html>
```

If only web development was so much fun all the time.

## License

MIT
