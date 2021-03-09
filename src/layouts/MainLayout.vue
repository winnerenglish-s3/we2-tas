<template>
  <q-layout view="lHh Lpr lff">
    <q-header class="greenbg">
      <q-toolbar>
        <q-btn
          v-if="screen >= 1200 || drawer"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-btn
          v-if="screen < 1200 && !drawer"
          flat
          dense
          round
          icon="fas fa-arrow-left"
          aria-label="Menu"
          @click="closebreakpoint = false"
        />
        <q-toolbar-title>
          <span v-if="$route.name == 'contact'" class="z14"
            >ติดต่อทีมงาน</span
          ></q-toolbar-title
        >

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
            <q-btn dense round flat icon="fas fa-sign-out-alt"> </q-btn>
          </div>
          <div v-if="screen < 1200 && !drawer">
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
      v-if="$route.name == 'material'"
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
          <div class="q-pa-md row">
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
          <template v-for="(menuItem, index) in menuInside">
            <q-item
              @click="gotoMaterial(menuItem.type)"
              :class="menuItem.position"
              clickable
              v-ripple
            >
              <q-item-section>
                <span class="z16">{{ menuItem.name }}</span>
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
        </q-scroll-area>
      </q-drawer>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
    <q-page-container v-if="$route.name != 'material'">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

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
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const drawer = ref(false);
    const closebreakpoint = ref(false);
    const level = ref(levelOptions[0]);
    const unit = ref(unitOptions[0]);
    return {
      level,
      levelOptions,
      unit,
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
        val == 6 ? this.$router.push("/worksheet") : "";
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
    };
  },
});
</script>
