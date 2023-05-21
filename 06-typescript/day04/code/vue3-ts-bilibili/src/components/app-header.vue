<template>
  <header class="app-header">
    <!-- logo -->
    <a class="logo" href="#">
      <i class="iconfont Navbar_logo"></i>
    </a>
    <!-- 搜索 -->
    <a class="search" href="#">
      <i class="iconfont ic_search_tab"></i>
    </a>
    <!-- 头像 -->
    <a class="face" href="#">
      <img src="@/assets/images/login.png"  alt="登录"/>
    </a>
    <!-- 下载按钮 -->
    <div class="down-app">下载 APP</div>
  </header>
</template>

<style lang="less" scoped>
//logo
.app-header {
  display: flex;  // 开启flex布局
  align-items: center;  // 侧轴居中对齐
  padding: 2vw 3vw; // 内边距, 高度是百分比
  background-color: #fff; // 背景颜色
  .logo {
    flex: 1;  // logo占一份
    .Navbar_logo {
      color: #fb7299; //颜色
      font-size: 7.46667vw; //百分比
    }
  }
  .search {
    padding: 0 2vw;
    .ic_search_tab {
      color: #ccc;
      font-size: 5.86667vw;
    }
  }
  .face {
    padding: 0 4vw;
    img {
      width: 6.4vw;
    }
  }
  .down-app {
    font-size: 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fb7299;
    color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
  }
}
</style>
