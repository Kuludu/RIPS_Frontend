<template>
  <div>
    <b-row class="mx-0 mt-3">
      <b-col cols="3">
        <b-card :img-src="require('@/assets/line.png')" title="线路1">
          <p>线路1贯穿三江市交通要道，交通情况复杂。</p>
          <p>
            <router-link to="#">
              <b-button variant="danger">尚未开通</b-button>
            </router-link>
          </p>
        </b-card>
      </b-col>
      <b-col cols="3">
        <b-card :img-src="require('@/assets/line.png')" title="线路2">
          <p>线路2贯穿三江市交通要道，交通情况复杂。</p>
          <p>
            <router-link to="#">
              <b-button variant="danger">尚未开通</b-button>
            </router-link>
          </p>
        </b-card>
      </b-col>
      <b-col cols="3">
        <b-card :img-src="require('@/assets/line.png')" title="线路3">
          <p>线路3贯穿三江市交通要道，交通情况复杂。</p>
          <p>
            <router-link to="#">
              <b-button variant="danger">尚未开通</b-button>
            </router-link>
          </p>
        </b-card>
      </b-col>
      <b-col cols="3">
        <b-card :img-src="require('@/assets/line.png')" title="线路4">
          <p>线路4贯穿三江市交通要道，交通情况复杂。</p>
          <p>
            <router-link to="#">
              <b-button variant="danger">尚未开通</b-button>
            </router-link>
          </p>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mx-0 mt-3">
      <b-col cols="3">
        <b-card :img-src="require('@/assets/line.png')" title="线路5">
          <p>线路5贯穿三江市交通要道，交通情况复杂。</p>
          <p>
            <router-link to="/line/5">
              <b-button variant="info">查看线路</b-button>
            </router-link>
          </p>
        </b-card>
      </b-col>
      <b-col cols="3">
        <b-card :img-src="require('@/assets/line.png')" title="线路6">
          <p>线路6贯穿三江市交通要道，交通情况复杂。</p>
          <p>
            <router-link to="#">
              <b-button variant="danger">尚未开通</b-button>
            </router-link>
          </p>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "LineNav"
}
</script>

<style scoped>

</style>