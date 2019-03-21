<template>
  <div class="about">
    <div class="row mb-5">
      <div class="col col-4">
        <div class="list-group mb-5">
          <router-link tag="li" :to="{name:'about-history'}" class="nav-link">
            <a class="list-group-item list-group-item-action">历史订单</a>
          </router-link>
          <router-link tag="li" :to="{name:'about-contact'}" class="nav-link">
            <a class="list-group-item list-group-item-action">联系我们</a>
          </router-link>
          <router-link tag="li" :to="{name:'about-guide'}" class="nav-link">
            <a class="list-group-item list-group-item-action">使用指导</a>
          </router-link>
          <router-link tag="li" :to="{name:'about-delivery'}" class="nav-link">
            <a class="list-group-item list-group-item-action">快递信息</a>
          </router-link>
        </div>
      </div>
      <div class="col col-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  }
}
</script>
