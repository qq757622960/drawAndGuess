<template>
  <div>
    <!--<el-row>-->
      <!--<el-col :span="3" :push="6">-->
        <!--<el-button type="primary"  @click="login" >Create Room</el-button>-->
      <!--</el-col>-->
    <!--</el-row>-->
    <div class="hall">
      <!--<div v-for="room in rooms">-->
      <!--{{ item.text }}-->
      <!--</div>-->
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        demo : {
          index : 1,
          created : new Date(),
          name : '死亡笔记'
        },
        rooms : []
      }
    },
    methods : {
    },
    created(){
      console.log('=================初始化大厅=======================');
      this.rooms = [];
      var ref = wilddog.sync().ref("/").child('roomList');
      ref.remove();
      for(var i=1;i<=1000;i++){
        ref.push({
          index : i,
          created : new Date().getTime(),
          name : '死亡笔记'+i
        });
      }
//      wilddog.sync().ref("/").child('roomList').on('child_added',(snapshot,error) => {
//          var room = snapshot.val()
//          console.log(room);
////        this.rooms.push({
////        })
//      })
      console.log('=================初始化大厅完毕=======================');
    }
  }
//  var room = {
//    name : 'room_name',
//    max : 'max_player_in',
//    users : ['uid1','uid2','uid3']
//  };


</script>
