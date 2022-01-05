<template>
  <b-navbar type="light" variant="info" class="bg-light">
    <b-navbar-brand variant="faded" class="container-fluid">轨道交通智能预测系统(RIPS)</b-navbar-brand>
    <b-navbar-nav class="ms-auto">
      <b-nav-item><b-button><router-link to="/line">线路流量</router-link></b-button></b-nav-item>
      <b-nav-item><b-button><router-link to="/site">站点流量</router-link></b-button></b-nav-item>
      <b-nav-item><b-button><router-link to="/situation">轨交特情</router-link></b-button></b-nav-item>
      <b-nav-item><b-button><router-link to="/admin/login">管理登陆</router-link></b-button></b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "HeadBar"
}
</script>

<style scoped>

</style>