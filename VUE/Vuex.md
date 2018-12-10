# Vuex

多个组件共享状态的情况：多个视图依赖同一状态，来自不同视图的行为需要变更同一状态

涉及到非父子关系的组件的事件交互可使用Vuex

### 核心概念

- State

放数据的地方，Vue组件从state中读取数据，一个组件需要获取多个状态时可通过mapState来实现

- getter

可对state进行计算操作，外部通过store.getters对象来访问，可用mapGetter来映射store中的getter

- Mutation

组件通过mutation来变更状态，mutation中的都是同步事务，store.commit(mutation中定义的)

- Action

action是通过mutation间接地变更状态，action可以包含异步操作，通过store.dispatch来分发action

- Module

将store进行模块划分

### 使用场景

1. 弹窗表单在关闭后需要保存数据，可以放在vuex中
2. 多权限的用户登录的情况，组件是基于数据来创建的，可能涉及到很多组件，放在Vuex更好
3. 比如切换页面风格，一处变量改变影响多个地方，把变量放在vuex中



### 注意

vuex并非用于本地存储，而是用于组件通信