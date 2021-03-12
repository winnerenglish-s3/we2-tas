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

          <div
            v-if="$route.params.skill == 'vocab'"
            class="q-pa-sm q-pt-md col-12"
          >
            <div align="center">
              <div :class="screen > 1024 ? 'f18-pc' : 'f14-m'" class="q-pb-md">
                Animals
              </div>
              <div style="width: 100%" class="box">
                <table
                  :class="screen > 1024 ? 'f16-pc' : 'f8-m'"
                  style="border-top-left-radius: 10px"
                >
                  <thead style="border-radius: 10px">
                    <tr style="border-bottom: 1px solid black">
                      <td class="mintbg" style="border-top-left-radius: 10px">
                        คำศัพท์
                      </td>
                      <td class="mintbg">คำอ่าน</td>
                      <td class="mintbg">คำแปล</td>
                      <td class="mintbg" style="border-top-right-radius: 10px">
                        การออกเสียง
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      style="height: 95px"
                      :style="
                        dataList.length != index + 1
                          ? 'border-bottom: 1px solid black'
                          : ''
                      "
                      v-for="(row, index) in dataList"
                    >
                      <td>{{ row.vocab }}</td>
                      <td>
                        {{ row.reading }}
                      </td>
                      <td>
                        {{ row.meaning }}
                      </td>
                      <td>
                        <div style="width: 100%">
                          <img
                            :style="
                              screen > 1024
                                ? 'max-width:77px;width:100%'
                                : 'max-width: 44px;'
                            "
                            src="../../public/qr-code.png"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div :class="screen > 1024 ? '' : 'f8-m'" class="q-my-md">
                **สแกนคิวอาร์โค้ดเพื่อฟังการออกเสียง**
              </div>
            </div>
          </div>
          <div
            v-else-if="$route.params.skill == 'grammar'"
            class="q-pa-sm q-pt-md col-12"
          >
            <div align="center">
              <div class="q-pb-md f18-pc">Nouns</div>
              <div class="text-left" style="max-width: 500px; width: 80%">
                <div class="row justify-between">
                  <div>หน้าปก (NEW)</div>
                  <div>(1/2)</div>
                </div>
              </div>

              <div class="q-py-sm">
                <q-img
                  style="max-width: 500px; width: 80%; height: 250px"
                  src="https://placeimg.com/500/300/nature"
                />
              </div>
              <q-separator
                style="max-width: 600px"
                class="q-my-md"
                color="grey-2"
              />
              <div class="text-left" style="max-width: 500px; width: 80%">
                <div class="row justify-between">
                  <div>Noun หรือ คำนาม (เรียกแทนคน)</div>
                  <div>(2/2)</div>
                </div>
              </div>
              <div class="q-py-sm">
                <q-img
                  style="max-width: 500px; width: 80%; height: 250px"
                  src="https://placeimg.com/500/300/nature"
                />
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
        vocab: "remote control",
        partOfSpeech: "(n.)",
        reading: "ริ-โมท-คัน-โทรล",
        meaning: "เครื่องควบคุมระยะไกล",
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