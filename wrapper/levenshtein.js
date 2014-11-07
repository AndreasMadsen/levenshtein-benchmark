
var Levenshtein = require('levenshtein');

function Base(meta) {
  this._meta = meta;
}
module.exports = Base;

Base.prototype.distance = function (element) {
  return (new Levenshtein(this._meta, element)).distance;
};
