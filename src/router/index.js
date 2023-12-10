import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import("../views/Login.vue")
const Home = () => import("../views/Home.vue")
const Main = () => import("../views/home/Main")
const Test1 = () => import("../views/home/Test1")

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: "/",
            redirect: "/login",
        },
        {
            path: "/login",
            component: Login,
        },
        {
            path: "/home",
            component: Home,
            children:[
                {
                    path:"main",
                    component: Main,
                },
                {
                    path:"test1",
                    component: Test1,
                },
            ],
        },
    ]
})