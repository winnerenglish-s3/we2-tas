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
              <div class="col">บทที่ 1 | การเขียน</div>
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
          <div class="q-pa-sm q-pt-md col-12">
            <div :class="screen > 1024 ? '' : 'f8-m'" style="margin-left: 42px">
              <div>
                Translate each Thai sentence into English using the correct
                given words and punctuations.
                <q-icon class="q-pb-sm" name="fas fa-pen" />
              </div>
              <div>
                แปลประโยคภาษาไทยเป็นภาษาอังกฤษโดยเลือกใช้คำและเครื่องหมายวรรคตอนที่ถูกต้อง
              </div>

              <div class="q-pt-md">
                <div v-for="(item, index) in dataList" :key="item.id">
                  <div class="q-py-sm">
                    <div>{{ index + 1 }}. {{ item.sentenceTh }}</div>
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
              <div class="col">บทที่ 1 | การเขียน</div>
              <div>ป.3 | ระดับ 2</div>
            </div>
            <q-separator color="black" class="q-my-xs" />
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

          <div class="q-pa-sm q-pt-md col-12">
            <div :class="screen > 1024 ? '' : 'f8-m'" style="margin-left: 42px">
              <div align="center">
                <div>เฉลย</div>
                <div class="q-pt-md text-left">
                  <div v-for="(item, index) in dataList" :key="item.id">
                    <div class="q-py-sm">
                      <div class="q-pt-sm">
                        <div>{{ index + 1 }}. {{ item.sentenceEng }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <q-separator color="black" class="q-my-sm" />
                <span class="f20-pc">A Delicious Supper</span>
                <div class="text-left">
                  Mum cooked a delicious supper for my family yesterday . We had
                  roast beef, baked potatoes and buttered peas . For dessert,
                  Mum made a chocolate pudding and an apple pie . I ate a slice
                  of apple pie with vanilla ice cream . The chocolate pudding
                  looked yummy so I ate a bowl of pudding too . I really love
                  Mum's cooking . I want my mum to cook for me forever .
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
        sentenceTh: "แม่ทำอาหารมื้อค่ำที่อร่อยสำหรับครอบครัวของฉันเมื่อวานนี้",
        sentenceEng: "Mum cooked a delicious supper for my family yesterday .",
      },
      {
        sentenceTh: "พวกเราทานเนื้ออบ มันฝรั่งอบ และถั่วลันเตาใส่เนย",
        sentenceEng: "I bought some apples to make an apple pie.",
      },
      {
        sentenceTh: "สำหรับของหวาน แม่ทำพุดดิ้งช็อกโกแลตและพายแอปเปิ้ล",
        sentenceEng: "I bought some apples to make an apple pie.",
      },
      {
        sentenceTh: "ฉันกินพายแอปเปิ้ลหนึ่งชิ้นกับไอศกรีมวนิลา",
        sentenceEng: "I bought some apples to make an apple pie.",
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