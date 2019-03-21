<template>
  <div class="card text-dark bg-light mb-3">
    <div class="card-header">
      联系我们
    </div>
    <div class="card-body">
      <h4 class="card-title">联系我们</h4>
      <p>fdy409784@qq.com</p>
      <router-link :to="{name:'about-phone'}">电话</router-link>
      <router-link :to="{name:'about-name'}">联系人</router-link>

      <router-view></router-view>
    </div>
  </div>
</template>
