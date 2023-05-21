# watch

- 方法名和变量名一致

**完整写法**

```js
new Vue({
    watch: {
        变量名(例如username): {
        	handler: function(newVal,oldVal) {
    			
			},
        	immediate: true/false, //true表示页面初次渲染好之后立刻触发侦听器
    	},
    	对象变量: {
            handler: function(newVal,oldVal) {
    			
			},
            imediate: true/false,
            deep: true/false, //默认属性变化不触发,true表示触发
        },
        "对象.属性": {
            handler: function(newVal,oldVal) {
    			
			},
            imediate: true/false,
            deep: true/false, //默认属性变化不触发,true表示触发
        },
    }
})
```

- 等待一个异步方法执行完成
  - async () => {const a = await 异步操作}



# 计算属性

**特点**

1. 虽然计算属性在声明的时候被定义为方法，但是计算属性的**本质是一个属性**

2. 计算属性**会缓存计算的结果，只有计算属性依赖的数据变化时，才会重新进行运算**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>计算属性</title>
</head>
<body>
    <div id="app">
        <button @click="show">点击</button>
        <button>{{rgb}}</button>
    </div>
    <script src="./lib/vue-2.6.12.js"></script>
    <script>
        new Vue({
            el: '#app',
            data: {
                r:0,g:0,b:0,
            },
            methods: {
                show() {
                    // rgb不是一个函数,不能加括号
                    alert(this.rgb)
                }
            },
            computed: {
                rgb() {
                    return `rgb(${this.r},${this.g},${this.b})`
                }
            },
        })
    </script>
</body>
</html>
```



**很不错的一个代码**

```html
<!-- 在属性身上，: 代表  v-bind: 属性绑定 -->
<!-- :style 代表动态绑定一个样式对象，它的值是一个 {  } 样式对象 -->
<!-- 当前的样式对象中，只包含 backgroundColor 背景颜色 -->
<div class="box" :style="{ backgroundColor: rgb }">
    {{ rgb }}
</div>
```

- style本身是一个对象，我们使用元素js操作dom的时候就有用到，我们把它和这个`{ backgroundColor: rgb }`对象绑定，就相当于给这个style对象的`backgroundColor`属性赋值了，就非常的不错。

# vue-cli

- 它简化了程序员基于 webpack 创建工程化的 Vue 项目的过程。

**安装**

- npm install -g @vue/cli

**使用**

- vue create 项目的名称

**vue项目的运行流程**

- 通过 main.js 把 App.vue 渲染到 index.html 的指定区域中

# vue 组件

##  **什么是组件化开发**

- 把页面上可重用的 UI 结构封装为组件，从而方便项目的开发和维护

##  **vue** **中的组件化开发**

- 组件的后缀名是 .vue

##  **vue** **组件的三个组成部分**

- template -> 组件的模板结构
- script -> 组件的 JavaScript 行为
- style -> 组件的样式
- **每个组件中必须包含 template 模板结构**，而 script 行为和 style 样式是可选的组成部分。

**关于template**

- template 是 vue 提供的容器标签，只起到包裹性质的作用，**它不会被渲染为真正的 DOM 元素**
- template 中只能包含唯一的根节点
  - 这就要求我们在template之后使用一个`div`包裹住，在同级下面再写样式就没有了

**关于script**

- ```js
  <script>
    // 今后，组件相关的data数据、methods方法等都定义在export default所导出的对象中  
      export default{}
  </script>
  ```

  

  - vue 规定：`.vue` 组件中的 data 必须是一个函数，不能直接指向一个数据对象。`写法: data() {return {}}`

**关于style**

```vue
<style lang="less">
    h1 {
        font-weight: normal;
        span {
            color: red;
        }
    }
</style>
```

## **vue** **组件**

- 组件在被封装好之后，彼此之间是相互独立的，不存在父子关系
- 在使用组件的时候，根据彼此的嵌套关系，形成了父子关系、兄弟关系

**使用组件的三个步骤**

<img src="E:\e_dir\typera_pic\image-20221108201209539.png" alt="image-20221108201209539" style="zoom:50%;" />

**通过** **components** **注册的是私有子组件**

- 在组件 A 的 components 节点下，注册了组件 F。**则组件 F 只能用在组件 A 中**；不能被用在组件 C 中。

## 注册全局组件

**注册全局组件**

- 在 vue 项目的 main.js 入口文件中，通过 Vue.component() 方法，可以注册全局组件。

```js
//1. 导入组件
import Count '地址'
//2. 注册组件
Vue.component('注册名称',Count)
```

**组件的** **props**

- props 是组件的自定义属性，在封装通用组件的时候，合理地使用 props 可以极大的提高组件的复用性！

```js
export default {
	props: ['自定义属性A','自定义属性B',....]
}
```

-  **props** **是只读的**

  - 要想修改 props 的值，可以把 props 的值转存到 data 中，因为 data 中的数据都是可读可写的！

  - ```js
    export default {
    	props: ['init'],
        data() {
            return {
                count: this.init,
            }
        }
    }
    ```

  - 在声明自定义属性时，可以通过 default 来定义属性的默认值。

  - ```js
    export default {
    	props: {
            init: {
                default: 0,
            },
        },
    }
    ```

  - ```js
    // 其他属性
    export default {
    	props: {
            init: {
                default: 0,
                type: Number, //属性必须是值类型
                required: true, //必填项校验
            },
        },
    }
    ```

  - 

**组件之间的样式冲突问题**

- 默认情况下，写在 .vue 组件中的样式会全局生效，因此很容易造成多个组件之间的样式冲突问题。
- 根本原因：
  - 单页面应用程序中，所有组件的 DOM 结构，都是基于唯一的 index.html 页面进行呈现的
  - 每个组件中的样式，都会影响整个 index.html 页面中的 DOM 元素

**如何解决组件样式冲突的问题**

- 为每个组件分配唯一的自定义属性，在编写组件样式时，通过**属性选择器**来控制样式的作用域

  - [属性选择器文章](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors)

  - ```vue
    <template>
    	<div class="container" data-v-001>
            <h3 data-v-001>
            	    轮播图组件
        	</h3>
        </div>
    </template>
    <style>
    	.container[data-v-001] {
    		border: 1px solid red;
    	}
    </style>
    ```

  - 

- 为了提高开发效率和开发体验，vue 为 style 节点提供了 scoped 属性，从而防止组件之间的样式冲突问题

  - ```vue
    <template>
    	<div class="container">
            <h3>
            	    轮播图组件
        	</h3>
        </div>
    </template>
    <style scoped>
    	.container[data-v-001] {
    		border: 1px solid red;
    	}
    </style>
    ```

  - 加了`scoped`，自动为每个组件添加唯一自定义属性

- **/deep/** **样式穿透**

  - ```html
    <style lang="less" scoped>
        /deep/ h3 {
            color: red;
        }
    </style>
    ```

  - 如果给当前组件的 style 节点添加了 scoped 属性，则当前组件的样式对其子组件是不生效的。如果想让某些样

    式对子组件生效，可以使用 /deep/ 深度选择器。

  - <img src="E:\e_dir\typera_pic\image-20221108204747833.png" alt="image-20221108204747833" style="zoom:67%;" />



# $mount

```html
<script>
    const vm = new Vue({
        data: {
            username: 'admin'
        }
    })
    // 作用和el完全一样,就是进行绑定的作用
    vm.$mount('#app')
</script>
```



