import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import '@/assets/css/index.css'
import '@/assets/css/style.css'
import navHeader from '@/components/navbar.vue'
import VueApexCharts from "vue3-apexcharts";
import NativeModal from "@/widgets/modal.vue";

const app = createApp(App)

app.component("navHeader", navHeader)
app.component("nativeModal", NativeModal)
app.use(router)
app.use(VueApexCharts)
app.mount('#app')