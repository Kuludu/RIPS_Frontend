<template>
  <div class="mx-0">
    <footer class="p-2 bg-light mt-5 text-center fixed-bottom">
      页面加载时间（本地）：{{ getTime() }}
      <b-button @click="refresh">刷新</b-button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FootBar",
  methods: {
    getTime: function () {
      return new Date().toLocaleString();
    },
    refresh: function () {
      location.reload();
    }
  }
}
</script>

<style scoped>

</style>