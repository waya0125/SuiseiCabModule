# SuiseiCabModule
    ■　彗星鉄道車両研究所製作 運転台 Ver1.2　■

    作者     : わや
    Ver      : 1.2.0
    製作垢   : https://twitter.com/Suisei_THFactry
    作者Page : https://twitter.com/wayamoti2015
    作者HP   : https://waya0125.com/
    Discord  : waya#0125

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
二次配布・再配布は禁止です。必ずここのGitHubからダウンロードして下さい。  
著作権はすべて著作者に返還されます。  
クラッシュした場合は教えてください。ただし、導入できない！わからない！などの基礎中の基礎の問題は無視させていただきます。  
連絡する場合は以下のTwitterへ (作者垢へは緊急時以外はお控え下さい。)  
https://twitter.com/Suisei_THFactry

# ◆著作権情報◆
* **Siwo Transportation Public Group**
* **hi03**
* **雪急車輌製造**
* **彗星鉄道総合車両研究所**  
個々のスクリプトのコードは該当著作権が返還されます。

# ◆現在実装はされていないベータコード◆
動くはずなのに動かないのでここにかいておきます。
```
SampleCode SRN125A_beta
switch(S_Rollsign){
    case "0" : Dummy.render(renderer);break;
    case "1" : OutOfService.render(renderer);break;
    case "2" : TestRun.render(renderer);break;
    case "3" : Extra.render(renderer);break;
    case "4" : Dummy.render(renderer);break;
    case "5" : Extra.render(renderer);break;
    case "6" : OutOfService.render(renderer);break;
    case "7" : OutOfService.render(renderer);break;
    case "8" : OutOfService.render(renderer);break;
    case "9" : OutOfService.render(renderer);break;
    case "10" : OutOfService.render(renderer);break;
    case "11" : OutOfService.render(renderer);break;
    case "12" : Dummy.render(renderer);break;
    case "13" : Dummy.render(renderer);break;
    case "14" : Extra.render(renderer);break;
    case "15" : Extra.render(renderer);break;
    default : Dummy.render(renderer);break;
}


SampleCode SR6200_1000
if(S_Rollsign == 0){Dummy.render(renderer);}
    else if(S_Rollsign >= 1 && S_Rollsign <= 4){Local2.render(renderer);}
    else if(S_Rollsign >= 5 && S_Rollsign <= 8){Expless.render(renderer);}
    else if(S_Rollsign >= 9 && S_Rollsign <= 12){SemiExp.render(renderer);}
    else if(S_Rollsign >= 13 && S_Rollsign <= 18){Local2.render(renderer);}
    else if(S_Rollsign >= 19 && S_Rollsign <= 24){Expless.render(renderer);}
    else if(S_Rollsign >= 25 && S_Rollsign <= 29){LimExp.render(renderer);}
    else if(S_Rollsign == 30 && S_Rollsign == 31){RapidLimExp.render(renderer);}
    else if(S_Rollsign == 32){Dummy.render(renderer);}
    else if(S_Rollsign >= 33 && S_Rollsign <= 35){Extra.render(renderer);}
    else if(S_Rollsign == 36){Extra.render(renderer);}
    else if(S_Rollsign == 37){TestRun.render(renderer);}
    else if(S_Rollsign == 38){OutOfService.render(renderer);}
    else{Dummy.render(renderer);}
}
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