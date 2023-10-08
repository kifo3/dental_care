<template>
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body comment" >
                        <div class="form-group">
                            <label for="exampleInputName">Full Name:</label>
                            <input type="text" class="form-control" id="exampleInputName">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address:</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password:</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                </div>
                <div class="modal-footer">
                    <button
                        @click="isOpen = false"
                        type="button"
                        class="link-btn"
                        data-dismiss="modal">
                        Submit
                    </button>
                    <h4>Create account: <a href="#">Log In</a></h4>
                    <h4>Forget password: <a href="#">Click</a></h4>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'


const isOpen = ref(false)

</script>

<style scoped>

</style>