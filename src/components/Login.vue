<template>
    <div class="login">
        <!-- Modal -->
        <div
            class="modal fade"
            id="login"
            tabindex="-1"
            role="dialog"
            aria-labelledby="loginTitle"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <ul
                            class="nav nav-fill nav-pills mb-3"
                            id="pills-tab"
                            role="tablist"
                        >
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    id="pills-home-tab"
                                    data-toggle="pill"
                                    href="#pills-login"
                                    role="tab"
                                    aria-controls="pills-login"
                                    aria-selected="true"
                                    >Sign In</a
                                >
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link"
                                    id="pills-register-tab"
                                    data-toggle="pill"
                                    href="#pills-register"
                                    role="tab"
                                    aria-controls="pills-register"
                                    aria-selected="false"
                                    >Sign Up</a
                                >
                            </li>
                        </ul>

                        <div class="tab-content" id="pills-tabContent">
                            <!-- Login user form -->
                            <div
                                class="tab-pane fade show active"
                                id="pills-login"
                                role="tabpanel"
                                aria-labelledby="pills-login-tab"
                            >
                                <h5 class="text-center">Login Please</h5>
                                <div class="form-group">
                                    <label for="exampleInputEmail1"
                                        >Email</label
                                    >
                                    <input
                                        type="email"
                                        v-model="email"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Email"
                                    />
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputPassword1"
                                        >Password</label
                                    >
                                    <input
                                        type="password"
                                        v-model="password"
                                        @keyup.enter="login"
                                        class="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Enter Password"
                                    />
                                </div>

                                <div class="form-group">
                                    <button
                                        class="btn btn-primary"
                                        @click="login"
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>

                            <!-- Register user form -->
                            <div
                                class="tab-pane fade"
                                id="pills-register"
                                role="tabpanel"
                                aria-labelledby="pills-register-tab"
                            >
                                <h5 class="text-center">Create New Account</h5>
                                <div class="form-group">
                                    <label for="name">Your name</label>
                                    <input
                                        v-model="name"
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        placeholder="Enter Full Name"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input
                                        v-model="email"
                                        type="email"
                                        class="form-control"
                                        id="email"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Email"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input
                                        v-model="password"
                                        @keyup.enter="registerUser"
                                        type="password"
                                        class="form-control"
                                        id="password"
                                        placeholder="Enter Password"
                                    />
                                </div>
                                <div class="form-group">
                                    <button
                                        class="btn btn-primary"
                                        @click="register"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fb, db } from "../firebase";
import $ from "jquery";

export default {
    name: "Login",
    props: {
        msg: String
    },
    data() {
        return {
            name: null,
            email: null,
            password: null
        };
    },
    methods: {
        login() {
            fb.auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    $("#login").modal("hide");
                    Toast.fire({
                        type: "success",
                        title: "Logged in successfully"
                    });
                    this.$router.replace("/").catch(err => {});
                })
                .catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode === "auth/wrong-password") {
                        alert("Wrong password.");
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                });
        },
        register() {
            fb.auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(user => {
                    $("#login").modal("hide");
                    db.collection("profiles")
                        .doc(user.user.uid)
                        .set({
                            name: this.name
                        })
                        .then(function() {
                            console.log("Document successfully written!");
                        })
                        .catch(function(error) {
                            console.error("Error writing document: ", error);
                        });
                    this.$router.replace("/").catch(err => {});
                })
                .catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode == "auth/weak-password") {
                        alert("The password is too weak.");
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
