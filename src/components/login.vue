// 组件功能：登录页面
// 码农：李沛璋
<template>
<div id="form">
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <div id="pic">
      <img src="../assets/all.png" alt="无法显示图片">
    </div> 
    
    <a-form-item>
      <a-input
        v-decorator="[
          'username',
          { rules: [{ required: true, message: '请输入正确的用户名' }] },
        ]"
        placeholder="用户名"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入正确的密码' }] },
        ]"
        type="password"
        placeholder="密码"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <!-- <a-form-item class="login-form-button"> -->
      <a-button type="primary" html-type="submit" class="login-form-button">
        登录
      </a-button>
    <!-- </a-form-item> -->
  </a-form>
</div>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
};
</script>

<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login  {
  width: 30%;
}
.login-form{
  width: 30%;
}
#form{
  height: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form-button{
  position: absolute;
  left: 44.8%;
  width: 10%;
}
#pic img{
  width: 400px;
}
</style>