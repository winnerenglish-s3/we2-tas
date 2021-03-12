<template>
  <q-page>
    <worksheet-contents
      v-if="
        $route.params.tab == 'เนื้อหา' ||
        $route.params.tab == 'แบบฝึกหัด แปลประโยค' ||
        $route.params.tab == 'เนื้อหา 1' ||
        $route.params.tab == 'เนื้อหา 2'
      "
    />
    <worksheet-handwritings v-if="$route.params.tab == 'คัดลายมือ'" />
    <worksheet-spelling-practices
      v-if="$route.params.tab == 'แบบฝึกหัด สะกดคำ'"
    />
    <worksheet-answers-practices
      v-if="$route.params.tab == 'แบบฝึกหัด เลือกคำตอบ'"
    />
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