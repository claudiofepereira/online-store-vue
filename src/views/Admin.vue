<template>
    <div class="admin">
        <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
            <a
                id="show-sidebar"
                @click="closeMenu"
                class="btn btn-sm btn-dark"
                href="#"
            >
                <i class="fas fa-bars"></i>
            </a>
            <nav id="sidebar" class="sidebar-wrapper">
                <div class="sidebar-content">
                    <!-- sidebar-brand  -->
                    <div class="sidebar-item sidebar-brand">
                        <a href="../">Online Store</a>
                        <div id="close-sidebar" @click="closeMenu">
                            <i class="fas fa-times"></i>
                        </div>
                    </div>
                    <!-- sidebar-header  -->
                    <div class="sidebar-item sidebar-header">
                        <div class="user-pic">
                            <img
                                class="img-responsive img-rounded"
                                src="/img/user.png"
                                alt="User picture"
                            />
                        </div>
                        <div class="user-info">
                            <span class="user-name">
                                <strong>{{ profile.name }}</strong>
                            </span>
                            <span class="user-role">{{ email }}</span>
                            <span class="user-status">
                                <i class="fa fa-circle"></i>
                                <span>Online</span>
                            </span>
                        </div>
                    </div>
                    <!-- sidebar-search  -->
                    <div class="sidebar-item sidebar-search">
                        <div>
                            <div class="input-group">
                                <input
                                    type="text"
                                    class="form-control search-menu"
                                    placeholder="Search..."
                                />
                                <div class="input-group-append">
                                    <span class="input-group-text">
                                        <i
                                            class="fa fa-search"
                                            aria-hidden="true"
                                        ></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- sidebar-menu  -->
                    <div class="sidebar-item sidebar-menu">
                        <ul>
                            <li class="header-menu">
                                <span>Menu</span>
                            </li>
                            <li>
                                <router-link to="/admin/overview">
                                    <i class="fa fa-chart-line"></i>
                                    <span>Overview</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/admin/products">
                                    <i class="fab fa-amazon"></i>
                                    <span>Products</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/admin/orders">
                                    <i class="fa fa-shopping-cart"></i>
                                    <span>Orders</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/admin/profile">
                                    <i class="fa fa-user"></i>
                                    <span>Profile</span>
                                </router-link>
                            </li>
                            <li>
                                <a href="#" @click="logout()">
                                    <i class="fa fa-power-off"></i>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!-- sidebar-content  -->

            <main class="page-content">
                <router-view />
            </main>
            <!-- page-content -->
        </div>
        <!-- page-wrapper -->
    </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import { fb, db } from "../firebase";

export default {
    name: "admin",
    data() {
        return {
            profile: {
                name: null,
                phone: null,
                address: null,
                postcode: null
            },
            name: null,
            email: null
        };
    },
    components: {
        Hero
    },
    firestore() {
        const user = fb.auth().currentUser;
        return {
            profile: db.collection("profiles").doc(user.uid)
        };
    },
    methods: {
        closeMenu() {
            $(".page-wrapper").toggleClass("toggled");
        },
        logout() {
            fb.auth()
                .signOut()
                .then(() => {
                    this.$router.replace("/");
                    Toast.fire({
                        type: "success",
                        title: "Logged out successfully"
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    created() {
        let user = fb.auth().currentUser;
        this.email = user.email;
        this.name = user.name;
    }
};
</script>

<style></style>
