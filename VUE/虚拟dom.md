虚拟dom

用简单的javaScript对象来描述真实的复杂dom的节点，然后再通过特定的render方法将其(vnode)渲染成真实的DOM节点

diff算法用来比较两个虚拟DOM的区别，也就是比较两个对象的区别，创建出补丁（patch对象），该补丁就是新旧vnode的区别，再用这个补丁来更新dom

diff优化策略：1.同层比较 2.跨级禁止 3.可根据key在同层复用

过程：

1. 用javaScript对象模拟真实的DOM
2. 把此虚拟DOM转成真实DOM，并插入页面中
3. 如果有事件发生修改了虚拟DOM，比较两颗虚拟DOM树的区别，得到差异对象
4. 把差异对象应用到真正的DOM树上



diff产生的patch补丁比较规则

1. 当节点类型相同时，去看一下属性是否相同，产生一个属性的补丁包{type:'ATTRS',attrs:{class:'list-group'}}

2. 新的dom节点不存在{type:'REMOVE',index:xxx}

3. 节点类型不相同，直接采用替换模式{type:'REPLACE',newNode:newNode}

4. 文本变化{type:'TEXT',text:1}

   ......