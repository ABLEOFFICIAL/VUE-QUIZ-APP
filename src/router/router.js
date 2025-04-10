// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Display from "../views/Display.vue";
import Modal from "../views/Modal.vue";

const routes = [
  { path: "/", name: "Modal", component: Modal },
  { path: "/Display", name: "Display", component: Display },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
