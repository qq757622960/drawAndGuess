<template>
  <div class="loginBox">
    <el-row>
      <el-input type="text" placeholder="please enter the content!" v-model="name">
        <template slot="prepend">email</template>
      </el-input>
    </el-row>
    <el-row>
      <el-input type="password" placeholder="please enter the content!" v-model="password">
        <template slot="prepend">password</template>
      </el-input>
    </el-row>
    <el-row>
      <el-col :span="3" :push="6">
        <el-button type="primary"  @click="login" >Login</el-button>
      </el-col>
      <el-col :span="3" :push="8">
        <el-button type="primary"  @click="registerAndLogin" >RegisterAndLogin</el-button>
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
      var ref = wilddog.sync().ref("/user").child(uid);
      ref.child('win').set(0);
      ref.child('fail').set(0);
      ref.child('escape').set(0);
    }
  },
  beforeCreate(){
    console.log('=================初始化wilddog连接=======================');
    console.log('=================初始化wilddog连接完毕=======================');
  }
}
</script>
<style>
  .loginBox{position: absolute;width:400px;margin-left:-200px;top:100px;left:50%;border:1px solid #ccc;border-radius:20px;padding:40px;}
  .el-row:not(:last-child){margin-bottom:20px;}
</style>
