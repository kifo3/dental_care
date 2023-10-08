import axios from "axios";

export default {
    actions: {
        pushUser(context, baz) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:2222/api/users', baz)
                    .then((res) => {
                        console.log(res)

                        let bar = {
                            id: res.data.id,
                            email: res.data.email,
                            password: res.data.password
                        }

                        context.commit('addUser', bar)
                        resolve()
                    })
                    .catch(() => {
                        console.log('User qushishda xatolik')
                        reject()
                    })
            })
        }
    },
    mutations: {
        addUser(state, bar) {
            state.foo = bar
        }
    },
    state: {
        foo: {
            id: null,
            email: null,
            password: null
        }
    },
    getters: {
        getAddUser(state) {
            return state.foo
        }
    }
}