<template>
  <div>
    <b-row class="mx-0 mt-3">
      <b-col>
        <b-card title="站点1" :img-src="require('@/assets/site.png')">
          <p>站点1位于三江市交通要道张路，交通情况复杂。</p>
          <p><router-link to="/site/1"><b-button>查看线路</b-button></router-link></p>
        </b-card>
      </b-col>
      <b-col>
        <b-card title="站点2" :img-src="require('@/assets/site.png')">
          <p>站点2位于三江市交通要道李路，交通情况复杂。</p>
          <p><router-link to="/site/2"><b-button>查看线路</b-button></router-link></p>
        </b-card>
      </b-col>
      <b-col>
        <b-card title="站点3" :img-src="require('@/assets/site.png')">
          <p>站点3位于三江市交通要道王路，交通情况复杂。</p>
          <p><router-link to="/site/3"><b-button>查看线路</b-button></router-link></p>
        </b-card>
      </b-col>
      <b-col>
        <b-card title="站点4" :img-src="require('@/assets/site.png')">
          <p>站点4位于三江市交通要道赵路，交通情况复杂。</p>
          <p><router-link to="/site/4"><b-button>查看线路</b-button></router-link></p>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mx-0 mt-3">
      <b-col>
        <b-card title="站点5" :img-src="require('@/assets/site.png')">
          <p>站点5位于三江市交通要道范路，交通情况复杂。</p>
          <p><router-link to="/site/5"><b-button>查看线路</b-button></router-link></p>
        </b-card>
      </b-col>
      <b-col>
        <b-card title="站点6" :img-src="require('@/assets/site.png')">
          <p>站点6位于三江市交通要道宋路，交通情况复杂。</p>
          <p><router-link to="/site/6"><b-button>查看线路</b-button></router-link></p>
        </b-card>
      </b-col>
      <b-col>
        <b-card title="站点7" :img-src="require('@/assets/site.png')">
          <p>站点7位于三江市交通要道黄路，交通情况复杂。</p>
          <p><router-link to="/site/7"><b-button>查看线路</b-button></router-link></p>
        </b-card>
      </b-col>
      <b-col>
        <b-card title="站点8" :img-src="require('@/assets/site.png')">
          <p>站点8位于三江市交通要道周路，交通情况复杂。</p>
          <p><router-link to="/site/8"><b-button>查看线路</b-button></router-link></p>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "SiteNav"
}
</script>

<style scoped>

</style>