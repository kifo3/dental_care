import axios from "axios";

export default {
    actions: {
        fetchToken(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:8888/api/users/auth', data)
                    .then((response) => {
                        console.log('Token olindi')
                        console.log(response)

                        context.commit('updateToken', response.data.accessToken)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Token olishda xatolik yuz berdi')
                        reject()
                    })
            })
        }
    },
    mutations: {
        updateToken(state, token) {
            state.token = token
        }
    },
    state: {
        token: null,
    },
    getters: {
        getToken(state) {
            return state.token
        }
    }
}