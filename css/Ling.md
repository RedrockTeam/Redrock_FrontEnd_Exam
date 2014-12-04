
------ Start Ling ---
###1 (type: CSS)

HTML
```
<div id="A">A
	<div class="B">B</div>
</div>
		
```

CSS
```
#A,.B{
	width:200px;
	height: 200px;
}
#A{
	background: red;
}
.B{
	background: blue;
}
.B #A{
	background: yellow;
}
#A .B{
	background: green;
}
```

> 问: 文字 A 和 B 的颜色分别是什么? 
>   
  
###2 (type: CSS)

HTML 
```
<div id="demo">

    <p>恩，注意看我所在的位置。</p>

</div>
```

CSS
```
#demo{
    width: 1000px;
    height: 600px;
}

#demo p{
    margin: 10% 5%;
}
```

> 问: p 标签的 margin 的 top, right, bottom, left 计算值最终是多少?

--- END Ling ---
