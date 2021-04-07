/*=================================
彗星鉄道車両研究所製作 運転台 Ver1.3
著作権はすべてわやに返還されます。
ここに記載されているものを勝手に使用することを禁じます。
使用する際は必ず一言必ずお声掛け下さい。
V1.2とV1.3の製品に互換性はありませんので予めご了承ください。
Created by waya, Powered by Siwo951, hi03 and 真冬雪々.
Twitter: @wayamoti2015
Web: https://waya0125.com
=================================*/

importPackage(Packages.jp.ngt.rtm);               //RTMCore
importPackage(Packages.jp.ngt.rtm.render);        //RTM用 Render関連
importPackage(Packages.jp.ngt.ngtlib.util);       //NGTUtil NGTUtilClient
importPackage(Packages.jp.ngt.ngtlib.math);       //計算機能
importPackage(Packages.org.lwjgl.opengl);         //OpenGL Render関連
var renderClass = "jp.ngt.rtm.render.VehiclePartsRenderer";

function init(par1, par2) {
    //運転台本体。特に動かすわけでもないのでまとめちゃう。//
    cab = renderer.registerParts(new Parts(
        "Suisei_Cab","Base","Base1_new","Base2","Base3","Base4","Base5","Box",
        "Bogo_Musen","Display",
        "DM_Sys","DeadMan_System","DeadMan_System_Push",
        "Screen1","Screen2",
        "Screen1_Add","Clock","DoorLampCover",
        "Screen2_Add2","nextStop","nextStopOn","nextStopText",
        "ScreenCover","Screen3_Temp",
        "ScreenCover1","Screen3_Temp1",
        "ScreenCover2","Screen3_Temp2",
        "Shubetsu_Object",
        "Notch_Object",
        "Speed_Object",
        "Train_Checker_Object","Train_Lamp_Check","Face_Lamp_Check","Kaisei_Check","Panta_Check",
        "Real_Time_Object","RunMode_Check",
        "MasCon_Object","Notch_Print","MasConPed",
        "Leverser_Object","Leverser","Rotate","Leverser_Print"
    ));
    //"JR_OM","JR_OneMascon","JR_OneMascon_Push"//

    Dummy = renderer.registerParts(new Parts("Dummy"));

    //左画面ノッチ確認画面も宣言しちゃいます//
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

    //スピード用の宣言。略してスピード宣言。光のごとく宣言するよ。なんちゃって。
    mph = renderer.registerParts(new Parts("mph"));
    km_h = renderer.registerParts(new Parts("km_h"));

    S_0km = renderer.registerParts(new Parts("S_0km"));
    S_1km = renderer.registerParts(new Parts("S_1km"));
    S_2km = renderer.registerParts(new Parts("S_2km"));
    S_3km = renderer.registerParts(new Parts("S_3km"));
    S_4km = renderer.registerParts(new Parts("S_4km"));
    S_5km = renderer.registerParts(new Parts("S_5km"));
    S_6km = renderer.registerParts(new Parts("S_6km"));
    S_7km = renderer.registerParts(new Parts("S_7km"));
    S_8km = renderer.registerParts(new Parts("S_8km"));
    S_9km = renderer.registerParts(new Parts("S_9km"));
    S_00km = renderer.registerParts(new Parts("S_00km"));
    S_10km = renderer.registerParts(new Parts("S_10km"));
    S_20km = renderer.registerParts(new Parts("S_20km"));
    S_30km = renderer.registerParts(new Parts("S_30km"));
    S_40km = renderer.registerParts(new Parts("S_40km"));
    S_50km = renderer.registerParts(new Parts("S_50km"));
    S_60km = renderer.registerParts(new Parts("S_60km"));
    S_70km = renderer.registerParts(new Parts("S_70km"));
    S_80km = renderer.registerParts(new Parts("S_80km"));
    S_90km = renderer.registerParts(new Parts("S_90km"));
    S_100km = renderer.registerParts(new Parts("S_100km","S_00km"));
    S_110km = renderer.registerParts(new Parts("S_100km","S_10km"));
    S_120km = renderer.registerParts(new Parts("S_100km","S_20km"));
    S_130km = renderer.registerParts(new Parts("S_100km","S_30km"));
    S_140km = renderer.registerParts(new Parts("S_100km","S_40km"));
    S_150km = renderer.registerParts(new Parts("S_100km","S_50km"));
    S_160km = renderer.registerParts(new Parts("S_100km","S_60km"));
    S_170km = renderer.registerParts(new Parts("S_100km","S_70km"));
    S_180km = renderer.registerParts(new Parts("S_100km","S_80km"));
    S_190km = renderer.registerParts(new Parts("S_100km","S_90km"));

    S_200km = renderer.registerParts(new Parts("S_200km","S_00km"));
    S_210km = renderer.registerParts(new Parts("S_200km","S_10km"));
    S_220km = renderer.registerParts(new Parts("S_200km","S_20km"));
    S_230km = renderer.registerParts(new Parts("S_200km","S_30km"));
    S_240km = renderer.registerParts(new Parts("S_200km","S_40km"));
    S_250km = renderer.registerParts(new Parts("S_200km","S_50km"));
    S_260km = renderer.registerParts(new Parts("S_200km","S_60km"));
    S_270km = renderer.registerParts(new Parts("S_200km","S_70km"));
    S_280km = renderer.registerParts(new Parts("S_200km","S_80km"));
    S_290km = renderer.registerParts(new Parts("S_200km","S_90km"));

    S_300km = renderer.registerParts(new Parts("S_300km","S_00km"));
    S_310km = renderer.registerParts(new Parts("S_300km","S_10km"));
    S_320km = renderer.registerParts(new Parts("S_300km","S_20km"));
    S_330km = renderer.registerParts(new Parts("S_300km","S_30km"));
    S_340km = renderer.registerParts(new Parts("S_300km","S_40km"));
    S_350km = renderer.registerParts(new Parts("S_300km","S_50km"));
    S_360km = renderer.registerParts(new Parts("S_300km","S_60km"));
    S_370km = renderer.registerParts(new Parts("S_300km","S_70km"));
    S_380km = renderer.registerParts(new Parts("S_300km","S_80km"));
    S_390km = renderer.registerParts(new Parts("S_300km","S_90km"));

    S_400km = renderer.registerParts(new Parts("S_400km","S_00km"));
    S_410km = renderer.registerParts(new Parts("S_400km","S_10km"));
    S_420km = renderer.registerParts(new Parts("S_400km","S_20km"));
    S_430km = renderer.registerParts(new Parts("S_400km","S_30km"));
    S_440km = renderer.registerParts(new Parts("S_400km","S_40km"));
    S_450km = renderer.registerParts(new Parts("S_400km","S_50km"));
    S_460km = renderer.registerParts(new Parts("S_400km","S_60km"));
    S_470km = renderer.registerParts(new Parts("S_400km","S_70km"));
    S_480km = renderer.registerParts(new Parts("S_400km","S_80km"));
    S_490km = renderer.registerParts(new Parts("S_400km","S_90km"));

    S_500km = renderer.registerParts(new Parts("S_500km","S_00km"));
    S_510km = renderer.registerParts(new Parts("S_500km","S_10km"));
    S_520km = renderer.registerParts(new Parts("S_500km","S_20km"));
    S_530km = renderer.registerParts(new Parts("S_500km","S_30km"));
    S_540km = renderer.registerParts(new Parts("S_500km","S_40km"));
    S_550km = renderer.registerParts(new Parts("S_500km","S_50km"));
    S_560km = renderer.registerParts(new Parts("S_500km","S_60km"));
    S_570km = renderer.registerParts(new Parts("S_500km","S_70km"));
    S_580km = renderer.registerParts(new Parts("S_500km","S_80km"));
    S_590km = renderer.registerParts(new Parts("S_500km","S_90km"));

    S_600km = renderer.registerParts(new Parts("S_600km","S_00km"));
    S_610km = renderer.registerParts(new Parts("S_600km","S_10km"));
    S_620km = renderer.registerParts(new Parts("S_600km","S_20km"));
    S_630km = renderer.registerParts(new Parts("S_600km","S_30km"));
    S_640km = renderer.registerParts(new Parts("S_600km","S_40km"));
    S_650km = renderer.registerParts(new Parts("S_600km","S_50km"));
    S_660km = renderer.registerParts(new Parts("S_600km","S_60km"));
    S_670km = renderer.registerParts(new Parts("S_600km","S_70km"));
    S_680km = renderer.registerParts(new Parts("S_600km","S_80km"));
    S_690km = renderer.registerParts(new Parts("S_600km","S_90km"));

    S_700km = renderer.registerParts(new Parts("S_700km","S_00km"));
    S_710km = renderer.registerParts(new Parts("S_700km","S_10km"));
    S_720km = renderer.registerParts(new Parts("S_700km","S_20km"));
    S_730km = renderer.registerParts(new Parts("S_700km","S_30km"));
    S_740km = renderer.registerParts(new Parts("S_700km","S_40km"));
    S_750km = renderer.registerParts(new Parts("S_700km","S_50km"));
    S_760km = renderer.registerParts(new Parts("S_700km","S_60km"));
    S_770km = renderer.registerParts(new Parts("S_700km","S_70km"));
    S_780km = renderer.registerParts(new Parts("S_700km","S_80km"));
    S_790km = renderer.registerParts(new Parts("S_700km","S_90km"));

    S_800km = renderer.registerParts(new Parts("S_800km","S_00km"));
    S_810km = renderer.registerParts(new Parts("S_800km","S_10km"));
    S_820km = renderer.registerParts(new Parts("S_800km","S_20km"));
    S_830km = renderer.registerParts(new Parts("S_800km","S_30km"));
    S_840km = renderer.registerParts(new Parts("S_800km","S_40km"));
    S_850km = renderer.registerParts(new Parts("S_800km","S_50km"));
    S_860km = renderer.registerParts(new Parts("S_800km","S_60km"));
    S_870km = renderer.registerParts(new Parts("S_800km","S_70km"));
    S_880km = renderer.registerParts(new Parts("S_800km","S_80km"));
    S_890km = renderer.registerParts(new Parts("S_800km","S_90km"));

    S_900km = renderer.registerParts(new Parts("S_900km","S_00km"));
    S_910km = renderer.registerParts(new Parts("S_900km","S_10km"));
    S_920km = renderer.registerParts(new Parts("S_900km","S_20km"));
    S_930km = renderer.registerParts(new Parts("S_900km","S_30km"));
    S_940km = renderer.registerParts(new Parts("S_900km","S_40km"));
    S_950km = renderer.registerParts(new Parts("S_900km","S_50km"));
    S_960km = renderer.registerParts(new Parts("S_900km","S_60km"));
    S_970km = renderer.registerParts(new Parts("S_900km","S_70km"));
    S_980km = renderer.registerParts(new Parts("S_900km","S_80km"));
    S_990km = renderer.registerParts(new Parts("S_900km","S_90km"));

    //新CS-ATC刻みのATC宣言、刻みが細かいから色々できるよ
    CSATC_Back = renderer.registerParts(new Parts("CSATC_Back"));
    CSATC_0 = renderer.registerParts(new Parts("CSATC_0"));
    CSATC_10 = renderer.registerParts(new Parts("CSATC_10"));
    CSATC_15 = renderer.registerParts(new Parts("CSATC_15"));
    CSATC_20 = renderer.registerParts(new Parts("CSATC_20"));
    CSATC_25 = renderer.registerParts(new Parts("CSATC_25"));
    CSATC_30 = renderer.registerParts(new Parts("CSATC_30"));
    CSATC_35 = renderer.registerParts(new Parts("CSATC_35"));
    CSATC_40 = renderer.registerParts(new Parts("CSATC_40"));
    CSATC_45 = renderer.registerParts(new Parts("CSATC_45"));
    CSATC_50 = renderer.registerParts(new Parts("CSATC_50"));
    CSATC_55 = renderer.registerParts(new Parts("CSATC_55"));
    CSATC_60 = renderer.registerParts(new Parts("CSATC_60"));
    CSATC_65 = renderer.registerParts(new Parts("CSATC_65"));
    CSATC_70 = renderer.registerParts(new Parts("CSATC_70"));
    CSATC_75 = renderer.registerParts(new Parts("CSATC_75"));
    CSATC_80 = renderer.registerParts(new Parts("CSATC_80"));
    CSATC_85 = renderer.registerParts(new Parts("CSATC_85"));
    CSATC_90 = renderer.registerParts(new Parts("CSATC_90"));
    CSATC_95 = renderer.registerParts(new Parts("CSATC_95"));
    CSATC_100 = renderer.registerParts(new Parts("CSATC_100"));
    CSATC_105 = renderer.registerParts(new Parts("CSATC_105"));
    CSATC_110 = renderer.registerParts(new Parts("CSATC_110"));
    CSATC_115 = renderer.registerParts(new Parts("CSATC_115"));
    CSATC_120 = renderer.registerParts(new Parts("CSATC_120"));
    CSATC_130 = renderer.registerParts(new Parts("CSATC_130"));
    CSATC_140 = renderer.registerParts(new Parts("CSATC_140"));
    CSATC_150 = renderer.registerParts(new Parts("CSATC_150"));
    CSATC_160 = renderer.registerParts(new Parts("CSATC_160"));
    CSATC_170 = renderer.registerParts(new Parts("CSATC_170"));
    CSATC_180 = renderer.registerParts(new Parts("CSATC_180"));
    CSATC_190 = renderer.registerParts(new Parts("CSATC_190"));
    CSATC_200 = renderer.registerParts(new Parts("CSATC_200"));

    //"リアルタイムの" 時間表示です。なにかとマイクラよりリアルタイムのほうがわかりやすいよね
    H_00 = renderer.registerParts(new Parts("H_00"));
    H_01 = renderer.registerParts(new Parts("H_01"));
    H_02 = renderer.registerParts(new Parts("H_02"));
    H_03 = renderer.registerParts(new Parts("H_03"));
    H_04 = renderer.registerParts(new Parts("H_04"));
    H_05 = renderer.registerParts(new Parts("H_05"));
    H_06 = renderer.registerParts(new Parts("H_06"));
    H_07 = renderer.registerParts(new Parts("H_07"));
    H_08 = renderer.registerParts(new Parts("H_08"));
    H_09 = renderer.registerParts(new Parts("H_09"));
    H_10 = renderer.registerParts(new Parts("H_10"));
    H_11 = renderer.registerParts(new Parts("H_11"));
    H_12 = renderer.registerParts(new Parts("H_12"));
    H_13 = renderer.registerParts(new Parts("H_13"));
    H_14 = renderer.registerParts(new Parts("H_14"));
    H_15 = renderer.registerParts(new Parts("H_15"));
    H_16 = renderer.registerParts(new Parts("H_16"));
    H_17 = renderer.registerParts(new Parts("H_17"));
    H_18 = renderer.registerParts(new Parts("H_18"));
    H_19 = renderer.registerParts(new Parts("H_19"));
    H_20 = renderer.registerParts(new Parts("H_20"));
    H_21 = renderer.registerParts(new Parts("H_21"));
    H_22 = renderer.registerParts(new Parts("H_22"));
    H_23 = renderer.registerParts(new Parts("H_23"));
    H_24 = renderer.registerParts(new Parts("H_24"));
    
    m_0x = renderer.registerParts(new Parts("m_0x"));
    m_1x = renderer.registerParts(new Parts("m_1x"));
    m_2x = renderer.registerParts(new Parts("m_2x"));
    m_3x = renderer.registerParts(new Parts("m_3x"));
    m_4x = renderer.registerParts(new Parts("m_4x"));
    m_5x = renderer.registerParts(new Parts("m_5x"));
    m_6x = renderer.registerParts(new Parts("m_6x"));
    m_x0 = renderer.registerParts(new Parts("m_x0"));
    m_x1 = renderer.registerParts(new Parts("m_x1"));
    m_x2 = renderer.registerParts(new Parts("m_x2"));
    m_x3 = renderer.registerParts(new Parts("m_x3"));
    m_x4 = renderer.registerParts(new Parts("m_x4"));
    m_x5 = renderer.registerParts(new Parts("m_x5"));
    m_x6 = renderer.registerParts(new Parts("m_x6"));
    m_x7 = renderer.registerParts(new Parts("m_x7"));
    m_x8 = renderer.registerParts(new Parts("m_x8"));
    m_x9 = renderer.registerParts(new Parts("m_x9"));
    
    s_0x = renderer.registerParts(new Parts("s_0x"));
    s_1x = renderer.registerParts(new Parts("s_1x"));
    s_2x = renderer.registerParts(new Parts("s_2x"));
    s_3x = renderer.registerParts(new Parts("s_3x"));
    s_4x = renderer.registerParts(new Parts("s_4x"));
    s_5x = renderer.registerParts(new Parts("s_5x"));
    s_6x = renderer.registerParts(new Parts("s_6x"));
    s_x0 = renderer.registerParts(new Parts("s_x0"));
    s_x1 = renderer.registerParts(new Parts("s_x1"));
    s_x2 = renderer.registerParts(new Parts("s_x2"));
    s_x3 = renderer.registerParts(new Parts("s_x3"));
    s_x4 = renderer.registerParts(new Parts("s_x4"));
    s_x5 = renderer.registerParts(new Parts("s_x5"));
    s_x6 = renderer.registerParts(new Parts("s_x6"));
    s_x7 = renderer.registerParts(new Parts("s_x7"));
    s_x8 = renderer.registerParts(new Parts("s_x8"));
    s_x9 = renderer.registerParts(new Parts("s_x9"));

    //マスコンレバーサーもついでに動かしちゃいます宣言//
    MasCon = renderer.registerParts(new Parts("JR_OneMascon","JR_OneMascon_Push","MasCon"));
    Handle = renderer.registerParts(new Parts("Handle"));

    //ドア開閉確認ランプ//
    cabClose = renderer.registerParts(new Parts("DoorLampGreen","DoorLamp_true"));
    cabOpen = renderer.registerParts(new Parts("DoorLampGlay","DoorLamp_false"));
    cabHDClose = renderer.registerParts(new Parts("HomeDoorLamp_true"));
    cabHDOpen = renderer.registerParts(new Parts("HomeDoorLamp_false"));

    //種別表示。車両の種別に合わせて任意の種別を合わせて下さい。
    Local1 = renderer.registerParts(new Parts("Local1"));
    Local2 = renderer.registerParts(new Parts("Local2"));
    Local3 = renderer.registerParts(new Parts("Local3"));
    Local4 = renderer.registerParts(new Parts("Local4"));
    SemiExp = renderer.registerParts(new Parts("SemiExp"));
    Expless = renderer.registerParts(new Parts("Expless"));
    Rapid = renderer.registerParts(new Parts("Rapid"));
    LimExp = renderer.registerParts(new Parts("LimExp"));
    RapidLimExp = renderer.registerParts(new Parts("RapidLimExp"));
    SpecialRapid = renderer.registerParts(new Parts("SpecialRapid"));
    RegionalRapid = renderer.registerParts(new Parts("RegionalRapid"));
    SemiSExp = renderer.registerParts(new Parts("SemiSExp"));
    RapidExpless = renderer.registerParts(new Parts("RapidExpless"));
    ComExp = renderer.registerParts(new Parts("ComExp"));
    ComRapid = renderer.registerParts(new Parts("ComRapid"));
    ComLimExp = renderer.registerParts(new Parts("ComLimExp"));
    ComSemiExp = renderer.registerParts(new Parts("ComSemiExp"));
    ComSemiSExp = renderer.registerParts(new Parts("ComSemiSExp"));
    ComRapidExp = renderer.registerParts(new Parts("ComRapidExp"));
    ComRapLimExp = renderer.registerParts(new Parts("ComRapLimExp"));
    KUSOKAISOKU = renderer.registerParts(new Parts("KUSOKAISOKU"));
    OutOfService = renderer.registerParts(new Parts("OutOfService"));
    Extra = renderer.registerParts(new Parts("Extra"));
    Dantai = renderer.registerParts(new Parts("Dantai"));
    Direct = renderer.registerParts(new Parts("Direct"));
    TestRun = renderer.registerParts(new Parts("TestRun"));

    //両数表示。RTMの仕様とまぁ現実的な両数的に考えて16を上限としてます。
    car1 = renderer.registerParts(new Parts("1car"));
    car2 = renderer.registerParts(new Parts("2car"));
    car3 = renderer.registerParts(new Parts("3car"));
    car4 = renderer.registerParts(new Parts("4car"));
    car5 = renderer.registerParts(new Parts("5car"));
    car6 = renderer.registerParts(new Parts("6car"));
    car7 = renderer.registerParts(new Parts("7car"));
    car8 = renderer.registerParts(new Parts("8car"));
    car9 = renderer.registerParts(new Parts("9car"));
    car10 = renderer.registerParts(new Parts("10car"));
    car11 = renderer.registerParts(new Parts("11car"));
    car12 = renderer.registerParts(new Parts("12car"));
    car13 = renderer.registerParts(new Parts("13car"));
    car14 = renderer.registerParts(new Parts("14car"));
    car15 = renderer.registerParts(new Parts("15car"));
    car16 = renderer.registerParts(new Parts("16car"));

    //加速計側のHUD
    miniHUD_font = renderer.registerParts(new Parts(
        "HDBlock_font","HDSetup_font","HDClose_font","DRClose_font",
        "TASC_B_font","TASC_Pa_font","TASC_Po_font",
        "StopperBrake_font","SecurityBrake_font","EmergencyBrake_font",
        "PaternClose_font","PaternOccurrences_font",
        "ATSPower_font","ATSAction_font","ATCPower_font","ATOPower_font"
    ));
    HDBlock_true = renderer.registerParts(new Parts("HDBlock_true"));
    HDSetup_true = renderer.registerParts(new Parts("HDSetup_true"));
    HDClose_true = renderer.registerParts(new Parts("HDClose_true"));
    DRClose_true = renderer.registerParts(new Parts("DRClose_true"));
    TASC_B_true = renderer.registerParts(new Parts("TASC_B_true"));
    TASC_Pa_true = renderer.registerParts(new Parts("TASC_Pa_true"));
    TASC_Po_true = renderer.registerParts(new Parts("TASC_Po_true"));
    StopperBrake_true = renderer.registerParts(new Parts("StopperBrake_true"));
    SecurityBrake_true = renderer.registerParts(new Parts("SecurityBrake_true"));
    EmergencyBrake_true = renderer.registerParts(new Parts("EmergencyBrake_true"));
    PaternClose_font = renderer.registerParts(new Parts("PaternClose_font"));
    PaternOccurrences_font = renderer.registerParts(new Parts("PaternOccurrences_font"));
    ATSPower_true = renderer.registerParts(new Parts("ATSPower_true"));
    ATSAction_true = renderer.registerParts(new Parts("ATSAction_true"));
    ATCPower_true = renderer.registerParts(new Parts("ATCPower_true"));
    ATOPower_true = renderer.registerParts(new Parts("ATOPower_true"));

    //ATC関連のHUD
    Signal_Object = renderer.registerParts(new Parts("Signal_Object"));
    AdvanceNotice_true = renderer.registerParts(new Parts("AdvanceNotice_true"));
    AdvanceNotice_false = renderer.registerParts(new Parts("AdvanceNotice_false"));
    Signal_RED = renderer.registerParts(new Parts("Signal_RED"));
    Signal_GLEEN = renderer.registerParts(new Parts("Signal_GLEEN"));
    Signal_P_true = renderer.registerParts(new Parts("Signal_P_true"));
    Signal_P_false = renderer.registerParts(new Parts("Signal_P_false"));
    Signal_Stop_true = renderer.registerParts(new Parts("Signal_Stop_true"));
    Signal_Stop_false = renderer.registerParts(new Parts("Signal_Stop_false"));

    //ブレーキ関連のやつ。回転軸管理めんどい
    BrakeBar_Object = renderer.registerParts(new Parts("BrakeBar_Object"));
    BC_1 = renderer.registerParts(new Parts("BC_1"));
    BC_2 = renderer.registerParts(new Parts("BC_2"));
    MR_1 = renderer.registerParts(new Parts("MR_1"));
    MR_2 = renderer.registerParts(new Parts("MR_2"));
    BC_bar = renderer.registerParts(new Parts("BC_bar"));
    MR_bar = renderer.registerParts(new Parts("MR_bar"));

    //ATS系のオブジェクトです。Ps互換が搭載されてます。
    P_Bar = renderer.registerParts(new Parts("P_Bar"));
    Ps_Bar01 = renderer.registerParts(new Parts("Ps_Bar01"));
    Ps_Bar01 = renderer.registerParts(new Parts("Ps_Bar02"));
    ATS_0 = renderer.registerParts(new Parts("ATS_0"));
    ATS_75 = renderer.registerParts(new Parts("ATS_75"));
    ATS_100 = renderer.registerParts(new Parts("ATS_100"));
    ATS_150 = renderer.registerParts(new Parts("ATS_150"));
    ATS_200 = renderer.registerParts(new Parts("ATS_200"));
    ATSPs_false = renderer.registerParts(new Parts("ATSPs_false"));
    ATSPs_true = renderer.registerParts(new Parts("ATSPs_true"));
    ATSP_false = renderer.registerParts(new Parts("ATSP_false"));
    ATSP_true = renderer.registerParts(new Parts("ATSP_true"));
    ATC_false = renderer.registerParts(new Parts("ATC_false"));
    ATC_true = renderer.registerParts(new Parts("ATC_true"));
    ATSKaihou_false = renderer.registerParts(new Parts("ATSKaihou_false"));
    ATSKaihou_true = renderer.registerParts(new Parts("ATSKaihou_true"));
    ATSKoshou_false = renderer.registerParts(new Parts("ATSKoshou_false"));
    ATSKoshou_true = renderer.registerParts(new Parts("ATSKoshou_true"));

    //電車の状態表示機。前面ライトはついてる？パンタ上がってる？などなど。
    TLamp_true = renderer.registerParts(new Parts("TLamp_true"));
    TLamp_false = renderer.registerParts(new Parts("TLamp_false"));
    FLamp_true = renderer.registerParts(new Parts("FLamp_true"));
    FLamp_false = renderer.registerParts(new Parts("FLamp_false"));
    FLamp_all = renderer.registerParts(new Parts("FLamp_all"));
    KLamp_true = renderer.registerParts(new Parts("K_true"));
    KLamp_false = renderer.registerParts(new Parts("K_false"));
    panta_true = renderer.registerParts(new Parts("panta_Up"));
    panta_false = renderer.registerParts(new Parts("panta_Down"));
    RunMode_Slow = renderer.registerParts(new Parts("RunMode_Slow"));
    RunMode_Normal = renderer.registerParts(new Parts("RunMode_Normal"));
    RunMode_High = renderer.registerParts(new Parts("RunMode_High"));
    BoostMode_true = renderer.registerParts(new Parts("BoostMode_true"));
    BoostMode_false = renderer.registerParts(new Parts("BoostMode_false"));
}

//#################### Render ####################//
function render(entity, pass, par3) {
    //通常描画
	if(pass == 0){
		cab.render(renderer);
        miniHUD_font.render(renderer);
        render_suiseihud(entity);
        render_Clock(entity);

        if(entity !== null) {
            var doorClose = Math.floor(entity.doorMoveL + entity.doorMoveR);
            var notch = entity.getNotch();
            var leverser = entity.getTrainStateData(10);
            if(notch == 1) Notch_P1.render(renderer);
            else if(notch == 2) Notch_P2.render(renderer);
            else if(notch == 3) Notch_P3.render(renderer);
            else if(notch == 4) Notch_P4.render(renderer);
            else if(notch == 5) Notch_P5.render(renderer);
            else if(notch == -1) Notch_B1.render(renderer);
            else if(notch == -2) Notch_B2.render(renderer);
            else if(notch == -3) Notch_B3.render(renderer);
            else if(notch == -4) Notch_B4.render(renderer);
            else if(notch == -5) Notch_B5.render(renderer);
            else if(notch == -6) Notch_B6.render(renderer);
            else if(notch == -7) Notch_B7.render(renderer);
            else if(notch == -8) Notch_B8.render(renderer);
            else Notch_N.render(renderer);
            if(leverser == 0) Handle_Mae.render(renderer);
            else if (leverser == 2) Handle_Usiro.render(renderer);
            else Handle_N.render(renderer);
            if(doorClose == 0) cabClose.render(renderer);
            else cabOpen.render(renderer);
        }else if (entity === null){
            Handle_N.render(renderer);
            cabClose.render(renderer);
        }
	}
	GL11.glPopMatrix();
}
//#################### ここまで Render ####################//

//#################### 彗星鉄道 運転台 HUD スクリプト ####################//
function render_suiseihud(entity) {
    if (entity == null) return; //"entity.~"の情報取得メソッドを使うと、車両選択画面でクラッシュするのを防ぐ。
    var dataMap = entity.getResourceState().getDataMap();
    // 車両の状態表示var宣言
    //###詳細は"https://waya0125.com/api.png"を参照###//
    var S_Progress = entity.getTrainStateData(0),
        S_notch = entity.getTrainStateData(1),
        S_Signal = entity.getTrainStateData(2),
        S_Lightdata = entity.getTrainStateData(5),
        S_Pantadata = entity.getTrainStateData(6),
        S_Rollsign = entity.getTrainStateData(8),
        S_Announce = entity.getTrainStateData(9),
        S_Gyakuten = entity.getTrainStateData(10),
        S_Syanaitou = entity.getTrainStateData(11),
        S_CarSize = (entity.getFormation().size() - 1),
        S_Speed = entity.getSpeed() * 72.0,
        S_BC = entity.brakeCount * 3,
        S_MR = (((entity.brakeAirCount) + 216) * (100 / 432)) + 700,
        S_DoorL = entity.doorMoveL / 60, //左ドア状態取得
        S_DoorR = entity.doorMoveR / 60; //右ドア状態取得

    if (dataMap.getBoolean("mph")) {
        S_Speed = S_Speed / 1.609344;
        mph.render(renderer);
    }
    else kmph.render(renderer);

    // 車両設定用var宣言
    var S_dataMap = entity.getResourceState().getDataMap(),
        S_ds = S_Speed + 0.5, //速度を取得（何故か足りないから+0.5）
        S_dsA = (parseInt(S_ds)), //整数に直す
        S_dsB = String(S_dsA), //データの型を文字列に
        S_ds1 = S_dsB.slice(-1); //末尾1桁（下一桁）を取得。変数ds1として宣言

    //デジタル速度計 下一桁の描画
    switch (S_ds1) {
        case '0': S_0km.render(renderer); break;
        case '1': S_1km.render(renderer); break;
        case '2': S_2km.render(renderer); break;
        case '3': S_3km.render(renderer); break;
        case '4': S_4km.render(renderer); break;
        case '5': S_5km.render(renderer); break;
        case '6': S_6km.render(renderer); break;
        case '7': S_7km.render(renderer); break;
        case '8': S_8km.render(renderer); break;
        case '9': S_9km.render(renderer); break;
        default: S_0km.render(renderer); break;
    }

    //デジタル速度計 十より上の桁描画。理論上は最大999km/h、それ以上or想定外の数値は0km/hを描画。マイナス速度はそのうち対応。
    if (S_ds >= 10 && S_ds < 20) { S_10km.render(renderer); }
    else if (S_ds >= 20 && S_ds < 30) { S_20km.render(renderer); }
    else if (S_ds >= 30 && S_ds < 40) { S_30km.render(renderer); }
    else if (S_ds >= 40 && S_ds < 50) { S_40km.render(renderer); }
    else if (S_ds >= 50 && S_ds < 60) { S_50km.render(renderer); }
    else if (S_ds >= 60 && S_ds < 70) { S_60km.render(renderer); }
    else if (S_ds >= 70 && S_ds < 80) { S_70km.render(renderer); }
    else if (S_ds >= 80 && S_ds < 90) { S_80km.render(renderer); }

    else if (S_ds >= 90 && S_ds < 100) { S_90km.render(renderer); }
    else if (S_ds >= 100 && S_ds < 110) { S_100km.render(renderer); }
    else if (S_ds >= 110 && S_ds < 120) { S_110km.render(renderer); }
    else if (S_ds >= 120 && S_ds < 130) { S_120km.render(renderer); }
    else if (S_ds >= 130 && S_ds < 140) { S_130km.render(renderer); }
    else if (S_ds >= 140 && S_ds < 150) { S_140km.render(renderer); }
    else if (S_ds >= 150 && S_ds < 160) { S_150km.render(renderer); }
    else if (S_ds >= 160 && S_ds < 170) { S_160km.render(renderer); }
    else if (S_ds >= 170 && S_ds < 180) { S_170km.render(renderer); }
    else if (S_ds >= 180 && S_ds < 190) { S_180km.render(renderer); }

    else if (S_ds >= 190 && S_ds < 200) { S_190km.render(renderer); }
    else if (S_ds >= 200 && S_ds < 210) { S_200km.render(renderer); }
    else if (S_ds >= 210 && S_ds < 220) { S_210km.render(renderer); }
    else if (S_ds >= 220 && S_ds < 230) { S_220km.render(renderer); }
    else if (S_ds >= 230 && S_ds < 240) { S_230km.render(renderer); }
    else if (S_ds >= 240 && S_ds < 250) { S_240km.render(renderer); }
    else if (S_ds >= 250 && S_ds < 260) { S_250km.render(renderer); }
    else if (S_ds >= 260 && S_ds < 270) { S_260km.render(renderer); }
    else if (S_ds >= 270 && S_ds < 280) { S_270km.render(renderer); }
    else if (S_ds >= 280 && S_ds < 290) { S_280km.render(renderer); }

    else if (S_ds >= 290 && S_ds < 300) { S_290km.render(renderer); }
    else if (S_ds >= 300 && S_ds < 310) { S_300km.render(renderer); }
    else if (S_ds >= 310 && S_ds < 320) { S_310km.render(renderer); }
    else if (S_ds >= 320 && S_ds < 330) { S_320km.render(renderer); }
    else if (S_ds >= 330 && S_ds < 340) { S_330km.render(renderer); }
    else if (S_ds >= 340 && S_ds < 350) { S_340km.render(renderer); }
    else if (S_ds >= 350 && S_ds < 360) { S_350km.render(renderer); }
    else if (S_ds >= 360 && S_ds < 370) { S_360km.render(renderer); }
    else if (S_ds >= 370 && S_ds < 380) { S_370km.render(renderer); }
    else if (S_ds >= 380 && S_ds < 390) { S_380km.render(renderer); }

    else if (S_ds >= 390 && S_ds < 400) { S_390km.render(renderer); }
    else if (S_ds >= 400 && S_ds < 410) { S_400km.render(renderer); }
    else if (S_ds >= 410 && S_ds < 420) { S_410km.render(renderer); }
    else if (S_ds >= 420 && S_ds < 430) { S_420km.render(renderer); }
    else if (S_ds >= 430 && S_ds < 440) { S_430km.render(renderer); }
    else if (S_ds >= 440 && S_ds < 450) { S_440km.render(renderer); }
    else if (S_ds >= 450 && S_ds < 460) { S_450km.render(renderer); }
    else if (S_ds >= 460 && S_ds < 470) { S_460km.render(renderer); }
    else if (S_ds >= 470 && S_ds < 480) { S_470km.render(renderer); }
    else if (S_ds >= 480 && S_ds < 490) { S_480km.render(renderer); }

    else if (S_ds >= 490 && S_ds < 500) { S_490km.render(renderer); }
    else if (S_ds >= 500 && S_ds < 510) { S_500km.render(renderer); }
    else if (S_ds >= 510 && S_ds < 520) { S_510km.render(renderer); }
    else if (S_ds >= 520 && S_ds < 530) { S_520km.render(renderer); }
    else if (S_ds >= 530 && S_ds < 540) { S_530km.render(renderer); }
    else if (S_ds >= 540 && S_ds < 550) { S_540km.render(renderer); }
    else if (S_ds >= 550 && S_ds < 560) { S_550km.render(renderer); }
    else if (S_ds >= 560 && S_ds < 570) { S_560km.render(renderer); }
    else if (S_ds >= 570 && S_ds < 580) { S_570km.render(renderer); }
    else if (S_ds >= 580 && S_ds < 590) { S_580km.render(renderer); }

    else if (S_ds >= 590 && S_ds < 600) { S_590km.render(renderer); }
    else if (S_ds >= 600 && S_ds < 610) { S_600km.render(renderer); }
    else if (S_ds >= 610 && S_ds < 620) { S_610km.render(renderer); }
    else if (S_ds >= 620 && S_ds < 630) { S_620km.render(renderer); }
    else if (S_ds >= 630 && S_ds < 640) { S_630km.render(renderer); }
    else if (S_ds >= 640 && S_ds < 650) { S_640km.render(renderer); }
    else if (S_ds >= 650 && S_ds < 660) { S_650km.render(renderer); }
    else if (S_ds >= 660 && S_ds < 670) { S_660km.render(renderer); }
    else if (S_ds >= 670 && S_ds < 680) { S_670km.render(renderer); }
    else if (S_ds >= 680 && S_ds < 690) { S_680km.render(renderer); }

    else if (S_ds >= 690 && S_ds < 700) { S_690km.render(renderer); }
    else if (S_ds >= 700 && S_ds < 710) { S_700km.render(renderer); }
    else if (S_ds >= 710 && S_ds < 720) { S_710km.render(renderer); }
    else if (S_ds >= 720 && S_ds < 730) { S_720km.render(renderer); }
    else if (S_ds >= 730 && S_ds < 740) { S_730km.render(renderer); }
    else if (S_ds >= 740 && S_ds < 750) { S_740km.render(renderer); }
    else if (S_ds >= 750 && S_ds < 760) { S_750km.render(renderer); }
    else if (S_ds >= 760 && S_ds < 770) { S_760km.render(renderer); }
    else if (S_ds >= 770 && S_ds < 780) { S_770km.render(renderer); }
    else if (S_ds >= 780 && S_ds < 790) { S_780km.render(renderer); }

    else if (S_ds >= 790 && S_ds < 800) { S_790km.render(renderer); }
    else if (S_ds >= 800 && S_ds < 810) { S_800km.render(renderer); }
    else if (S_ds >= 810 && S_ds < 820) { S_810km.render(renderer); }
    else if (S_ds >= 820 && S_ds < 830) { S_820km.render(renderer); }
    else if (S_ds >= 830 && S_ds < 840) { S_830km.render(renderer); }
    else if (S_ds >= 840 && S_ds < 850) { S_840km.render(renderer); }
    else if (S_ds >= 850 && S_ds < 860) { S_850km.render(renderer); }
    else if (S_ds >= 860 && S_ds < 870) { S_860km.render(renderer); }
    else if (S_ds >= 870 && S_ds < 880) { S_870km.render(renderer); }
    else if (S_ds >= 880 && S_ds < 890) { S_880km.render(renderer); }

    else if (S_ds >= 890 && S_ds < 900) { S_890km.render(renderer); }
    else if (S_ds >= 900 && S_ds < 910) { S_900km.render(renderer); }
    else if (S_ds >= 910 && S_ds < 920) { S_910km.render(renderer); }
    else if (S_ds >= 920 && S_ds < 930) { S_920km.render(renderer); }
    else if (S_ds >= 930 && S_ds < 940) { S_930km.render(renderer); }
    else if (S_ds >= 940 && S_ds < 950) { S_940km.render(renderer); }
    else if (S_ds >= 950 && S_ds < 960) { S_950km.render(renderer); }
    else if (S_ds >= 960 && S_ds < 970) { S_960km.render(renderer); }
    else if (S_ds >= 970 && S_ds < 980) { S_970km.render(renderer); }
    else if (S_ds >= 980 && S_ds < 990) { S_980km.render(renderer); }
    else if (S_ds >= 990 && S_ds < 999) { S_990km.render(renderer); }

    else if (S_ds == 1000) { S_00km.render(renderer); }
    else if (S_ds < 0) { S_00km.render(renderer); }
    else { Dummy.render(renderer); }

    //パンタ上昇下降状態表示
    if (S_Pantadata == 1) {
        panta_true.render(renderer);
    } else {
        panta_false.render(renderer);
    }
    //車内灯状態表示
    if (S_Syanaitou == 1) {
        TLamp_true.render(renderer);
    } else {
        TLamp_false.render(renderer);
    }
    //前照灯状態表示
    if (S_Lightdata == 1) {
        FLamp_true.render(renderer);
    } else if (S_Lightdata == 2) {
        FLamp_all.render(renderer);
    } else {
        FLamp_false.render(renderer);
    }
    //回生ブレーキ状態表示
    if (S_notch >= -7 && S_notch <= -1 && S_Speed >= 5) {
        KLamp_true.render(renderer);
    } else {
        KLamp_false.render(renderer);
    }

    //行き先表示 ここは各自で搭載先車両の方向幕を一番最初をゼロからカウントして設定して下さい。わからない人はりどみ参照
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
    else if (S_Rollsign == 27) {KUSOKAISOKU.render(renderer);}
    else if (S_Rollsign == 28) {Direct.render(renderer);}
    else {Dummy.render(renderer);}
}

//デジタル時計 このコードは真冬雪々さんのものをそのまま使用しています。ありがとうございます。
function render_Clock(entity){
    if(entity != null){
        var timezone = 9.0;
        var secondA = Math.floor(NGTUtil.getUniqueId() / 1000)% 60;//秒を取得（元データ）
        var minuteA = Math.floor(NGTUtil.getUniqueId() / 60000) % 60;//分を取得（元データ）
        var hour1 = Math.floor(NGTUtil.getUniqueId() / 3600000) % 24;//時を取得（元データ）
        
        var second = (parseInt(secondA,10));//整数に直す（基本データ）
        var minute = (parseInt(minuteA,10));//整数に直す（基本データ）
            
        var secondB = String(second); //データの型を文字列に
        var second1 = secondB.slice( -1 ); //下一桁を取得
        var second10 = secondB.slice( -2 ); //下二桁を取得
        
        var minuteB = String(minute); //データの型を文字列に
        var minute1 = minuteB.slice( -1 ); //下一桁を取得
        var minute10 = minuteB.slice( -2 ); //下二桁を取得
        
        var hour = hour1 += timezone;
        if(hour >= 24){hour -= 24;}
       
        //デジタル時計 秒の描画
        switch (second1){ 
            case '0':s_x0.render(renderer);break;
            case '1':s_x1.render(renderer);break;
            case '2':s_x2.render(renderer);break;
            case '3':s_x3.render(renderer);break;
            case '4':s_x4.render(renderer);break;
            case '5':s_x5.render(renderer);break;
            case '6':s_x6.render(renderer);break;
            case '7':s_x7.render(renderer);break;
            case '8':s_x8.render(renderer);break;
            case '9':s_x9.render(renderer);break;
        }
     
        if(second10 >= 0 && second10 < 10){s_0x.render(renderer);}
            else if(second10 >= 10 && second10 < 20){s_1x.render(renderer);}
            else if(second10 >= 20 && second10 < 30){s_2x.render(renderer);}
            else if(second10 >= 30 && second10 < 40){s_3x.render(renderer);}
            else if(second10 >= 40 && second10 < 50){s_4x.render(renderer);}
        else if(second10 >= 50 && second10 < 60){s_5x.render(renderer);}		

        //デジタル時計 分の描画
        switch (minute1){ 
            case '0':m_x0.render(renderer);break;
            case '1':m_x1.render(renderer);break;
            case '2':m_x2.render(renderer);break;
            case '3':m_x3.render(renderer);break;
            case '4':m_x4.render(renderer);break;
            case '5':m_x5.render(renderer);break;
            case '6':m_x6.render(renderer);break;
            case '7':m_x7.render(renderer);break;
            case '8':m_x8.render(renderer);break;
            case '9':m_x9.render(renderer);break;
        }

        if(minute10 >= 0 && minute10 < 10){m_0x.render(renderer);}
            else if(minute10 >= 10 && minute10 < 20){m_1x.render(renderer);}
            else if(minute10 >= 20 && minute10 < 30){m_2x.render(renderer);}
            else if(minute10 >= 30 && minute10 < 40){m_3x.render(renderer);}
            else if(minute10 >= 40 && minute10 < 50){m_4x.render(renderer);}
        else if(minute10 >= 50 && minute10 < 60){m_5x.render(renderer);}

        //デジタル時計 時の描画
        if(hour == 0){H_00.render(renderer);}
            else if(hour == 1){H_01.render(renderer);}
            else if(hour == 2){H_02.render(renderer);}
            else if(hour == 3){H_03.render(renderer);}
            else if(hour == 4){H_04.render(renderer);}
            else if(hour == 5){H_05.render(renderer);}
            else if(hour == 6){H_06.render(renderer);}
            else if(hour == 7){H_07.render(renderer);}
            else if(hour == 8){H_08.render(renderer);}
            else if(hour == 9){H_09.render(renderer);}
            else if(hour == 10){H_10.render(renderer);}
            else if(hour == 11){H_11.render(renderer);}
            else if(hour == 12){H_12.render(renderer);}
            else if(hour == 13){H_13.render(renderer);}
            else if(hour == 14){H_14.render(renderer);}
            else if(hour == 15){H_15.render(renderer);}
            else if(hour == 16){H_16.render(renderer);}
            else if(hour == 17){H_17.render(renderer);}
            else if(hour == 18){H_18.render(renderer);}
            else if(hour == 19){H_19.render(renderer);}
            else if(hour == 20){H_20.render(renderer);}
            else if(hour == 21){H_21.render(renderer);}
            else if(hour == 22){H_22.render(renderer);}
        else if(hour == 23){H_23.render(renderer);}
    }
}
//#################### ここまでHUDスクリプト ####################//