js字符串处理常用函数  

    "hello".charAt(1) //返回指定位置的字符
	"hello".concat("world") //返回字符串连接的结果
	String.fromCharCode(72,69,76,76,79) //返回字符编码构成的字符串，该结果为 HELLO
	"1 plus 2 equal 3".match(/\d+/g)  //返回匹配结果组成的数组
	"hello".indexOf('l',3) //从前往后搜索返回某个字符串值所在的位置，第二个参数为从哪里开始匹配
	"hello".lastIndexOf('l',3)//从后往前搜索返回某个字符串值所在的位置，第二个参数为从哪里开始匹配
	"Doe, John".replace(/(\w+)\s*,\s*(\w+)/, "$2 $1")//字符串替换，该结果为John,Doe
	"Hello".search(/hell/i) //输出第一个与regexp相匹配的子串的起始位置
	"Hello".slice(start,end) //截取某两个位置之间的字符串,start和end可以为负
	'hello world'.split(/\s+/) //将字符串按某种方式分割成数组
	'hello'.substr(1,3) //从某个位置开始提取指定长度的字符
	'hello'.substring(1,3)//提取两个位置间的字符，不能为负数


	
	