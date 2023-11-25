<template>
  <div class="p-6 flex flex-col gap-2">
    <div>买点什么好呢(・∀・(・∀・(・∀・*)？</div>
    <div class="flex gap-3 items-center">
      <div><input class="outline-none p-3 rounded" placeholder="商品名" type="text" v-model="productName" />
      </div>
      <div>￥<input class="outline-none p-3 rounded" placeholder="商品价格" type="number" v-model="productValue" />
      </div>
    </div>
    <button
      class="w-[120px] bg-blue-400 outline-none border-none rounded p-2 cursor-pointer text-white hover:bg-blue-300 transition"
      @click="pay">付款</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const productName = ref("");
const productValue = ref("");
const pay = () => {
  if (!productName.value && !productValue.value) {
    return
  }
  fetch(
    `${import.meta.env.VITE_BACKEND_URL}/alipay/pay?product_name=${productName.value}&product_value=${productValue.value}`
  ).then((res) => {
    window.open(res.url, "_self")
  });
};
</script>

<style scoped></style>
