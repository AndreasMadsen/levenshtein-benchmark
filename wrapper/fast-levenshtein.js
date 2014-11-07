
var levenshtein = require('fast-levenshtein');

function Base(meta) {
  this._meta = meta;
}
module.exports = Base;

Base.prototype.distance = function (element) {
  return levenshtein.get(this._meta, element);
};
