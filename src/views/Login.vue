<template>
    <div class="login">
        <h1 class="title">Login</h1>
        <el-input class="username" v-model="username" prefix-icon="el-icon-user
" placeholder="请输入用户名"></el-input>
        <el-input placeholder="请输入密码" prefix-icon="el-icon-date" v-model="password" show-password></el-input>
        <el-button type="primary" plain @click="handleLogin">登录</el-button>
    </div>
</template>

<script>
    import md5 from "md5"
    import { Message } from 'element-ui';
    import loginApi from "../api/loginApi.js"
    export default {
        name: 'Login',
        data() {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            handleLogin() {
                loginApi.login({
                    username: this.username,
                    password: md5(this.password)
                }).
                then(res=>{
                    console.log(res);
                    localStorage.setItem("token",res.data.token)
                    this.$router.push("/home/main")
                }).catch(err=>{
                    // console.log(err);
                    Message.error(err.response.data || "登录失败,用户名或密码错误")
                })
            }
        }
    }
</script>

<style scoped>
    .login {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 0 auto;
        margin-top: 250px;
        width: 333px;
        border: 2px solid rgb(220, 223, 230);
        /* up right down left */
        padding: 0 50px 50px 50px;
        border-radius: 33px;
    }

    .title {
        color: rgb(100, 100, 100);
        font-size: 35px;
        font-weight: bolder;
        margin: 10px 0;
    }

    .username {
        margin-bottom: 20px;
    }

    button {
        margin-top: 35px;
    }
</style>