/* 
{id:35,Title:"东芝 256Gb",Platform:"淘宝",Type:"硬盘",Condition:"二手"},
{id:36,Title:"东芝 128Gb",Platform:"京东",Type:"硬盘",Condition:"停售"},

类型 typeList： inductive switch, capacitive, photoelectric, fiber optic, 
应用环境 environmentList： DC 3PIN, AC, All Inox, High temperature resistant, high pressure resistant, 
感应距离 snList: 0.6mm - 50mm
尺寸：3mm, 4mm M4, M6, M8, M12, M18, M30
规格： 
外壳材料： 不锈钢 镀铬铜 塑料 
感应面材料： POM， PBT, 
电压输出： NPN PNP NO NC 
连接件：	  M8 M12 
系统价格： 

* 
*filter parameter: 
 	productTypeVar, srVar, dimensionVar, fieldedVar, voltageVar, connectorVar, environmentVar,
* 
* productType: inductive, capacitive, photoelectric, 
*

 */
typeList: ["Inductive proximity switch","Capacitive proximity switch","Photoelectric switch","Fiber optic switch","Ultrasonic switch"],
environmentList: ["Normal",""],
voltageList:[],

dataList: [
  {id:1,Type:"inductive proximity switch",Category:"DC 3 wire miniaturized inductive proximity switch",Dimension:"M4", Length:25,Image:"",Diagram:"",Environment: "Normal",Sn:0.8,Material:"Stainles Steel",FacingMaterial:"PBT",Fielded:"Flush",Voltage:"10-30VDC",Output:"NPN NO", Connection:"DC 3-wire",Indicator:"Yes",Price:212},
  {id:2,Type:"inductive proximity switch",Category:"DC 3 wire miniaturized inductive proximity switch",Dimension:"M4", Length:25,Image:"",Diagram:"",Environment: "Normal",Sn:1.5,Material:"Stainles Steel",FacingMaterial:"PBT",Fielded:"Flush",Voltage:"10-30VDC",Output:"NPN NO", Connection:"DC 3-wire",Indicator:"Yes",Price:312},
    {id:3,Type:"inductive proximity switch",Category:"DC 3 wire miniaturized inductive proximity switch",Dimension:"M4", Length:25,Image:"",Diagram:"",Environment: "Normal",Sn:1.5,Material:"Stainles Steel",FacingMaterial:"PBT",Fielded:"Flush",Voltage:"10-30VDC",Output:"NPN NO", Connection:"DC 3-wire",Indicator:"Yes",Price:312}
  ]