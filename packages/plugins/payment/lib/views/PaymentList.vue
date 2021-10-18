<template>
  <el-table :data="transactions" style="width: 100%">
    <el-table-column prop="state" label="State" width="180" />
    <el-table-column prop="value" label="Date" width="180" />
    <el-table-column prop="type" label="Type" width="180" />
    <el-table-column prop="paymentMethod" label="Payment Method" />
  </el-table>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    return { transactions: store.state.payment.transactions };
  },
};
</script>
