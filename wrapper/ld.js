
var ld = require('ld').computeDistance;

function Base(meta) {
  this._meta = meta;
}
module.exports = Base;

Base.prototype.distance = function (element) {
  return ld(this._meta, element);
};
