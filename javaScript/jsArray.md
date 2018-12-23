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

// 不带参数实现数组的拷贝
var arr = a.concat()
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

- arr.unshift(item1,item2)

向数组开头添加一个或多个元素，并返回新的长度



- arr.slice(start,end)

返回数组片段，start,end可为负数

- arr.splice(开始的位置，数目，添加的项)

用于给原数组删除或添加项，返回这些删除项组成的数组



- arr.sort(规定排序顺序的函数)

在原数组上排序，默认按字符编码的顺序排序，返回数组的引用



- arr.indexOf(要查找的元素，开始查找的位置)

`**indexOf()**`方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。



ES6

- Array.from()

将类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）转成真正的数组

- Array.of()

将一组值，转换为数组。

- arr.copyWithin(开始替换数据的位置，开始读取数据的位置，到某个位置停止读取数据(默认到数组末尾))

```javascript
[1, 2, 3, 4, 5].copyWithin(0, 3)
// [4, 5, 3, 4, 5]
```

- arr.find(回调函数, 回调函数的this)

数组实例的`find`方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，

```javascript
[1, 5, 10, 15].find(function(value, index, arr) {
  return value > 9;
}) // 10
```

- arr.findIndex(回调函数，回调函数的this)

数组实例的`findIndex`方法的用法与`find`方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回`-1`。

```javascript
function f(v){
  return v > this.age;
}
let person = {name: 'John', age: 20};
[10, 12, 26, 15].find(f, person);    // 26
```

- arr.fill(要填充的值，填充的起始位置，填充的结束位置)

```javascript
['a', 'b', 'c'].fill(7, 1, 2)
new Array(3).fill(7)
// [7, 7, 7]
```

注意，如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。

```javascript
let arr = new Array(3).fill([]);
arr[0].push(5);
arr
// [[5], [5], [5]]
```

- arr.entries(),arr.keys(),arr.values()

可以用`for...of`循环进行遍历，唯一的区别是`keys()`是对键名的遍历、`values()`是对键值的遍历，`entries()`是对键值对的遍历。



- arr.includes(包含的元素)

方法返回一个布尔值，表示某个数组是否包含给定的值

`includes`使用的是不一样的判断算法

```javascript
[NaN].includes(NaN)
// true
```



- arr.flat(拉平的层数)

拉平数组,默认拉平一层

```javascript
[1, 2, [3, [4, 5]]].flat(2)
// [1, 2, 3, 4, 5]
[1, [2, [3]]].flat(Infinity) //拉平所有层
// [1, 2, 3]
```

如果原数组有空位，`flat()`方法会跳过空位。

```javascript
[1, 2, , 4, 5].flat()
// [1, 2, 4, 5]
```

- arr.flatMap(回调函数，回调函数的this)

`flatMap()`方法对原数组的每个成员执行一个函数（相当于执行`Array.prototype.map()`），然后对返回值组成的数组执行`flat()`方法。该方法返回一个新数组，不改变原数组。

```javascript
// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
[2, 3, 4].flatMap((x) => [x, x * 2])
// [2, 4, 3, 6, 4, 8]
```