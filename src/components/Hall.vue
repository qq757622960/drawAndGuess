<template>
  <div style="width:600px;height:100%;overflow:auto;">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">Hall</span>
        <el-button style="float: right;" type="primary">Create Room</el-button>
      </div>
      <el-row>
        <el-col :span="2">Index</el-col>
        <el-col :span="6">Name</el-col>
        <el-col :span="6" :push="10">Created</el-col>
      </el-row>
      <div v-for="room in rooms">
        <el-row>
          <el-col :span="2" v-text="room.index"></el-col>
          <el-col :span="6" v-text="room.name"></el-col>
          <el-col :span="6" :push="10" v-text="getCreateTime(room.created)"></el-col>
        </el-row>
      </div>
      <div class="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="total,prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
      </div>
    </el-card>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        pageSize : 10,
        currentPage : 1,
        format : 'yyyy-MM-dd HH:mm:ss',
        rooms : []
      }
    },
    computed : {
      total(){
        return this.rooms.length;
      }
    },
    methods : {
      getCreateTime(timestamp){
        return Util.DateFormat.toDateString(timestamp,this.format);
      },
      handleSizeChange(val){
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val){
        this.currentPage = val;
        console.log(`当前页: ${val}`);
      }
    },
    created(){
      console.log('=================初始化大厅=======================');
      var _this = this;
      var rooms = _this.rooms = [];
      var ref = wilddog.sync().ref("/").child('roomList');
      ref.on('child_added',(snapshot,error) => {
          var room = snapshot.val()
          console.log(room)
          rooms.push({
            index : room.index,
            created : room.created,
            name : room.name
          })
      })
      console.log('=================初始化大厅完毕=======================');
    }
  }
</script>
