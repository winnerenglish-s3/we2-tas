<template>
  <div>
    <div
      class="mintbg row items-center justify-end q-px-md"
      style="height: 50px"
    >
      <q-btn round flat class="greencl" icon="fas fa-ellipsis-v" />
    </div>
    <!-- เนื้อหา -->
    <div align="center" class="q-pa-md">
      <div style="max-width: 500px; width: 100%">
        <div class="z16">Kitty the cat</div>
      </div>
      <div class="q-py-sm">
        <q-img
          style="max-width: 335px; width: 100%; height: 130px"
          src="https://placeimg.com/500/300/nature"
        />
      </div>
      <div style="max-width: 500px; width: 100%">
        <div class="q-px-lg text-left">
          This is Kitty. Kitty is a cat. It is white. It is on a mat. The mat is
          black. Kitty likes the black mat.
        </div>
        <q-separator class="q-my-md" color="grey-2" />
        <div class="z16">แมวคิตตี้</div>
        <div class="q-px-lg text-left">
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
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>