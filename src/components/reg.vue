<template>
    <div id="reg">
        <div class="header">
            <div class="container">
                <div class="row">
                    <div class="logo span4">
                        <h1><a href="">Register <span class="red">.</span></a></h1>
                    </div>
                    <div class="links span8">
                        <a class="home" href="" rel="tooltip" data-placement="bottom" data-original-title="Home"></a>
                        <a class="blog" href="" rel="tooltip" data-placement="bottom" data-original-title="Blog"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="register-container container">
            <div class="row">
                <div class="iphone span5">
                    <img src="../assets/images/reg/iphone.png" alt="">
                </div>
                <div class="register span6">
                    <form action="" method="post">
                        <router-link to="/home" tag="h2">REGISTER TO <span class="red"><strong>HaiBei</strong></span></router-link>
                        <label for="firstname">Your Name</label>
                        <input type="text" id="yourname" name="firstname" placeholder="enter your name...">
                        <label for="lastname">English Name</label>
                        <input type="text" id="lastname" name="lastname" placeholder="enter your English name...">
                        <label for="username">Username<span v-show="showNameSpan">用户名不正确</span></label>
                        <input type="text" id="username" name="username" placeholder="choose a username..." v-model="Uname" @blur="setUname(Uname)">
                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" placeholder="enter your email...">
                        <label for="password">Password<span v-show="showPsdSpan">密码不正确</span></label>
                        <input type="password" id="password" name="password" placeholder="choose a password..." v-model="Upassword" @blur="setPsd(Upassword)">
                        <router-link to="/status">
                            <button @click="regist({getUname,getPsd})" id="regBtn">REGSITER</button>
                        </router-link>
                    </form>
                </div>
            </div>
        </div>
       <div class="foot">Copyright &copy; 2014.Company name All rights reserved.joyce</div>
     <status></status>
</div>
</template>
<script>
import status from "./status.vue";
    import {mapActions,mapGetters} from "vuex";
    export default {
        data(){
            return{
                Uname:"",
                Upassword:""
            }
        },
        methods:{
            ...mapActions([
                "regist","setUname","setPsd"
            ]),
            /* regist(){
                this.$store.dipatch("regist");
            } */
        },
        computed:mapGetters([
             "getUname","getPsd","showNameSpan","showPsdSpan"
        ]),
        components:{
            status
        }
}
</script>
<style>
        @import url("../assets/css/reg.css");
</style>
