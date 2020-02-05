<template>
    <div class="hello">
        <nav
            class="navbar custom-nav fixed-top navbar-expand-lg navbar-light bg-light"
        >
            <div class="container">
                <router-link class="navbar-brand" style="font-size:25px" to="/"
                    >Online Store</router-link
                >
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav mr-auto" style="font-size:17px">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link"
                                >Home</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                to="/products"
                                class="nav-link"
                                href="#"
                                >Products</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link" href="#"
                                >About</router-link
                            >
                        </li>
                    </ul>
                    <!-- Log out -->
                    <form class="form-inline my-2 my-lg-0" v-if="user">
                        <input
                            class="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <a
                            class="btn btn-outline-success my-2 my-sm-0 mx-2"
                            data-toggle="modal"
                            data-target="#logout"
                        >
                            Profile</a
                        >
                        <a
                            class="btn btn-outline-info border-1 mx-2 my-2 my-sm-0 mx-2"
                            data-toggle="modal"
                            data-target="#miniCart"
                        >
                            <i class="fas fa-cart-plus"></i>
                        </a>
                    </form>
                    <!-- Sign in -->
                    <form class="form-inline my-2 my-lg-0" v-else>
                        <input
                            class="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <a
                            class="btn btn-outline-success my-2 my-sm-0 mx-2"
                            data-toggle="modal"
                            data-target="#login"
                            >Sign In</a
                        >
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
import { fb, db } from "../firebase";

export default {
    name: "Navbar",
    props: {
        msg: String
    },
    data() {
        return {
            profile: {
                name: null,
                phone: null,
                address: null,
                postcode: null
            },
            user: false
        };
    },
    firestore() {
        const user = fb.auth().currentUser;
        if (user) {
            this.user = true;
            return {
                profile: db.collection("profiles").doc(user.uid)
            };
        } else {
            this.user = false;
        }
    },
    components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media (min-width: 992px) {
    .navbar.custom-nav {
        padding-top: 16px;
        padding-bottom: 5px;
        background-color: #fff !important;
    }
}
</style>
