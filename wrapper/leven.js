var leven = require('leven');

function Base(meta) {
  this._meta = meta;
}
module.exports = Base;

Base.prototype.distance = function (element) {
  return leven(this._meta, element);
};
