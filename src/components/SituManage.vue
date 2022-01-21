<template>
  <div>
    <b-sidebar class="text-center" no-header-close visible>
      <router-link to="/admin/parameter">
        <b-button pill variant="primary">参数设置</b-button>
      </router-link>
      <router-link to="/admin/situation">
        <b-button pill variant="primary">特情管理</b-button>
      </router-link>
    </b-sidebar>
    <div class="container col-md-6 mt-4">
      <h1>特情管理</h1>
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
        <b-button style="margin-top: 10px" variant="primary" @click="createSituation">发布</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import qs from "qs";

export default {
  name: "SituManage",
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
        this.items = resp.data["situation_all"]
      }).catch(e => {
        console.log(e)
        alert("后端服务器错误")
      })
    },
    onRowSelected(items) {
      this.selected = items
    },
    deleteSituation() {
      if (this.selected.length > 0) {
        let onDelete = []
        this.selected.forEach(item => {
          onDelete.push(item["ID"])
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
            alert("删除成功!")
          } else {
            alert("删除失败!")
          }
          this.fetchAll()
        }).catch(e => {
          console.log(e)
          alert("后端服务器错误")
        })
      } else {
        alert("请选择要删除的特情")
      }
    },
    activateSituation() {
      if (this.selected.length > 0) {
        let onActivate = []
        this.selected.forEach(item => {
          onActivate.push(item["ID"])
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
            alert("激活成功!")
          } else {
            alert("激活失败!")
          }
          this.fetchAll()
        }).catch(e => {
          console.log(e)
          alert("后端服务器错误")
        })
      } else {
        alert("请选择要激活的特情")
      }
    },
    deactivateSituation() {
      if (this.selected.length > 0) {
        let onDeactivate = []
        this.selected.forEach(item => {
          onDeactivate.push(item["ID"])
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
            alert("隐藏成功!")
          } else {
            alert("隐藏失败!")
          }
          this.fetchAll()
        }).catch(e => {
          console.log(e)
          alert("后端服务器错误")
        })
      } else {
        alert("请选择要隐藏的特情")
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
          if (resp.data !== "success")
            alert("特情发布错误！")
          else
            alert("特情发布成功！")
          this.fetchAll()
        }).catch(e => {
          console.log(e)
          alert("后端服务器错误")
        })
      } else {
        alert("请填写完整信息")
      }
    }
  }
}
</script>

<style scoped>

</style>