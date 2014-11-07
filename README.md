#levenshtein-benchmark

> Simple benchmark for diffrent levenshtein algorithms using real-life data

## Installation

```shell
npm install levenshtein-benchmark
```

## How to run

#### Use as a module

```javascript
var benchmark = require('levenshtein-benchmark');
var editdistance = require("editdistance");

function Dis(str1) {
	this._dis = editdistance(str1);
}
Dis.prototype.distance = function (str2) {
	return this._dis.distance(str2);
}

var bench = benchmark(Dis);

bench.on('progress', function (key) {
	console.log('finished parsing ' + key + '.html');
});

bench.on('result', function (stat) {
	console.log(stat.mean().toPrecision(6) + ' ms/file ± ' + stat.sd().toPrecision(6));
});
```

Where `stat` is a [Summary](https://github.com/AndreasMadsen/summary) object.

#### Use the script

You can also just run `npm test`, that will benchmark all the modules listed
in the `wrapper` directory. Note that you will need to install the `dev-dependencies`
first.

```shell
cd htmlparser-benchmark
npm install
npm test
```

## License

**The software is license under "MIT"**

> Copyright (c) 2014 Andreas Madsen
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.
