import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/home.vue";
import FilterPage from "@/pages/filter_map.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
}, {
    path: '/filter',
    name: 'Filter',
    component: FilterPage,
}];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;