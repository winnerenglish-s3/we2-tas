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
            <div :class="screen > 1024 ? '' : 'f8-m'" style="margin-left: 42px">
              <div>Choose the best answer to fill in the blank.</div>
              <div>เลือกคำตอบที่เหมาะสมที่สุดเพือเติมลงในช่องว่าง</div>

              <div class="q-pt-md">
                <div v-for="(item, index) in dataList" :key="item.id">
                  <div class="q-py-sm">
                    <div>{{ index + 1 }}. {{ item.question }}</div>
                    <div style="width: 80%" class="row q-px-md">
                      <div
                        class="col-6 q-py-sm"
                        v-for="(x, index2) in item.choice"
                      >
                        <div>{{ index2 + 1 }} {{ x }}</div>
                      </div>
                    </div>
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
          <div class="col q-px-sm" :class="screen > 1024 ? '' : 'f8-m'">
            <div class="row">
              <div class="col">บทที่ 1 | คำศัพท์</div>
              <div>ป.3 | ระดับ 2</div>
            </div>
            <q-separator color="black" class="q-my-sm" />
            <div>
              <div class="row">
                <div>ชื่อ</div>
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
            <div :class="screen > 1024 ? '' : 'f8-m'" style="margin-left: 42px">
              <div align="center">
                <div>เฉลย</div>
                <div class="q-pt-md text-left">
                  <div v-for="(item, index) in dataList" :key="item.id">
                    <div class="q-py-sm">
                      <div v-for="(x, index2) in item.choice">
                        <div v-if="index2 == item.answer">
                          {{ index + 1 }}.
                          <span class="q-mx-sm q-px-sm q-pb-xs mintbg q-pr-md"
                            >{{ item.answer + 1 }}). {{ x }}</span
                          >
                        </div>
                      </div>
                      <div class="q-pt-sm" style="margin-left: 30px">
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
        question: "I bought some apples to make an ______.",
        choice: ["spaghetti", "apple pie", "pancake", "brownie"],
        answer: 1,
        sentenceEng: "I bought some apples to make an apple pie.",
        sentenceTh: "ฉันซื้อแอปเปิ้ลมาทำพายแอปเปิ้ล",
      },
      {
        question: "A is a soft cake made with nuts and chocolate.",
        choice: ["brownie", "meatball", "pancake", "pickle"],
        answer: 3,
        sentenceEng: "I bought some apples to make an apple pie.",
        sentenceTh: "ฉันซื้อแอปเปิ้ลมาทำพายแอปเปิ้ล",
      },
      {
        question: "animal",
        choice: ["pancake", "brownie", "cat", "ketchup"],
        answer: 2,
        sentenceEng: "I bought some apples to make an apple pie.",
        sentenceTh: "ฉันซื้อแอปเปิ้ลมาทำพายแอปเปิ้ล",
      },
      {
        question: "animal",
        choice: ["pig", "apple pie", "pickle", "brownie"],
        answer: 0,
        sentenceEng: "I bought some apples to make an apple pie.",
        sentenceTh: "ฉันซื้อแอปเปิ้ลมาทำพายแอปเปิ้ล",
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