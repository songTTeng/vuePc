import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import HelloWorld from '@/page/hello/HelloWorld'
import manage from '@/page/manage/index'
import study from '@/page/study/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[{
        path: '/HellowWord',
        name: 'HellowWord',
        component: HelloWorld,
      },{
        path: '/study',
        name: 'Study',
        component: study,
      },{
        path: '/manage',
        name: 'Manage',
        component: manage,
      }]
    }
  ]
})
