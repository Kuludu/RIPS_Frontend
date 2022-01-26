<template>
  <div id="app">
    <HeadBar/>
    <router-view class="margin"/>
    <FootBar/>
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
.margin {
  margin-top: 100px;
  margin-bottom: 70px;
}
</style>
