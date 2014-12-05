##css题(盒模型)

题目:用word,或者画图,或者photoshop等随便一个,画出下面id为box的div的盒模型.

***index.html***

```

	<!DOCTYPE html>
	<html>
	<head lang="en">
    	<meta charset="UTF-8">
    	<title></title>
    	<link rel="stylesheet" href="test.css"/>
	</head>
	<body>
		<div id="test">
			<div id="box"></div>
		</div>
	</body>
	</html>
	
```
***test.css***

```

	*{
		margin:0;
		padding:0;
	}
	#test{
		width: 500px;
		height: 500px;
	}
	#box{
		height: 100px;
		margin: 5px 15px 45px 8px;
		padding: 4px 10px 15px;
	}

```
