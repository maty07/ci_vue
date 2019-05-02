import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Home from './Components/Home'
import About from './Components/About';

Vue.use(Router)


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
]

const router = new Router({
    routes
})



new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})


