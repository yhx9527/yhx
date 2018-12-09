# VUE基础

### 单向数据流

- 定义

​	vue组件间传递数据都是单向的，数据总是由父组件传递给子组件，子组件是无权修改父组件传递给它的数据的。

- 形式

  父组件通过v-on绑定属性向子组件传数据，子组件通过props来接受

  子组件通过事件触发的形式让父组件修改数据

- 目的

  为的是组件间更好的解耦，避免当多个子组件依赖父组件的某个数据时，如果子组件可修改父组件的数据，那一个子组件修改了数据，所有相关的子组件都将跟着变化。

- 如果想要修改props

1. 定义一个局部变量，初始值为props中的响应值
2. 定义一个计算属性，处理prop后返回

### 指令

- v-if

  依赖于控制dom节点的有无，适用于运行时条件不太可能改变的，组件需要销毁和重建的情况

- v-show

  依赖于控制dom节点的display属性，dom节点本身还是存在的，适用于需要频繁切换的情况

- **v-model**

  其实就是语法糖，v-model帮我们添加了value属性和input事件

  可用于表单元素（input，select，textarea）和组件上

  ```
  <input v-model="something" /> 
  <!--等价于-->
  <input v-bind:value="something" v-on:input="something = $event.target.value" />
  ```

  ```
  <currency-input v-model="price"></currency-input>
  所以在组件中使用时，它相当于下面的简写：
  //上行代码是下行的语法糖
  <currency-input :value="price" @input="price = arguments[0]"></currency-input>
  ```
