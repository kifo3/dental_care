import {createStore} from "vuex"
import login from "@/plugins/vuex/login"
import signin from "@/plugins/vuex/signin";

export default createStore({
    modules: {
        login,
        signin
    }
})