<template>
  <div>
    <b-sidebar no-header-close title="管理界面选项" visible>
      <div class="p-3 text-center">
        <router-link to="/admin/parameter">
          <b-button block pill size="lg" variant="primary">参数设置</b-button>
        </router-link>
      </div>
      <div class="p-3 text-center">
        <router-link to="/admin/situation">
          <b-button block pill size="lg" variant="primary">特情管理</b-button>
        </router-link>
      </div>
      <div class="p-3 text-center">
        <router-link to="/admin/bigdata">
          <b-button block pill size="lg" variant="primary">大数据管理</b-button>
        </router-link>
      </div>
    </b-sidebar>

  </div>
</template>

<script>
export default {
  name: "BigData"
}
</script>

<style scoped>

</style>