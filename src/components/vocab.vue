<template>
  <div :style="screen >= 1200 ? '' : 'min-width: 320px'">
    <div
      :class="screen > 1024 ? 'justify-end q-px-md' : 'justify-center'"
      class="mintbg row items-cente row items-center"
      style="height: 50px"
    >
      <div v-if="screen <= 1024">Animals</div>
      <q-btn
        round
        icon="fas fa-ellipsis-v"
        v-if="screen > 1024"
        flat
        class="greencl"
      >
        <q-menu>
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label
                  ><q-icon name="fas fa-print" class="q-py-sm q-pr-sm" />
                  ตัวอย่างการพิมพ์</q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
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
      screen: screen.width,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>