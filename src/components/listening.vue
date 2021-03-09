<template>
  <div :style="screenWidth >= 1200 ? '' : 'min-width: 320px'">
    <div
      v-if="screenWidth > 1024"
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
    <div v-else class="q-py-md text-center">
      What Is This / That? It Is a ______.
    </div>
    <!-- เนื้อหา -->
    <div align="center" :class="screenWidth > 1024 ? 'q-px-md' : ''">
      <div style="max-width: 450px; width: 100%">
        <div>
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
          />
        </div>
        <div class="box text-left">
          <q-scroll-area
            :style="
              screenWidth > 1024
                ? 'height:' + (screen - 200) / 2 + 'px'
                : 'height:' + screen / 2 + 'px'
            "
          >
            <div v-for="(item, index) in data" :key="item.id">
              <div class="row q-pa-md">
                <div class="col-2">{{ item.user }}</div>
                <div class="q-px-md">
                  <div>{{ item.sentenceEng }}</div>
                  <div>{{ item.sentenceTh }}</div>
                </div>
              </div>
              <q-separator color="grey-2" />
            </div>
          </q-scroll-area>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const data = [
      {
        sentenceEng: "What is this?",
        sentenceTh: "นี้คืออะไรคะ",
        user: "Girl:",
      },
      {
        sentenceEng: "This is a cat.",
        sentenceTh: "นี้คือแมวจ้ะ",
        user: "Woman:",
      },
      {
        sentenceEng: "It is a white cat.",
        sentenceTh: "มันคือแมวสีขาว",
        user: "Woman:",
      },
      {
        sentenceEng: "What is that?",
        sentenceTh: "นั้นคืออะไรคะ",
        user: "Girl:",
      },
      {
        sentenceEng: "It is a white cat.",
        sentenceTh: "มันคือแมวสีขาว",
        user: "Woman:",
      },
      {
        sentenceEng: "It is a white cat.",
        sentenceTh: "มันคือแมวสีขาว",
        user: "Woman:",
      },
      {
        sentenceEng: "It is a white cat.",
        sentenceTh: "มันคือแมวสีขาว",
        user: "Woman:",
      },
      {
        sentenceEng: "It is a white cat.",
        sentenceTh: "มันคือแมวสีขาว",
        user: "Woman:",
      },
    ];
    return {
      data,
      screen: screen.height,
      screenWidth: screen.width,
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  border: 1px solid #e0e0e0;
}
</style>