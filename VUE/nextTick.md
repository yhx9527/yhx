# nextTick

Vuejs是异步更新DOM的，每当有数据变化的时候，vue就会开始一个队列，里面存放变化的数据的一个watcher（如果改变一个属性多次的话，也是只存放它的一次watcher），然后在下个事件循环的时候，在统一调用watcher中的update（），更新一次DOM；



vm.$nextTick(回调函数)，回调函数延迟到dom更新之后执行。

Vue.nextTick(回调函数，执行环境ctx);

使用MutationObserver其实不是来监听DOM更新的

[MutationObserver](../javaScript/DOM/MutationObserver.md)

如果同一个数据多次变化，vue内部会将Watcher观察者推入任务队列，通过nextTick方法在下一个事件循环进行处理，只需要调用一次watcher的update（）方法来更新一次dom操作就可以了。