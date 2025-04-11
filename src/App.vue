<template>
  <div>
    <!-- <nav>
      <router-link to="/"><Modal /></router-link> |
      <router-link to="/Display"><Display /></router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<script>
import Modal from "./views/Modal.vue";
import Display from "./views/Display.vue";

export default {
  components: { Modal, Display },
  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
}
</style>
