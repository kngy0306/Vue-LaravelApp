import Vue from "vue";
import VueRouter from "vue-router";

// コンポーネントをインストール
import PhotoList from "./pages/PhotoList.vue";
import Login from "./pages/Login.vue";

// VueRouterプラグインの使用
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: PhotoList
  },
  {
    path: "/login",
    component: Login
  }
];

// VueRouterインスタンスを作成
const router = new VueRouter({
  mode: "history",
  routes
});

// app.jsで使用できるようにするためにexportする
export default router;
