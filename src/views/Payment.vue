<template>
  <div>
    <div @click="getResult">订单号：{{ query.trade_no }}</div>
    <div>支付结果: {{ payresult }}</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
const router = useRouter();
const query = ref(router.currentRoute.value.query);
const payresult = ref("查询中");
const getResult = async () => {
  const { result } = await fetch(
    `http://localhost:3000/alipay/result?trade_no=${query.value.trade_no}&out_trade_no=${query.value.out_trade_no}`
  ).then((res) => res.json());
  payresult.value = result === "10000" ? "成功" : "失败";
};
onMounted(() => {
  getResult();
});
</script>

<style scoped></style>
