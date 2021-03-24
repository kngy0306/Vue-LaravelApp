import Vue from "vue";
import router from "./router"; // ルーティングの定義をインポート
import App from "./App.vue"; // ルートコンポーネントをインポート

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App />"
});
