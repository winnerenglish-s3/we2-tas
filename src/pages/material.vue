<template>
  <q-page>
    <!-- vocab -->
    <vocab v-if="$route.params.type == 'คำศัพท์'" :type="1" />
    <!-- grammar -->
    <grammar v-if="$route.params.type == 'ไวยากรณ์'" :type="2" />
    <!-- reading -->
    <reading v-if="$route.params.type == 'การอ่าน'" :type="4" />
    <!-- writing -->
    <writing v-if="$route.params.type == 'การเขียน'" :type="5" />
    <!-- phonics -->
    <phonics v-if="$route.params.type == 'การออกเสียง'" :type="6" />
    <!-- languagetips -->
    <languagetips v-if="$route.params.type == 'เคล็ดลับภาษา'" :type="6" />
    <!-- languagetips -->
    <listening v-if="$route.params.type == 'การพูดและฟัง'" :type="7" />
  </q-page>
</template>

<script>
import { ref, onMounted } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import vocab from "../components/vocab.vue";
import grammar from "../components/grammar.vue";
import reading from "../components/reading.vue";
import writing from "../components/writing.vue";
import phonics from "../components/phonics.vue";
import languagetips from "../components/languagetips.vue";
import listening from "../components/listening.vue";
const routes = [
  {
    path: "/material",
    name: "material",
    component: vocab,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default {
  components: {
    vocab,
    grammar,
    reading,
    writing,
    phonics,
    languagetips,
    listening,
  },
  setup() {
    const type = ref(1);
    const isDelete = ref(false);
    function statusDelete() {}
    onMounted(() => {
      // router.currentRoute = {
      //   name: "material",
      //   params: {
      //     type: "1",
      //   },
      // };
    });
    return {
      type,
      isDelete,
      statusDelete,
      onMounted,
      createRouter,
      router,
      routes,
      createWebHistory,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>