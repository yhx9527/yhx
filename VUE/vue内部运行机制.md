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

优先级顺序：el < template < render

### 结合生命周期讲双向绑定

当我们new一个vue实例的时候，首先会这个实例进行初始化，这边对应的就是beforeCreate这个钩子，此时的vue实例的$data数据观测，还有$el还没挂载到实例上

然后到Created这个钩子，有一个Observer这个监听器将会进行数据劫持，也就是利用Object.defineProperty()这个方法把创建实例时传进去的data给了vue实例，并把data中的属性变成访问器属性。这样data属性的变化就可以被观察到了。然后每一个属性对应的都有一个Dep用来收集它的所有观察者(Watcher),当某个属性发生变化的时候，Observer首先察觉到然后通知着属性的Dep让它去通知notify它的所有观察者触发相应的update()函数。

接着说道beforeMount这个钩子，对应的会将new vue时传进去的template进行模板解析Complier，如果没有template的话，会将el所在的dom节点的outerHTML作为template进行解析。解析的步骤首先是parse阶段提取出模板中的指令，class，style等数据组成AST抽象语法树，这就是一个对象，然后是optimize阶段会对AST中的静态的节点进行标记，这是一个优化步骤，然后AST通过render函数处理成虚拟DOM树（AST和虚拟DOM树的区别在于AST中都是原始的数据，像指令这些的，虚拟DOM是指令，插值表达式指令执行之后的），在render的过程中会使用到data中的属性，然后就会新建一个watcher观察者，触发属性的getter会将观察者收集到Dep（这就是一个依赖收集的工作），在使用beforeMounted时虚拟dom节点已经转换成了真实的DOM节点了，

在mounted时真实的dom节点才挂载到页面上。之后数据更新的时候，涉及到beforeUpdate,也就是前面有说到的Observer首先察觉到然后通知着属性的Dep让它去通知notify它的所有观察者触发相应的他们的update()函数，去更新DOM节点。

beforeUpdate着阶段数据已经更新了，生成了新的虚拟dom会和老的虚拟的dom进行diff算法计算出补丁，

然后在updated这个钩子把补丁打上dom节点。



### 关于nextTick

Vuejs是异步更新DOM的，每当有数据变化的时候，vue就会开始一个队列，里面存放变化的数据的一个watcher（如果改变一个属性多次的话，也是只存放它的一次watcher），然后在下个事件循环的时候，在统一调用watcher中的update（），更新一次DOM；



vm.$nextTick(回调函数)，回调函数延迟到dom更新之后执行。

Vue.nextTick(回调函数，执行环境ctx);

使用MutationObserver其实不是来监听DOM更新的

[MutationObserver](../javaScript/DOM/MutationObserver.md)

如果同一个数据多次变化，vue内部会将Watcher观察者推入任务队列，通过nextTick方法在下一个事件循环进行处理，只需要调用一次watcher的update（）方法来更新一次dom操作就可以了。

