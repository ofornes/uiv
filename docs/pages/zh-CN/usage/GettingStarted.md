# 快速上手

**uiv** 是用 Vue 2 实现的 Bootstrap 3 组件库。

* **轻量**
  * 所有组件 Gzip 后约 **20KB**
  * 只依赖 **Vue & Bootstrap CSS**
  * 没有额外的 CSS 样式
  * 支持组件独立引入
* 支持 IE 9+ 以及其它现代浏览器.
* 支持 **SSR** (服务端渲染)
* 支持所有引用环境:
  * UMD 构建包 `uiv.min.js` 可以在所有环境下使用（包括浏览器）
  * ES Module 构建包 `uiv.esm.js` 供现代化的打包工具如 [webpack 2](https://webpack.js.org) 或 [rollup](https://rollupjs.org) 等使用
  * CommonJS 构建包 `uiv.common.js` 供较老的打包工具如 [browserify](http://browserify.org) 或 [webpack 1](https://webpack.github.io) 等使用

## 安装

如果你在项目中使用了模块化打包工具（如 Webpack），则可以直接安装并引入：

**NPM**:

```bash
$ npm install uiv --save
```

或 **Yarn**:

```bash
$ yarn add uiv
```

然后在 app 入口文件处一次性注册所有 uiv 组件以及指令：

```javascript
// main.js
import 'bootstrap/dist/css/bootstrap.min.css'

import Vue from 'vue'
import * as uiv from 'uiv'

Vue.use(uiv)
```

就这么简单。

### 冲突解决

所有组件与指令默认安装时不会带有前缀，如果在项目中出现了命名冲突，可以通过配置添加任意前缀。

举个例子：

```javascript
Vue.use(uiv, {prefix: 'uiv'})
```

将导致：

* 组件如 `<alert>` 将变为 `<uiv-alert>`
* 指令如 `v-tooltip` 将变为 `v-uiv-tooltip`
* 全局服务如 `$alert` 将变为 `$uiv_alert`

## 独立引入

如果因为某种原因（比如节省代码量）不想引入所有组件，你也可以将它们独立引入。

### 例子

```javascript
import { Alert } from 'uiv'

new Vue({
  components: {
    Alert
  }
})
```

## 浏览器使用

你可以在浏览器端直接引入并安装本包，举个例子：

```html
<!-- 在此之前记得先引入 Vue 以及 Bootstrap CSS！ -->
<script src="//unpkg.com/uiv"></script>
```

这将会把最新版本的 `uiv.min.js` 加载到你的页面中。详细的使用方式（如指定版本等）以及其它 CDN 供应者，可以访问：

* [https://unpkg.com](https://unpkg.com)
* [https://www.jsdelivr.com](https://www.jsdelivr.com/)
* [https://cdnjs.com/libraries/uiv](https://cdnjs.com/libraries/uiv)

### 完整的用例

```html
<!-- index.html -->
<html>
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script type="text/javascript" src="//vuejs.org/js/vue.min.js"></script>
  <script type="text/javascript" src="//unpkg.com/uiv/dist/uiv.min.js"></script>
</head>
<body>
<div id="app">
  <tabs>
    <tab>Tab content 1.</tab>
    <tab>Tab content 2.</tab>
  </tabs>
</div>
<script>
  // 在浏览器中无需调用安装方法
  // 如果需要自定义选项，可以在脚本加载之前定义 `window.__uiv_options`
  new Vue().$mount('#app')
</script>
</body>
</html>
```

这将会在页面上创建一个可以正常工作的 **Tabs** 组件。

## 浏览器兼容性

支持所有 [Vue 2](https://github.com/vuejs/vue) 以及 [Bootstrap 3 CSS](https://github.com/twbs/bootstrap) 兼容的浏览器（不支持 IE8 以及更低版本）。
