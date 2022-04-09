<template>
<div style="width:70%;margin:0px auto">
    <h2>TRA CỨU HOẠT ĐỘNG THIẾT BỊ</h2>
    <div class=" floor-info history-container">
        <fieldset class='search-group' style="width:220%">
            <legend style="width:260px">CHỌN KHOẢNG THỜI GIAN</legend>
            <div>
                <span style="margin-right:15px;font-weight:bolder">Bắt đầu</span>
                <input type="date">
            </div>
            <div>
                <span style="margin-right:15px;font-weight:bolder">Kết thúc</span>
                <input type="date">
            </div>
            <md-button class="md-raised md-primary cus-button">Tra cứu thông tin</md-button>
            <md-button class="md-raised md-accent cus-button">Xuất ra Excel</md-button>
        </fieldset>
        <fieldset >
            <legend style="width:125px">TRẠNG THÁI</legend>
            <input type="radio" id="status"  value="status" v-model="selected_status">
            <label for="status" style="margin-right:20px">Bật/Tắt</label>
            <input type="radio" id="connect"  value="connect" v-model="selected_status" >
            <label for="connect" >Kết nối</label><br>
            <input type="radio" id="all" value="all" v-model="selected_status">
            <label for="all">Tất cả</label>
        </fieldset>
        <fieldset >
            <legend style="width:90px">THIẾT BỊ</legend>
            <input type="radio" id="all_" value="all_" v-model="selected_mode">
            <label for="all_">Tất cả</label><br>
            <input type="radio" id="custom"  value="custom" v-model="selected_mode" >
            <label for="custom" >Tùy chọn</label>

        </fieldset>
    </div>
    <div style="margin-left:5px;font-weight:bold;font-size:1.2rem;margin-bottom:10px;color:yellow">LỰA CHỌN THIẾT BỊ</div>
    <div class='floor-main'>
      <fieldset>
        <legend>TẦNG 1</legend>
        <div class='floor-main__items'>
          <div>
            <h4>Phòng 101</h4>
            <md-table v-model="room_101" md-card>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell  md-label="Tên thiết bị">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Chọn"><input type="checkbox" :value="item.name" v-model="listSelected"></md-table-cell>
              </md-table-row>
            </md-table>
          </div>

          <div>
            <h4>Phòng 102</h4>
            <md-table v-model="room_102" md-card>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell  md-label="Tên thiết bị">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Chọn"><input type="checkbox" :value="item.name" v-model="listSelected"></md-table-cell>
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
                <md-table-cell  md-label="Tên thiết bị">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Chọn"><input type="checkbox" :value="item.name" v-model="listSelected"></md-table-cell>
              </md-table-row>
            </md-table>
          </div>
          
          <div>
            <h4>Phòng 202</h4>
            <md-table v-model="room_202" md-card>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell  md-label="Tên thiết bị">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Chọn"><input type="checkbox" :value="item.name" v-model="listSelected"></md-table-cell>
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
                <md-table-cell  md-label="Tên thiết bị">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Chọn"><input type="checkbox" :value="item.name" v-model="listSelected"></md-table-cell>
              </md-table-row>
            </md-table>
          </div>
          
          <div>
            <h4>Phòng VIP 2</h4>
            <md-table v-model="room_302" md-card>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell  md-label="Tên thiết bị">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Chọn"><input type="checkbox" :value="item.name" v-model="listSelected"></md-table-cell>
              </md-table-row>
            </md-table>
          </div>
          <div>
            <h4>Phòng VIP 3</h4>
            <md-table v-model="room_303" md-card>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell  md-label="Tên thiết bị">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Chọn"><input type="checkbox" :value="item.name" v-model="listSelected"></md-table-cell>
              </md-table-row>
            </md-table>
          </div>
          
          <div>
            <h4>Phòng VIP 4</h4>
            <md-table v-model="room_304" md-card>
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell  md-label="Tên thiết bị">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="Chọn"><input type="checkbox" :value="item.name" v-model="listSelected"></md-table-cell>
              </md-table-row>
            </md-table>
          </div>
        </div>
      </fieldset>
    </div>
    <div style="height:20px">

    </div>
    <!-- <md-table v-model="list" md-card style="margin:5px">
        <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell  md-label="STT" >{{ item.id }}</md-table-cell>
            <md-table-cell md-label="Thông báo" >{{ item.info }}</md-table-cell>
            <md-table-cell md-label="Thời điểm">{{ item.time }}</md-table-cell>
            <md-table-cell md-label="Thời lượng" >{{ item.duration }}</md-table-cell>
        </md-table-row>
    </md-table> -->
</div>

</template>
<script>
export default {
    name:'DeviceHistory',
    data(){
        return{
            list:[
                {
                    id:'',
                    info:'',
                    time:'',
                    duration:''
                }
            ],
            selected_status:'',
            selected_mode:'',
            listSelected:[],
            room_101:[
                {
                    name:'Bồn sục 1',
                },
                {
                    name:'Bồn sục 2',
                },
                {
                    name:'Bồn sục 3',
                },
                {
                    name:'Bồn sục 4',
                },
                {
                    name:'Xông hơi khô 1',
                },
                {
                    name:'Xông hơi ướt 1',
                },
                {
                    name:'Đèn dược liệu 1',
                },
                {
                    name:'Đèn massage 1',
                },
            ],
            
            room_102:[
                {
                    name:'Bồn sục 5',
                },
                {
                    name:'Bồn sục 6',
                },
                {
                    name:'Bồn sục 7',
                },
                {
                    name:'Xông hơi khô 2',
                },
                {
                    name:'Xông hơi ướt 2',
                },
                {
                    name:'Đèn dược liệu 2',
                },
                {
                    name:'Đèn massage 2',
                },
            ],
            room_201:[
                {
                    name:'Bồn sục 8',
                },
                {
                    name:'Bồn sục 9',
                },
                {
                    name:'Bồn sục 10',
                },
                {
                    name:'Bồn sục 11',
                },
                {
                    name:'Xông hơi khô 3',
                },
                {
                    name:'Xông hơi ướt 3',
                },
                {
                    name:'Xông đá muối 1',
                },
                {
                    name:'Đèn dược liệu 3',
                },
                {
                    name:'Đèn massage 3',
                },
            
            ],
            room_202:[
                {
                    name:'Bồn sục12',
                },
                {
                    name:'Bồn sục 13',
                },
                {
                    name:'Bồn sục 14',
                },
                {
                    name:'Bồn sục 15',
                },
                {
                    name:'Xông hơi khô 4',
                },
                {
                    name:'Xông hơi ướt 4',
                },
                {
                    name:'Xông đá muối 2',
                },
                {
                    name:'Đèn dược liệu 4',
                },
                {
                    name:'Đèn massage 4',
                },
            
            ],
            room_301:[
                {
                    name:'Bồn sục 16',
                },
                {
                    name:'Bồn sục 17',
                },
                {
                    name:'Xông hơi khô 5',
                },
                {
                    name:'Xông hơi ướt 5',
                },
                {
                    name:'Xông đá muối 3',
                },    
                {
                    name:'Đèn VIP 1',
                },   
            ],
            room_302:[
                {
                    name:'Bồn sục 18',
                },
                {
                    name:'Bồn sục 19',
                },
                {
                    name:'Xông hơi khô 6',
                },
                {
                    name:'Xông hơi ướt 6',
                },
                {
                    name:'Xông đá muối 4',
                },    
                {
                    name:'Đèn VIP 2',
                },   
            ],
            room_303:[
                {
                    name:'Bồn sục 20',
                },
                {
                    name:'Bồn sục 21',
                },
                {
                    name:'Xông hơi khô 7',
                },
                {
                    name:'Xông hơi ướt 7',
                },
                {
                    name:'Xông đá muối 5',
                },    
                {
ame:'Đèn VIP 3',
                },   
            ],
            room_304:[
                {
                    name:'Bồn sục 22',
                },
                {
                    name:'Bồn sục 23',
                },
                {
                    name:'Xông hơi khô 8',
                },
                {
                    name:'Xông hơi ướt 8',
                },
                {
                    name:'Xông đá muối 6',
                },    
                {
                    name:'Đèn VIP 4',
                },   
            ],

        }
    }

}
</script>