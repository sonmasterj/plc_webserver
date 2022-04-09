<template>
<div>
        <h2>THỐNG KÊ HOẠT ĐỘNG CỦA TRANG THIẾT BỊ</h2>
    <div class='floor-main'>
      <fieldset>
        <legend>TẦNG 1</legend>
        <div class='floor-main__items'>
          <div>
            <h4>Phòng 101</h4>
            <md-table v-model="room_101" md-card>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell style="background-color:#7dffa6" md-label="Thiết bị" md-sort-by="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Số lần bật" md-sort-by="on">{{ item.on }}</md-table-cell>
                <md-table-cell md-label="Số lần tắt" md-sort-by="off">{{ item.off }}</md-table-cell>
              </md-table-row>
            </md-table>
          </div>

          <div>
            <h4>Phòng 102</h4>
            <md-table v-model="room_102" md-card>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell style="background-color:#7dffa6" md-label="Thiết bị" md-sort-by="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Số lần bật" md-sort-by="on">{{ item.on }}</md-table-cell>
                <md-table-cell md-label="Số lần tắt" md-sort-by="off">{{ item.off }}</md-table-cell>
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
                <md-table-cell md-label="Số lần bật" md-sort-by="on">{{ item.on }}</md-table-cell>
                <md-table-cell md-label="Số lần tắt" md-sort-by="off">{{ item.off }}</md-table-cell>
              </md-table-row>
            </md-table>
          </div>
          
          <div>
            <h4>Phòng 202</h4>
            <md-table v-model="room_202" md-card>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell style="background-color:#7dffa6" md-label="Thiết bị" md-sort-by="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Số lần bật" md-sort-by="on">{{ item.on }}</md-table-cell>
                <md-table-cell md-label="Số lần tắt" md-sort-by="off">{{ item.off }}</md-table-cell>
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
                <md-table-cell md-label="Số lần bật" md-sort-by="on">{{ item.on }}</md-table-cell>
                <md-table-cell md-label="Số lần tắt" md-sort-by="off">{{ item.off }}</md-table-cell>
              </md-table-row>
            </md-table>
          </div>
          
          <div>
            <h4>Phòng VIP 2</h4>
            <md-table v-model="room_302" md-card>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell style="background-color:#7dffa6" md-label="Thiết bị" md-sort-by="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Số lần bật" md-sort-by="on">{{ item.on }}</md-table-cell>
                <md-table-cell md-label="Số lần tắt" md-sort-by="off">{{ item.off }}</md-table-cell>
              </md-table-row>
            </md-table>
          </div>
          <div>
            <h4>Phòng VIP 3</h4>
            <md-table v-model="room_303" md-card>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell style="background-color:#7dffa6" md-label="Thiết bị" md-sort-by="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Số lần bật" md-sort-by="on">{{ item.on }}</md-table-cell>
                <md-table-cell md-label="Số lần tắt" md-sort-by="off">{{ item.off }}</md-table-cell>
              </md-table-row>
            </md-table>
          </div>
          
          <div>
            <h4>Phòng VIP 4</h4>
            <md-table v-model="room_304" md-card>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell style="background-color:#7dffa6" md-label="Thiết bị" md-sort-by="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Số lần bật" md-sort-by="on">{{ item.on }}</md-table-cell>
                <md-table-cell md-label="Số lần tắt" md-sort-by="off">{{ item.off }}</md-table-cell>
              </md-table-row>
            </md-table>
          </div>
        </div>
      </fieldset>
    </div>
    <div class='floor-info'>
      <fieldset class='search'>
        <legend style="width:260px">CHỌN KHOẢNG THỜI GIAN</legend>
        <div>
          <div style="margin-bottom:30px">
            <span style="margin-right:15px;font-weight:bolder">Bắt đầu</span>
            <input type="date">
          </div>
          <div>
            <span style="margin-right:10px;font-weight:bolder">Kết thúc</span>
            <input type="date">
          </div>
        </div> 
        <div class='group-button'>
          <md-button class="md-raised md-accent cus-button" style="margin-bottom:30px">Thống kê hoạt động</md-button>
          <md-button class="md-raised md-accent cus-button">Xuất file Excel</md-button>
        </div>
        
      </fieldset>
      <fieldset class='operation'>
        <legend style="width:340px">BẢNG KẾ QUẢ-SỐ LẦN HOẠT ĐỘNG</legend>
          <md-table v-model="operationRes" md-card>
            <md-table-row slot="md-table-row" slot-scope="{ item }">
              <md-table-cell md-label='Loại thiết bị' style="background-color:yellow" >{{item.type}}</md-table-cell>
              <md-table-cell md-label="Tổng số lần bật" >{{ item.on }}</md-table-cell>
              <md-table-cell md-label="Tổng số lần tắt">{{ item.off }}</md-table-cell>
            </md-table-row>
          </md-table>
      </fieldset>
      <div class='time-info'>
        <fieldset>
          <legend style="width:170px">TỔNG THỜI GIAN</legend>
          <div style="font-weight:bold">Số ngày</div>
          <div class="text-content" style="margin-bottom:30px">00:00:00</div>
          <div style="font-weight:bold">Số giờ-phút-giây</div>
          <div class="text-content">00:00:00</div>
        </fieldset>
        
      </div>
    </div>
    <div style="height:20px">

    </div>
</div>
</template>
<script>

export default {
    name:'Operation',
//   created() {
//     let startTime = new Date().getTime()
//     this.timer = setInterval(()=>{
//       let now = new Date(),
//           year = ''+ now.getFullYear(),
//           month = (''+(now.getMonth()+1)).padStart(2,'0'),
//           day = (''+now.getDate()).padStart(2,'0'),
//           hour = (''+now.getHours()).padStart(2,'0'),
//           min = (''+now.getMinutes()).padStart(2,'0'),
//           second = (''+now.getSeconds()).padStart(2,'0');
//       this.time_current = [day,month,year].join('/')+' '+ [hour,min,second].join(':')
//       this.time_use = new Date(now.getTime()-startTime).toISOString().substr(11,8)
//     },1000)
//   },
//   beforeDestroy(){
//     clearInterval(this.timer)
//   },
  data(){
    return{
    //   image_index:'1',
    //   time_use:'null',
    //   time_current:'null',
    //   timer:null,
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
      operationRes:[
        {
          type:'Bồn sục',
          on:'0',
          off:'0'
        },
        {
          type:'Xông hơi khô',
          on:'0',
          off:'0'
        },
        {
          type:'Xông hơi ướt',
          on:'0',
          off:'0'
        },
        {
          type:'Xông đá muối',
          on:'0',
          off:'0'
        },
        {
          type:'Đèn chiếu sáng',
          on:'0',
          off:'0'
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