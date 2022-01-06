<template>
  <div id="app">
    <HeadBar />
    <router-view></router-view>
    <FootBar />
  </div>
</template>

<script>
import HeadBar from "@/components/HeadBar";
import FootBar from "@/components/FootBar";

export default {
  name: 'App',
  components: {
    FootBar,
    HeadBar
  }
}
</script>

<style>

</style>
