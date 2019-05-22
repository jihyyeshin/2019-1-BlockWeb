import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Course from '@/components/Course'
import Student from '@/components/Student'
import Assignment from '@/components/Assignment'
import Usages from '@/components/Usages'
Vue.use(Router)
// 페이지가 추가될 때 url 관리, import후 new router에 추가
export default new Router({
  routes: [{
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    },
    {
      path: '/student',
      name: 'Student',
      component: Student
    },
    {
      path: '/assign',
      name: 'Assignment',
      component: Assignment
    },
    {
      path: '/usages',
      name: 'Usages',
      component: Usages
    },
  ]
})
