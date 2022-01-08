<template>
  <div>
    <footer class="bg-light">
      <div class="p-3 footer" style="background-color: rgba(0, 0, 0, 0.2);">
        加载时间（本地）：{{ getTime() }}
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FootBar",
  methods: {
    getTime: function () {
      return new Date().toLocaleString();
    }
  }
}
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
}
</style>