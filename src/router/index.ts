import { createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/home.vue";
import SignIn from "@/pages/signin.vue";
import SignUp from "@/pages/signup.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/signin', component: SignIn },
    { path: '/signup', component: SignUp },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router