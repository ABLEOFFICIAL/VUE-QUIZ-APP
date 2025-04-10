import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router.js"; // Adjust the path as necessary

createApp(App).use(router).mount("#app");
