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
    <div v-else class="q-py-md text-center z16">Beginning Sounds b, c, d</div>
    <!-- เนื้อหา -->
    <div align="center" :class="screen > 1024 ? 'q-pa-md' : ''">
      <div class="text-left" style="max-width: 500px; width: 100%">
        <div class="z16 row justify-between">
          <div>เสียงคำขึ้นต้น b #1</div>
          <div>(1/1)</div>
        </div>
        <div class="q-py-sm">
          <q-img
            style="max-width: 500px; width: 100%; height: 250px"
            src="https://placeimg.com/500/300/nature"
          />
        </div>
      </div>
      <!-- <q-separator style="max-width: 600px" class="q-my-md" color="grey-2" /> -->
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      screen: screen.width,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>