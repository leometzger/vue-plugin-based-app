<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :default-active="activeIndex"
    @select="handleSelect"
  >
    <template v-for="(option, index) of menuOptions" :key="index">
      <el-menu-item
        :index="index"
        @click="$router.push({ path: option.route })"
      >
        {{ option.title }}
      </el-menu-item>
    </template>
  </el-menu>
  <div class="content">
    <router-view />
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { ref } from "vue";

export default {
  setup() {
    const handleSelect = () => {};
    const activeIndex = ref("1");
    const store = useStore();

    return {
      handleSelect,
      activeIndex,
      menuOptions: store.state.layout.menuOptions,
    };
  },
};
</script>
