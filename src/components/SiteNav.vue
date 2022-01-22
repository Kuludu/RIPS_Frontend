<template>
  <div>
    <b-card header="线路1站点">
      <p>尚未开通。</p>
    </b-card>
    <b-card header="线路2站点">
      <p>尚未开通。</p>
    </b-card>
    <b-card header="线路3站点">
      <p>尚未开通。</p>
    </b-card>
    <b-card header="线路4站点">
      <p>尚未开通。</p>
    </b-card>
    <b-card header="线路5站点">
      <b-row class="mx-0 mt-3">
        <b-col>
          <b-card :img-src="require('@/assets/site.png')" title="站点1">
            <p>站点1位于三江市交通要道张路，交通情况复杂。</p>
            <p>
              <router-link to="/site/1">
                <b-button>查看站点</b-button>
              </router-link>
            </p>
          </b-card>
        </b-col>
        <b-col>
          <b-card :img-src="require('@/assets/site.png')" title="站点2">
            <p>站点2位于三江市交通要道李路，交通情况复杂。</p>
            <p>
              <router-link to="/site/2">
                <b-button>查看站点</b-button>
              </router-link>
            </p>
          </b-card>
        </b-col>
        <b-col>
          <b-card :img-src="require('@/assets/site.png')" title="站点3">
            <p>站点3位于三江市交通要道王路，交通情况复杂。</p>
            <p>
              <router-link to="/site/3">
                <b-button>查看站点</b-button>
              </router-link>
            </p>
          </b-card>
        </b-col>
        <b-col>
          <b-card :img-src="require('@/assets/site.png')" title="站点4">
            <p>站点4位于三江市交通要道赵路，交通情况复杂。</p>
            <p>
              <router-link to="/site/4">
                <b-button>查看站点</b-button>
              </router-link>
            </p>
          </b-card>
        </b-col>
      </b-row>
      <b-row class="mx-0 mt-3">
        <b-col>
          <b-card :img-src="require('@/assets/site.png')" title="站点5">
            <p>站点5位于三江市交通要道范路，交通情况复杂。</p>
            <p>
              <router-link to="/site/5">
                <b-button>查看站点</b-button>
              </router-link>
            </p>
          </b-card>
        </b-col>
        <b-col>
          <b-card :img-src="require('@/assets/site.png')" title="站点6">
            <p>站点6位于三江市交通要道宋路，交通情况复杂。</p>
            <p>
              <router-link to="/site/6">
                <b-button>查看站点</b-button>
              </router-link>
            </p>
          </b-card>
        </b-col>
        <b-col>
          <b-card :img-src="require('@/assets/site.png')" title="站点7">
            <p>站点7位于三江市交通要道黄路，交通情况复杂。</p>
            <p>
              <router-link to="/site/7">
                <b-button>查看站点</b-button>
              </router-link>
            </p>
          </b-card>
        </b-col>
        <b-col>
          <b-card :img-src="require('@/assets/site.png')" title="站点8">
            <p>站点8位于三江市交通要道周路，交通情况复杂。</p>
            <p>
              <router-link to="/site/8">
                <b-button>查看站点</b-button>
              </router-link>
            </p>
          </b-card>
        </b-col>
      </b-row>
    </b-card>
    <b-card class="mb-5" header="线路6站点">
      <p>尚未开通。</p>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "SiteNav"
}
</script>

<style scoped>

</style>