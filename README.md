Exports Polyfill
=======================

A JavaScript polyfill for using the global namespace with `module.exports`.

## Usage

Use `module.exports` as described in the [documentation](http://nodejs.org/api/modules.html#modules_module_exports) to **read/extend** the namespace.

```js
module.exports = {
  foo: 42
};

console.log(module.exports.foo); // 42
console.log(foo);                // 42
```

Use the `exports` [shortcut](http://nodejs.org/api/modules.html#modules_exports_alias) to **read** the namespace.

```js
module.exports = {
  foo: 42
};

console.log(exports.foo); // 42
```

Use `module.namespace` to **change** the namespace.

```js
var obj = {};

module.namespace = obj;

module.exports = {
  foo: 42
};

console.log(obj.foo);     // 42
console.log(exports.foo); // 42
```

## Support

Please [open an issue](https://github.com/fraction/exports-polyfill/issues/new) for questions and concerns.

## Contributing

Fork this repository, commit your changes, and [open a pull request](https://github.com/fraction/exports-polyfill/compare/).
