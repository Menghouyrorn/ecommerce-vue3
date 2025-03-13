import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";
import Cart from "@/views/Cart.vue";
import Wish from "@/views/Wish.vue";
import AuthLayout from "@/views/Auth/AuthLayout.vue";

export const router_data = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: About
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/wish',
        component: Wish
    },
    {
        path: '/auth',
        component: AuthLayout
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound
    }
]
