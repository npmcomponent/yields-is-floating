*This repository is a mirror of the [component](http://component.io) module [yields/is-floating](http://github.com/yields/is-floating). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/yields-is-floating`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# is-floating

  check if an element is floating.

## Installation

  Install with [component(1)](http://component.io):

    $ component install yields/is-floating

## Example

```js
var float = require('is-floating');

assert(float(create('<a style="float: left">')));
assert(float(create('<a style="float: right">')));
assert(float(create('<td>')));
assert(float(create('<span>')));
assert(false == float(create('<div>')));
```

## Caveats

the element styles should be computed, since `.getComputedStyles()` is used.

## Tests

```bash
$ make test
```

## License

  MIT
