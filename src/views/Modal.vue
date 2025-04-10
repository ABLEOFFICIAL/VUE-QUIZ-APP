<template>
  <!-- modal -->
  <div v-if="showModal" class="modal-block">
    <div class="img-block">
      <img :src="quizImg" />
      <img :src="quizbg" class="quizBg" />
    </div>
    <div class="text-block">
      <h2>
        {{ title }}
      </h2>
      <router-link to="/Display" @click="removeModal" class="start"
        >Get started</router-link
      >
    </div>
  </div>
</template>

<script>
import quizImg from "../assets/man.png";
import quizbg from "../assets/man-bg.png";
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      quizImg,
      quizbg,
      title: "Find fun and interesting quizzes to boost your knowledge",
      showModal: true,
    };
  },
  methods: {
    removeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
img {
  width: 80%;
  margin-inline: auto;
  height: auto;
  display: block;
  margin-bottom: 2rem;
}
.quizBg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
}
.modal-block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(166, 217, 247);
  height: 60%;
  width: 70%;
  max-width: 800px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
h2 {
  font-size: 19px;
  text-align: center;
  margin: 10px;
  font-weight: 600;
}
.start {
  background-color: #16157c;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 13px;
  width: 30%;
  text-decoration: none;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-weight: 300;
}
#app {
  background-color: #000;
}
</style>
