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
              <div class="col">
                บทที่ 1 |
                <span v-if="$route.params.skill == 'vocab'">คำศัพท์</span>
                <span v-else-if="$route.params.skill == 'grammar'"
                  >ไวยากรณ์</span
                >
                <span v-else>การอ่าน</span>
              </div>
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
          <div
            v-else-if="$route.params.skill == 'reading'"
            class="q-pa-sm q-pt-md col-12"
          >
            <div align="center">
              <div :class="screen > 1024 ? '' : 'f8-m'">
                <div class="f20-pc q-py-md">Jack and the Magic Beans</div>

                <div
                  :class="screen > 1024 ? '' : 'f8-m'"
                  style="margin-left: 42px"
                  class="text-left"
                >
                  <div>
                    Once upon a time there was a boy called Jack. He lived with
                    his mother. They were very poor. When he was not working, he
                    liked to play the flute.
                  </div>
                  <br />
                  <div>
                    One day his mother told Jack to sell the cow at the market.
                    On the way to the market, Jack sold the cow to an old man.
                    The old man did not give him any money but gave him five
                    magic beans.
                  </div>
                  <br />
                  <div>
                    Jack went home and planted the beans in the garden. The
                    beans were magic and grew high up to the sky.
                  </div>
                  <br />
                  <div>
                    Jack climbed up the top of the beanstalk, and saw a giant in
                    a house. The giant looked sad. He said, "It's too quiet
                    here. There is no music in this house". Jack took out his
                    flute and played a beautiful tune. The giant smiled and
                    thanked Jack. Then the giant asked Jack to have lunch with
                    him. After lunch, the giant gave Jack a sack full of gold
                    coins. Jack said goodbye to the giant and climbed down the
                    beanstalk. Jack ran to his mother and gave the coins to her.
                    And so, Jack and his mother lived happily ever after.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="$route.params.skill == 'reading'"
      :class="screen > 1024 ? 'q-px-md q-pb-md' : 'q-pt-md'"
    >
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
              <div class="col">บทที่ 1 | การอ่าน</div>
              <div>ป.3 | ระดับ 2</div>
            </div>
            <q-separator color="black" class="q-my-sm" />
          </div>
          <div class="q-pa-sm q-pt-md col-12">
            <div align="center">
              <div :class="screen > 1024 ? '' : 'f8-m'">
                <div class="f20-pc q-pb-md">คำศัพท์เสริม</div>

                <div class="row">
                  <div class="col-4" v-for="(row, index) in dataList">
                    <div>
                      <div class="brx">{{ row.vocab }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="$route.params.skill == 'reading'"
      :class="screen > 1024 ? 'q-px-md q-pb-md' : 'q-pt-md'"
    >
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
              <div class="col">บทที่ 1 | การอ่าน</div>
              <div>ป.3 | ระดับ 2</div>
            </div>
            <q-separator color="black" class="q-my-sm" />
          </div>
          <div class="q-pa-sm q-pt-md col-12">
            <div align="center">
              <div :class="screen > 1024 ? '' : 'f8-m'">
                <div class="f20-pc q-py-md">แจ็คกับถั่ววิเศษ</div>

                <div
                  :class="screen > 1024 ? '' : 'f8-m'"
                  style="margin-left: 42px"
                  class="text-left"
                >
                  <div>
                    กาลครั้งหนึ่งมีเด็กชายคนหนึ่งชื่อ
                    แจ็คเขาอาศัยอยู่กับแม่ของเขา พวกเขาจนมาก เวลาที่เขาไม่ได้
                    ทำงานเขาจะชอบเล่นขลุ่ย
                  </div>
                  <br />
                  <div>
                    วันหนึ่งแม่ของเขาบอกให้แจ็คไปขายวัวที่ตลาด ระหว่างทางไปตลาด
                    แจ็คขายวัวให้แก่ชายชราคนหนึ่ง ชายชราคนนั้นไม่ได้ให้เงินแจ็ค
                    แต่ให้แจ็คเมล็ดถั่ววิเศษ 5 เมล็ด
                  </div>
                  <br />
                  <div>
                    แจ็คก็กลับบ้านและปลูกถั่วในสวน
                    ถั่วเหล่านั้นเป็นถั่ววิเศษจึงเจริญเติบโตสูงขึ้นไปยังท้องฟ้า
                  </div>
                  <br />
                  <div>
                    แจ็คปีนขึ้นไปถึงยอดต้นถั่ว
                    และเห็นยักษ์ตัวหนึ่งอยู่ในบ้านหลังหนึ่ง ยักษ์ตัวนั้นดูเศร้า
                    เขาพูดว่า "ที่นี่มันเงียบเกินไป ไม่มีเสียงดนตรีในบ้านเลย"
                    แจ็คเอาขลุ่ยของเขาออกมาและเล่นทำนองที่ไพเราะ
                    เจ้ายักษ์ตนนั้นก็ยิ้มและขอบคุณแจ็ค
                    แล้วยักษ์ก็ขอให้แจ็คทานอาหารกลางวันกับเขา หลังอาหารกลางวัน
                    ยักษ์ก็ให้แจ็คถุงใบหนึ่งเต็มไปด้วยเหรียญทองคำ
                    แจ็คกล่าวลายักษ์และปีนลงจากต้นถั่วแจ็ควิ่งไปหาแม่
                    ของเขาและให้เหรียญทองคำแก่เธอ
                    และดังนั้นแจ็คและแม่ของเขาก็อยู่อย่างมีความสุขจากนั้นตลอดไป
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