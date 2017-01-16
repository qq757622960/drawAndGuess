####参考资料列表:
vue-Router api:http://router.vuejs.org/zh-cn/  
vue-Router example:https://github.com/vuejs/vue-router  
vue-Resource api:https://github.com/pagekit/vue-resource/blob/master/docs/http.md  
野狗云 api:https://docs.wilddog.com/api/sync/web/App.html  
canvas api:https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API    

#### 问题：
``` bash
  # Vue 还未实例化前， HTML 模板中的 “{{ }}”( Mustache 标签) 会暴露在用户界面上，
  # 也就是说页面有那么一瞬间会将所有的 “{{ }}” 都显示出来，如何解决？
```

#### 解决：
``` bash
  # 方法一 ：使用 v-cloak 指令，这个指令保持在元素上直到关联实例结束编译。
  # 和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。
  # 方法二 ： 使用v-text
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
