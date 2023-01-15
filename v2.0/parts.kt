// package com.waya0125.rtmpack.suiseitrainpack.sr6450

import jp.ngt.rtm.modelpack.modelset.ModelSetTrain
import jp.ngt.rtm.render.ModelObject
import jp.ngt.rtm.render.Parts
import jp.ngt.rtm.render.VehiclePartsRenderer

@Suppress("UNUSED_PARAMETER")
object Parts {
    internal val parts = HashMap<String, HashMap<String, Parts>>() //parts[車両名][パーツ名]
    @JvmStatic @Suppress("SpellCheckingInspection")
    fun init(renderer: VehiclePartsRenderer, modelSet: ModelSetTrain, modelObject: ModelObject) {
        parts[renderer.modelName] = HashMap()
        mapOf(
            /*=====================================================
            注意！ V2.0以前の製品とは互換性が一切ありません。
            =======================================================
            彗星鉄道車両研究所製作 運転台 Ver2.0
            モデルの著作権はすべてわやに返還されます。
            スクリプトの著作権はすべてSiwo951に返還されます。
            Created by waya, Powered by Siwo951, hi03 and 真冬雪々.
            Twitter: @wayamoti2015
            Web: https://waya0125.com/
            =======================================================
            当コードを他のコードにコピペすることを禁じます。
            使用する際は必ず一言必ずお声掛け下さい。
            =====================================================*/

            //## 運転台本体 ##//
            "cab" to listOf(
                "obj_BaseScreen", "obj_MiniTIMS-Char", "obj_FD-Char", "obj_RightDisplayChar", 
                "obj_NotchChar", "obj_SpeedMeterBody", "obj_ATCMeterBody", 
                "obj_TrainStatusBox_01TrainLightUnit", "obj_TrainStatusBox_02FaceLightUnit",
                "obj_TrainStatusBox_03PantoUnit", "obj_TrainStatusBox_04RegenerativeBrakeUnit",
                "obj_TrainStatusBox_05RunModeUnit", "obj_TrainStatusBox_06ATOMode"
            ),
            "cabAlpha" to listOf(
                "obj_WirelessProtection", "objA_SPeedMeterBody"
            ),
            "Dummy" to "Dummy",

            //## JR用運転台 ##//
            "JREMasterController" to listOf("obj_JREMC-Base", "obj_JREMC-Unit"),
            "JREMC-Mascon" to "obj_JREMC-Mascon",
            "JREMC-Leverser" to "obj_JREMC-Leverser",

            //## TQ用運転台 ##//
            "TQMasterController" to "obj_TQMC-Base",
            "TQMC-Mascon" to "obj_TQMC-Mascon",
            "TQMC-Leverser" to "obj_TQMC-Leverser",

            //##### CenterDisplay #####//
            //## 運転台側ドア開閉確認ランプ ##//
            "cabCarDoor" to "obj_CabTDLamp",
            "cabFDDoor" to "obj_FDLamp",
            "cabFDLinked" to "obj_FDLinked",
            "cabFDNonLinked" to "obj_FDNonLinked",
            //##### ｺｺﾏﾃﾞ Center #####//

            //##### LeftDisplay #####//
            //## TIMSノッチ確認画面 ##//
            "notch_B8" to "obj_NotchEB",
            "notch_B7" to "obj_NotchB7",
            "notch_B6" to "obj_NotchB6",
            "notch_B5" to "obj_NotchB5",
            "notch_B4" to "obj_NotchB4",
            "notch_B3" to "obj_NotchB3",
            "notch_B2" to "obj_NotchB2",
            "notch_B1" to "obj_NotchB1",
            "notch_N" to "obj_NotchN0",
            "notch_P1" to "obj_NotchP1",
            "notch_P2" to "obj_NotchP2",
            "notch_P3" to "obj_NotchP3",
            "notch_P4" to "obj_NotchP4",
            "notch_P5" to "obj_NotchP5",

            //## 加速計の数値宣言 ##//
            //速度
            "speed_0km" to "obj_SMChar01_0",
            "speed_1km" to "obj_SMChar01_1",
            "speed_2km" to "obj_SMChar01_2",
            "speed_3km" to "obj_SMChar01_3",
            "speed_4km" to "obj_SMChar01_4",
            "speed_5km" to "obj_SMChar01_5",
            "speed_6km" to "obj_SMChar01_6",
            "speed_7km" to "obj_SMChar01_7",
            "speed_8km" to "obj_SMChar01_8",
            "speed_9km" to "obj_SMChar01_9",
            "speed_00km" to "obj_SMChar02_0",
            "speed_10km" to "obj_SMChar02_1",
            "speed_20km" to "obj_SMChar02_2",
            "speed_30km" to "obj_SMChar02_3",
            "speed_40km" to "obj_SMChar02_4",
            "speed_50km" to "obj_SMChar02_5",
            "speed_60km" to "obj_SMChar02_6",
            "speed_70km" to "obj_SMChar02_7",
            "speed_80km" to "obj_SMChar02_8",
            "speed_90km" to "obj_SMChar02_9",
            "speed_100km" to "obj_SMChar03_1",
            "speed_200km" to "obj_SMChar03_2",
            "speed_300km" to "obj_SMChar03_3",

            //タコメータ
            "speedMeterNeedle" to "obj_SpeedMeterNeedle",
            "ATCMeterNeedle" to "obj_ATCMeterNeedle",

            //## 保安装置ランプ文字 ##//
            "secureTIMSATS-Char" to "obj_SecureTIMSATS-Char",
            "secureTIMSATC-Char" to "obj_SecureTIMSATC-Char",

            //## ブレーキバー ##//
            "brakeBCBar" to "obj_BrakeBCBar",
            "brakeMRBar" to "obj_BrakeMRBar",

            //## 保安装置ランプ ##//
            //信号なし ☓表示
            "nonSignalLamp" to "obj_NonSignalLamp",
            //パターン接近 Lampが背景、Charが文字
            "patternCrossLamp" to "obj_PatternCrossLamp",
            "patternCross-Char" to "obj_PatternCross-Char",
            //左上段
            "miniTIMS-A1" to "obj_MiniTIMS-A1",
            "miniTIMS-A2" to "obj_MiniTIMS-A2",
            "miniTIMS-A3" to "obj_MiniTIMS-A3",
            "miniTIMS-A4" to "obj_MiniTIMS-A4",
            "miniTIMS-A5" to "obj_MiniTIMS-A5",
            "miniTIMS-A6" to "obj_MiniTIMS-A6",
            "miniTIMS-A7" to "obj_MiniTIMS-A7",
            "miniTIMS-A8" to "obj_MiniTIMS-A8",
            //左下段
            "miniTIMS-B1" to "obj_MiniTIMS-B1",
            "miniTIMS-B2" to "obj_MiniTIMS-B2",
            "miniTIMS-B3" to "obj_MiniTIMS-B3",
            "miniTIMS-B4" to "obj_MiniTIMS-B4",
            "miniTIMS-B5" to "obj_MiniTIMS-B5",
            "miniTIMS-B6" to "obj_MiniTIMS-B6",
            "miniTIMS-B7" to "obj_MiniTIMS-B7",
            "miniTIMS-B8" to "obj_MiniTIMS-B8",
            //右
            "secureTIMS-01" to "obj_SecureTIMS-01",
            "secureTIMS-02" to "obj_SecureTIMS-02",
            "secureTIMS-03" to "obj_SecureTIMS-03",
            "secureTIMS-04" to "obj_SecureTIMS-04",
            "secureTIMS-05" to "obj_SecureTIMS-05",
            "secureTIMS-06" to "obj_SecureTIMS-06",
            "secureTIMS-07" to "obj_SecureTIMS-07",
            "secureTIMS-08" to "obj_SecureTIMS-08",

            //##### RightDisplay #####//
            //## 運転会社・車両会社表示 ##//
            "corpSuisei" to "obj_CorpSuisei",
            "corpHokukyu" to "obj_CorpHokukyu",
            "corpSTPG" to "obj_CorpSTPG",

            //## 列車ｽﾃｰﾀｽ表示 ##//
            //車内灯
            "TSBTrainLight_NonLighting" to "obj_TrainStatusBox_01NonLighting",
            "TSBTrainLight_Lighting" to "obj_TrainStatusBox_01Lighting",
            "TSBTrainLight_AllLighting" to "obj_TrainStatusBox_01AllLighting",
            //前面灯
            "TSBFaceLight_NonLighting" to "obj_TrainStatusBox_02NonLighting",
            "TSBFaceLight_Lighting" to "obj_TrainStatusBox_02Lighting",
            "TSBFaceLight_AllLighting" to "obj_TrainStatusBox_02AllLighting",
            //パンタ
            "TSBPanto_Down" to "obj_TrainStatusBox_03PantoDown",
            "TSBPanto_Up" to "obj_TrainStatusBox_03PantoUp",
            //回生
            "TSBRegenerativeBrake_False" to "obj_TrainStatusBox_04RegenerativeBrakeFalse",  //Typo修正 ~Box_04False -> ~Box_04RegenerativeBrakeFalse
            "TSBRegenerativeBrake_True" to "obj_TrainStatusBox_04RegenerativeBrakeTrue",    //Typo修正 ~Box_04True -> ~Box_04RegenerativeBrakeTrue
            //走行モード確認 RunMode:低速/通常/高速 勾配モード:通常（着色変更）
            "TSBRunMode_Default" to "obj_TrainStatusBox_05Default",
            "TSBRunMode_HighSpeed" to "obj_TrainStatusBox_05HighSpeed",
            "TSBRunMode_LowSpeed" to "obj_TrainStatusBox_05LowSpeed",
            "TSBRunMode_GradientMode" to "obj_TrainStatusBox_05GradientMode",
            //ATO運転の有無
            "TSBATOMode_NonUsed" to "obj_TrainStatusBox_06NonUsed", //Typo修正 Not -> Non
            "TSBATOMode_Used" to "obj_TrainStatusBox_06Used",

            //## リアルタイム時間表示 ##//
            "clock_HourToMinuet" to "obj_TIMSClock_HourToMinuet",
            "clock_MinuetToSecond" to "obj_TIMSClock_MinuetToSecond",
            //時
            "clockTimeHour_0x" to "obj_TIMSClock_Hour01_0",
            "clockTimeHour_1x" to "obj_TIMSClock_Hour01_1",
            "clockTimeHour_2x" to "obj_TIMSClock_Hour01_2",
            "clockTimeHour_x0" to "obj_TIMSClock_Hour02_0",
            "clockTimeHour_x1" to "obj_TIMSClock_Hour02_1",
            "clockTimeHour_x2" to "obj_TIMSClock_Hour02_2",
            "clockTimeHour_x3" to "obj_TIMSClock_Hour02_3",
            "clockTimeHour_x4" to "obj_TIMSClock_Hour02_4",
            "clockTimeHour_x5" to "obj_TIMSClock_Hour02_5",
            "clockTimeHour_x6" to "obj_TIMSClock_Hour02_6",
            "clockTimeHour_x7" to "obj_TIMSClock_Hour02_7",
            "clockTimeHour_x8" to "obj_TIMSClock_Hour02_8",
            "clockTimeHour_x9" to "obj_TIMSClock_Hour02_9",
            //分
            "clockTimeMinuet_0x" to "obj_TIMSClock_Minuet01_0",
            "clockTimeMinuet_1x" to "obj_TIMSClock_Minuet01_1",
            "clockTimeMinuet_2x" to "obj_TIMSClock_Minuet01_2",
            "clockTimeMinuet_3x" to "obj_TIMSClock_Minuet01_3",
            "clockTimeMinuet_4x" to "obj_TIMSClock_Minuet01_4",
            "clockTimeMinuet_5x" to "obj_TIMSClock_Minuet01_5",
            "clockTimeMinuet_x0" to "obj_TIMSClock_Minuet02_0",
            "clockTimeMinuet_x1" to "obj_TIMSClock_Minuet02_1",
            "clockTimeMinuet_x2" to "obj_TIMSClock_Minuet02_2",
            "clockTimeMinuet_x3" to "obj_TIMSClock_Minuet02_3",
            "clockTimeMinuet_x4" to "obj_TIMSClock_Minuet02_4",
            "clockTimeMinuet_x5" to "obj_TIMSClock_Minuet02_5",
            "clockTimeMinuet_x6" to "obj_TIMSClock_Minuet02_6",
            "clockTimeMinuet_x7" to "obj_TIMSClock_Minuet02_7",
            "clockTimeMinuet_x8" to "obj_TIMSClock_Minuet02_8",
            "clockTimeMinuet_x9" to "obj_TIMSClock_Minuet02_9",
            //秒
            "clockSecond_0x" to "obj_TIMSClock_Second01_0",
            "clockSecond_1x" to "obj_TIMSClock_Second01_1",
            "clockSecond_2x" to "obj_TIMSClock_Second01_2",
            "clockSecond_3x" to "obj_TIMSClock_Second01_3",
            "clockSecond_4x" to "obj_TIMSClock_Second01_4",
            "clockSecond_5x" to "obj_TIMSClock_Second01_5",
            "clockSecond_x0" to "obj_TIMSClock_Second02_0",
            "clockSecond_x1" to "obj_TIMSClock_Second02_1",
            "clockSecond_x2" to "obj_TIMSClock_Second02_2",
            "clockSecond_x3" to "obj_TIMSClock_Second02_3",
            "clockSecond_x4" to "obj_TIMSClock_Second02_4",
            "clockSecond_x5" to "obj_TIMSClock_Second02_5",
            "clockSecond_x6" to "obj_TIMSClock_Second02_6",
            "clockSecond_x7" to "obj_TIMSClock_Second02_7",
            "clockSecond_x8" to "obj_TIMSClock_Second02_8",
            "clockSecond_x9" to "obj_TIMSClock_Second02_9",

            //## 種別表示 もっと下の方にある車両の種別設定の部分で使用する任意の種別設定して下さい ##//
            "trainType_LocalK" to "obj_TrainType_LocalK",
            "trainType_LocalF" to "obj_TrainType_LocalF",
            "trainType_Oneman" to "obj_TrainType_Oneman",
            "trainType_SemiExpress" to "obj_TrainType_SemiExpress",
            "trainType_Express" to "obj_TrainType_Express",
            "trainType_Rapid" to "obj_TrainType_Rapid",
            "trainType_LimitedExpress" to "obj_TrainType_LimitedExpress",
            "trainType_RapidLimitedExpress" to "obj_TrainType_RapidLimitedExpress",
            "trainType_SpecialRapid" to "obj_TrainType_SpecialRapid",
            "trainType_RegionalRapid" to "obj_TrainType_RegionalRapid",
            "trainType_SemiLimitedExpress" to "obj_TrainType_SemiLimitedExpress",
            "trainType_RapidExpress" to "obj_TrainType_RapidExpress",
            "trainType_CommuterExpress" to "obj_TrainType_CommuterExpress",
            "trainType_CommuterRapid" to "obj_TrainType_CommuterRapid",
            "trainType_CommuterLimitedExpress" to "obj_TrainType_CommuterLimitedExpress",
            "trainType_CommuterSemiExpress" to "obj_TrainType_CommuterSemiExpress",
            "trainType_CommuterSemiLimitedExpress" to "obj_TrainType_CommuterSemiLimitedExpress",
            "trainType_CommuterRapidExpress" to "obj_TrainType_CommuterRapidExpress",
            "trainType_CommuterRapidLimitedExpress" to "obj_TrainType_CommuterRapidLimitedExpress",
            "trainType_OutOfService" to "obj_TrainType_OutOfService",
            "trainType_Special" to "obj_TrainType_Special",
            "trainType_ReservedTrain" to "obj_TrainType_ReservedTrain",
            "trainType_TestRun" to "obj_TrainType_TestRun",
            "trainType_TrainingTrain" to "obj_TrainType_TrainingTrain",
            "trainType_Unknown" to "obj_TrainType_NonSetting",
            "trainType_Direct" to "obj_TrainType_Direct",
            "trainType_KusokaisokuSTPGBlue" to "obj_TrainType_KusokaisokuSTPGBlue",
            "trainType_KusokaisokuRGB" to "obj_TrainType_KusokaisokuRGB",
            "trainType_AirportRapid" to "obj_TrainType_AirportRapid",
            "trainType_AirportExpress" to "obj_TrainType_AirportExpress",
            "trainType_AirportLimitedExpress" to "obj_TrainType_AirportLimitedExpress",
            "trainType_AirportRapidExpress" to "obj_TrainType_AirportRapidExpress",
            "trainType_AirportRapidLimitedExpress" to "obj_TrainType_AirportRapidLimitedExpress",
            "trainType_NewRapidLimitedExpress" to "obj_TrainType_NewRapidLimitedExpress",
            "trainType_ThroughRapid" to "obj_TrainType_ThroughRapid",
            "trainType_ThroughExpress" to "obj_TrainType_ThroughExpress",
            "trainType_ThroughLimitedExpress" to "obj_TrainType_ThroughLimitedExpress",
            "trainType_ThroughRapidExpress" to "obj_TrainType_ThroughRapidExpress",
            "trainType_ThroughRapidLimitedExpress" to "obj_TrainType_ThroughRapidLimitedExpress",

            //## 両数表示 最大49両 ##//
            //一桁表示のみ
            "trainNumber_Car1" to "obj_TrainConnectNumbering01_1",
            "trainNumber_Car2" to "obj_TrainConnectNumbering01_2",
            "trainNumber_Car3" to "obj_TrainConnectNumbering01_3",
            "trainNumber_Car4" to "obj_TrainConnectNumbering01_4",
            "trainNumber_Car5" to "obj_TrainConnectNumbering01_5",
            "trainNumber_Car6" to "obj_TrainConnectNumbering01_6",
            "trainNumber_Car7" to "obj_TrainConnectNumbering01_7",
            "trainNumber_Car8" to "obj_TrainConnectNumbering01_8",
            "trainNumber_Car9" to "obj_TrainConnectNumbering01_9",
            //二桁表示
            "trainNumber_Car1x" to "obj_TrainConnectNumbering02_10",
            "trainNumber_Car2x" to "obj_TrainConnectNumbering02_20",
            "trainNumber_Car3x" to "obj_TrainConnectNumbering02_30",
            "trainNumber_Car4x" to "obj_TrainConnectNumbering02_40",
            "trainNumber_Carx0" to "obj_TrainConnectNumbering02_00",
            "trainNumber_Carx1" to "obj_TrainConnectNumbering02_01",
            "trainNumber_Carx2" to "obj_TrainConnectNumbering02_02",
            "trainNumber_Carx3" to "obj_TrainConnectNumbering02_03",
            "trainNumber_Carx4" to "obj_TrainConnectNumbering02_04",
            "trainNumber_Carx5" to "obj_TrainConnectNumbering02_05",
            "trainNumber_Carx6" to "obj_TrainConnectNumbering02_06",
            "trainNumber_Carx7" to "obj_TrainConnectNumbering02_07",
            "trainNumber_Carx8" to "obj_TrainConnectNumbering02_08",
            "trainNumber_Carx9" to "obj_TrainConnectNumbering02_09",
            //##### ｺｺﾏﾃﾞTIMS2 #####//
        ).forEach { (key, objectName) ->
            if (objectName is String) {
                parts[renderer.modelName]!![key] = renderer.registerParts(Parts(objectName))
            } else if (objectName is List<*>) {
                parts[renderer.modelName]!![key] =
                    renderer.registerParts(Parts(*objectName.map { it as String }.toTypedArray()))
            }
        }
    }
}