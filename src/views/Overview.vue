<template>
    <div class="overview">
        <div class="container h-100">
            <div class="intro h-100">
                <div
                    class="row h-100 justify-content-center align-items-center"
                >
                    <div class="col-md-6">
                        <h3>Overview Page</h3>
                        <p style="font-size:17px">
                            Here you can see statistics about the website,
                            informing about sales made.
                        </p>
                    </div>
                    <div class="col-md-6">
                        <img
                            src="/img/svg/overview.svg"
                            alt=""
                            class="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Overview",
    props: {
        msg: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
