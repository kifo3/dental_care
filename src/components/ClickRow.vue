<template>


    <!-- click section start  --->

    <section class="click">

        <div class="btn-group-vertical">
            <button type="button" class="click-1">
                <h1>click here to see apppointment</h1>
                <a href="#" class="link-btn">see appointment</a>
            </button>




            <button type="button" class="click-2">
                <router-link to="/make_appointment" class="link-btn" >Make appointment</router-link>
                <h1>Click here to make apppointment</h1>
            </button>
        </div>

    </section>

    <!-- click section end  --->

</template>

<script>
export default {
    name: "ClickRow"
}
</script>

<style scoped>

</style>