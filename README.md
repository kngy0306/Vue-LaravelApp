## Dockerfile

### php-fpmのfpmとは
FPM(FastCGI Process Manager)FastCGI実装の一つ。  
CGIはサーバにあるプログラムから別のプログラムを呼び出し、その結果をサーバに返す。
Fastとついているのは、初回リクエスト時に起動したプロセスをメモリ上へ保持し、次回同じリクエストはそのメモリ上のプロセスを実行する。



## laravelインストール時
```
$ composer create-project --prefer-dist "laravel/laravel=6.*" .
```

```$ composer create-project --prefer-dist laravel/laravel .```の**--prefer-dist**の意味  
<img width="40%" alt="スクリーンショット 2021-03-23 0 00 54" src="https://user-images.githubusercontent.com/57553474/112010957-209f3b80-8b6b-11eb-9357-bdd4cabfe2e9.png">

### エラー解決ヒント
状況: register画面でregisterボタンを押しても期待通りの遷移をしない。

解決方法: 
<img width="40%" alt="スクリーンショット 2021-03-29 12 32 35" src="https://user-images.githubusercontent.com/57553474/112783798-1c06e580-908b-11eb-9861-418987bf644b.png">


### Vueのcomputedとmethodsの違い
computedは算出プロパティで、計算機能付きのプロパティ。データに処理を与え、プロパティにしたいものは、computedを使用する。  
例）カートの商品の個数を変更すると値段が変わるような処理。

https://dev83.com/vue-computed-methods/

### 論理否定!!
```js
const state = !!user; // userがtruthならtrueになる
```