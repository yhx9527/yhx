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



、

