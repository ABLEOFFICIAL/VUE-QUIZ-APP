<template>
  <div>
    <QuizOne />
    <!-- <quizTwo v-if="showNext"/> -->
  </div>
</template>

<script>
import QuizOne from "./QuizOne.vue";
export default {
  name: "Display",
  components: {
    QuizOne,
  },
  data() {
    return {
      showNext: true,
    };
  },
};
</script>

<style scoped></style>
