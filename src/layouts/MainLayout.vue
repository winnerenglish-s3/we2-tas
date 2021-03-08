<template>
  <q-layout view="lHh Lpr lff">
    <q-header class="greenbg">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <span v-if="$route.name == 'contact'" class="z14"
            >ติดต่อทีมงาน</span
          ></q-toolbar-title
        >

        <div class="row">
          <div class="q-mx-xs">
            <q-btn dense round flat icon="fas fa-bell">
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
          <div class="q-mx-xs">
            <q-btn dense round flat icon="fas fa-sign-out-alt"> </q-btn>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-1">
      <q-list>
        <template v-for="(menuItem, index) in essentialLinks">
          <q-item :class="menuItem.position" clickable v-ripple>
            <q-item-section>
              <span>{{ menuItem.title }}</span>
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index" v-if="menuItem.separator" />
        </template>
      </q-list>
    </q-drawer>

    <q-page-container>
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

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      screen: screen.width,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
