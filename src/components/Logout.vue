<template>
    <div class="logout">
        <!-- Modal -->
        <div
            class="modal fade"
            id="logout"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLabel">
                            Profile Information
                        </h4>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <!-- Content of the body -->
                    <div class="modal-body">
                        <span class="user-name">
                            <h4>Current User</h4>
                            <strong style="font-size:18px">
                                {{ profile.name }}
                            </strong>
                        </span>
                        <br />
                        <br />
                        <span class="user-name">
                            <h4>Email</h4>
                            <strong style="font-size:18px">
                                {{ email }}
                            </strong>
                        </span>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-primary"
                            @click="redirectProfileSettings"
                        >
                            Account Settings
                        </button>
                        <button class="btn btn-primary" @click="logout">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fb, db } from "../firebase";

export default {
    name: "Logout",
    data() {
        return {
            profile: {
                name: null,
                phone: null,
                address: null,
                postcode: null
            },
            email: null
        };
    },
    props: {
        msg: String
    },
    firestore() {
        const user = fb.auth().currentUser;
        this.email = user.email;
        return {
            profile: db.collection("profiles").doc(user.uid)
        };
    },
    methods: {
        redirectProfileSettings() {
            $("#logout").modal("hide");
            this.$router.replace("/profile").catch(err => {});
        },
        logout() {
            fb.auth()
                .signOut()
                .then(() => {
                    $("#logout").modal("hide");
                    this.$router.replace("/").catch(err => {});
                    Toast.fire({
                        type: "success",
                        title: "Logged out successfully"
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
