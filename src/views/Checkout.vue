<template>
    <div class="checkout">
        <NavBar></NavBar>

        <div class="container mt-5 pt-5">
            <h3 style="text-align: center">Checkout Page</h3>
            <br />
            <br />
            <div class="col-md-3">
                <h3>
                    Total Price
                    {{ this.$store.getters.totalPrice | currency }}
                </h3>
                <button class="btn btn-primary mb-5 mt-2">
                    <i class="fas fa-cart-arrow-down"></i>
                    Proceed Checkout
                </button>
            </div>
            <br />
            <div class="row">
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            <th>Remove</th>
                            <th scope="col">Items</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in this.$store.state.cart">
                            <td>
                                <span
                                    @click="
                                        $store.commit('removeFromCart', item)
                                    "
                                    class="remove-item"
                                    >X</span
                                >
                            </td>
                            <td>
                                <img
                                    :src="item.productImage"
                                    alt
                                    style="width:100px"
                                />
                                <br />
                                <br />
                                {{ item.productName }}
                            </td>
                            <td width="500">
                                <div class="center">
                                    <div class="input-group">
                                        <span class="input-group-btn">
                                            <button
                                                type="button"
                                                class="btn btn-danger"
                                                @click="
                                                    decreaseQty(item.productId)
                                                "
                                            >
                                                <i class="fa fa-minus"></i>
                                            </button>
                                        </span>
                                        <input
                                            type="text"
                                            min="1"
                                            maxlength="9"
                                            size="9"
                                            :value="item.productQuantity"
                                            class="form-control input-number"
                                            style="text-align: left"
                                        />
                                        <span class="input-group-btn">
                                            <button
                                                type="button"
                                                class="btn btn-success"
                                                @click="
                                                    increaseQty(item.productId)
                                                "
                                            >
                                                <i class="fa fa-plus"></i>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td style="align-text: center">
                                {{ item.productPrice | currency }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <login></login>
        <logout></logout>
        <mini-cart></mini-cart>
    </div>
</template>
<script>
import Login from "@/components/Login.vue";
import Logout from "@/components/Logout.vue";
export default {
    name: "checkout",
    components: {
        Login,
        Logout
    },
    props: {},
    data() {
        return {};
    },
    methods: {
        increaseQty(id) {
            this.$store.commit("increment", id);
            Toast.fire({
                type: "success",
                title: "Quantity increased"
            });
        },
        decreaseQty(id) {
            this.$store.commit("decrement", id);
            Toast.fire({
                type: "success",
                title: "Quantity decreased"
            });
        }
    },
    created() {}
};
</script>
<style scoped lang="scss">
.center {
    width: 25%;
    margin: 40px auto;
}
.form-control {
    min-width: 2.3em;
    display: block;
}
</style>
