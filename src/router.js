import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'

//view
import Home from './views/Home.vue'
import Menu from './views/Menu.vue'
import Admin from './views/Admin.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
//about
import About_contact from './views/about/Contact.vue'
import About_history from './views/about/History.vue'
import About_guide from './views/about/Guide.vue'
import About_delivery from './views/about/Delivery.vue'
import About_phone from './views/about/Phone.vue'
import About_name from './views/about/Name.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      // component: Home,
      components: {
        default: Home,
        delivery: About_delivery,
        history: About_history,
        guide: About_guide,
      },
    },
    {
      path: '/about',
      name: 'about',
      redirect: '/about/history',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/about/About.vue'),
      children: [{
          path: '/about/contact',
          name: 'about-contact',
          redirect: '/about/contact/phone',
          component: About_contact,
          children: [{
              path: '/about/contact/phone',
              name: 'about-phone',
              component: About_phone
            },
            {
              path: '/about/contact/name',
              name: 'about-name',
              component: About_name
            },
          ]
        },
        {
          path: '/about/history',
          name: 'about-history',
          component: About_history
        },
        {
          path: '/about/delivery',
          name: 'about-delivery',
          component: About_delivery
        },
        {
          path: '/about/guide',
          name: 'about-guide',
          component: About_guide
        },
      ],
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '*',
      redirect: '/'
    },
  ],
  // eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
})

//全局前置导航守卫
// eslint-disable-next-line
router.beforeEach((to,from,next)=>{
  let currentUser = window.localStorage.getItem('currentUser');
  if (currentUser) {
    store.dispatch('setUser', currentUser)
  }
  if(to.path == '/login' || to.path == '/register' || to.path=='/'){
    next();
  }else{
    //判断$store.getter.islogin
    if(store.getters.isLogin){
      next();
    }else{
      alert('请先登录!')
      next('/login')
    }
  }
});

export default router;