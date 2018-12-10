# Vue-Router

### 导航解析流程

1. 导航被触发
2. 在失活的组件里面调用离开守卫
3. 调用全局的beforeEach守卫
4. 在重用的组件里调用beforeRouterUpdate
5. 在路由配置里调用beforeEnter
6. 解析异步路由组件
7. 在被激活的组件里调用beforeRouteEnter
8. 调用全局的beforeResolve
9. 导航被确认
10. 调用全局的afterEnter
11. 触发DOM更新
12. 用创建好的实例调用beforeRouteEnter中的next回调函数



### 路由传参

1. 通过params传参，作为路由的一部分，$route.params
2. 通过query传参，是拼接在url后面的参数,$route.query



### Vue路由实现

默认使用的hash模式，只是用来指导浏览器跳转动作，不会涉及服务端

history模式需要在后台配置