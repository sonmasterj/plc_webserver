<template>
<div>
    <h2>SƠ ĐỒ BỐ TRÍ MẶT BẰNG</h2>
    <div class='image-container'>
      <select v-model="image_index">
        <option value='1'>Mặt bằng tầng 1</option>
        <option value='2'>Mặt bằng tầng 2</option>
        <option value='3'>Mặt bằng tầng 3</option>
      </select>
      <img v-if='image_index==="1"' :src="require('../../assets/image/tang1.png')" alt="photo">
      <img v-else-if='image_index==="2"' :src="require('../../assets/image/tang2.png')" alt="photo">
      <img v-else :src="require('../../assets/image/tang3.png')" alt="photo">
      
    </div>
    <div style="height:20px;background-color:white">

    </div>
</div>
</template>
<script>
export default{
  name:'Map',
  data(){
    return{
      image_index:'1',
    }
  }
}
</script>
