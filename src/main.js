import "./assets/css/index.css";
import "element-plus/dist/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import registerIcons from "./global/register-icons";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(registerIcons);
app.mount("#app");
