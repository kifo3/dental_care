import { createApp } from 'vue'
import App from './App.vue'
import router from "@/plugins/router";
import store from "@/plugins/vuex/store";
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense("ORg4AjUWIQA/Gnt2VVhiQlFaclxJVHxIfUx0RWFbb1t6cFBMZFxBNQtUQF1hS35bd0FjX35Xc3xcQGFf")


createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
