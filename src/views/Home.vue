<template>
    <div class="home">
        <NavBar></NavBar>
        <Hero />
        <products-list></products-list>
        <login></login>
        <logout></logout>
        <mini-cart></mini-cart>
    </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Login from "@/components/Login.vue";
import Logout from "@/components/Logout.vue";

export default {
    name: "home",
    components: {
        Hero,
        Login,
        Logout
    }
};
</script>
