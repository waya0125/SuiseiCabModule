# SuiseiCabModule
    ■　彗星鉄道車両研究所製作 運転台 Ver1.2　■

    作者     : わや
    Ver      : 1.2.0
    製作垢   : https://twitter.com/Suisei_THFactry
    作者Page : https://twitter.com/wayamoti2015
    作者HP   : https://waya0125.com/
    Discord  : waya#0125

# ◆ライセンス◆
この作品には「**ライセンスA**」が適用されます。  
ただし、コードやmqoなどの内蔵データを自己パックとしてリリースする際はTwitterDMまで一声お声掛け下さい。  
ライセンスの詳細は同一リストにあるLICENSEファイル、もしくは "https://waya0125.com/RTM_LICENSE.html" を必ずご参照下さい。

# ◆仕様書◆
このパックは「アドオン」です。そのままでは使えません。  
前提条件としてある程度のRender.jsを触れる知識とプログラミングができることが前提となります。  
仮に言ってることがよくわかんねぇ！って方はお飾り用の運転台(動かない, 見た目だけのもの)が  
付属されているのでそちらをご利用下さい。

# ◆導入方法◆
下記の導入方法は **"Render.js"** が**実装されている**車両向けです。
* 付属のRender.jsにすべてが記載されております。その内容を搭載予定の車両にコピーペーストして下さい。(長々としているのと、結構見ずらいのはご了承下さい。)
* モデルを乗務員室の運転台が設置される位置に移動させて下さい。なおサイズはminiが真ん中貫通扉、無印が貫通扉なしです。JRは左ワンハン、TはT字型ワンハンです。
* 動作したら導入完了です。お疲れさまです。  

下記の導入方法は **"Render.js"** が**実装されていない**車両向けです。
* [NonRender]と書かれているmqoを放り投げて下さい。そしたら導入完了です。

# ◆注意事項◆
二次配布・再配布は禁止です。必ずここのGitHub、もしくはミラーサイト(https://ux.getuploader.com/Suisei_RTM/)からダウンロードして下さい。  
著作権はすべて著作者に返還されます。  
クラッシュした場合は教えてください。ただし、導入できない！わからない！などの基礎中の基礎の問題は無視させていただきます。  
連絡する場合は以下のTwitterへ (作者垢へは緊急時以外はお控え下さい。)  
https://twitter.com/Suisei_THFactry  
なおこのコード、モデル等を追記することで生じる障害やコンピュータ等の破損、プログラムが動作しない等、ユーザー個々に生じた問題に関して一切責任を負いません。予めご了承下さい。  
またこの運転台を自己のプログラムの参考にしたい、使用したいなどの要望がある場合はTwitterDMへご一報を下さい。宜しくお願いします。

# ◆著作権情報◆
製造元  
* **彗星鉄道総合車両研究所**  

コード提供  
* **Siwo Transportation Public Group**
* **hi03**
* **雪急車輌製造**
著作権はすべて該当作者にそれぞれ返還されます。

# ◆方向幕の設定方法◆
方向幕がどの種別なのか、表示したくなりますよね？そんなときはこのコードをsuiseihud内の任意の場所に記載すれば動いちゃいます。  
ちなみに、これはScriptがかける技術がないと難しいです。  
以下の内容にすべて当てはまれば問題ないと思います  
* 0から始まること
* 大なり小なりｲｺｰﾙｲｺｰﾙが理解できること
* Render.JSが書けるor書いたことがある
* このコードが読める(理解できる)
もし書いてあることが理解できない人は動かなくする危険性が非常に高いので**絶対に**やめましょう。  
このコードを追記することで発生するコンピュータ等の破損等は一切責任を負いません。予めご了承下さい。
```js
SampleCode STPG2000
if (S_Rollsign == 0) {Dummy.render(renderer);}
    else if (S_Rollsign == 1) {Local1.render(renderer);}
    else if (S_Rollsign == 2) {Local2.render(renderer);}
    else if (S_Rollsign == 3) {Rapid.render(renderer);}
    else if (S_Rollsign == 4) {SpecialRapid.render(renderer);}
    else if (S_Rollsign == 5) {RegionalRapid.render(renderer);}
    else if (S_Rollsign == 6) {Expless.render(renderer);}
    else if (S_Rollsign == 7) {LimExp.render(renderer);}
    else if (S_Rollsign == 8) {SemiExp.render(renderer);}
    else if (S_Rollsign == 9) {SemiSExp.render(renderer);}
    else if (S_Rollsign == 10) {RapidExpless.render(renderer);}
    else if (S_Rollsign == 11) {RapidLimExp.render(renderer);}
    else if (S_Rollsign == 12) {ComRapid.render(renderer);}
    else if (S_Rollsign == 13) {ComExp.render(renderer);}
    else if (S_Rollsign == 14) {ComLimExp.render(renderer);}
    else if (S_Rollsign == 15) {ComSemiExp.render(renderer);}
    else if (S_Rollsign == 16) {ComSemiSExp.render(renderer);}
    else if (S_Rollsign == 17) {ComRapidExp.render(renderer);}
    else if (S_Rollsign == 18) {ComRapLimExp.render(renderer);}
    else if (S_Rollsign >= 19 && S_Rollsign <= 21) {Direct.render(renderer);}
    else if (S_Rollsign == 22) {OutOfService.render(renderer);}
    else if (S_Rollsign == 23) {TestRun.render(renderer);}
    else if (S_Rollsign == 24) {Extra.render(renderer);}
    else if (S_Rollsign == 25) {Dantai.render(renderer);}
    else if (S_Rollsign == 26) {OutOfService.render(renderer);}
    else if (S_Rollsign == 27) {Direct.render(renderer);}
else {Dummy.render(renderer);}
```
参考までに、用意されている種別は以下のとおりです。
```
    "Local1" (各駅停車)
    "Local2" (各停)
    "Local3" (普通)
    "Local4" (ワンマン)
    "SemiExp" (準急)
    "Expless" (急行)
    "Rapid" (快速)
    "LimExp" (特急)
    "RapidLimExp" (快特)
    "SpecialRapid" (特別快速)
    "RegionalRapid" (区間快速)
    "SemiSExp" (準特急)
    "RapidExpless" (快速急行)
    "ComExp" (通勤急行)
    "ComRapid" (通勤快速)
    "ComLimExp" (通勤特急)
    "ComSemiExp" (通勤準急)
    "ComSemiSExp" (通勤準特急)
    "ComRapidExp" (通勤快急)
    "ComRapLimExp" (通勤快特)
    "OutOfService" (回送)
    "Extra" (臨時)
    "Dantai" (団体)
    "Direct" (直通)
    "TestRun" (試運転)
```

# ◆更新履歴◆  
### Version 1.2
正規リリースできそうな感じになりました。  
速度計が動き、車内状態が表示されるようになりました。  
ただ改善すべき点はまだあるので今後もアプデしていきます。

### Version 1.1
結構大きなアプデ(betaのため公開はされていません)  
ノッチが表示され、マスコンが動くようになりました。

### Version 1.0
初期リリース(betaのため公開はされていません)  
ゴミでした。

<随時追記>
