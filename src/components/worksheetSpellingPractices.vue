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
          <div class="col q-px-sm">
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

          <div
            v-if="$route.params.skill == 'vocab'"
            class="q-pa-sm q-pt-md col-12"
          >
            <div :class="screen > 1024 ? '' : 'z8'" style="margin-left: 42px">
              <div>
                Arrange given alphabets to form the correct translation.
              </div>
              <div>เรียงตัวอักษรภาษาอังกฤษให้เป็นคำแปลที่ถูกต้อง</div>
              {{ dataList }}
              <div v-for="(item, index) in dataList" :key="item.id">
                <div class="q-py-sm">
                  <div>{{ index + 1 }}. {{ item.name }}</div>

                  <div class="row">
                    {{ item.word.split("").push(item.data) }}
                    <div
                      style="
                        border-radius: 8px;
                        border: 1px solid black;
                        background: #d2d2d2;
                      "
                      class="row q-ma-xs"
                      v-for="x in item"
                    >
                      <div class="q-pb-xs q-px-md z24">{{ x }}</div>
                    </div>
                  </div>
                  <div
                    class="q-pt-sm"
                    style="white-space: nowrap; overflow: hidden"
                  >
                    <u class="q-pr-sm">ตอบ</u>
                    ______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          <div class="col q-px-sm">
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

          <div
            v-if="$route.params.skill == 'vocab'"
            class="q-pa-sm q-pt-md col-12"
          >
            <div :class="screen > 1024 ? '' : 'z8'" style="margin-left: 42px">
              <div>
                Arrange given alphabets to form the correct translation.
              </div>
              <div>เรียงตัวอักษรภาษาอังกฤษให้เป็นคำแปลที่ถูกต้อง</div>
              <div v-for="(item, index) in dataList" :key="item.id">
                <div class="q-py-sm">
                  <div>{{ index + 1 }}. {{ item.name }}</div>

                  <div class="row">
                    <div
                      style="
                        border-radius: 8px;
                        border: 1px solid black;
                        background: #d2d2d2;
                      "
                      class="row q-ma-xs"
                      v-for="x in item.word"
                    >
                      <div class="q-pb-xs q-px-md z24">{{ x }}</div>
                    </div>
                  </div>
                  <div
                    class="q-pt-sm"
                    style="white-space: nowrap; overflow: hidden"
                  >
                    <u class="q-pr-sm">ตอบ</u>
                    ______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
                  </div>
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
        name: "ซอสมะเขือเทศ",
        word: "kcuethp",
      },
      {
        name: "ซอสมะเขือเทศ",
        word: "kcuethp",
      },
      {
        name: "ขนมแพนเค้ก",
        word: "apaknec",
      },
      {
        name: "ขนมแพนเค้ก",
        word: "apaknec",
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