import Vue from "vue";
import VueRouter from "vue-router";

// コンポーネントをインストール
import PhotoList from "./pages/PhotoList.vue";
import Login from "./pages/Login.vue";

import store from "./store";

import SystemError from "./pages/errors/System.vue";

// VueRouterプラグインの使用
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: PhotoList
  },
  {
    path: "/login",
    component: Login,
    beforeEnter(to, from, next) {
      if (store.getters["auth/check"]) {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: "/500",
    component: SystemError
  }
];

// VueRouterインスタンスを作成
const router = new VueRouter({
  mode: "history",
  routes
});

// app.jsで使用できるようにするためにexportする
export default router;
