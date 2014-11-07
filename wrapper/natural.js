var natural = require('natural').LevenshteinDistance;

function Base(meta) {
  this._meta = meta;
}
module.exports = Base;

Base.prototype.distance = function (element) {
  return natural(this._meta, element);
};
