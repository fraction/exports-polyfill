Exports Polyfill
=======================

A JavaScript polyfill for using `module.exports` from Node.js.

## Usage

Use `module.exports` as described in the [documentation](http://nodejs.org/api/modules.html#modules_module_exports) to access the global namespace.

```js
module.exports = {
  foo: 42
};

console.log(foo); // 42
```

You can also use the `exports` shortcut to [reference the global namespace](http://nodejs.org/api/modules.html#modules_exports_alias).

```js
module.exports = {
  foo: 42
};

console.log(exports.foo); // 42
```
