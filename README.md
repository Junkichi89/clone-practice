# clone-practice

https://onedarling.site/programming/htmlcss/goodbye-gulp-welcome-webpack/#toc11

上記のサイトを参考に作成

そのままだと動かなかったので、画像圧縮の部分を削除した。

画像圧縮の問題があるので、とりあえず、distディレクトリーの中に自分でimgディレクトリーを作成して、
追加していくしかないなぁ〜

今後、webpackとかgulpで何とかする方法考えようかな。


`npm install --save-dev gulp-sass-glob-use-forward`

これでglobの機能を使えるようにする
https://www.npmjs.com/package/gulp-sass-glob-use-forward

https://parashuto.com/rriver/development/sass-module-system-from-import-to-use#foundation-and-global

変数の使い方やmixinの使い方を把握するため、上記のサイトを参考

globalに設定できるようにglobalディレクトリを作成し、
ファイルの一番上で
`@use "../global" as g;`
gの部分は任意の名前でOKを登録すると

 media queryなら 
 ```
 @include g.md(pc) {
   適用したい内容
 }
 ```

 上記で使えるようになるし、

 `g.$main-color`とかすれば変数も呼び出せる。