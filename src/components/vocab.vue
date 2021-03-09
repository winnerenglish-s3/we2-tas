<template>
  <div>
    <div
      class="mintbg row items-center justify-end q-px-md"
      style="height: 50px"
    >
      <q-btn round flat class="greencl" icon="fas fa-ellipsis-v" />
    </div>
    <div v-for="item in dataList" :key="item.id">
      <div class="row">
        <div>
          <q-img
            style="width: 80px; height: 80px"
            src="https://placeimg.com/500/300/nature"
          />
        </div>
        <div class="q-px-md q-pt-sm col">
          <div>{{ item.vocab }} {{ item.partOfSpeech }}</div>
          <div>{{ item.reading }}</div>
          <div>{{ item.meaning }}</div>
        </div>
        <div class="q-pa-md">
          <q-btn round class="greenbg text-white" icon="fas fa-volume-up" />
        </div>
      </div>
      <q-separator color="grey-2" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const dataList = [
      {
        vocab: "animal",
        partOfSpeech: "(n.)",
        reading: "แอน-นิ-เมิล",
        meaning: "สัตว์",
      },
      {
        vocab: "bear",
        partOfSpeech: "(n.)",
        reading: "แบร์",
        meaning: "หมี",
      },
      {
        vocab: "cat",
        partOfSpeech: "(n.)",
        reading: "แค็ท",
        meaning: "สัตว์",
      },
    ];
    return {
      dataList,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>