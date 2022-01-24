<template>
  <div>
    <b-sidebar no-header-close title="管理界面选项" visible>
      <div class="p-3 text-center">
        <router-link to="/admin/parameter">
          <b-button block pill size="lg" variant="primary">参数设置</b-button>
        </router-link>
      </div>
      <div class="p-3 text-center">
        <router-link to="/admin/situation">
          <b-button block pill size="lg" variant="primary">特情管理</b-button>
        </router-link>
      </div>
      <div class="p-3 text-center">
        <router-link to="/admin/bigdata">
          <b-button block pill size="lg" variant="primary">大数据管理</b-button>
        </router-link>
      </div>
      <div class="p-3 text-center">
        <router-link to="/admin/user">
          <b-button block pill size="lg" variant="primary">用户管理</b-button>
        </router-link>
      </div>
    </b-sidebar>
    <b-container class="col-6">
      <h1 class="mt-3 mb-3">用户管理</h1>
      <b-card title="用户列表">
        <b-table :fields="user_fields" :items="user_items"/>
        <small>访问权限： 1 - 特情管理员 ｜ 2 - 系统管理员</small>
      </b-card>
      <b-card class="mt-3" title="新建/修改/删除用户">
        <b-form-group label="用户名">
          <b-form-input v-model="username" placeholder="请输入用户名"/>
        </b-form-group>
        <b-form-group label="密码">
          <b-form-input v-model="new_password" placeholder="请输入密码" type="password"/>
        </b-form-group>
        <b-form-group label="访问等级">
          <b-form-select v-model="new_access_level">
            <b-select-option disabled value="null">请选择访问等级</b-select-option>
            <b-select-option value="1">特情管理员 - 1</b-select-option>
            <b-select-option value="2">系统管理员 - 2</b-select-option>
          </b-form-select>
        </b-form-group>
        <b-button-group>
          <b-button variant="primary" @click="create_or_alter_user">新建/修改</b-button>
          <b-button variant="primary" @click="delete_user">删除</b-button>
        </b-button-group>
      </b-card>
    </b-container>
    <b-modal ref="success" header-bg-variant="success" title="轨道交通智能预测系统-参数设置">
      <p>操作成功!</p>
    </b-modal>
    <b-modal ref="fail" header-bg-variant="danger" title="轨道交通智能预测系统-参数设置">
      <p>操作失败!您的登陆信息已过期或后端服务器错误。</p>
    </b-modal>
    <b-modal ref="info" header-bg-variant="info" title="轨道交通智能预测系统-参数设置">
      <p>请选择或完整填写信息!</p>
    </b-modal>
  </div>
</template>

<script>
import qs from "qs";

export default {
  name: "UserManage",
  data: function () {
    return {
      user_fields: ["ID", "用户名", "访问权限"],
      user_items: [],
      username: null,
      new_password: null,
      new_access_level: null
    }
  },
  mounted() {
    this.axios({
      method: "get",
      url: "/api/user/getAll",
    }).then(resp => {
      this.user_items = resp.data['users'];
    }).catch(e => {
      console.log(e);
      this.$refs['fail'].show();
    })
  },
  methods: {
    create_or_alter_user() {
      if (this.username != null && this.new_password != null && this.new_access_level != null) {
        this.axios({
          method: "post",
          url: "/api/user/createOrAlter",
          data: qs.stringify({
            username: this.username,
            password: this.new_password,
            access_level: this.new_access_level
          })
        }).then(resp => {
          if (resp.data === "success") {
            this.$refs['success'].show();
          } else {
            this.$refs['fail'].show();
          }
        }).catch(e => {
          console.log(e);
          this.$refs['fail'].show();
        })
      } else {
        this.$refs['info'].show();
      }
    },
    delete_user() {
      if (this.username != null) {
        this.axios({
          method: "post",
          url: "/api/user/delete",
        }).then(resp => {
          if (resp.data === "success") {
            this.$refs['success'].show();
          } else {
            this.$refs['fail'].show();
          }
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