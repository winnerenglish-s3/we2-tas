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
        <div class="f16-m">Kitty the cat</div>
      </div>
      <div class="q-py-md">
        <q-img
          style="max-width: 335px; width: 100%; height: 130px"
          src="https://placeimg.com/500/300/nature"
        />
      </div>
      <div>
        <div style="max-width: 500px; width: 100%" class="q-px-lg text-left">
          This is Kitty. Kitty is a cat. It is white. It is on a mat. The mat is
          black. Kitty likes the black mat.
        </div>
        <q-separator style="max-width: 600px" class="q-my-md" color="grey-2" />
        <div class="f16 q-pb-sm">แมวคิตตี้</div>
        <div style="max-width: 500px; width: 100%" class="q-px-lg text-left">
          นี่คือคิตตี้ คิตตี้เป็นแมวตัวหนึ่ง มันเป็นสีขาว มันอยู่บนเสื่อผืนหนึ่ง
          เสื่อนั้นเป็นสีดำ คิตตี้ชอบเสื่อสีดำผืนนั้น
        </div>
      </div>
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