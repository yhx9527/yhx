# CSS定位相关

### 垂直居中(是将元素本身垂直居中)
- 已知元素高度下使用绝对定位和margin负值  

```
<div style='height:100px;
            position:absolute;
            top:50%;
            margin-top:-50px;'>hhh</div>
```



- 未知高度下使用绝对定位和transform负值

```
<div style='height:100px;
            position:absolute;
            top:50%;
            transform:translateY(-50%)'>hhh</div>
```



- 文本单行的居中可以让height和line-height相等

```
<div style='height:100px;
            line-height:100px;'>hhh</div>
```



- flex布局(垂直居中的是里面的元素)

```
<div style='height:100px;
            display:flex;
            align-items:center;'>hhh</div>
```



- 利用表格:外层display设为table，内层设为table-cell并设置vertical-align:middle

```
<div style="display:table">
  <div style="display:table-cell;vertical-align:middle;"></div>
</div>
```



### 水平居中
- 对于块级元素中元素来说来说设置text-align：center

````
<div style='text-align：center;'>
    <div>123</div>
    hhh
    <span>456</span>
</div>
````



- 块级元素本身，设置margin:auto

```
<div style='width:100px;
            margin:auto;'>hhh</div>
```



- flex布局(水平居中的是里面的元素)

```
<div style='height:100px;
            display:flex;
            justify-content:center;'>hhh</div>
```



### 水平垂直居中
可以在垂直居中的基础加上水平居中

### 样式

- position:absoluted

  绝对定位的元素的位置相对于*最近的已定位祖先元素*，如果元素没有已定位的祖先元素，那么它的位置相对于*最初的包含块*。脱离文档流

- position:relative

  相对定位是“相对于”元素在文档中的初始位置。没有脱离文档流的。

- position:fixed

  生成绝对定位的元素，相对于浏览器窗口进行定位。

- position:static

  没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）