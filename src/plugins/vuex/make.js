import axios from "axios";

export default {
    actions: {
        makeUser(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:8888/api/make_appointments', data)
                    .then((response) => {
                        console.log(response)

                        let barr = {
                            id: response.data.id,
                            subject: response.data.subject,
                            eventType: response.data.eventType,
                            startTime: response.data.startTime,
                            endTime: response.data.endTime,
                            description: response.data.description
                        }

                        context.commit('updateUser', barr)
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
        },
        updateUser(state, barr) {
            state.user = barr
        }
    },
    state: {
        token: null,
        user: {
            id: null,
            subject: null,
            eventType: null,
            startTime: null,
            endTime: null,
            description: null
        }
    },
    getters: {
        getToken(state) {
            return state.token
        },
        getAddUser(state) {
            return state.user
        }
    }
}