<template>
  <q-layout view="lHh Lpr lff">
    <q-header class="greenbg">
      <q-toolbar>
        <q-btn
          v-if="
            screen >= 1200 ||
            drawer ||
            $route.name == 'main' ||
            $route.name == 'lesson' ||
            $route.name == 'student' ||
            $route.name == 'exam'
          "
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-btn
          v-if="
            screen < 1200 &&
            !drawer &&
            $route.name != 'main' &&
            $route.name != 'lesson' &&
            $route.name != 'student' &&
            $route.name != 'exam'
          "
          flat
          dense
          round
          icon="fas fa-arrow-left"
          aria-label="Menu"
          @click="backmenu()"
        />
        <q-toolbar-title>
          <div v-if="$route.name == 'contact'" class="f20-pc">ติดต่อทีมงาน</div>

          <div :class="screen > 1024 ? 'f20-pc' : 'f16-m q-pb-xs'">
            <span v-if="$route.name == 'worksheet' && screen > 1024"
              >ใบงาน</span
            >
            <span
              v-if="
                $route.name == 'worksheet' &&
                screen < 1024 &&
                $route.params.position == 'main'
              "
              >ใบงาน</span
            >
            <div v-if="$route.params.position == 'main'">
              <span v-if="$route.name == 'material'">เนื้อหา</span>
            </div>
            <div
              v-else
              v-if="
                $route.name == 'material' ||
                ($route.name == 'worksheet' && screen <= 1024)
              "
            >
              <span>
                <span
                  v-if="
                    $route.params.type == 'คำศัพท์' ||
                    $route.params.skill == 'vocab'
                  "
                  >คำศัพท์</span
                >
                <span
                  v-if="
                    $route.name == 'worksheet' && $route.params.skill == 'vocab'
                  "
                >
                  <span v-if="$route.params.tab == 'เนื้อหา'"> - เนื้อหา</span>
                  <span v-if="$route.params.tab == 'คัดลายมือ'">
                    - คัดลายมือ</span
                  >
                  <span v-if="$route.params.tab == 'แบบฝึกหัด สะกดคำ'">
                    - แบบฝึกหัด สะกดคำ</span
                  >
                  <span v-if="$route.params.tab == 'แบบฝึกหัด เลือกคำตอบ'">
                    - แบบฝึกหัด เลือกคำตอบ</span
                  ></span
                >
              </span>
              <span
                ><span
                  v-if="
                    $route.params.type == 'ไวยากรณ์' ||
                    $route.params.skill == 'grammar'
                  "
                  >ไวยากรณ์</span
                >
                <span
                  v-if="
                    $route.name == 'worksheet' &&
                    $route.params.skill == 'grammar'
                  "
                  ><span v-if="$route.params.tab == 'เนื้อหา 1'">
                    - เนื้อหา 1</span
                  >
                  <span v-if="$route.params.tab == 'เนื้อหา 2'">
                    - เนื้อหา 2</span
                  >
                  <span v-if="$route.params.tab == 'แบบฝึกหัด เลือกคำตอบ 1'">
                    - แบบฝึกหัด เลือกคำตอบ 1</span
                  >
                  <span v-if="$route.params.tab == 'แบบฝึกหัด เลือกคำตอบ 2'">
                    - แบบฝึกหัด เลือกคำตอบ 2</span
                  ></span
                >
              </span>
              <span
                ><span
                  v-if="
                    $route.params.type == 'การอ่าน' ||
                    $route.params.skill == 'reading'
                  "
                  >การอ่าน</span
                >
                <span
                  v-if="
                    $route.name == 'worksheet' &&
                    $route.params.skill == 'reading'
                  "
                  ><span v-if="$route.params.tab == 'เนื้อหา'"> - เนื้อหา</span>
                  <span v-if="$route.params.tab == 'แบบฝึกหัด เลือกคำตอบ'">
                    - แบบฝึกหัด เลือกคำตอบ</span
                  ></span
                >
              </span>
              <span
                ><span
                  v-if="
                    $route.params.type == 'การเขียน' ||
                    $route.params.skill == 'writing'
                  "
                  >การเขียน</span
                >
                <span
                  v-if="
                    $route.name == 'worksheet' &&
                    $route.params.skill == 'writing'
                  "
                >
                  <span v-if="$route.params.tab == 'เนื้อหา'"> - เนื้อหา</span>
                  <span v-if="$route.params.tab == 'แบบฝึกหัด เลือกคำตอบ'">
                    - แบบฝึกหัด เลือกคำตอบ</span
                  ></span
                >
              </span>
              <span>
                <span
                  v-if="
                    $route.params.type == 'การออกเสียง' ||
                    $route.params.skill == 'phonics'
                  "
                  >การออกเสียง</span
                >
                <span
                  v-if="
                    $route.name == 'worksheet' &&
                    $route.params.skill == 'phonics'
                  "
                >
                  <span v-if="$route.params.tab == 'เนื้อหา'"> - เนื้อหา</span>
                  <span v-if="$route.params.tab == 'แบบฝึกหัด เลือกคำตอบ'">
                    - แบบฝึกหัด เลือกคำตอบ</span
                  ></span
                >
              </span>
              <span>
                <span
                  v-if="
                    $route.params.type == 'เคล็ดลับภาษา' ||
                    $route.params.skill == 'languagetips'
                  "
                  >เคล็ดลับภาษา</span
                >
                <span
                  v-if="
                    $route.name == 'worksheet' &&
                    $route.params.skill == 'languagetips'
                  "
                  ><span v-if="$route.params.tab == 'เนื้อหา'"> - เนื้อหา</span>
                  <span v-if="$route.params.tab == 'แบบฝึกหัด เลือกคำตอบ'">
                    - แบบฝึกหัด เลือกคำตอบ</span
                  ></span
                >
              </span>
              <span>
                <span
                  v-if="
                    $route.params.type == 'การพูดและฟัง' ||
                    $route.params.skill == 'listening'
                  "
                  >การพูดและฟัง</span
                >
                <span
                  v-if="
                    $route.name == 'worksheet' &&
                    $route.params.skill == 'listening'
                  "
                >
                  <span v-if="$route.params.tab == 'แบบฝึกหัด แปลประโยค'">
                    - แบบฝึกหัด แปลประโยค</span
                  ></span
                >
              </span>
            </div>
          </div>
        </q-toolbar-title>

        <div class="row">
          <div class="q-mx-xs">
            <q-btn
              v-if="$route.name == 'contact'"
              dense
              round
              flat
              icon="fas fa-bell"
            >
              <q-badge
                class="q-mt-sm q-mr-xs"
                rounded
                style="width: 13px; height: 13px"
                color="red"
                floating
              >
              </q-badge>
            </q-btn>
          </div>
          <div v-if="screen >= 1200 || drawer" class="q-mx-xs">
            <q-btn
              @click="$router.push('/')"
              dense
              round
              flat
              icon="fas fa-sign-out-alt"
            >
            </q-btn>
          </div>
          <div
            class="f16-m"
            v-if="screen < 1200 && !drawer && $route.name == 'material'"
          >
            {{ level.label }} | {{ unit.label }}
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered class="bg-grey-1">
      <q-list>
        <template v-for="(menuItem, index) in essentialLinks">
          <q-item
            @click="goto(menuItem.type)"
            :class="menuItem.position"
            clickable
            v-ripple
          >
            <q-item-section>
              <span>{{ menuItem.title }}</span>
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index" v-if="menuItem.separator" />
        </template>
      </q-list>
    </q-drawer>
    <q-layout
      v-if="$route.name == 'material' || $route.name == 'worksheet'"
      view="hHh Lpr lff"
      container
      style="height: 100vh"
    >
      <q-header elevated>
        <q-toolbar> </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        bordered
        class="bg-white"
        :width="screen > 1024 ? 360 : screen"
        :breakpoint="closebreakpoint || screen > 1024 ? 1024 : ''"
      >
        <q-scroll-area class="fit">
          <div class="q-py-md q-px-sm row">
            <div class="q-px-sm col-6">
              <q-select
                style="border-radius: 8px"
                class="mintbg q-px-md"
                borderless
                v-model="level"
                :options="levelOptions"
              />
            </div>
            <div class="q-px-sm col-6">
              <q-select
                style="border-radius: 8px"
                class="mintbg q-px-md"
                borderless
                v-model="unit"
                :options="unitOptions"
              />
            </div>
          </div>
          <q-separator color="grey-2" />
          <!-- เนื้อหา -->
          <template
            v-if="$route.name == 'material'"
            v-for="(menuItem, index) in menuInside"
          >
            <q-item
              :class="isCheckTab == index || menuItem.position ? 'mintbg' : ''"
              @click="gotoMaterial(menuItem.type), isCheck(index)"
              clickable
              v-ripple
            >
              <q-item-section>
                <span class="f16-pc">{{ menuItem.name }}</span>
                <span style="color: #616161">{{ menuItem.title }}</span>
              </q-item-section>
              <q-item-section class="absolute-right">
                <q-icon
                  style="color: #bdbdbd"
                  size="20px"
                  class="q-px-md"
                  :name="menuItem.iconright"
                />
              </q-item-section>
            </q-item>
            <q-separator
              color="grey-2"
              :key="'sep' + index"
              v-if="menuItem.separator"
            />
          </template>
          <!-- ใบงาน -->
          <template v-else v-for="(menuItem, index) in menuInside">
            <q-list style="width: 100%">
              <q-expansion-item
                @click="isCheck(index, skill[index])"
                :header-class="
                  $route.params.skill == skill[index] ? 'mintbg' : ''
                "
                group="somegroup"
                class="f16-pc"
                expand-separator
                :label="menuItem.name"
                :caption="menuItem.title"
              >
                <q-separator
                  color="grey-2"
                  :key="'sep' + index"
                  v-if="menuItem.separator"
                />
                <div>
                  <div>
                    <q-btn
                      v-if="
                        skill[index] != 'listening' && skill[index] != 'grammar'
                      "
                      class="relative-position"
                      flat
                      style="width: 100%; height: 50px"
                      color="white"
                      text-color="black"
                      @click="gotoWorksheet('เนื้อหา', skill[index])"
                      ><span
                        :style="
                          $route.params.tab == 'เนื้อหา' ? 'color:#209F85;' : ''
                        "
                        style="margin-left: 25px"
                        class="absolute-left q-px-md row items-center"
                      >
                        <span>เนื้อหา</span>
                      </span></q-btn
                    >
                  </div>
                  <!-- grammar -->
                  <div>
                    <q-btn
                      v-if="
                        skill[index] != 'listening' && skill[index] == 'grammar'
                      "
                      class="relative-position"
                      flat
                      style="width: 100%; height: 50px"
                      color="white"
                      text-color="black"
                      @click="gotoWorksheet('เนื้อหา 1', skill[index])"
                      ><span
                        :style="
                          $route.params.tab == 'เนื้อหา 1'
                            ? 'color:#209F85;'
                            : ''
                        "
                        style="margin-left: 25px"
                        class="absolute-left q-px-md row items-center"
                      >
                        <span>เนื้อหา 1</span>
                      </span></q-btn
                    >
                  </div>
                  <div>
                    <q-btn
                      v-if="
                        skill[index] != 'listening' && skill[index] == 'grammar'
                      "
                      class="relative-position"
                      flat
                      style="width: 100%; height: 50px"
                      color="white"
                      text-color="black"
                      @click="gotoWorksheet('เนื้อหา 2', skill[index])"
                      ><span
                        :style="
                          $route.params.tab == 'เนื้อหา 2'
                            ? 'color:#209F85;'
                            : ''
                        "
                        style="margin-left: 25px"
                        class="absolute-left q-px-md row items-center"
                      >
                        <span>เนื้อหา 2</span>
                      </span></q-btn
                    >
                  </div>
                  <div>
                    <q-btn
                      v-if="
                        skill[index] != 'reading' &&
                        skill[index] != 'listening' &&
                        skill[index] != 'grammar' &&
                        skill[index] != 'writing' &&
                        skill[index] != 'phonics' &&
                        skill[index] != 'languagetips'
                      "
                      class="relative-position"
                      flat
                      style="width: 100%; height: 50px"
                      color="white"
                      text-color="black"
                      @click="gotoWorksheet('คัดลายมือ', skill[index])"
                      ><span
                        :style="
                          $route.params.tab == 'คัดลายมือ'
                            ? 'color:#209F85'
                            : ''
                        "
                        style="margin-left: 25px"
                        class="absolute-left q-px-md row items-center"
                        >คัดลายมือ</span
                      ></q-btn
                    >
                  </div>
                  <div>
                    <q-btn
                      v-if="
                        skill[index] != 'reading' &&
                        skill[index] != 'listening' &&
                        skill[index] != 'grammar' &&
                        skill[index] != 'writing' &&
                        skill[index] != 'phonics' &&
                        skill[index] != 'languagetips'
                      "
                      class="relative-position"
                      flat
                      style="width: 100%; height: 50px"
                      color="white"
                      text-color="black"
                      @click="gotoWorksheet('แบบฝึกหัด สะกดคำ', skill[index])"
                      ><span
                        :style="
                          $route.params.tab == 'แบบฝึกหัด สะกดคำ'
                            ? 'color:#209F85'
                            : ''
                        "
                        style="margin-left: 25px"
                        class="absolute-left q-px-md row items-center"
                        >แบบฝึกหัด สะกดคำ</span
                      ></q-btn
                    >
                  </div>
                  <div>
                    <q-btn
                      v-if="
                        skill[index] != 'listening' && skill[index] != 'grammar'
                      "
                      class="relative-position"
                      flat
                      style="width: 100%; height: 50px"
                      color="white"
                      text-color="black"
                      @click="
                        gotoWorksheet('แบบฝึกหัด เลือกคำตอบ', skill[index])
                      "
                      ><span
                        :style="
                          $route.params.tab == 'แบบฝึกหัด เลือกคำตอบ'
                            ? 'color:#209F85'
                            : ''
                        "
                        style="margin-left: 25px"
                        class="absolute-left q-px-md row items-center"
                        >แบบฝึกหัด เลือกคำตอบ</span
                      ></q-btn
                    >
                  </div>
                  <div>
                    <q-btn
                      v-if="skill[index] == 'listening'"
                      class="relative-position"
                      flat
                      style="width: 100%; height: 50px"
                      color="white"
                      text-color="black"
                      @click="
                        gotoWorksheet('แบบฝึกหัด แปลประโยค', skill[index])
                      "
                      ><span
                        :style="
                          $route.params.tab == 'แบบฝึกหัด แปลประโยค'
                            ? 'color:#209F85'
                            : ''
                        "
                        style="margin-left: 25px"
                        class="absolute-left q-px-md row items-center"
                        >แบบฝึกหัด แปลประโยค</span
                      ></q-btn
                    >
                  </div>
                </div>
              </q-expansion-item>
            </q-list>
            <q-separator
              color="grey-2"
              :key="'sep' + index"
              v-if="menuItem.separator"
            />
          </template>
        </q-scroll-area>
      </q-drawer>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
    <q-page-container
      v-if="$route.name != 'material' && $route.name != 'worksheet'"
    >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import readingVue from "src/components/reading.vue";

const linksList = [
  {
    type: 1,
    title: "ควบคุมการเรียน",
    separator: true,
    size: "22px",
  },
  {
    type: 2,
    title: "แผนการสอน",
    separator: true,
    size: "22px",
  },

  {
    type: 3,
    title: "รายชื่อนักเรียน",
    separator: true,
    size: "22px",
  },

  {
    type: 4,
    title: "ข้อสอบ",
    separator: true,
    size: "22px",
  },
  {
    type: 5,
    title: "เนื้อหา",
    separator: true,
    size: "22px",
  },
  {
    type: 6,
    title: "ใบงาน",
    separator: true,
    size: "22px",
  },
  {
    type: 7,
    title: "ติดต่อทีมงาน",
    separator: true,
    size: "22px",
  },
];

const dataList = [
  {
    type: "คำศัพท์",
    name: "คำศัพท์",
    title: "Animals",
    separator: true,
    size: "22px",
    iconright: "fas fa-chevron-right",
  },
  {
    type: "ไวยากรณ์",
    name: "ไวยากรณ์",
    title: "Nouns",
    separator: true,
    size: "22px",
    iconright: "fas fa-chevron-right",
  },

  {
    type: "การอ่าน",
    name: "การอ่าน",
    title: "Kitty the cat",
    separator: true,
    size: "22px",
    iconright: "fas fa-chevron-right",
  },

  {
    type: "การเขียน",
    name: "การเขียน",
    title: "My Pets",
    separator: true,
    size: "22px",
    iconright: "fas fa-chevron-right",
  },
  {
    type: "การออกเสียง",
    name: "การออกเสียง",
    title: "Beginning Sounds b, c, d",
    separator: true,
    size: "22px",
    iconright: "fas fa-chevron-right",
  },
  {
    type: "เคล็ดลับภาษา",
    name: "เคล็ดลับภาษา",
    title: "Language Tips",
    separator: true,
    size: "22px",
    iconright: "fas fa-chevron-right",
  },
  {
    type: "การพูดและฟัง",
    name: "การพูดและฟัง",
    title: "What Is This / That? It Is a ______.",
    separator: true,
    size: "22px",
    iconright: "fas fa-chevron-right",
  },
];
const levelOptions = [
  { label: "ป. 1", value: 1 },
  { label: "ป. 2", value: 2 },
  { label: "ป. 3", value: 3 },
];
const unitOptions = [
  { label: "บทที่ 1", value: 1 },
  { label: "บทที่ 2", value: 2 },
  { label: "บทที่ 3", value: 3 },
];

import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const isCheckTab = ref(0);
    const leftDrawerOpen = ref(false);
    const drawer = ref(false);
    const closebreakpoint = ref(false);
    const level = ref(levelOptions[0]);
    const unit = ref(unitOptions[0]);
    const skill = [
      "vocab",
      "grammar",
      "reading",
      "writing",
      "phonics",
      "languagetips",
      "listening",
    ];
    onMounted(() => {});
    return {
      isCheckTab,
      level,
      onMounted,
      levelOptions,
      unit,
      skill,
      unitOptions,
      closebreakpoint,
      //-------------------------
      screen: screen.availWidth,
      drawer,
      essentialLinks: linksList,
      menuInside: dataList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      goto(val) {
        isCheckTab.value = 0;
        val == 1 ? this.$router.push("/main") : "";
        val == 2 ? this.$router.push("/lesson") : "";
        val == 3 ? this.$router.push("/student") : "";
        val == 4 ? this.$router.push("/exam") : "";
        val == 5
          ? this.$router.push({
              name: "material",
              params: {
                position: "main",
              },
            })
          : "";
        val == 6
          ? this.$router.push({
              name: "worksheet",
              params: {
                skill: "vocab",
                position: "main",
              },
            })
          : "";
        val == 7 ? this.$router.push("/contact") : "";
      },
      gotoMaterial(val) {
        this.closebreakpoint = true;
        this.$router.push({
          name: "material",
          params: {
            type: val,
          },
        });
      },
      gotoWorksheet(val, skill) {
        this.closebreakpoint = true;
        this.$router.push({
          name: "worksheet",
          params: {
            position: "practice",
            skill: skill,
            tab: val,
          },
        });
      },
      isCheck(val, skill) {
        if (this.$route.name == "worksheet") {
          let tempe = "";
          if (skill == "grammar") {
            tempe = "เนื้อหา 1";
          } else if (skill == "listening") {
            tempe = "แบบฝึกหัด แปลประโยค";
          } else {
            tempe = "เนื้อหา";
          }
          this.$router.push({
            name: "worksheet",
            params: {
              skill: skill,
              position: "main",
              tab: tempe,
            },
          });
        }
        isCheckTab.value = val;
      },
      backmenu() {
        this.closebreakpoint = false;
        this.$route.params.position = "main";
      },
    };
  },
});
</script>
