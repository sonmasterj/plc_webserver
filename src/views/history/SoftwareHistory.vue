<template>
<div style="width:70%;margin:0px auto">
    <h2>TRA CỨU HOẠT ĐỘNG PHẦN MỀM</h2>
    <div class="floor-sub">
        <fieldset class='search-group'>
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
    </div>
    <md-table v-model="list" md-card style="margin:5px">
        <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell  md-label="STT" >{{ item.id }}</md-table-cell>
            <md-table-cell md-label="Thông báo" >{{ item.info }}</md-table-cell>
            <md-table-cell md-label="Thời điểm">{{ item.time }}</md-table-cell>
            <md-table-cell md-label="Thời lượng" >{{ item.duration }}</md-table-cell>
        </md-table-row>
    </md-table>
</div>

</template>
<script>
export default {
    name:'SoftwareHistory',
    data(){
        return{
            list:[
                {
                    id:'',
                    info:'',
                    time:'',
                    duration:''
                }
            ]
        }
    }

}
</script>