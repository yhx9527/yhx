# BFC

### 含义

块级格式化上下文，是页面上的一块渲染区域，里面只有块级盒子，BFC规定了它内部块级盒子的如何布局，BFC内部的元素不受外面影响



### 布局规则

1. 内部的盒子会在垂直方向上一个接一个放
2. 同一个BFC上的两个盒子的 垂直margin会重叠
3. BFC区域不会与浮动元素重叠
4. 计算BFC高度时，浮动元素也计算在内



### 触发BFC

1. 根元素body
2. float不为none
3. position为fixed和absolute
4. display为inline-block，table-cell，flex
5. overflow不为visible



### 重叠现象

**外边距(margin)重叠示例**
外边距重叠是指两个垂直相邻的块级元素，当上下两个边距相遇时，起外边距会产生重叠现象，且重叠后的外边距，等于其中较大者。
图示：

另一个重叠现象是当一个元素包含在另一个元素之中时，子元素与父元素之间也会产生重叠现象，重叠后的外边距，等于其中最大者：
![CSS 外边距(margin)重叠及防止方法](http://www.hujuntao.com/wp-content/uploads/2011/11/css_margin_1.gif)
同理，如果一个无内容的空元素，其自身上下边距也会产生重叠。
![CSS 外边距(margin)重叠及防止方法](http://www.hujuntao.com/wp-content/uploads/2011/11/css_margin_2.gif)



、

