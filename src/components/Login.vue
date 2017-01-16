<template>
  <div>
    <input v-model="name"/>
    <input type="password" v-model="password"/>
    <input type="button" value="登录" @click="login" />
    <input type="button" value="注册并登录" @click="registerAndLogin" />
  </div>
</template>
<script>
export default{
  data(){
    return {
      name : null,
      password : null
    }
  },
  methods : {
    login(){
      var name = this.name;
      var password = this.password;
      wilddog.auth().signInWithEmailAndPassword(name,password).then(function(user){
        // 获取用户
        console.log(user);
      }).catch(function (error) {
        // 错误处理
        alert(error);
      });
    },
    registerAndLogin(){
      var name = this.name;
      var password = this.password;
      wilddog.auth().createUserWithEmailAndPassword(name,password).then(function(user){
        // 获取用户
        console.log(user);
      }).catch(function (error) {
        // 错误处理
        alert(error);
      });
    }
  },
  beforeCreate(){
    console.log('=================初始化wilddog连接=======================');
    var config = {
      authDomain: "draw-and-guess.wilddog.com",
      syncURL: "https://draw-and-guess.wilddogio.com"
    }
    wilddog.initializeApp(config)
    console.log('=================初始化wilddog连接完毕=======================');
  }
}
</script>
