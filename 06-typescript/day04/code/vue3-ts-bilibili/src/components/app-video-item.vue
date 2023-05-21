<template>
  <router-link class="v-card" :to="`/video/0`">
    <div class="card">
      <div class="card-img">
        <img class="pic" src="@/assets/images/loading.png" alt="视频描述" />
      </div>
      <div class="count">
        <span>
          <i class="iconfont icon_shipin_bofangshu"></i>
          41.4万
        </span>
        <span>
          <i class="iconfont icon_shipin_danmushu"></i>
          1314
        </span>
      </div>
    </div>
    <p class="title">当你觉得扛不住的时候来看看这段视频</p>
  </router-link>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.v-card {
  width: 50%; // 设置宽度占50%, 让开启flex布局之后一行两个之后换行
  padding: 2vw 1vw; //上下 左右 内边距
  .card {
    position: relative; //子绝父相
    background: #f3f3f3 url(~@/assets/images/default.png) center no-repeat;
    background-size: 36%;
    border-radius: 0.53333vw;
    overflow: hidden;
    .card-img {
      .pic {
        height: 100px;
        width: 100%;
        object-fit: cover;
      }
    }
    .count {
      background-image: linear-gradient(0deg, #000000d9, #0000);
      color: #fff;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      font-size: 3vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.2vw 1.5vw;
      span {
        .iconfont {
          font-size: 3vw;
        }
      }
    }
  }
  .title {
    margin-top: 1.5vw;
    font-size: 3.2vw;
    color: #212121;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
