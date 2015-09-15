# ramda-repl 
> [Ramda](http://ramdajs.com/) + [ramda-fantasy](https://www.npmjs.com/package/ramda-fantasy) REPL 


## Install

```
$ npm install --save ramda-repl
```


## Usage

```js
var ramdaRepl = require('ramda-repl');

ramdaRepl();
//=> Will start a REPL
```


## CLI

```sh
$ npm install --global ramda-repl
```

$ ramda-repl

__Will start a REPL as below with `R` as well as current context is extended with ramda__

```
Welcome to Ramda REPL!

λ > typeof R 
'object'

λ > typeof map
'function'

λ > typeof zipWith
'function'

```

## GIF FTW

![ramda-repl](./ramda-repl.gif)

## License

MIT © [Hemanth.HM](http://h3manth.com)
