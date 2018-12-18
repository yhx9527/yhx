# js字符串处理常用函数分类

**'I-never-forget-this-question'.replace(/-\w/g, function(item){return item.substr(1,1).toUpperCase()})**

==es6==中的方法高亮了

#### 单个字符

- "hello".charAt(1) //返回指定位置的字符

- “hello”.charCodeAt(1) //返回指定位置字符的Unicode编码
- ==“𠮷”.codePointAt(0) //返回4个字节存储的字符的编码，用charCodeAt会将看成两个字符==

#### 编码返回字符

- String.fromCharCode(72,69,76,76,79) //返回字符编码构成的字符串，该结果为 HELLO
- ==String.fromCodePoint(0x20BB7) //返回四个字节组成的字符编码构成的字符串==

#### 检索字符串

- "hello".indexOf('l',3) //从前往后搜索返回某个字符串值所在的位置，第二个参数为从哪里开始匹配

- "hello".lastIndexOf('l',3)//从后往前搜索返回某个字符串值所在的位置，第二个参数为从哪里开始匹配

- "Hello".search(/hell/i) //输出第一个与regexp相匹配的子串的起始位置

- "1 plus 2 equal 3".match(/\d+/g)  //返回匹配结果组成的数组

- ==ES6 为字符串添加了遍历器接口，使得字符串可以被`for...of`循环遍历==

  ```javascript
  for (let codePoint of 'foo') {
    console.log(codePoint)
  }
  ```

- ==‘Hello’.includes('o')  //返回布尔值，表示是否找到了参数字符串==

- =='Hello'.startsWith('ll',2)//返回布尔值,表示是否以参数字符串开头，第二个参数，表示开始搜索的位置==

- =='Hello'.endsWith('ll',2)//返回布尔值,表示是否以参数字符串结尾，第二个参数，表示对于前n个字符来说==

#### 截取字符串

- "hello".concat("world") //返回字符串连接的结果
- "Hello".slice(start,end) //截取某两个位置之间的字符串,start和end可以为负
- 'hello'.substr(1,3) //从某个位置开始提取指定长度的字符
- 'hello'.substring(1,3)//提取两个位置间的字符，不能为负数

#### 替换字符段

- "Doe, John".replace(/(\w+)\s*,\s*(\w+)/, "$2 $1")//字符串替换，该结果为John,Doe

#### 字符串分割为数组

- 'hello world'.split(/\s+/) //将字符串按某种方式分割成数组

#### 重复字符串

- ==‘x’.repeat(3) //`repeat`方法返回一个新字符串，表示将原字符串重复`n`次。==

#### 字符串补全

- =='09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"==
- =='x'.padEnd(4，‘y’) // 'xyyy'==









​	
​	