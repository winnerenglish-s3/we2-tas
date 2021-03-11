<template>
  <q-page>
    <worksheet-contents
      v-if="
        $route.params.type == '1' ||
        $route.params.type == '5' ||
        $route.params.type == '6' ||
        $route.params.type == '7'
      "
    />
    <worksheet-handwritings v-if="$route.params.type == '2'" />
    <worksheet-spelling-practices v-if="$route.params.type == '3'" />
    <worksheet-answers-practices v-if="$route.params.type == '4'" />
  </q-page>
</template>

<script>
import { ref, onMounted } from "vue";
import worksheetContents from "../components/worksheetContents.vue";
import worksheetHandwritings from "../components/worksheetHandwritings.vue";
import worksheetSpellingPractices from "../components/worksheetSpellingPractices.vue";
import worksheetAnswersPractices from "../components/worksheetAnswersPractices.vue";
export default {
  components: {
    worksheetContents,
    worksheetHandwritings,
    worksheetSpellingPractices,
    worksheetAnswersPractices,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>