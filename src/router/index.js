// Composables
import Default from "@/layouts/Default.vue";
import HelloWorld from '@/pages/Home.vue';
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Default,
    children: [
      {
        path: '',
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: HelloWorld,
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;