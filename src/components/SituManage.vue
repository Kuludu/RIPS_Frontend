<template>
  <div>
    <AdminHeadBar/>
    <b-container class="col-6">
      <b-card>
        <h1 class="mt-3 mb-3">特情管理</h1>
        <b-card title="特情面板">
          <b-table
              ref="selectableTable"
              :fields="fields"
              :items="items"
              responsive="sm"
              select-mode="multi"
              selectable
              @row-selected="onRowSelected"
          >
            <template #table-caption>当前全部特情</template>
          </b-table>
          <p>
            <b-button-group>
              <b-button variant="primary" @click="deleteSituation">删除</b-button>
              <b-button variant="primary" @click="activateSituation">激活</b-button>
              <b-button variant="primary" @click="deactivateSituation">隐藏</b-button>
            </b-button-group>
          </p>
        </b-card>
        <b-card class="mt-3" title="发布特情">
          <b-form-group
              class="col-4"
              label="特情名称:"
          >
            <b-form-input v-model="name" placeholder="请输入特情名称"></b-form-input>
          </b-form-group>
          <b-form-group
              class="col-5"
              label="发布时间:"
          >
            <VueCtkDateTimePicker
                v-model="datetime"
                button-now-translation="现在"
                format="YYYY-MM-DD HH:mm"
                label="请选择发布时间"/>
          </b-form-group>
          <b-button variant="primary" @click="createSituation">发布</b-button>
        </b-card>
        <b-modal ref="success" header-bg-variant="success" title="轨道交通智能预测系统-特情管理">
          <p>操作成功!</p>
        </b-modal>
        <b-modal ref="fail" header-bg-variant="danger" title="轨道交通智能预测系统-特情管理">
          <p>操作失败!您的登陆信息已过期或后端服务器错误。</p>
        </b-modal>
        <b-modal ref="info" header-bg-variant="info" title="轨道交通智能预测系统-特情管理">
          <p>请选择或完整填写信息!</p>
        </b-modal>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import AdminHeadBar from "@/components/AdminHeadBar";
import qs from "qs";

export default {
  name: "SituManage",
  components: {AdminHeadBar},
  data: function () {
    return {
      name: null,
      datetime: null,
      fields: ['ID', '是否激活', '特情名称', '发布时间'],
      items: [],
      selected: []
    }
  },
  mounted() {
    this.fetchAll();
  },
  methods: {
    fetchAll() {
      this.axios({
        method: "get",
        url: "/api/situation/fetchAll"
      }).then(resp => {
        this.items = resp.data["situation_all"];
      }).catch(e => {
        console.log(e);
        this.$refs['fail'].show();
      })
    },
    onRowSelected(items) {
      this.selected = items;
    },
    deleteSituation() {
      if (this.selected.length > 0) {
        let onDelete = [];
        this.selected.forEach(item => {
          onDelete.push(item['ID']);
        })
        this.axios({
          method: "post",
          url: "/api/situation/delete",
          data: qs.stringify({
            situation_id: onDelete
          }, {
            arrayFormat: 'repeat'
          })
        }).then(resp => {
          if (resp.data === "success") {
            this.$refs['success'].show();
          } else {
            this.$refs['fail'].show();
          }
          this.fetchAll();
        }).catch(e => {
          console.log(e);
          this.$refs['fail'].show();
        })
      } else {
        this.$refs['info'].show();
      }
    },
    activateSituation() {
      if (this.selected.length > 0) {
        let onActivate = [];
        this.selected.forEach(item => {
          onActivate.push(item['ID']);
        })
        this.axios({
          method: "post",
          url: "/api/situation/activate",
          data: qs.stringify({
            situation_id: onActivate
          }, {
            arrayFormat: 'repeat'
          })
        }).then(resp => {
          if (resp.data === "success") {
            this.$refs['success'].show();
          } else {
            this.$refs['fail'].show();
          }
          this.fetchAll();
        }).catch(e => {
          console.log(e);
          this.$refs['fail'].show();
        })
      } else {
        this.$refs['info'].show();
      }
    },
    deactivateSituation() {
      if (this.selected.length > 0) {
        let onDeactivate = [];
        this.selected.forEach(item => {
          onDeactivate.push(item['ID']);
        })
        this.axios({
          method: "post",
          url: "/api/situation/deactivate",
          data: qs.stringify({
            situation_id: onDeactivate
          }, {
            arrayFormat: 'repeat'
          })
        }).then(resp => {
          if (resp.data === "success") {
            this.$refs['success'].show();
          } else {
            this.$refs['fail'].show();
          }
          this.fetchAll();
        }).catch(e => {
          console.log(e);
          this.$refs['fail'].show();
        })
      } else {
        this.$refs['info'].show();
      }
    },
    createSituation() {
      if (this.name != null && this.datetime != null) {
        this.axios({
          method: "post",
          url: "/api/situation/create",
          data: qs.stringify({
            name: this.name,
            datetime: this.datetime
          })
        }).then(resp => {
          if (resp.data === "success") {
            this.$refs['success'].show();
          } else {
            this.$refs['fail'].show();
          }
          this.fetchAll();
        }).catch(e => {
          console.log(e);
          this.$refs['fail'].show();
        })
      } else {
        this.$refs['info'].show();
      }
    }
  }
}
</script>

<style scoped>

</style>