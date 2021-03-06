
var levenshtein = require('levenshtein-edit-distance');

function Base(meta) {
  this._meta = meta;
}
module.exports = Base;

Base.prototype.distance = function (element) {
  return levenshtein(this._meta, element);
};
