# HTMLCollection

**HTMLCollection** 接口表示一个包含了元素（元素顺序为文档流中的顺序）的通用集合（generic collection），还提供了用来从该集合中选择元素的方法和属性。

HTML DOM 中的 `HTMLCollection` 是即时更新的（live）；当其所包含的文档结构发生改变时，它会自动更新。

在 JavaScript 中，为了获取给定的 HTMLCollection 的元素，可以使用方括号语法来代替直接调用 `item()` 或 `namedItem()` 方法。在方括号中，数值如同 `item()`，字符串值如同 `namedItem()。`



```js
var elem1, elem2;

// document.forms 是一个 HTMLCollection

elem1 = document.forms[0];
elem2 = document.forms.item(0);

alert(elem1 === elem2); // 显示 "true"

elem1 = document.forms["myForm"];
elem2 = document.forms.namedItem("myForm");

alert(elem1 === elem2); // 显示 "true"
```