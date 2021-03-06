什么是“状态管理模式”，以下为一个状态自管理应用

    new Vue({
      // state 驱动应用的数据源；
      data () {
    return {
      count: 0
    }
      },
      // view 以声明方式将 state 映射到视图；
      template: `
    <div>{{ count }}</div>
      `,
      // actions 响应在 view 上的用户输入导致的状态变化。
      methods: {
    increment () {
      this.count++
    }
      }
    })

每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。Vuex 和单纯的全局对象有以下两点不同：

Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。

你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用

通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到。让我们更新下 Counter 的实现：

mapState 辅助函数
当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键：
    
    // 在单独构建的版本中辅助函数为 Vuex.mapState
    import { mapState } from 'vuex'
    
    export default {
      // ...
      computed: mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,
    
    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',
    
    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
      })
    }

当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。


    computed: mapState([
      // 映射 this.count 为 store.state.count
      'count'
    ])

mapState 函数返回的是一个对象。我们如何将它与局部计算属性混合使用呢,使用对象扩展运算符
    
    computed: {
      localComputed () { /* ... */ },
      // 使用对象展开运算符将此对象混入到外部对象中
      ...mapState({
    // ...
      })
    }

getter:用于复杂取值操作

    const store = new Vuex.Store({
      state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
      },
      getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
      }
    })

Getter 会暴露为 store.getters 对象，你可以以属性的形式访问这些值：


Getter 也可以接受其他 getter 作为第二个参数：

getters: {
  // ...
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  }
}

你也可以通过让 getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询时非常有用。

getters: {
  // ...
  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}
store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }
注意，getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。

mapGetters 辅助函数
mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：

import { mapGetters } from 'vuex'

export default {
  // ...
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
  }
}
如果你想将一个 getter 属性另取一个名字，使用对象形式：

mapGetters({
  // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
  doneCount: 'doneTodosCount'
})