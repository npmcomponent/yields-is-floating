
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
