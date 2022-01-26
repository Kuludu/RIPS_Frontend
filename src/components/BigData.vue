<template>
  <div>
    <AdminHeadBar/>
    <b-container class="col-6">
      <b-card>
        <h1 class="mt-3 mb-3">大数据管理</h1>
        <b-card title="站点刷新设置">
          <b-table
              ref="selectableTable"
              :fields="refresh_fields"
              :items="refresh_items"
              select-mode="multi"
              selectable
              @row-selected="onRowSelected"
          >
            <template #cell(selected)="{ rowSelected }">
              <template v-if="rowSelected">
                <span aria-hidden="true">&check;</span>
                <span class="sr-only">Selected</span>
              </template>
              <template v-else>
                <span aria-hidden="true">&nbsp;</span>
                <span class="sr-only">Not selected</span>
              </template>
            </template>
          </b-table>
          <b-button-group>
            <b-button variant="primary" @click="enable_refresh">启用</b-button>
            <b-button variant="primary" @click="disable_refresh">停止</b-button>
          </b-button-group>
        </b-card>
        <b-card class="mt-3" title="刷新设置">
          <b-form-group label="刷新时间(分钟)">
            <b-form-spinbutton id="sb-inline" v-model="refresh_time" inline></b-form-spinbutton>
          </b-form-group>
          <b-button variant="primary" @click="submit_refresh_time">提交</b-button>
        </b-card>
        <b-card class="mt-3" title="数据更新状态查询">
          <b-table :fields="update_status_fields" :items="update_status_items" hover striped/>
          <b-button variant="primary" @click="get_refresh_status">刷新</b-button>
        </b-card>
      </b-card>
    </b-container>
    <b-modal ref="success" header-bg-variant="success" title="轨道交通智能预测系统-大数据管理">
      <p>操作成功!</p>
    </b-modal>
    <b-modal ref="fail" header-bg-variant="danger" title="轨道交通智能预测系统-大数据管理">
      <p>操作失败!您的登陆信息已过期或后端服务器错误。</p>
    </b-modal>
  </div>
</template>

<script>
import AdminHeadBar from "@/components/AdminHeadBar";
import qs from "qs";

export default {
  name: "BigData",
  components: {AdminHeadBar},
  data: function () {
    return {
      refresh_fields: ["ID", "线路归属", "站点归属", "是否启用"],
      refresh_items: [],
      refresh_selected: [],
      refresh_time: 0,
      update_status_fields: ["ID", "更新时间"],
      update_status_items: []
    }
  },
  mounted() {
    this.get_refresh_setting();
    this.get_refresh_time();
    this.get_refresh_status();
  },
  methods: {
    onRowSelected(items) {
      this.refresh_selected = items;
    },
    get_refresh_setting() {
      this.axios({
        method: "get",
        url: "/api/bigdata/refresh"
      }).then(resp => {
        this.refresh_items = resp.data['refresh_setting'];
      }).catch(e => {
        console.log(e);
        this.$refs['fail'].show();
      });
    },
    get_refresh_time() {
      this.axios({
        method: "get",
        url: "/api/bigdata/refreshTime"
      }).then(resp => {
        this.refresh_time = resp.data['refresh_time'];
      }).catch(e => {
        console.log(e);
        this.$refs['fail'].show();
      });
    },
    get_refresh_status() {
      this.axios({
        method: "get",
        url: "/api/bigdata/refreshStatus"
      }).then(resp => {
        this.update_status_items = resp.data['refresh_status'];
      }).catch(e => {
        console.log(e);
        this.$refs['fail'].show();
      });
    },
    enable_refresh() {
      let onEnable = [];
      this.refresh_selected.forEach(item => {
        onEnable.push(item['ID']);
      });
      this.axios({
        method: "post",
        url: "/api/bigdata/refresh/enable",
        data: qs.stringify({
          site_id: onEnable
        }, {
          arrayFormat: 'repeat'
        })
      }).then(resp => {
        if (resp.data === "success") {
          this.$refs['success'].show();
          this.get_refresh_setting();
        } else {
          this.$refs['fail'].show();
        }
      }).catch(e => {
        console.log(e);
        this.$refs['fail'].show();
      });
    },
    disable_refresh() {
      let onDisable = [];
      this.refresh_selected.forEach(item => {
        onDisable.push(item['ID']);
      });
      this.axios({
        method: "post",
        url: "/api/bigdata/refresh/disable",
        data: qs.stringify({
          site_id: onDisable
        }, {
          arrayFormat: 'repeat'
        })
      }).then(resp => {
        if (resp.data === "success") {
          this.$refs['success'].show();
          this.get_refresh_setting();
        } else {
          this.$refs['fail'].show();
        }
      }).catch(e => {
        console.log(e);
        this.$refs['fail'].show();
      });
    },
    submit_refresh_time() {
      this.axios({
        method: "post",
        url: "/api/bigdata/refreshTime/set",
        data: qs.stringify({
          refresh_time: this.refresh_time
        })
      }).then(resp => {
        if (resp.data === "success") {
          this.$refs['success'].show();
        } else {
          this.$refs['fail'].show();
        }
        this.get_refresh_time();
      }).catch(e => {
        console.log(e);
        this.$refs['fail'].show();
      });
    }
  }
}
</script>

<style scoped>

</style>