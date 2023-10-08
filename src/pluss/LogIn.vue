<template>
    <form class=" mx-auto border" @submit.prevent="auth">
        <div class="text">
            <h1>Log in</h1>
        </div>
        <div class="form-group ">
            <div class="d-flex justify-content: space-between ">
                <label  for="exampleInputEmail1">Email </label>
                <p>Need an account? <router-link to="/signin">Sign up</router-link></p>
            </div>
            <input
                v-model="comment.email"
                type="email" class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
                v-model="comment.password"
                type="password"
                class="form-control "
                id="exampleInputPassword1">
        </div>
        <div class="lin" >

            <button  type="submit" >Log in</button>
        </div>

        <a class="forget" href="#">Forget password?</a>
    </form>


</template>

<script>
import {mapActions} from "vuex"

export default {
    name: "logIn.vue",
    data() {
        return {
            comment: {
                email: "",
                password: "",
            }

        }
    },
    methods: {
        ...mapActions(['fetchToken']),
        auth() {
            console.log('forma yuborildi')

            this.fetchToken(this.comment)
                .then(() => {
                    console.log('token olindi')
                    this.$router.push('/')
                })

        }
    },
}
</script>

<style>
.lin {
    border-radius: 10px;
    text-align: center;
    color: #fff;
    background-color: #7ED5F7;
    padding: 7px ;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    cursor: pointer;
}

.lin button {
    color: #fff;
    background-color: #7ED5F7;
}

form .text {
    margin-bottom: 20px;
}
form .form-group p {
    font-family: sans-serif;
    font-size: 12px;
    justify-content: space-between;
    margin-left: auto;
}

.form-group {
    font-size: 14px;
    font-weight: bold;
}

form input {
    margin-bottom: 20px;
}

.forget {
    color: #1b1b1b;
    cursor: pointer;
    font-family: Poppins, sans-serif;
    font-size: 14px;
    display: block;
    text-align: center;
    margin: 30px;
}

button {
    font-size: 14px;

}

.border {
    font-family: Poppins, sans-serif;
    border: 1px solid #cccccc;
    margin: 80px;
    padding: 40px;
    border-radius: 30px;
    width: 35%;
}
</style>