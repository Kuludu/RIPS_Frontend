<template>
  <div id="app">
    <HeadBar />
    <router-view></router-view>
  </div>
</template>

<script>
import HeadBar from "@/components/HeadBar";

export default {
  name: 'App',
  components: {
    HeadBar
  }
}
</script>

<style>

</style>
