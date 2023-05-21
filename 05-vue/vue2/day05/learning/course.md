# flex布局学习
弹性布局，任何一个容器都可以指定为flex布局
## 布局原理
- 子元素的 `float`, `clear`, `vertical-align`属性将失效
- flex容器称为容器，子元素称为 "flex项目", 简称项目
  - 项目可以横向排列(默认)也可以纵向排列
**总结**
  - 给父盒子加上flex属性，来控制子盒子的位置和排列方式
    - `display: flex`
## 给父亲加属性
### 设置主轴(flex-direction)
- 主要的两个值
  - 主轴为x轴,row
  - 主轴为y轴,column
```html
.box {
    display: flex;
    flex-direction: row; /*默认值*/
    /*flex-direction: column;*/
    /*反转*/
    /*flex-direction: row-reverse;*/
    /*flex-direction: column-reverse;*/
    background-color: orange;
    height: 100px;
}
```
### 设置主轴对齐方式(justify-content)
- flex
  - 从头开始
- flex-end
  - 从尾开始
- flex-center
  - 在主轴居中对齐
- space-around
  - 平分剩余空间
    - 相当于一个盒子的左右两个的margin都有值
- space-between
  - 先两边贴边，在平分剩余空间
  - 重要
### 设置是否换行(flex-wrap)
- 换行
  - `flex-wrap: nowrap;`
  - 这是默认的，塞不下去了也不换行，而是把元素变小
- 不换行
  - `flex-wrap: wrap;`
### 侧轴居中(align-items)[适合在单行时使用]
我们设置好主轴之后，另一个轴就加侧轴。
- 从上到下
  - flex-start
- 从下到上
  - flex-end
- 居中(重要)
  - center
- 拉伸(把元素侧轴方向拉长)
  - stretch(默认值)
### 侧轴上子元素的排列方式(align-content)[适用在多行时使用]
只能用于子项出现**换行**的情况，单行没效果
- flex-start
  - 在侧轴的头开始排列
- flex-end
  - 在侧轴的尾部开始排列
- center
  - 在侧轴中间显示
- space-around
  - 子项在侧轴平分剩余空间
- space-between
  - 子项在侧轴先分布在两头，再平分剩余空间
- stretch
  - 设置子项元素高度再平分父元素高度
### flex-flow
- flex-flow: column wrap
- 把主轴设置和是否换行合着写
## 给孩子加属性
### flex
剩余空间中当前子元素分到多少分(默认是0)
### align-self
- 允许单个项目与其他不一样的对齐方式，就是说可覆盖容器的align-items属性
- 默认值是auto,表示继承align-items属性,如果没有父元素，等同于stretch
### order
数值越小，排序越靠前，默认为0，可以是负数。

# 动态组件
## component
```vue
<component :is="compName"></component>
```
## keep-alive
- 当组件被缓存时，会自动触发组件的 deactivated 生命周期函数。
- 当组件被激活时，会自动触发组件的 activated 生命周期函数。
- include 属性用来指定：只有名称匹配的组件会被缓存。多个组件名之间使用英文的逗号分隔
```vue
<keep-alive>
    <component :is="compName"></component>
</keep-alive>
```
# 插槽
## 插槽的使用
- 单个插槽
```vue
<div class="slot-container">
	<h1>Header</h1>
	<slot></slot>
	<h1>Footer</h1>
</div>
```
```vue
<slot-use01>
<!--		  <template v-slot:default>-->
<!--			  <div>哈哈哈哈哈，这是正文内容</div>-->
<!--			  <h1>Body</h1>-->
<!--		  </template>-->

    <!-- 只有一个的时候可以直接不要template -->
<!--		  <p>我是随风</p>-->

    <template #default>
        <h1>Body</h1>
    </template>
</slot-use01>
```
- 多个插槽
```vue
<div>
	<header>
		<slot name="header"></slot>
	</header>
	<main>
		<slot></slot>
	</main>
	<footer>
		<slot name="footer"></slot>
	</footer>
</div>
```
```vue
<slot-use02>
    <template #header>
        <h1>春晓</h1>
    </template>
    <template #default>
        <p>春眠不觉晓，处处闻啼鸟。</p>
        <P>夜来风雨声，花落知多少。</P>
    </template>
    <template #footer>
        <p>落款：孟浩然</p>
    </template>
</slot-use02>
```
## 作用域插槽
- 很简单，我们在子组件的插槽属性上加上自定义属性，然后父组件填充时 "#content='scope'"
- scope就获取到所有的属性-值的kv对多项了。(这个scope可以自定义名字)



# 自定义指令



```vue
<p v-color>哈哈哈</p>
<p v-color-me="color">啦啦啦</p>
<p v-color_wa="color">哇哇哇</p>
<p v-color-ga="color">嘎嘎嘎嘎</p>
<p v-lyr="color">111</p>
<p v-sf="color">222</p>
<p v-if="!hidden">我出现了</p>
<button @click="hidden = !hidden">点击</button>
```
```js
//注册全局指令
Vue.directive("lyr", (el, data) => {
	console.log('lyr指令',data)
})

Vue.directive('sf',{
	bind(el) {
		console.log("sf初次被使用")
	},
	update(el,data) {
		console.log("sf执行update操作,",data)
	}
})
```
