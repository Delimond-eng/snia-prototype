import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/home.vue";
import FilterPage from "@/pages/filter_map.vue";
import MapPage from "@/pages/map_preview.vue";
import StatsPage from "@/pages/stats_preview.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    }, {
        path: '/filter',
        name: 'Filter',
        component: FilterPage,
    },
    {
        path: '/map-report',
        name: 'map',
        component: MapPage,
    },

    {
        path: '/statistics',
        name: 'stats',
        component: StatsPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;