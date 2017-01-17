<template>
  <div class="loginBox">
    <el-row>
      <el-input type="text" placeholder="请输入内容" v-model="name">
        <template slot="prepend">邮箱</template>
      </el-input>
    </el-row>
    <el-row>
      <el-input type="password" placeholder="请输入内容" v-model="password">
        <template slot="prepend">密码</template>
      </el-input>
    </el-row>
    <el-row>
      <el-col :span="3" :push="6">
        <el-button type="primary"  @click="login" >登录</el-button>
      </el-col>
      <el-col :span="3" :push="8">
        <el-button type="primary"  @click="registerAndLogin" >注册并登录</el-button>
      </el-col>
    </el-row>
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
      var _this = this;
      var name = _this.name;
      var password = _this.password;
      wilddog.auth().signInWithEmailAndPassword(name,password).then(function(user){
        _this.redirect();
      }).catch(function (error) {
        // 错误处理
        alert(error);
      });
    },
    registerAndLogin(){
      var _this = this;
      var name = _this.name;
      var password = _this.password;
      wilddog.auth().createUserWithEmailAndPassword(name,password).then(function(user){
        _this.initUserInfo(user.uid)
        _this.redirect()
      }).catch(function (error) {
        // 错误处理
        alert(error);
      });
    },
    redirect(){
      router.push('./hall');
    },
    initUserInfo(uid){
      var ref = wilddog.sync().ref("/").child(uid);
      ref.child('win').set(0);
      ref.child('fail').set(0);
      ref.child('escape').set(0);
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
<style>
  .loginBox{position: absolute;width:400px;margin-left:-200px;top:100px;left:50%;border:1px solid #ccc;border-radius:20px;padding:40px;}
  .el-row:not(:last-child){margin-bottom:20px;}
</style>
