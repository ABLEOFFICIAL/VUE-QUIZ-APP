<template>
  <div>
    <!-- <nav>
      <router-link to="/"><Start /></router-link> |
      <router-link to="/Display"><Display /></router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<script>
import Start from "./views/Modal.vue";
import Display from "./views/Display.vue";

export default {
  components: { Start, Display },
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
