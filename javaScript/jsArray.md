# JS数组中常用的方法

- arr.concat(arr1,arr2)

用于连接数组或值，返回新数组

```
var a = [1,2,3];
document.write(a.concat(4,5));

var arr3 = new Array(2)
arr3[0] = "William"
arr3[1] = "Franklin"
document.write(a.concat(arr3))
```

- arr.join('.')

将数组变为字符串

- arr.toString()

与arr.join()返回的一样

- arr.toLocalString()

调用每个数组元素的toLocalString(),然后使用地区特定的分隔符把生成的字符串连接起来，形成一个字符串。



- arr.pop() 

删除并返回数组中的最后一个元素

- arr.push(item1,item2)

向末尾添加一个或多个元素，并返回新的长度

- arr.shift()

删除并返回数组中的第一个元素

- arr.unshift()

向数组开头添加一个或多个元素，并返回新的长度



- arr.slice(start,end)

返回数组片段，start,end可为负数

- arr.splice(开始的位置，数目，添加的项)

用于给原数组删除或添加项，返回这些删除项组成的数组



- arr.sort(规定排序顺序的函数)

在原数组上排序，默认按字符编码的顺序排序，返回数组的引用











