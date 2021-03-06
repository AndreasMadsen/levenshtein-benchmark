
var fs = require('fs');
var path = require('path');
var async = require('async');
var fork = require('child_process').fork;

var wrappers = fs.readdirSync(path.join(__dirname, 'wrapper'))
	.map(function (filename) {
		return {
			name: path.basename(filename, '.js'),
			parser: path.join(__dirname, 'wrapper', filename)
		};
	});

function equalWidth(name) {
	var left = 15 - name.length;
	var str = name;
	for (var i = 0; i < left; i++) str += ' ';
	return str;
}

async.eachSeries(
	wrappers,
	function (item, done) {
		var runner = fork(path.join(__dirname, '/_run.js'));
		runner.send(item);
		runner.on('message', function (stat) {
			console.log(
				'%s: %s ms/file ± %s\n',
				equalWidth(item.name),
				stat.mean.toPrecision(6),
				stat.sd.toPrecision(6)
			);
			done(null);
		});
	},
	function () {}
);
