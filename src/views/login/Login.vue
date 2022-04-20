<template>
    <div class="login-form">
      <h4>Đăng nhập</h4>
      <div>
        <md-field>
          <label>Tài khoản</label>
          <md-input v-model="username"></md-input>
        </md-field>
        <md-field>
          <label>Mật khẩu</label>
          <md-input v-model="password"></md-input>
        </md-field>
        <md-button @click="onLogin" class="md-raised md-primary" style="width:100%;margin:0px">Login</md-button>
      </div>
    </div>
</template>
<script>

export default {
    name:'Login',
    data(){
        return{
            username:'',
            password:'',
        }
    },
    methods:{
        onLogin(){
            if(this.username=='' || this.password==''){
                return alert('Vui lòng nhập tài khoản và mật khẩu!')
            }
            if(this.username=='admin' && this.password=='1'){
                this.$router.push('/')
                this.username=''
                this.password=''
            }
            else{
                return alert('Tài khoản hoặc  mật khẩu không đúng!')
            }
        }
    }
}
</script>
