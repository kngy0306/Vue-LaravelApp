import "./bootstrap";
import Vue from "vue";
import router from "./router"; // ルーティングの定義をインポート
import store from "./store";
import App from "./App.vue"; // ルートコンポーネントをインポート

const createApp = async () => {
  await store.dispatch("auth/currentUser");

  new Vue({
    el: "#app",
    router,
    store,
    components: { App },
    template: "<App />"
  });
};

createApp();
