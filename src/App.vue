<template>
  <div id="app">
    <nav class='main-nav'>
      <li><a href="#home">Sơ đồ mặt bằng</a></li>
      <li><a href="#news">Thống kê hoạt động</a></li>
      <li><a href="#contact">Tra cứu lịch sử</a></li>
      <li><a href="#about">Cài đặt</a></li>
      <li><a href="#contact">Trợ giúp</a></li>
      <li><a href="#about">Thoát</a></li>
    </nav>
    <h2>PHẦN MỀM QUẢN LÝ GIÁM SÁT - PHÒNG KHÁM Y HỌC CỔ TRUYỀN - MINH DŨNG</h2>
    
    <div class='floor-main'>
      <fieldset>
        <legend>TẦNG 1</legend>
        <div class='floor-main__items'>
          <div>
            <h4>Phòng 101</h4>
            <md-table v-model="room_101" md-card>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell style="background-color:#7dffa6" md-label="Thiết bị" md-sort-by="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Trạng thái" md-sort-by="status" :style="{color:item.status==='Tắt'?'red':'blue'}">{{ item.status }}</md-table-cell>
                <md-table-cell md-label="Bật" md-sort-by="on">{{ item.on }}</md-table-cell>
                <md-table-cell md-label="Tắt" md-sort-by="off">{{ item.off }}</md-table-cell>
              </md-table-row>
            </md-table>
          </div>

          <div>
            <h4>Phòng 102</h4>
            <md-table v-model="room_102" md-card>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell style="background-color:#7dffa6" md-label="Thiết bị" md-sort-by="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Trạng thái" md-sort-by="status" :style="{color:item.status==='Tắt'?'red':'blue'}">{{ item.status }}</md-table-cell>
                <md-table-cell md-label="Bật" md-sort-by="on">{{ item.on }}</md-table-cell>
                <md-table-cell md-label="Tắt" md-sort-by="off">{{ item.off }}</md-table-cell>
              </md-table-row>
            </md-table>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>TẦNG 2</legend>
        <div class='floor-main__items'>
          <div>
            <h4>Phòng 201</h4>
            <md-table v-model="room_201" md-card>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell style="background-color:#7dffa6" md-label="Thiết bị" md-sort-by="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Trạng thái" md-sort-by="status" :style="{color:item.status==='Tắt'?'red':'blue'}">{{ item.status }}</md-table-cell>
                <md-table-cell md-label="Bật" md-sort-by="on">{{ item.on }}</md-table-cell>
                <md-table-cell md-label="Tắt" md-sort-by="off">{{ item.off }}</md-table-cell>
              </md-table-row>
            </md-table>
          </div>
          
          <div>
            <h4>Phòng 202</h4>
            <md-table v-model="room_202" md-card>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell style="background-color:#7dffa6" md-label="Thiết bị" md-sort-by="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Trạng thái" md-sort-by="status" :style="{color:item.status==='Tắt'?'red':'blue'}">{{ item.status }}</md-table-cell>
                <md-table-cell md-label="Bật" md-sort-by="on">{{ item.on }}</md-table-cell>
                <md-table-cell md-label="Tắt" md-sort-by="off">{{ item.off }}</md-table-cell>
              </md-table-row>
            </md-table>
          </div>
        </div>
      </fieldset>
    </div>

    <div class="floor-sub">
      <fieldset>
        <legend>TẦNG 3 </legend>
        <div class='floor-main__items'>
          <div>
            <h4>Phòng VIP 1</h4>
            <md-table v-model="room_301" md-card>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell style="background-color:#7dffa6" md-label="Thiết bị" md-sort-by="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Trạng thái" md-sort-by="status" :style="{color:item.status==='Tắt'?'red':'blue'}">{{ item.status }}</md-table-cell>
                <md-table-cell md-label="Bật" md-sort-by="on">{{ item.on }}</md-table-cell>
                <md-table-cell md-label="Tắt" md-sort-by="off">{{ item.off }}</md-table-cell>
              </md-table-row>
            </md-table>
          </div>
          
          <div>
            <h4>Phòng VIP 2</h4>
            <md-table v-model="room_302" md-card>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell style="background-color:#7dffa6" md-label="Thiết bị" md-sort-by="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Trạng thái" md-sort-by="status" :style="{color:item.status==='Tắt'?'red':'blue'}">{{ item.status }}</md-table-cell>
                <md-table-cell md-label="Bật" md-sort-by="on">{{ item.on }}</md-table-cell>
                <md-table-cell md-label="Tắt" md-sort-by="off">{{ item.off }}</md-table-cell>
              </md-table-row>
            </md-table>
          </div>
          <div>
            <h4>Phòng VIP 3</h4>
            <md-table v-model="room_303" md-card>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell style="background-color:#7dffa6" md-label="Thiết bị" md-sort-by="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Trạng thái" md-sort-by="status" :style="{color:item.status==='Tắt'?'red':'blue'}">{{ item.status }}</md-table-cell>
                <md-table-cell md-label="Bật" md-sort-by="on">{{ item.on }}</md-table-cell>
                <md-table-cell md-label="Tắt" md-sort-by="off">{{ item.off }}</md-table-cell>
              </md-table-row>
            </md-table>
          </div>
          
          <div>
            <h4>Phòng VIP 4</h4>
            <md-table v-model="room_304" md-card>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell style="background-color:#7dffa6" md-label="Thiết bị" md-sort-by="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Trạng thái" md-sort-by="status" :style="{color:item.status==='Tắt'?'red':'blue'}">{{ item.status }}</md-table-cell>
                <md-table-cell md-label="Bật" md-sort-by="on">{{ item.on }}</md-table-cell>
                <md-table-cell md-label="Tắt" md-sort-by="off">{{ item.off }}</md-table-cell>
              </md-table-row>
            </md-table>
          </div>
        </div>
      </fieldset>
    </div>
    <div class='floor-info'>
      <fieldset class='errors'>
        <legend style="width:320px">THÔNG BÁO LỖI TRUYỀN THÔNG</legend>
        <md-table v-model="errors" md-card>
          <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell></md-table-cell>
            <md-table-cell md-label="Thông báo" md-sort-by="message">{{ item.message }}</md-table-cell>
            <md-table-cell md-label="Thời điểm" md-sort-by="off">{{ item.time }}</md-table-cell>
          </md-table-row>
        </md-table>
      </fieldset>
      <fieldset class='operation'>
        <legend style="width:400px">THÔNG BÁO HOẠT ĐỘNG CỦA PHẦN MỀM</legend>
          <md-table v-model="operations" md-card>
            <md-table-row slot="md-table-row" slot-scope="{ item }">
              <md-table-cell></md-table-cell>
              <md-table-cell md-label="Thông báo" md-sort-by="message">{{ item.action }}</md-table-cell>
              <md-table-cell md-label="Thời điểm" md-sort-by="off">{{ item.time }}</md-table-cell>
            </md-table-row>
          </md-table>
      </fieldset>
      <div class='time-info'>
        <fieldset>
          <legend style="width:230px">THỜI GIAN HOẠT ĐỘNG</legend>
          <h1 class="text-content">{{time_use}}</h1>
        </fieldset>
        <div class="text-content">{{time_current}}</div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  created() {
    let startTime = new Date().getTime()
    this.timer = setInterval(()=>{
      let now = new Date(),
          year = ''+ now.getFullYear(),
          month = (''+(now.getMonth()+1)).padStart(2,'0'),
          day = (''+now.getDate()).padStart(2,'0'),
          hour = (''+now.getHours()).padStart(2,'0'),
          min = (''+now.getMinutes()).padStart(2,'0'),
          second = (''+now.getSeconds()).padStart(2,'0');
      this.time_current = [day,month,year].join('/')+' '+ [hour,min,second].join(':')
      this.time_use = new Date(now.getTime()-startTime).toISOString().substr(11,8)
    },1000)
  },
  beforeDestroy(){
    clearInterval(this.timer)
  },
  data(){
    return{
      time_use:'null',
      time_current:'null',
      timer:null,
      room_101:[
        {
          name:'Bồn sục 1',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Bồn sục 2',
          status:'Tắt',
          on:0,
          off:0
        },
        {
          name:'Bồn sục 3',
          status:'Bật',
          on:2,
          off:1
        },
        {
          name:'Bồn sục 4',
          status:'Tắt',
          on:0,
          off:0
        },
        {
          name:'Xông hơi khô 1',
          status:'Bật',
          on:1,
          off:1
        },
        {
          name:'Xông hơi ướt 1',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Đèn dược liệu 1',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Đèn massage 1',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'',
          status:'',
          on:null,
          off:null
        },
      ],
      
      room_102:[
        {
          name:'Bồn sục 5',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Bồn sục 6',
          status:'Tắt',
          on:0,
          off:0
        },
        {
          name:'Bồn sục 7',
          status:'Tắt',
          on:2,
          off:1
        },
        {
          name:'Xông hơi khô 2',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Xông hơi ướt 2',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Đèn dược liệu 2',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Đèn massage 2',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'',
          status:'',
          on:null,
          off:null
        },
        {
          name:'',
          status:'',
          on:null,
          off:null
        },
      ],
      room_201:[
        {
          name:'Bồn sục 8',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Bồn sục 9',
          status:'Tắt',
          on:0,
          off:0
        },
        {
          name:'Bồn sục 10',
          status:'Tắt',
          on:2,
          off:1
        },
        {
          name:'Bồn sục 11',
          status:'Tắt',
          on:2,
          off:1
        },
        {
          name:'Xông hơi khô 3',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Xông hơi ướt 3',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Xông đá muối 1',
          status:'Tắt',
          on:0,
          off:0
        },
        {
          name:'Đèn dược liệu 3',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Đèn massage 3',
          status:'Tắt',
          on:1,
          off:1
        },
       
      ],
      room_202:[
        {
          name:'Bồn sục12',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Bồn sục 13',
          status:'Tắt',
          on:0,
          off:0
        },
        {
          name:'Bồn sục 14',
          status:'Tắt',
          on:2,
          off:1
        },
        {
          name:'Bồn sục 15',
          status:'Tắt',
          on:2,
          off:1
        },
        {
          name:'Xông hơi khô 4',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Xông hơi ướt 4',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Xông đá muối 2',
          status:'Tắt',
          on:0,
          off:0
        },
        {
          name:'Đèn dược liệu 4',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Đèn massage 4',
          status:'Tắt',
          on:1,
          off:1
        },
       
      ],
      room_301:[
        {
          name:'Bồn sục 16',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Bồn sục 17',
          status:'Tắt',
          on:0,
          off:0
        },
        {
          name:'Xông hơi khô 5',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Xông hơi ướt 5',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Xông đá muối 3',
          status:'Tắt',
          on:0,
          off:0
        },    
        {
          name:'Đèn VIP 1',
          status:'Tắt',
          on:0,
          off:0
        },   
      ],
      room_302:[
        {
          name:'Bồn sục 18',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Bồn sục 19',
          status:'Tắt',
          on:0,
          off:0
        },
        {
          name:'Xông hơi khô 6',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Xông hơi ướt 6',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Xông đá muối 4',
          status:'Tắt',
          on:0,
          off:0
        },    
        {
          name:'Đèn VIP 2',
          status:'Tắt',
          on:0,
          off:0
        },   
      ],
      room_303:[
        {
          name:'Bồn sục 20',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Bồn sục 21',
          status:'Tắt',
          on:0,
          off:0
        },
        {
          name:'Xông hơi khô 7',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Xông hơi ướt 7',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Xông đá muối 5',
          status:'Tắt',
          on:0,
          off:0
        },    
        {
          name:'Đèn VIP 3',
          status:'Tắt',
          on:0,
          off:0
        },   
      ],
      room_304:[
        {
          name:'Bồn sục 22',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Bồn sục 23',
          status:'Tắt',
          on:0,
          off:0
        },
        {
          name:'Xông hơi khô 8',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Xông hơi ướt 8',
          status:'Tắt',
          on:1,
          off:1
        },
        {
          name:'Xông đá muối 6',
          status:'Tắt',
          on:0,
          off:0
        },    
        {
          name:'Đèn VIP 4',
          status:'Tắt',
          on:0,
          off:0
        },   
      ],
      errors:[
        {
          message:'Kết nối bình thường với tủ điều khiển PLC!',
          time:'04/03/2022 14:00:45'
        },
        {
          message:'Kết nối bình thường với tủ điều khiển PLC!',
          time:'04/03/2022 14:00:45'
        },
        {
          message:'Kết nối bình thường với tủ điều khiển PLC!',
          time:'04/03/2022 14:00:45'
        },
        {
          message:'Kết nối bình thường với tủ điều khiển PLC!',
          time:'04/03/2022 14:00:45'
        },
        {
          message:'Kết nối bình thường với tủ điều khiển PLC!',
          time:'04/03/2022 14:00:45'
        },
        {
          message:'Kết nối bình thường với tủ điều khiển PLC!',
          time:'04/03/2022 14:00:45'
        },
        {
          message:'Kết nối bình thường với tủ điều khiển PLC!',
          time:'04/03/2022 14:00:45'
        },
      ],
      operations:[
        {
          action:'Mở phần mềm!',
          time:'04/03/2022 12:12:34'
        },
        {
          action:'Mở phần mềm!',
          time:'04/03/2022 12:12:34'
        },
        {
          action:'Tắt phần mềm!',
          time:'04/03/2022 12:12:34'
        },
        {
          action:'Mở phần mềm!',
          time:'04/03/2022 12:12:34'
        },
        {
          action:'Mở phần mềm!',
          time:'04/03/2022 12:12:34'
        },
        {
          action:'Tắt phần mềm!',
          time:'04/03/2022 12:12:34'
        },
      ]
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
  .operation{
    width: 35%;
    .md-table-head{
      background-color: #ecff3e;
      text-align: center;
    }
  }
  .time-info{
    width: 20%;
    height: 190px;
    display: flex;
    flex-direction: column;
    justify-content:space-between ;
    align-items: center;
    fieldset{
      width: 100%;
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
</style>
