import { Home, Wishlist, Cart, Courses, ProfilePage, Login, ProfileView } from "../pages/index"

const PrivateRoutes = [
    { path: '/', component: Home },
    { path: '/wishlist', component: Wishlist },
    { path: '/courses', component: Courses },
    { path: '/cart', component: Cart },
    { path: '/profile', component: ProfilePage },
    { path: '/ProfileView', component: ProfileView },
    { path: '/Login', component: Login }
]

export { PrivateRoutes }