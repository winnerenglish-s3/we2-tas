<template>
  <div :style="screen >= 1200 ? '' : 'min-width: 320px'">
    <div
      v-if="screen <= 1024"
      class="mintbg row row items-center justify-center"
      style="height: 50px"
    >
      <div class="z16">Nouns</div>
    </div>
    <div
      :class="screen > 1024 ? 'mintbg ' : ''"
      class="row"
      style="height: 50px"
    >
      <div class="col z16 row items-center">
        <span class="q-px-xs">
          <q-radio color="teal-4" v-model="dataAll" val="all" label="ทั้งหมด"
        /></span>
        <span class="q-px-xs">
          <q-radio
            color="teal-4"
            v-model="dataAll"
            val="new"
            label="เนื้อหาใหม่ (NEW)"
        /></span>
      </div>
      <div class="row items-center justify-end q-px-md">
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
    </div>

    <!-- เนื้อหา -->
    <div align="center" :class="screen > 1024 ? 'q-pa-md' : ''">
      <q-separator
        v-if="screen <= 1024"
        style="max-width: 600px"
        :style="screen > 1024 ? '' : 'height:4px'"
        color="grey-2"
      />
      <div
        v-if="dataAll == 'new' || dataAll == 'all'"
        :class="screen > 1024 ? 'z16' : 'q-pa-md'"
        class="text-left"
        style="max-width: 500px; width: 100%"
      >
        <div class="row justify-between">
          <div>หน้าปก</div>
          <div>(1/2)</div>
        </div>
        <span
          class="z9 q-px-sm text-white"
          style="border-radius: 10px; background: #43a047; padding-bottom: 2px"
          >NEW</span
        >
      </div>

      <div v-if="dataAll == 'new' || dataAll == 'all'" class="q-py-sm">
        <q-img
          style="max-width: 500px; width: 100%; height: 250px"
          src="https://placeimg.com/500/300/nature"
        />
      </div>
      <q-separator
        style="max-width: 600px"
        :style="screen > 1024 ? '' : 'height:4px'"
        class="q-my-md"
        color="grey-2"
      />
      <div
        v-if="dataAll == 'all'"
        :class="screen > 1024 ? 'z16' : 'q-px-md'"
        class="text-left"
        style="max-width: 500px; width: 100%"
      >
        <div class="row justify-between">
          <div>Noun หรือ คำนาม (เรียกแทนคน)</div>
          <div>(2/2)</div>
        </div>
      </div>
      <div v-if="dataAll == 'all'" class="q-py-sm">
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
      screen: screen.width,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>