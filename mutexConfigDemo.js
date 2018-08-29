/**
 * 睡眠	干燥	节能	调节温度	调节风速	健康	风摆	定时	空气质量	滤网脏堵检测	智能除湿防霉变	蒸发器自清洁	光敏	矢量送风	机组体检	电量统计	省电看得见	预约控制	灯光	蜂鸣	凉感风	高温风	发电机模式
 * 枚举: 1制热 / 2 除湿 / 3制冷 / 4送风 / 5自动
枚举: 0自动 / 1低速 / 2中速 / 3 高速 / 4 中低速 / 5 中高速
 */
export const mutex = {
  "ac_slp":"ac_mode==2||ac_mode==4||ac_mode==5||pwr==0",//睡眠
  "desicmode":"ac_mode==1||ac_mode==4||ac_mode==5||pwr==0",//干燥/防霉
  "ecomode":"ac_mode==2||ac_mode==4||ac_mode==5||pwr==0",//节能
  "temp":"pwr==0",
  "ac_mark":"ac_mode==2||pwr==0",
  "ac_health":"pwr==0",
  "ac_vdir_hdir":"pwr==0",//风摆--非指令
  
  "timer":"true",//定时--非指令
  "pm25":"pwr==0",//空气质量
  "filter_check":"pwr==0",//滤网脏堵检测
  "smartdesic":"true",//智能除湿防霉变
  "evaportor":"pwr==1",//蒸发器自清洁
  "ac_photos":"pwr==1",//光敏

  "airFlow":"pwr==1",//矢量送风--非指令
  "selfChecking":"true",//机组体检--非指令
  "electricity":"true",//电量统计--非指令
  "saveEnergy":"ac_mode!=3",//省电看得见--非指令
  "reservation":"true",//预约控制--非指令
  
  "bglight":"true",//灯光
  "beep":"true",//蜂鸣
  "ac_lwind":"ac_mode!=3",//凉感风
  "ac_hwind":"ac_mode!=1",//高温风
  "qtmode":"pwr==1",//发电机
  "el_heat":"true",//电加热 电辅热
}
