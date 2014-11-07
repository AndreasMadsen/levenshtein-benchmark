
var fs = require('fs');
var path = require('path');
var util = require('util');
var events = require('events');

var async = require('async');
var summary = require('summary');

var DATA = fs.readFileSync(path.resolve(__dirname, 'data.json'), 'utf8')
	.split('\n')
	.slice(0, -1)
	.map(JSON.parse);

function Benchmark(parser) {
	if (!(this instanceof Benchmark)) return new Benchmark(parser);

	this._Parser = parser;

	async.mapSeries(DATA, this._meta.bind(this), this._done.bind(this));
}
util.inherits(Benchmark, events.EventEmitter);
module.exports = Benchmark;

// The total amount of files
Benchmark.TOTAL = DATA.length;

// Parse a file
Benchmark.prototype._meta = function (item, done) {
	var self = this;

	var tic = process.hrtime();
	for (var m = 0; m < item.meta.length; m++) {
		var base = new this._Parser(item.meta[m]);

		for (var e = 0; e < item.element.length; e++) {
			base.distance(item.element[e]);
		}
	}
	var toc = process.hrtime(tic);

	setImmediate(function () {
		self.emit('progress');
		done(null, toc);
	});
};

// Benchmark for this parser is done
Benchmark.prototype._done = function (err, times) {
	if (err) return this.emit('error', err);

	var stat = summary(times.map(function (time) {
		return time[0] * 1e3 + time[1] / 1e6;
	}));

	this.emit('result', stat);
};
