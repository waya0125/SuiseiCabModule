/*=================================
彗星鉄道車両研究所製作 運転台 Ver1.1
著作権はすべてわやに返還されます。
ここに記載されているものを勝手に使用することを禁じます。
使用する際は一言必ずお声掛け下さい。
Created by waya, Powered by Siwo951.
Twitter: @wayamoti2015
Web: https://waya0125.com
=================================*/

importPackage(Packages.org.lwjgl.opengl);
importPackage(Packages.jp.ngt.rtm.render);
importPackage(Packages.jp.ngt.ngtlib.math);
var renderClass = "jp.ngt.rtm.render.VehiclePartsRenderer";

function init(par1, par2) {

    //運転台本体。特に動かすわけでもないのでまとめちゃう。//
    cab = renderer.registerParts(new Parts("Suisei_Cab","Base","Base2","Base3","Base4","Base5","Box",
    "Screen1","Screen2",
    "Screen1_Add","Clock","DoorLampCover",
    "Screen2_Add2","nextStop","nextStopOn","nextStopText",
    "ScreenCover","Screen3_Temp",
    "ScreenCover1","Screen3_Temp1",
    "ScreenCover2","Screen3_Temp2",
    "SP-ATC_Object","Off","P_Power","paternCome","brakeActive","BrakeOff","ATS-P","SP-ATC","None","Down",
    "On","P_Power1","paternCome1","brakeActive1","brakeOff1","ATS-P1","SP-ATC1","None1","Down1",
    "Text","P_PowerText","paternComeText","brakeActiveText","brakeOffText","ATS-P_Text","SP-ATC_Text","unknownText","downText",
    "Notch_Object",
    "MasCon_Object","Notch_Print","MasConPed",
    "Leverser_Object","Leverser","Rotate","Leverser_Print"));

    //ドア開閉確認ランプ//
    cabClose = renderer.registerParts(new Parts("DoorLampGreen"));
    cabOpen = renderer.registerParts(new Parts("DoorLampGlay"));

    //マスコン動かします&左画面ノッチ確認画面も宣言しちゃいます//
    Notch_B8 = renderer.registerParts(new Parts("Mas_B8","B8"));
    Notch_B7 = renderer.registerParts(new Parts("Mas_B7","B7"));
    Notch_B6 = renderer.registerParts(new Parts("Mas_B6","B6"));
    Notch_B5 = renderer.registerParts(new Parts("Mas_B5","B5"));
    Notch_B4 = renderer.registerParts(new Parts("Mas_B4","B4"));
    Notch_B3 = renderer.registerParts(new Parts("Mas_B3","B3"));
    Notch_B2 = renderer.registerParts(new Parts("Mas_B2","B2"));
    Notch_B1 = renderer.registerParts(new Parts("Mas_B1","B1"));
    Notch_N = renderer.registerParts(new Parts("Mas_N","N"));
    Notch_P1 = renderer.registerParts(new Parts("Mas_P1","P1"));
    Notch_P2 = renderer.registerParts(new Parts("Mas_P2","P2"));
    Notch_P3 = renderer.registerParts(new Parts("Mas_P3","P3"));
    Notch_P4 = renderer.registerParts(new Parts("Mas_P4","P4"));
    Notch_P5 = renderer.registerParts(new Parts("Mas_P5","P5"));

    //レバーサーもついでに動かしちゃいます宣言//
    Handle_Mae = renderer.registerParts(new Parts("Handle_Mae"));
    Handle_N = renderer.registerParts(new Parts("Handle_N"));
    Handle_Usiro = renderer.registerParts(new Parts("Handle_Usiro"));

    //ここからはSP-ATC本体。オプションだけどセットだよ//
    SP_ATC_Meter = renderer.registerParts(new Parts("SP-ATC_Meter","SP-ATC_Unit","UP_List","DOWN_List",
    "count_1","count_1x","count_x1","count_1xx","count_x1x","count_xx1"));
    SP_UP0 = renderer.registerParts(new Parts("UP_0"));
    SP_UP15 = renderer.registerParts(new Parts("UP_15"));
    SP_UP25 = renderer.registerParts(new Parts("UP_25"));
    SP_UP45 = renderer.registerParts(new Parts("UP_45"));
    SP_UP55 = renderer.registerParts(new Parts("UP_55"));
    SP_UP65 = renderer.registerParts(new Parts("UP_65"));
    SP_UP75 = renderer.registerParts(new Parts("UP_75"));
    SP_UP90 = renderer.registerParts(new Parts("UP_90"));
    SP_UP100 = renderer.registerParts(new Parts("UP_100"));
    SP_UP110 = renderer.registerParts(new Parts("UP_110"));
    SP_UP120 = renderer.registerParts(new Parts("UP_120"));
    SP_UP130 = renderer.registerParts(new Parts("UP_130"));
    SP_UP140 = renderer.registerParts(new Parts("UP_140"));
    SP_UP150 = renderer.registerParts(new Parts("UP_150"));

    //上段表記//
    SP_DWN0 = renderer.registerParts(new Parts("DOWN_0"));
    SP_DWN1 = renderer.registerParts(new Parts("DOWN_1"));
    SP_DWN2 = renderer.registerParts(new Parts("DOWN_2"));
    SP_DWN3 = renderer.registerParts(new Parts("DOWN_3"));
    SP_DWN4 = renderer.registerParts(new Parts("DOWN_4"));
    SP_DWN5 = renderer.registerParts(new Parts("DOWN_5"));
    SP_DWN6 = renderer.registerParts(new Parts("DOWN_6"));
    SP_DWN7 = renderer.registerParts(new Parts("DOWN_7"));
    SP_DWN8 = renderer.registerParts(new Parts("DOWN_8"));
    SP_DWN9 = renderer.registerParts(new Parts("DOWN_9"));
    SP_DWN0 = renderer.registerParts(new Parts("DOWN_0"));

    //下段表示//
    //一桁//
    SP_DWN1 = renderer.registerParts(new Parts("DOWN_1"));
    SP_DWN2 = renderer.registerParts(new Parts("DOWN_2"));
    SP_DWN3 = renderer.registerParts(new Parts("DOWN_3"));
    SP_DWN4 = renderer.registerParts(new Parts("DOWN_4"));
    SP_DWN5 = renderer.registerParts(new Parts("DOWN_5"));
    SP_DWN6 = renderer.registerParts(new Parts("DOWN_6"));
    SP_DWN7 = renderer.registerParts(new Parts("DOWN_7"));
    SP_DWN8 = renderer.registerParts(new Parts("DOWN_8"));
    SP_DWN9 = renderer.registerParts(new Parts("DOWN_9"));

    //二桁の2桁目//
    SP_DWN1x = renderer.registerParts(new Parts("DOWN_1x"));
    SP_DWN2x = renderer.registerParts(new Parts("DOWN_2x"));
    SP_DWN3x = renderer.registerParts(new Parts("DOWN_3x"));
    SP_DWN4x = renderer.registerParts(new Parts("DOWN_4x"));
    SP_DWN5x = renderer.registerParts(new Parts("DOWN_5x"));
    SP_DWN6x = renderer.registerParts(new Parts("DOWN_6x"));
    SP_DWN7x = renderer.registerParts(new Parts("DOWN_7x"));
    SP_DWN8x = renderer.registerParts(new Parts("DOWN_8x"));
    SP_DWN9x = renderer.registerParts(new Parts("DOWN_9x"));

    //二桁の1桁目//
    SP_DWNx1 = renderer.registerParts(new Parts("DOWN_x1"));
    SP_DWNx2 = renderer.registerParts(new Parts("DOWN_x2"));
    SP_DWNx3 = renderer.registerParts(new Parts("DOWN_x3"));
    SP_DWNx4 = renderer.registerParts(new Parts("DOWN_x4"));
    SP_DWNx5 = renderer.registerParts(new Parts("DOWN_x5"));
    SP_DWNx6 = renderer.registerParts(new Parts("DOWN_x6"));
    SP_DWNx7 = renderer.registerParts(new Parts("DOWN_x7"));
    SP_DWNx8 = renderer.registerParts(new Parts("DOWN_x8"));
    SP_DWNx9 = renderer.registerParts(new Parts("DOWN_x9"));

    //三桁の3桁目//
    SP_DWN1xx = renderer.registerParts(new Parts("DOWN_1xx"));

    //三桁の2桁目//
    SP_DWNx1x = renderer.registerParts(new Parts("DOWN_x1x"));
    SP_DWNx2x = renderer.registerParts(new Parts("DOWN_x2x"));
    SP_DWNx3x = renderer.registerParts(new Parts("DOWN_x3x"));
    SP_DWNx4x = renderer.registerParts(new Parts("DOWN_x4x"));
    SP_DWNx5x = renderer.registerParts(new Parts("DOWN_x5x"));
    SP_DWNx6x = renderer.registerParts(new Parts("DOWN_x6x"));
    SP_DWNx7x = renderer.registerParts(new Parts("DOWN_x7x"));
    SP_DWNx8x = renderer.registerParts(new Parts("DOWN_x8x"));
    SP_DWNx9x = renderer.registerParts(new Parts("DOWN_x9x"));

    //三桁の1桁目//
    SP_DWNxx1 = renderer.registerParts(new Parts("DOWN_xx1"));
    SP_DWNxx2 = renderer.registerParts(new Parts("DOWN_xx2"));
    SP_DWNxx3 = renderer.registerParts(new Parts("DOWN_xx3"));
    SP_DWNxx4 = renderer.registerParts(new Parts("DOWN_xx4"));
    SP_DWNxx5 = renderer.registerParts(new Parts("DOWN_xx5"));
    SP_DWNxx6 = renderer.registerParts(new Parts("DOWN_xx6"));
    SP_DWNxx7 = renderer.registerParts(new Parts("DOWN_xx7"));
    SP_DWNxx8 = renderer.registerParts(new Parts("DOWN_xx8"));
    SP_DWNxx9 = renderer.registerParts(new Parts("DOWN_xx9"));
}

	//通常描画
	if(pass == 0) {
		if (entity !== null) {
			var doorClose = Math.floor(entity.doorMoveL + entity.doorMoveR);
			var notch = entity.getNotch();
			var leverser = entity.getTrainStateData(10);
			if (notch == 1) Notch_P1.render(renderer);
			else if (notch == 2) Notch_P2.render(renderer);
			else if (notch == 3) Notch_P3.render(renderer);
			else if (notch == 4) Notch_P4.render(renderer);
			else if (notch == 5) Notch_P5.render(renderer);
			else if (notch == -1) Notch_B1.render(renderer);
			else if (notch == -2) Notch_B2.render(renderer);
			else if (notch == -3) Notch_B3.render(renderer);
			else if (notch == -4) Notch_B4.render(renderer);
			else if (notch == -5) Notch_B5.render(renderer);
			else if (notch == -6) Notch_B6.render(renderer);
			else if (notch == -7) Notch_B7.render(renderer);
			else if (notch == -8) Notch_B8.render(renderer);
			else Notch_N.render(renderer);
			if (leverser == 0) Handle_Mae.render(renderer);
			else if (leverser == 2) Handle_Usiro.render(renderer);
			else Handle_N.render(renderer);
			if (doorClose == 0) cabClose.render(renderer);
			else cabOpen.render(renderer);
		} else if (entity === null) {
			Handle_N.render(renderer);
			cabClose.render(renderer);
		}
	}