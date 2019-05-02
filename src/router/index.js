import Vue from 'vue'
import Router from 'vue-router'
import Home from '../Components/Home';
import About from '../Components/About';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        }
    ]
})
