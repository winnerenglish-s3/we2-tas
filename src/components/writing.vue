<template>
  <div :style="screen >= 1200 ? '' : 'min-width: 320px'">
    <div
      v-if="screen > 1024"
      class="mintbg row items-center justify-end q-px-md"
      style="height: 50px"
    >
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
    <!-- เนื้อหา -->
    <div align="center" class="q-pa-md">
      <div style="max-width: 500px; width: 100%">
        <div class="z16">My Pets</div>
        <div class="text-left q-py-md">
          <div>
            Kitty and Spot are my pets. Kitty is a cat. Spot is a dog. Kitty and
            Spot are smart animals. Kitty and Spot are smart animals.
          </div>
          <div class="q-py-sm">
            <div class="q-py-sm" v-for="(item, index) in data" :key="item.id">
              <div class="row">
                <span> ประโยคที่ {{ index + 1 }} :</span>
                <div class="q-px-md">
                  <div>{{ item.sentenceEng }}</div>
                  <div>{{ item.sentenceTh }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const data = [
      {
        sentenceEng: "Kitty and Spot are my pets.",
        sentenceTh: "คิตตี้และสป๊อตเป็นสัตว์เลี้ยงของฉัน",
      },
      {
        sentenceEng: "Kitty is a cat.",
        sentenceTh: "คิตตี้เป็นแมว",
      },
      {
        sentenceEng: "Spot is a dog.",
        sentenceTh: "สป๊อตเป็นสุนัข",
      },
      {
        sentenceEng: "Kitty and Spot are smart animals.",
        sentenceTh: "คิตตี้และสป๊อตเป็นสัตว์ที่ฉลาด",
      },
    ];
    return {
      data,
      screen: screen.width,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>