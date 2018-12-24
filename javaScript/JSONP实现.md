# JSONP实现

```
<script>     
function testjsonp(data) {        
	console.log(data.name); // 获取返回的结果     
} 
</script> 
<script>     
	var _script = document.createElement('script');     
	_script.type = "text/javascript";     
	_script.src = "http://localhost:8888/jsonp?callback=testjsonp";     	document.head.appendChild(_script); 
</script> 
```

