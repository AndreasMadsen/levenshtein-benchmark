
var levdist = require('levdist');

function Base(meta) {
  this._meta = meta;
}
module.exports = Base;

Base.prototype.distance = function (element) {
  return levdist(this._meta, element);
};
