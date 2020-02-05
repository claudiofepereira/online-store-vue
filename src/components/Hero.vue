<template>
    <div class="hero">
        <div class="container h-100">
            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-md-5">
                    <div class="hero-content" style="text-align:center;">
                        <h1 class="hero-title">
                            Online Store
                        </h1>
                        <br />
                        <p style="font-size:18px">
                            Search for your goodies, look for what you don't
                            have, but want to.
                        </p>
                        <p style="font-size:18px">
                            We've got everything you'll ever need, and more.
                        </p>
                        <div class="hero-btn mt-5">
                            <button
                                v-scroll-to="'#products'"
                                class="btn custom-btn btn-info mr-4"
                            >
                                Explore
                            </button>
                            <button
                                @click="redirectProducts"
                                class="btn custom-btn btn-outline-secondary"
                            >
                                Products
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="graphic">
                        <img src="/img/svg/graphic.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Hero",
    props: {
        msg: String
    },
    methods: {
        redirectProducts() {
            this.$router.replace("/products").catch(err => {});
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero {
    padding-top: 7rem;
    width: 100%;
    height: 500px;
    text-align: left;
}
</style>
