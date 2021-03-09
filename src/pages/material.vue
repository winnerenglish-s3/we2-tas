<template>
  <q-page>
    <!-- vocab -->
    <vocab v-if="$route.params.type == '1'" :type="1" />
    <!-- grammar -->
    <grammar v-if="$route.params.type == '2'" :type="2" />
    <!-- reading -->
    <reading v-if="$route.params.type == '3'" :type="4" />
    <!-- writing -->
    <writing v-if="$route.params.type == '4'" :type="5" />
    <!-- phonics -->
    <phonics v-if="$route.params.type == '5'" :type="6" />
    <!-- languagetips -->
    <languagetips v-if="$route.params.type == '6'" :type="6" />
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
  },
  setup() {
    const type = ref(1);
    const isDelete = ref(false);
    function statusDelete() {}
    onMounted(() => {
      console.log(routes);
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