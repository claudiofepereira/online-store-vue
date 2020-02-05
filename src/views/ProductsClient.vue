<template>
    <div class="products">
        <NavBar></NavBar>
        <div class="container">
            <h1 class="text-center p-5">Our Products List</h1>
            <div class="row">
                <div class="col-md-4" v-for="product in products">
                    <div class="card product-item mt-2">
                        <carousel :perPage="1">
                            <slide v-for="(image, index) in product.images">
                                <img
                                    :src="image"
                                    class="card-img-top"
                                    alt="product-image"
                                    width="250px"
                                />
                            </slide>
                        </carousel>
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h6 class="card-title">{{ product.name }}</h6>
                                <h5 class="card-prices">
                                    {{ product.price | currency }}
                                </h5>
                            </div>
                            <add-to-cart
                                v-if="user"
                                :image="getImage(product.images)"
                                :p-id="product.id"
                                :price="product.price"
                                :name="product.name"
                            >
                            </add-to-cart>
                            <br />

                            <details style="font-size: 16px"
                                ><summary>
                                    <strong style="font-size: 17px"
                                        >Description</strong
                                    ></summary
                                >{{ product.description }}</details
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <login></login>
        <logout></logout>
        <mini-cart></mini-cart>
    </div>
</template>

<script>
import { fb, db } from "../firebase";
import Login from "@/components/Login.vue";
import Logout from "@/components/Logout.vue";

export default {
    name: "ProductsClient",
    components: {
        Login,
        Logout
    },
    props: {
        msg: String
    },
    data() {
        return {
            products: [],
            user: false
        };
    },
    methods: {
        getImage(images) {
            return images[0];
        }
    },
    firestore() {
        const user = fb.auth().currentUser;
        if (user) {
            this.user = true;
        } else {
            this.user = false;
        }
        return {
            products: db.collection("products")
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.products {
    margin-top: 7rem;
    background: #f2f2f2;
    padding-bottom: 3rem;
}

summary::-webkit-details-marker {
    display: none;
}
</style>
