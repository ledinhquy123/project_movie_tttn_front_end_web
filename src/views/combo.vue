<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <!-- .container_main_corn_coke dùng để chia bố cục -->
    <div class="container_main_corn_coke">
      <!-- Combo -->
      <div>
        <p class="p_title">Combo</p>
      </div>
      <!-- div này dùng để bọ và chia các item -->
      <div v-if="combos" class="ctai_main_corn_coke">
        <!-- Item sản phẩm -->
        <div v-for="combo in combos" :key="combo.id" class="ctai_corn_coke_item">
          <div class="corn_coke_item">
            <div class="corn_coke_item_img">
              <div>
                <!-- Bỏ link ảnh sản phẩm -->
                <img :src="combo.image_path">
              </div>
                <!-- Tên sản phẩm -->
              <span>{{ combo.name }}</span>
            </div>

            <div class="corn_coke_item_btn">
              <div>
                <!-- Thêm giá tiền -->
                <p class="price_item">{{ combo.price }}.000vnđ</p>
              </div>
              <div class="ctai_btnQLi">
                <button class="btn_minus" @click="onRemove(combo.id)">-</button>
                <p class="showQli">{{ statusCombos.get(combo.id) }}</p>
                <button class="btn_plus" @click="onAdd(combo.id)">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="ctai_main_corn_coke">
        <p style="color: #fff; font-weight: bold; text-align: center;"> Hiện tại chưa có combos được bán </p>
      </div>

      <div class="ctai_btn_continue">
        <!-- Bỏ link liên kết đến trang thanh toán -->
        <button class="btn_continue" @click="onContinue" >Tiếp tục</button>
      </div>
    </div>
  </main>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { useCombo } from '@/composables/useCombo'
import { reactive, ref } from 'vue';

export default {
  setup() {
    const route = useRoute();
    const querys = route.query;
    const showtime = JSON.parse(querys.showtime);
    const selectedSeat = JSON.parse(querys.selectedSeat);
    const { fetchCombos } = useCombo();
    const combos = ref(null);
    const statusCombos = reactive(new Map());
    const router = useRouter();

    async function fetchDataCombos() {
      combos.value = await fetchCombos();

      for(let i = 0; i < combos.value.length; i++){
        statusCombos.set(combos.value[i].id, 0);
      }
    }
    fetchDataCombos();

    function onAdd(idCombo) {
      statusCombos.set(idCombo, statusCombos.get(idCombo) + 1);
    }

    function onRemove(idCombo) {
      if(statusCombos.get(idCombo) != 0) statusCombos.set(idCombo, statusCombos.get(idCombo) - 1);
    }

    function onContinue() {
      let combosName = '';
      let comboQuantity = 0;
      statusCombos.forEach((value, key) => {
        if(value != 0) {
          comboQuantity += value;
          combosName += `(${combos.value.filter(item => {
            return item.id == key
          })[0].name})x${value}, `;
        } 
      })
      if(combosName != '') combosName.slice(0, -2);
      else combosName = 'Không có combos';

      router.push({ name: 'Bill', query: { showtime: JSON.stringify(showtime), selectedSeat: JSON.stringify(selectedSeat), combosName: JSON.stringify(combosName), comboQuantity: JSON.stringify(comboQuantity) } })
    }

    return { combos,showtime, selectedSeat, onAdd, onRemove, statusCombos, onContinue }
  }
}
</script>

<style scoped>
.container_main_corn_coke{
  padding: 2vw;
  background: linear-gradient( to bottom, rgba(201, 64, 68, 0.8), rgba(59, 63, 74, 1));
  display: flex;
  flex-direction: column;
  width: 90%;
  border-radius: 20px;
  margin: 20px auto;
}
.ctai_main_corn_coke{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.ctai_corn_coke_item{
  width: calc(100%/3);
  margin-bottom: 2vw;
}
.corn_coke_item{
  width: 70%;
  margin: 0 auto;
  border: 2px solid #ffffff;
  border-radius: 5px;
}
.corn_coke_item_img{
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: var(--font);
  font-weight: 450;
  font-size: 16px;
  color: white;
}
.corn_coke_item_img > div > img {
  width: 100%;
  max-width: 140px;
  margin-top: 1vw;
}
.corn_coke_item_img span{
  margin: 1vw 0;
}

.corn_coke_item_btn{
  display: flex;
  padding: 3vw 0;
  align-items: center;
  text-align: center;
  border-top: 2px solid #ffffff;
  border-style: dashed;
  border-left: none;
  border-right: none;
  border-bottom: none;
}
.corn_coke_item_btn div{
  width: calc(100%/2);
}
.ctai_btnQLi{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.showQli,
.price_item{
  display: inline-block;
  margin: 0;
  font-family: var(--font);
  font-size: 16px;
  font-weight: 550;
  color: white;
}
.btn_minus,
.btn_plus{
  width: 32px;
  height: 32px;
  font-family: var(--font);
  font-size: 16px;
  font-weight: 500;
  color: var(--text-color);
  background: #f2f2f2;
  border: none;
  border-radius: 50%;
}

.ctai_btn_continue{
  position: relative;
  height: 50px;
}
.btn_continue{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate( -50%, -50%);
  width: 20%;
  padding: 10px 12px;
  background: rgb(201, 64, 68);
  border-radius: 30px 0 30px 0;
  font-family: var(--font);
  font-size: 18px;
  font-weight: 500;
  color: white;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s;
}
.btn_continue:hover{
  opacity: 0.7;
  cursor: pointer;
}
/* Reponsive */
@media only screen and (max-width: 576px) {
  .ctai_corn_coke_item{
    width: calc(100%/2);
    margin-bottom: 12px;
  }
  .corn_coke_item{
    width: 90%;
  }
  .corn_coke_item_btn{
    display: flex;
    flex-direction: column;
  }
  .corn_coke_item_btn div{
    width: 100%;
  }
  .ctai_btnQLi{
    justify-content: center;
  }
  .showQli{
    margin: 0 10px;
  }
  .btn_continue{
    width: 50%;
  }
}
</style>