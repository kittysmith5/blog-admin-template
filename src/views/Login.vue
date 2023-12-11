<template>
  <div class="login">
    <h1 class="title">Login</h1>
    <input
      type="text"
      id="username"
      placeholder="请输入用户名"
      v-model="username"
    />
    <input
      type="password"
      id="password"
      placeholder="请输入密码"
      v-model="password"
    />
    <button type="button" @click="handleLogin">登录</button>
  </div>
</template>

<script>
import md5 from "md5";
import loginApi from "../api/loginApi.js";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      const MD5_SALT = "salt_77";
      loginApi
        .login({
          username: this.username,
          password: md5(this.password + MD5_SALT),
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          this.$router.push("/home/main");
        })
        .catch((err) => {
          // console.log(err);
          alert(err.response.data || "登录失败,用户名或密码错误");
        });
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  margin-top: 250px;
  width: 333px;
  border: 2px solid rgb(127, 127, 255);
  /* up right down left */
  padding: 0 50px 50px 50px;
  border-radius: 33px;
}

.title {
  color: rgb(127, 127, 255);
  font-size: 35px;
  font-weight: bolder;
  margin: 10px 0;
}

input {
  height: 40px;
  margin: 10px 0;
  border: 1px solid rgb(127, 127, 255);
  font-size: 15px;
  border-radius: 5px;
  text-align: center;
  outline: none;
  box-sizing: border-box;
}

input:focus {
  border: 2px solid rgb(127, 127, 255);
}
input::placeholder {
  color: rgb(127, 127, 255);
  font-size: 15px;
}
.username {
  margin-bottom: 20px;
}

button {
  font-size: 15px;
  margin-top: 15px;
  height: 40px;
  border: 0;
  background: rgb(127, 127, 255);
  color: white;
  border-radius: 5px;
}
button:hover {
  box-shadow: 0px 10px 5px rgba(127, 127, 255, 0.3);
  transition: 0.5s;
  border: 2px solid rgb(127, 127, 255);
  /* background: rgb(127, 127, 255); */
}
</style>