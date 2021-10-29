import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: 'Spots',
        name: 'Spots',
        component: () => import('../views/Spots.vue'),
      },
      {
        path: 'Spot/:id',
        name: 'Spot',
        component: () => import('../views/Detail.vue'),
      },
      {
        path: 'Hotels',
        name: 'Hotels',
        component: () => import('../views/Hotels.vue'),
      },
      {
        path: 'Hotel/:id',
        name: 'Hotel',
        component: () => import('../views/Detail.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
