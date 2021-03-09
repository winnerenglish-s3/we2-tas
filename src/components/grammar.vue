<template>
  <div>
    <div class="mintbg row" style="height: 50px">
      <span class="col row items-center">
        <span>
          <q-radio color="teal-4" v-model="dataAll" val="all" label="ทั้งหมด"
        /></span>
        <span>
          <q-radio
            color="teal-4"
            v-model="dataAll"
            val="new"
            label="เนื้อหาใหม่ (NEW)"
        /></span>
      </span>
      <div class="row items-center justify-end q-px-md">
        <q-btn round flat class="greencl" icon="fas fa-ellipsis-v" />
      </div>
    </div>
    <!-- เนื้อหา -->
    <div align="center" class="q-pa-md">
      <div class="text-left" style="max-width: 500px; width: 100%">
        <div class="z16">หน้าปก</div>
        <span
          class="z9 q-px-sm text-white"
          style="border-radius: 10px; background: #43a047; padding-bottom: 2px"
          >NEW</span
        >
      </div>
      <div class="q-py-sm">
        <q-img
          style="max-width: 500px; width: 100%; height: 250px"
          src="https://placeimg.com/500/300/nature"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const dataAll = ref("all");

    return {
      dataAll,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>