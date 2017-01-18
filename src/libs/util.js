export default{
  DateFormat : {
    toDateString(timestamp,format){
      var time = new Date(timestamp)
      //var year = time.getYear()        //获取当前年份(2位)
      var fullYear = time.getFullYear()    //获取完整的年份(4位,1970-????)
      var month = time.getMonth()+1       //获取当前月份(0-11,0代表1月)
      month = month < 10 ? "0"+month : month //补0
      var date = time.getDate()        //获取当前日(1-31)
      date = date < 10 ? "0"+date : date //补0
      //time.getDay()         //获取当前星期X(0-6,0代表星期天)
      //time.getTime()        //获取当前时间(从1970.1.1开始的毫秒数)
      var hour = time.getHours()       //获取当前小时数(0-23)
      hour = hour < 10 ? "0"+hour : hour //补0
      var minute = time.getMinutes()     //获取当前分钟数(0-59)
      minute = minute < 10 ? "0"+minute : minute //补0
      var second = time.getSeconds()     //获取当前秒数(0-59)
      second = second < 10 ? "0"+second : second //补0
      //time.getMilliseconds()    //获取当前毫秒数(0-999)
      //time.toLocaleDateString()     //获取当前日期
      return format.replace && format.replace('yyyy',fullYear).replace('MM',month).replace('dd',date).replace('HH',hour).replace('mm',minute).replace('ss',second);
    }
  }
}
