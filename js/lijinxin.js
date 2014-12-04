/*-----------------------------------
 * 判断下面的console.log()各输出什么值 
 *------------------------------------
*/
console.log(value);

var value = "value1";

function show(){
	console.log(value);

	var value = "value2";

	(function(){
		console.log(this.value);
	})();
}

show();
