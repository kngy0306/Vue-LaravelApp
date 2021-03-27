import "./bootstrap";
import Vue from "vue";
import router from "./router"; // ルーティングの定義をインポート
import store from "./store";
import App from "./App.vue"; // ルートコンポーネントをインポート

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App />"
});
