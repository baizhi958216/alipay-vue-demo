<template>
  <div>
    <div>买点什么好呢(・∀・(・∀・(・∀・*)？</div>
    <br>
    <div>名字: <br/><input type="text" v-model="productName" /></div>
    <div>价格: <br/>￥<input type="number" v-model="productValue" /></div>
    <br>
    <button @click="pay">付款</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const productName = ref("");
const productValue = ref("");
const pay = () => {
  fetch(
    `http://localhost:3000/alipay/pay?product_name=${productName.value}&product_value=${productValue.value}`
  ).then((res) => {
    window.open(res.url)
  });
};
</script>

<style scoped></style>
