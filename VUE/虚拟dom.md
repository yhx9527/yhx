虚拟dom

用简单的javaScript对象来描述真实的复杂dom的节点，然后再通过特定的render方法将其(vnode)渲染成真实的DOM节点

diff算法用来比较两个虚拟DOM的区别，也就是比较两个对象的区别，创建出补丁（patch对象），该补丁就是新旧vnode的区别，再用这个补丁来更新dom

diff优化策略：1.同层比较 2.