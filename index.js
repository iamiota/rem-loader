/**
 * webpack loader pm2rem
 */
module.exports = function (source, map) {
	this.cacheable();
	var opts = {
		pm: 'im',
		width: 750,
		fix: 3
	}
	function convert(content){
		var res = content;
		var regex = new RegExp('(-?[0-9]*[.]?[0-9]+?)'+ opts.pm ,'gi');
		res = res.replace(regex, function($0, $1) {
			/**
			 * 这里需要Fixed一下
			 * 修复在Firefox下面的小数点后面数字过长导致布局错误的bug
			 */
			var text  = ($1 * (320 / opts.width / 20)).toFixed(opts.fix) + 'rem';
			return text;
		});

		return new Buffer(res);
	}

	this.callback(null, convert(source), map);
}
