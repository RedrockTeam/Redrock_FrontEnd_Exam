/*-----------------------------------
 * 判断下面的console.log()各输出什么值 
 *------------------------------------
*/
console.log(value);  // value 1 

var value = "value1";

function show(){
	console.log(value);

	var value = "value2";

	(function(){
		console.log(this.value); // value1
	})();
}

show();

// 请解释为什么2个输出全是value1
