# VUE基础

### 生命周期

- beforeCreate

完成实例初始化，但还没进行数据绑定及dom节点挂载，即data和$el为undefined

- created

已完成数据绑定，属性和方法的运算，watch/event事件回调。还没挂载dom节点，即data有值，$el为undefined

- beforeMount

对template模版进行编译解析，生成虚拟dom,还没渲染

- mounted

已将虚拟dom转成了真实的dom，并挂载到页面上了

- beforeUpdate

数据更新时，新旧虚拟dom通过diff算法得出补丁，在打补丁之前

- updated

通过patch给真实的dom打上补丁，更新完毕，页面相关dom已发生变化

- beforeDestroy

实例销毁之前调用

- destroyed

vue实例销毁之后调用，实例的所有东西被解绑，子实例也被销毁，dom还存在



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

### Mixin混合

可以用来封装一段在应用的其他组件中都可以使用的函数

混合里的首先被注册，然后是组件上的被注册，保证组件有最后发言权

```
//mixin
const hi = {
  methods: {
    sayHello: function() {
      console.log('hello from mixin!')
    }
  },
  mounted() {
    this.sayHello()
  }
}

//vue instance or component
new Vue({
  el: '#app',
  mixins: [hi],
  methods: {
    sayHello: function() {
      console.log('hello from Vue instance!')
    }
  },
  mounted() {
    this.sayHello()
  }
})

// Output in console
> hello from Vue instance!
> hello from Vue instance!
//输出两句是因为混合中被重写了而非销毁
```

### 组件通信

- 父组件传递数据给子组件，子组件通过props接收
- 子组件传递数据给父组件，通过事件触发的形式
- 通过中央事件总线，在全局创建一个vue实例，然后使用该实例的$emit方法，实现任意组件间的通信

```
let Hub = new Vue(); //创建事件中心,注意Hub要放在全局
组件1触发：
<div @click="eve"></div>methods: { eve() { Hub.$emit('change','hehe'); //Hub触发事件 }}
组件2接收:
<div></div>created() { Hub.$on('change', () => { //Hub接收事件 this.msg = 'hehe'; });}
```

- 使用$refs，为子组件指定一个ref索引，然后父组件可通过$refs直接访问子组件

```
<div id="parent">
  <user-profile ref="profile"></user-profile>
</div>

var parent = new Vue({ el: '#parent' })
// 访问子组件
var child = parent.$refs.profile

```



### 参考链接

1. [在 Vue.js 中使用Mixin —— CSS-Tricks](https://zcfy.cc/article/using-mixins-in-vue-js-css-tricks-3257.html)
2. [vue2.0父子组件间通信](https://www.jianshu.com/p/6389d424965f)