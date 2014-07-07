Exports Polyfill
=======================

A JavaScript polyfill for accessing the global namespace with `module.exports`.

## Usage

Use `module.exports` as described in the Node.js [documentation](http://nodejs.org/api/modules.html#modules_module_exports) to access the global namespace.

```js
module.exports = {
  foo: 42
};

console.log(foo); // 42
```

You can also use the `exports` [shortcut](http://nodejs.org/api/modules.html#modules_exports_alias) to *reference* the global namespace.

```js
module.exports = {
  foo: 42
};

console.log(exports.foo); // 42
```

## Support

Please [open an issue](https://github.com/christianbundy/exports-polyfill/issues/new) for questions and concerns.

## Contributing

Fork this repository, commit your changes, and [open a pull request](https://github.com/christianbundy/exports-polyfill/compare/).
