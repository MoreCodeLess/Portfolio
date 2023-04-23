"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = void 0;
var resolvers = {
  Query: {
    hello: function hello() {
      return 'Como estas?';
    },
    greet: function greet(root, _ref) {
      var name = _ref.name;
      console.log(name);
      return "Hello! ".concat(name, " ");
    }
  }
};
exports.resolvers = resolvers;
//# sourceMappingURL=resolvers.js.map