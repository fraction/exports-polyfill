// Initialize an empty module object
module = {};

// Functions created this way don't inherit strict mode
exports = Function('return this')();

// Define what happens when you try to get or set `module.exports`
Object.defineProperty(module, 'exports', {
  // Extend the top-level object with the object that's passed
  set: function (obj) {
    for (var prop in obj) {
      // Don't set properties inherited from the prototype
      if (obj.hasOwnProperty(prop)) {
        exports[prop] = obj[prop];
      }
    }
  },
  // Return the top-level object
  get: function () {
    return exports;
  }
});
