# z-index

CSS为盒模型的布局提供了三种不同的[定位方案](http://www.w3.org/TR/CSS2/visuren.html#positioning-scheme)：

- 常规文档流
- 浮动
- 绝对定位

### 含义

决定了元素沿着z轴元素是如何分布的（如何层叠），CSS允许我们对z-index属性设置[三种值](http://www.w3.org/TR/CSS21/visuren.html#propdef-z-index)。

- auto (自动，默认值)
- (整数)
- inherit (继承)



### 层叠上下文

层叠上下文中一共可以有7种层叠等级，列举如下：

1. **背景和边框** —— 形成层叠上下文的元素的背景和边框。 层叠上下文中的最低等级。
2. **负z-index值** —— 层叠上下文内有着负z-index值的子元素。
3. **块级盒** —— 文档流中非行内非定位子元素。
4. **浮动盒** —— 非定位浮动元素。
5. **行内盒** —— 文档流中行内级别非定位子元素。
6. **z-index: 0** —— 定位元素。 这些元素形成了新的层叠上下文。
7. **正z-index值** —— 定位元素。 层叠上下文中的最高等级。

![层叠上下文](D:\个人发展\yhx_study\css\resource\stacking-order1.png)



**当你将除了`auto`以外的z-index值赋给一个元素，该元素变为定位元素，可以使用left，top之类的，创建了一个新的层叠上下文，它独立于其他的层叠上下文。**



### 演示

```
   <div class="one">
        <div class="two"></div>
        <div class="three"></div>
    </div>
    <div class="four"></div>
    
div {
  width: 200px;
  height: 200px;
  padding: 20px;
}
 
.one, .two, .three, .four {
  position: absolute;
}
  
.one {
  background: #f00;
  outline: 5px solid #000;
  top: 100px;
  left: 200px;
  z-index: 10;
}
  
.two {
  background: #0f0;
  outline: 5px solid #000;
  top: 50px;
  left: 75px;
  z-index: 100;
}
 
.three {
  background: #0ff;
  outline: 5px solid #000;
  top: 125px;
  left: 25px;
  z-index: 150;
}
 
.four {
  background: #00f;
  outline: 5px solid #ff0;
  top: 200px;
  left: 350px;
  z-index: 50;
}
```

由于div.two被包含在div.one中，它的z-index值也是相对于`div.one`的层叠上下文来说的。 事实上，我们真正得到的是如下结果：

- .one — z-index = 10
- .two — z-index = 10.100
- .three — z-index = 10.150
- .four — z-index = 50

![](D:\个人发展\yhx_study\css\resource\stacking1.png)



### 参考资料

1. [关于z-index 那些你不知道的事](https://webdesign.tutsplus.com/zh-hans/articles/what-you-may-not-know-about-the-z-index-property--webdesign-16892)