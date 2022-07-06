<template>

    <!-- contact section start  --->

    <section class="contact" id="contact">

        <h1 class="heading">make appointment</h1>

        <form>
            <span>your name :</span>
            <input type="text" name="name" placeholder="enter your name" class="box">
            <span>your email :</span>
            <input type="email" name="email" placeholder="enter your email" class="box">
            <span>your number :</span>
            <input type="number" name="number" placeholder="enter your number" class="box">
            <span>appointment date :</span>
            <input type="datetime-local" name="data" class="box">
            <input type="submit" value="make appointment" name="submit" class="link-btn">
        </form>

    </section>

    <!-- contact section end  --->

</template>

<script>
export default {
    name: "ContactRow"
}
</script>

<style scoped>

</style>