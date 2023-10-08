import axios from "axios";
import store from "@/plugins/vuex/store";

axios.defaults.headers.common['Content-Type'] = 'application/ld+json'

axios.interceptors.request.use((config) => {
    if (config.url !== 'http://localhost:2222/api/users') {
        config.headers.common['Authorization'] = 'bearer ' + store.getters.getToken
    }
    return config
})

export default axios