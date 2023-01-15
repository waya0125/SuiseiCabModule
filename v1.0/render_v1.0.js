var renderClass = "jp.ngt.rtm.render.VehiclePartsRenderer";
importPackage(Packages.org.lwjgl.opengl);
importPackage(Packages.jp.ngt.rtm.render);
importPackage(Packages.jp.ngt.ngtlib.math);

function init(par1, par2) {

  //彗星鉄道車両研究所製作 運転台Ver1.0//
  cab = renderer.registerParts(new Parts("GlassCockPit","Base","Base2","Base3","Base4","Base5","Box","MasConPed","MasCon",
  "Leverser","Rotate","Handle",
  "Screen1","Screen2",
  "Screen1_Add","Clock","DoorLampCover",
  "Screen2_Add2","nextStop","nextStopOn","nextStopText",
  "ScreenCover","Screen3_Temp","Screen3",
  "ScreenCover1","Screen3_Temp1","Screen4",
  "ScreenCover2","Screen3_Temp2","Screen5",
  "SP-ATC_Object","Off","P_Power","paternCome","brakeActive","BrakeOff","ATS-P","SP-ATC","None","Down",
  "On","P_Power1","paternCome1","brakeActive1","brakeOff1","ATS-P1","SP-ATC1","None1","Down1",
  "Text","P_PowerText","paternComeText","brakeActiveText","brakeOffText","ATS-P_Text","SP-ATC_Text","unknownText","downText"));
  cabClose = renderer.registerParts(new Parts("DoorLampGreen"));
  cabOpen = renderer.registerParts(new Parts("DoorLampGlay"));
  }

function render(entity, pass, par3) {
  cab.render(renderer);
  if (entity !== null) {
    var doorClose = Math.floor(entity.doorMoveL + entity.doorMoveR);
    if (doorClose == 0) cabClose.render(renderer)
    else cabOpen.render(renderer)
  }
  else if (entity === null) {
    cabClose.render(renderer);
  }
}