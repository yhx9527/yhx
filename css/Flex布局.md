# Flex布局

**flex的容器的子元素也是flex**

### flex：flex-grow  flex-shrink  flex-basis

- flex-grow控制当容器内有剩余空间时如何放大，按比例分配剩余空间
- flex-shrink控制当容器小到无法容纳初始里面的大小时，如何缩小，按比例分配缩小空间
- flex-basis规定flex-item的初始大小



### flex-flow：flex-direction  flex-wrap

- 设置了flex默认一行，宽度不够，缩放元素
- 换行flex-wrap:wrap | wrap-reverse | nowrap
- 设置方向flex-direction: row | row-reverse | column | column-reverse
- flex-flow:为flex-direction和flex-wrap的简写



### justify-content

- 子元素在水平方向上的排列
  - center  居中，两边间距一样
  - flex-start 位于开头
  - flex-end 位于结尾
  - space-between 开头结尾的元素贴着容器，相邻元素间距一样
  - space-around 开头结尾的元素与容器间距为r，相邻元素间距为2r
  - space-evenly  开头结尾的元素与容器间距为r，相邻元素间距为r

### align-items

- 一行子元素在垂直方向上的排列
  - center:居中
  - flex-start：居上
  - flex-end：居下
  - stretch: 拉升填满垂直高度
  - baseline: 文本基线对齐

### align-content

- 多行子元素占据垂直高度
  - center  居中，两边间距一样
  - flex-start 位于开头
  - flex-end 位于结尾
  - space-between 开头结尾的元素贴着容器，相邻元素间距一样
  - space-around 开头结尾的元素与容器间距为r，相邻元素间距为2r
  - stretch  每行下面都有间距，上面无间距 

### order(子元素中设置)

- 规定子元素如何排列，根据给定的大小来排  

### align-self(子元素中设置)

- 子元素设置对齐
  - auto：为父元素的align-items属性，若无则为stretch
  - stretch: 拉长填满垂直高度
  - flex-start
  - flex-end
  - baseline
  - center

**float,clear和vertical-align在flex item（flex项）上都不会起作用,也不会让它脱离文档流。**