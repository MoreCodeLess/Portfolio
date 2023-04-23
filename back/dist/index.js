"use strict";

var _express = _interopRequireDefault(require("express"));
var _expressGraphql = require("express-graphql");
var _schema = _interopRequireDefault(require("./schema.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.get("/", function (req, res) {
  res.json({
    message: 'HELLO WORLD'
  });
});
app.use('/api', (0, _expressGraphql.graphqlHTTP)({
  graphiql: true,
  schema: _schema["default"]
}));
app.listen(3000, function () {
  return console.log('Server on port 3000');
});
//# sourceMappingURL=index.js.map