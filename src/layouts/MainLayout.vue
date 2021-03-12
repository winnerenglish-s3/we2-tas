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
          @click="closebreakpoint = false"
        />
        <q-toolbar-title>
          <div v-if="$route.name == 'contact'" class="f20-pc">ติดต่อทีมงาน</div>
          <div
            v-if="$route.name == 'material'"
            :class="screen > 1024 ? 'f20-pc' : 'f16 q-pb-xs'"
          >
            <span v-if="$route.params.type == '1'">คำศัพท์</span>
            <span v-if="$route.params.type == '2'">ไวยกรณ์</span>
            <span v-if="$route.params.type == '3'">การอ่าน</span>
            <span v-if="$route.params.type == '4'">การเขียน</span>
            <span v-if="$route.params.type == '5'">การออกเสียง</span>
            <span v-if="$route.params.type == '6'">เคล็ดลับภาษา</span>
            <span v-if="$route.params.type == '7'">การพูดและฟัง</span>
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
          <div class="f16" v-if="screen < 1200 && !drawer">
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
                <span class="f16">{{ menuItem.name }}</span>
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
                :header-class="isCheckTab == index ? 'mintbg' : ''"
                group="somegroup"
                :default-opened="index == 0"
                class="f16"
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
                      @click="gotoWorksheet(1, skill[index])"
                      ><span
                        :style="
                          $route.params.type == '1' ? 'color:#209F85;' : ''
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
                      @click="gotoWorksheet(6, skill[index])"
                      ><span
                        :style="
                          $route.params.type == '6' ? 'color:#209F85;' : ''
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
                      @click="gotoWorksheet(7, skill[index])"
                      ><span
                        :style="
                          $route.params.type == '7' ? 'color:#209F85;' : ''
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
                      @click="gotoWorksheet(2, skill[index])"
                      ><span
                        :style="
                          $route.params.type == '2' ? 'color:#209F85' : ''
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
                      @click="gotoWorksheet(3, skill[index])"
                      ><span
                        :style="
                          $route.params.type == '3' ? 'color:#209F85' : ''
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
                      @click="gotoWorksheet(4, skill[index])"
                      ><span
                        :style="
                          $route.params.type == '4' ? 'color:#209F85' : ''
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
                      @click="gotoWorksheet(5, skill[index])"
                      ><span
                        :style="
                          $route.params.type == '5' ? 'color:#209F85' : ''
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
    type: 1,
    name: "คำศัพท์",
    title: "Animals",
    separator: true,
    size: "22px",
    iconright: "fas fa-chevron-right",
  },
  {
    type: 2,
    name: "ไวยากรณ์",
    title: "Nouns",
    separator: true,
    size: "22px",
    iconright: "fas fa-chevron-right",
  },

  {
    type: 3,
    name: "การอ่าน",
    title: "Kitty the cat",
    separator: true,
    size: "22px",
    iconright: "fas fa-chevron-right",
  },

  {
    type: 4,
    name: "การเขียน",
    title: "My Pets",
    separator: true,
    size: "22px",
    iconright: "fas fa-chevron-right",
  },
  {
    type: 5,
    name: "การออกเสียง",
    title: "Beginning Sounds b, c, d",
    separator: true,
    size: "22px",
    iconright: "fas fa-chevron-right",
  },
  {
    type: 6,
    name: "เคล็ดลับภาษา",
    title: "Language Tips",
    separator: true,
    size: "22px",
    iconright: "fas fa-chevron-right",
  },
  {
    type: 7,
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
        isCheckTab.value = false;
        val == 1 ? this.$router.push("/main") : "";
        val == 2 ? this.$router.push("/lesson") : "";
        val == 3 ? this.$router.push("/student") : "";
        val == 4 ? this.$router.push("/exam") : "";
        val == 5
          ? this.$router.push({
              name: "material",
              params: {
                type: 1,
              },
            })
          : "";
        val == 6
          ? this.$router.push({
              name: "worksheet",
              params: {
                type: 1,
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
            type: val,
            skill: skill,
          },
        });
      },
      isCheck(val, skill) {
        if (this.$route.name == "worksheet") {
          let tempe = "";
          if (skill == "grammar") {
            tempe = 6;
          } else if (skill == "listening") {
            tempe = 5;
          } else {
            tempe = 1;
          }
          this.$router.push({
            name: "worksheet",
            params: {
              skill: skill,
              type: tempe,
            },
          });
        }
        isCheckTab.value = val;
      },
    };
  },
});
</script>
