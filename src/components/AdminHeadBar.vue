<template>
  <b-sidebar no-header-close title="管理界面选项" visible>
    <div class="p-3 text-center">
      <router-link to="/admin/situation">
        <b-button block pill size="lg" variant="primary">特情管理</b-button>
      </router-link>
    </div>
    <div class="p-3 text-center">
      <router-link to="/admin/parameter">
        <b-button block pill size="lg" variant="primary">参数设置</b-button>
      </router-link>
    </div>
    <div class="p-3 text-center">
      <router-link to="/admin/bigdata">
        <b-button block pill size="lg" variant="primary">大数据管理</b-button>
      </router-link>
    </div>
    <div class="p-3 text-center">
      <router-link to="/admin/user">
        <b-button block pill size="lg" variant="primary">用户管理</b-button>
      </router-link>
    </div>
  </b-sidebar>
</template>

<script>
export default {
  name: "AdminHeadBar"
}
</script>

<style scoped>

</style>