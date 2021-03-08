
const routes = [
   { path: '', component: () => import('pages/login.vue') },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/Index.vue') }
        {
        path: '/main', component: () => import('pages/main.vue'),
        name: 'main'
      },
      {
        path: '/lesson', component: () => import('pages/lesson.vue'),
        name: 'lesson'
      },
       {
        path: '/student', component: () => import('pages/student.vue'),
        name: 'student'
      },
        {
        path: '/exam', component: () => import('pages/exam.vue'),
        name: 'exam'
      },
         {
        path: '/material', component: () => import('pages/material.vue'),
        name: 'material'
      },
          {
        path: '/worksheet', component: () => import('pages/worksheet.vue'),
        name: 'worksheet'
      },
           {
        path: '/contact', component: () => import('pages/contact.vue'),
        name: 'contact'
      },
      
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
