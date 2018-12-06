# Vue的内部运行机制相关内容

### MVVM

MVVM两个方面：数据变化更新视图，视图变化更新数据

### 双向绑定

- 原理

  通过Object.defineProperty()来劫持设置各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。（采用数据劫持结合发布者-订阅者模式的方式）

- 组成部分

  1. Observer监听器，劫持同时监听属性变化，通知订阅者

  2. Watcher订阅者，收到通知后，执行相应函数，从而更新视图

  3. Dep消息订阅收集器，用来收集Wathcer订阅者  

  4. Compile用来编译模版

     - **parse**

       使用正则等方式将template模版进行字符串解析，得到指令，class，style等数据，构成抽象语法树AST（其实就是一个具有结构的对象）

     - **optimize**

        进行优化，为AST中所有节点加上static，用来标记AST中哪些节点是静态的，对于静态节点就无需进行双向绑定了

     - **generate**

       用于将AST转化成render function字符串

- 数据更新视图

  使用patch来比较新旧VNode，其中使用了diff算法，只将差异更新到视图。

  更新使用了批量异步更新策略，传入一个回调函数给nextTick函数，当目前的执行栈结束之后才会去执行



### 结合生命周期

