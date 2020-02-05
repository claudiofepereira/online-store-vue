<template>
    <div class="home">
        <NavBar></NavBar>
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Online Store" />
        <login></login>
        <logout></logout>
        <mini-cart></mini-cart>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Login from "@/components/Login.vue";
import Logout from "@/components/Logout.vue";

export default {
    name: "home",
    components: {
        HelloWorld,
        Login,
        Logout
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    margin-top: 100px;
}
</style>
