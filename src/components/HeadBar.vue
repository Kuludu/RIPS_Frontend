<template>
  <b-navbar type="light" variant="info" class="bg-light fixed-top">
    <b-navbar-brand variant="faded" class="container-fluid" href="/">轨道交通智能预测系统(RIPS)</b-navbar-brand>
    <b-navbar-nav class="ms-auto">
      <b-nav-item>
        <router-link to="/line">
          <b-button variant="outline-primary">线路流量</b-button>
        </router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/site">
          <b-button variant="outline-primary">站点流量</b-button>
        </router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/situation">
          <b-button variant="outline-primary">轨交特情</b-button>
        </router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/history">
          <b-button variant="outline-primary">历史数据</b-button>
        </router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/admin/login">
          <b-button variant="outline-primary">管理登陆</b-button>
        </router-link>
      </b-nav-item>
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