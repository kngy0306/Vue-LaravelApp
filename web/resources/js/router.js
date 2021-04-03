import Vue from "vue";
import VueRouter from "vue-router";

// コンポーネントをインストール
import PhotoList from "./pages/PhotoList.vue";
import Login from "./pages/Login.vue";

import store from "./store";

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
  }
];

// VueRouterインスタンスを作成
const router = new VueRouter({
  mode: "history",
  routes
});

// app.jsで使用できるようにするためにexportする
export default router;
