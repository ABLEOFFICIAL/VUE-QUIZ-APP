<template>
  <div>
    <quizOne />
    <!-- <quizTwo v-if="showNext"/> -->
  </div>
</template>

<script>
import quizOne from "./quizOne.vue";
export default {
  name: "Display",
  components: {
    quizOne,
  },
  data() {
    return {
      showNext: true,
    };
  },
};
</script>

<style scoped></style>
