<template>
  <div :style="screen >= 1200 ? 'min-width: 640px' : 'min-width: 320px'">
    <div
      v-if="screen > 1024"
      class="row items-cente row items-center justify-end q-px-md"
      style="height: 50px"
    >
      <q-btn round icon="fas fa-ellipsis-v" flat class="greencl">
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
    <div :class="screen > 1024 ? 'q-px-md q-pb-md' : 'q-pt-md'">
      <div
        :class="screen > 1024 ? 'q-pa-md shadow-5' : 'q-px-sm'"
        style="border-radius: 10px"
      >
        <div class="row">
          <div class="row items-center" style="width: 40px">
            <img
              style="max-width: 40px"
              src="../../public/logo-worksheet.png"
            />
          </div>
          <div class="col q-px-sm" :class="screen > 1024 ? '' : 'f8-m'">
            <div class="row">
              <div class="col">บทที่ 1 | คำศัพท์</div>
              <div>ป.3 | ระดับ 2</div>
            </div>
            <q-separator color="black" class="q-my-sm" />
            <div>
              <div class="row">
                <div>ชื่อ</div>
                <!-- <span v-for="item in screen">
                  <span class="row">.</span>
                </span> -->
                <div
                  class="col q-mx-xs"
                  style="white-space: nowrap; overflow: hidden"
                >
                  ..........................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
                </div>
                <div>ชั้น .................. เลขที่...........</div>
              </div>
            </div>
          </div>

          <div class="q-pa-sm q-pt-md col-12">
            <div :class="screen > 1024 ? '' : 'f8-m'" style="margin-left: 42px">
              คำสั่ง ให้นักเรียนเขียนทับคำศัทพ์ทีล่ะคำ
            </div>
            <div align="center">
              <span
                class="q-pb-md"
                :style="screen > 1024 ? 'font-size: 36px' : 'font-size: 20px'"
                >Animals</span
              >
              <span style="font-size: 24px"> (สัตว์)</span>
            </div>
            <div>
              <div class="row">
                <div class="col-3"></div>
                <div
                  :class="screen > 1024 ? 'f18 q-pt-md' : 'f10-m q-pt-xs'"
                  class="col row text-center"
                >
                  <div class="col text-right">bear</div>
                  <div class="col">แบร์</div>
                  <div class="col text-left">หมี</div>
                </div>
              </div>
              <div class="row">
                <div class="text-center col-3">
                  <img
                    style="max-width: 120px; width: 100%"
                    src="../../public/qr-code.png"
                  />
                  <div :class="screen > 1024 ? 'f10-pc' : 'f8-m'">
                    สแกนเพื่อฟังการออกเสียง
                  </div>
                </div>
                <div class="col row text-center" style="width: 100%">
                  <div class="col-12"></div>
                  <div class="col-12"></div>
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
import { ref, onMounted } from "vue";
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
        vocab: "animal",
        partOfSpeech: "(n.)",
        reading: "แอน-นิ-เมิล",
        meaning: "สัตว์",
      },
      {
        vocab: "animal",
        partOfSpeech: "(n.)",
        reading: "แอน-นิ-เมิล",
        meaning: "สัตว์",
      },
      {
        vocab: "animal",
        partOfSpeech: "(n.)",
        reading: "แอน-นิ-เมิล",
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
.box {
  border-radius: 10px;
  border: 1px solid black;
}
table {
  border-radius: 10px;
  border-collapse: collapse;
  width: 100%;
}

td {
  border-right: 1px solid black;
  text-align: center;
  padding: 8px;
}

table td:last-child {
  border-right: none;
}
table th:last-child {
  border-right: none;
}
</style>