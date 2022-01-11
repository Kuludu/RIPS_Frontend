<template>
  <div>
    <footer class="bg-light fixed-bottom">
      <b-row align-h="center">
        <b-col cols="3" class="p-2 footer text-center" style="background-color: rgba(0, 0, 0, 0.2);">
          加载时间（本地）：{{ getTime() }}
          <b-button @click="refresh">刷新</b-button>
        </b-col>
      </b-row>
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
.footer {
  position: absolute;
  bottom: 0;
}
</style>