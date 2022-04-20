<template>
  <div id="app">
    <nav class='main-nav' v-if="enable">
      <li><router-link to="/">Trang chủ</router-link></li>
      <li><router-link to="/map"> Sơ đồ mặt bằng</router-link></li>
      <li><router-link to="/operation">Thống kê hoạt động</router-link></li>
      <li>
        <div class="dropdown">
          <span class="dropbtn">Tra cứu lịch sử</span>
          <div class="dropdown-content">
            <router-link to="/">Lỗi truyền thông</router-link>
            <router-link to="/soft-history">Hoạt động của phần mềm</router-link>
            <router-link to="/device-history">Hoạt động của thiết bị</router-link>
          </div>
        </div>
      </li>
      <li>
        <div class="dropdown">
          <span class="dropbtn">Cài đặt</span>
          <div class="dropdown-content">
            <router-link to="/">OPC Server</router-link>
            <router-link to="/">SQL Database</router-link>
          </div>
        </div>
      </li>
      <li><a href="#" @click.prevent="showDialog=true">Trợ giúp</a></li>
      <li><router-link to="/login">Thoát</router-link></li>
    </nav>
    <router-view  />
    
    <md-dialog-alert
      :md-active.sync="showDialog"
      md-content="Thông tin liên hệ:<br><br>Thanh Lam<br><br>Sđt: 0969xxxxxx<br><br>Mail: thanhlamxxxxxxx"
      md-confirm-text="Ok" />
  </div>
</template>

<script>

export default {
  created() {
    // let startTime = new Date().getTime()
    // this.timer = setInterval(()=>{
    //   let now = new Date(),
    //       year = ''+ now.getFullYear(),
    //       month = (''+(now.getMonth()+1)).padStart(2,'0'),
    //       day = (''+now.getDate()).padStart(2,'0'),
    //       hour = (''+now.getHours()).padStart(2,'0'),
    //       min = (''+now.getMinutes()).padStart(2,'0'),
    //       second = (''+now.getSeconds()).padStart(2,'0');
    //   this.time_current = [day,month,year].join('/')+' '+ [hour,min,second].join(':')
    //   this.time_use = new Date(now.getTime()-startTime).toISOString().substr(11,8)
    // },1000)
    this.$router.push('/login')
  },
  // beforeDestroy(){
  //   clearInterval(this.timer)
  // },
  // 
  watch:{
    $route (to){
      console.log(to)
      if(to.name=='login'){
        this.enable = false
      }
      else{
        this.enable = true
      }
    }
  } ,
  data(){
    return{
      image_index:'1',
      time_use:'null',
      time_current:'null',
      timer:null,
      enable:false,
      
      showDialog:false
    }
  }
  // computed:{
  //   enable(){
  //     let path =this.$router.currentRoute.path
  //     console.log(path)
  //     if(path.indexOf('dashboard')!==-1)
  //     {
  //       console.log('dash route')
  //       return false
  //     }
  //     return true
  //   }
  // }

}
</script>

<style lang="scss">
html,body{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(24, 97, 253) !important;
  height: 100%;
  color: black;
  font-size: 1rem !important;
  // margin: 0 px;
}
#app{
  height: 100%;
}
.main-nav{
  list-style-type: none;
  height: 35px;
  background-color: #417AF9;
  display: flex;
  flex-direction: row;
  align-items: center;
  li{
    display: inline-block;
    // width: 160px;
    height: 30px;
    margin-left: 20px;
    text-align: center;
    a{
      text-decoration: none;
      color: black !important;
      // font-weight: bold;
      line-height: 30px;
    }
  }
  li:hover{
    background-color: #759ff8;
  }
}
h2{
  text-align: center;
  color: yellow;
  margin-top:10px;
  margin-bottom: 20px;
}
.md-table{
  border-collapse: collapse;
}
td, th {
  border: 1px solid black !important;
  font-size: 1rem;
  font-weight: bold;
  height: 24px !important;
}
fieldset{
  border: 1px solid white !important;
  width: 50%;
  padding: 5px;
  overflow:hidden;
  legend{
    font-size: 1.2rem;
    color: white;
    margin-left: 10px;
    width: 75px;
  }

}
.floor-main__items{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h4{
    text-align: center;
  }
  .md-table-head{
    background-color: #f19a47;
    text-align: center;
  }
}
.floor-main{
  margin: 0 5px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  gap:20px;
}
.floor-sub{
  margin: 0 5px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  fieldset{
    width: 100%;
  }
}
.floor-info{
  margin: 0 5px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  gap:20px;
  .md-table{
    max-height: 150px;
  }
  .errors{
    width: 45%;
    .md-table-head{
      background-color: #fc6f6a;
      text-align: center;
    }
  }
  .search{
    width: 45%;
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    .group-button{
      display: flex;
      flex-direction: column;
      .cus-button{
        width: 150px;
        height: 50px;
        text-transform: none;
        margin:0px 0px;
        
      }
    }
  }
  .operation{
    width: 35%;
    .md-table-head{
      background-color: #f19a47;
      text-align: center;
    }
  }
  .time-info{
    width: 20%;
    // height: 190px;
    display: flex;
    flex-direction: column;
    justify-content:space-between ;
    align-items: center;
    fieldset{
      width: 100%;
      height: 100%;
      
    }
    h1{
      text-align: center;
    }
    .text-content{
      background-color:white;
      width:100%;
      text-align:center;
      padding:5px;
    }
  }
  
}
.image-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: white;
  height: 100%;
  img{
    max-width: 70%;
    max-height: 70%;
    object-fit: contain;
  }
  select:focus {
    outline: none !important;
    border:1px solid #417AF9 !important ;
  }
  select{
    margin-bottom: 30px;
    height: 48px;
    background-color:#F8F2FF;
    border-width: 0px;
    border-radius: 2px;
    padding: 8px;
    width: 260px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  }
}
.dropdown {
  position: relative;
  display: inline-block;
  .dropbtn{
    height: 30px;
    line-height: 30px;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 210px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 10;
    a {
      color: black;
      padding: 8px 0px;
      padding-left: 8px;
      text-decoration: none;
      display: block;
      text-align: left;
      
    }
    a:hover {background-color: #759ff8}
  }
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  cursor: pointer;
  text-decoration: underline;
}
.search-group{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: centerFONT;
  padding-bottom: 20px;
  // width: 80%;
  // margin-bottom: 20px;
  input{
    height: 40px;
  }
  .cus-button{
    width: 120px;
    height: 40px;
    text-transform: none;
    margin:0px 0px;
        
  }

}
.md-table-head{
  background-color: #7dffa6;
}
.login-form{

  width: 50%;
  margin:0px auto;
  margin-top:200px;
  background-color: #f9f9f9;
  padding: 24px;

  h4{
    text-align: center;
    color:#417AF9;
    margin-top:10px;
    margin-bottom: 20px;
  }
}
</style>
