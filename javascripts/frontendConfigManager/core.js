/** 
 * -------------------------------------------------------------
 * Copyright (c) 2013 frontendConfigManager, All rights reserved. 
 *  
 * @version: 0.0.0 
 * @author: lizhong 
 * @description: frontendConfigManager 
 * @project: frontendConfigManager 
 * @date: 2013-08-08 
 * ------------------------------------------------------------- 
 */ 


/**
 * @fileOverview 可视化系统单入口命名空间
 * @namespace uinv.FCM.configMgr
 */
namespace.reg('uinv.FCM.configMgr');

/**
 * @fileOverview 全局配置
 * @namespace uinv.FCM.configMgr.global
 */
namespace.reg('uinv.FCM.configMgr.global');

/**
 * @fileOverview 提示模块
 * @namespace uinv.FCM.configMgr.note
 */
namespace.reg('uinv.FCM.configMgr.note');

/**
 * @fileOverview 对象与字符串互相转换模块
 * @namespace uinv.FCM.configMgr.model.transform
 */
namespace.reg('uinv.FCM.configMgr.model.transform');

/**
 * @fileOverview 数组模块
 * @namespace uinv.FCM.configMgr.model.array
 */
namespace.reg('uinv.FCM.configMgr.model.array');

/**
 * @fileOverview 选择器模块
 * @namespace uinv.FCM.configMgr.model.selector
 */
namespace.reg('uinv.FCM.configMgr.model.selector');

/**
 * @description 选择器条件修改时根据不同的条件类型把表单值设置值到内存中
 * @memberOf uinv.FCM.configMgr.model.selector
 */
namespace.reg('uinv.FCM.configMgr.model.selector.whereTypeSetObj');

/**
 * @fileOverview 字符串读写操作模块 主要调用后台接口实现副配置信息的存储
 * @namespace uinv.FCM.configMgr.model.stringDB
 */
namespace.reg('uinv.FCM.configMgr.model.stringDB');

/**
 * @fileOverview 随机字符串生成模块
 * @namespace uinv.FCM.configMgr.model.key
 */
namespace.reg('uinv.FCM.configMgr.model.key');

/**
 * @fileOverview 图层模块
 * @namespace uinv.FCM.configMgr.model.layer
 */
namespace.reg('uinv.FCM.configMgr.model.layer');

/**
 * @description 根据图层配置项的类型创建DOM节点
 * @memberOf uinv.FCM.configMgr.model.layer
 */
namespace.reg('uinv.FCM.configMgr.model.layer.itemConfigTypeToHtml');

/**
 * @description 根据图层配置项的类型初始化不同类型控件
 * @memberOf uinv.FCM.configMgr.model.layer
 */
namespace.reg('uinv.FCM.configMgr.model.layer.itemConfigInitData');

/**
 * @description 根据图层配置项的类型不同存储数据方法
 * @memberOf uinv.FCM.configMgr.model.layer
 */
namespace.reg('uinv.FCM.configMgr.model.layer.itemConfigSetData');

/**
 * @fileOverview 面板模块
 * @namespace uinv.FCM.configMgr.model.panel
 */
namespace.reg('uinv.FCM.configMgr.model.panel');

/**
 * @description 根据面板配置项的类型创建DOM节点
 * @memberOf uinv.FCM.configMgr.model.panel
 */
namespace.reg('uinv.FCM.configMgr.model.panel.itemConfigTypeToHtml');

/**
 * @description 根据面板配置项的类型初始化不同类型控件
 * @memberOf uinv.FCM.configMgr.model.panel
 */
namespace.reg('uinv.FCM.configMgr.model.panel.itemConfigInitData');

/**
 * @description 根据面板配置项的类型不同存储数据方法
 * @memberOf uinv.FCM.configMgr.model.panel
 */
namespace.reg('uinv.FCM.configMgr.model.panel.itemConfigSetData');

/**
 * @fileOverview object操作模块
 * @namespace uinv.FCM.configMgr.model.object
 */
namespace.reg('uinv.FCM.configMgr.model.object');

/**
 * @fileOverview 色盘模块
 * @namespace uinv.FCM.configMgr.model.colorpicke
 */
namespace.reg('uinv.FCM.configMgr.model.colorpicke');

/**
 * @fileOverview 浮层模块
 * @namespace uinv.FCM.configMgr.model.dialog
 */
namespace.reg('uinv.FCM.configMgr.model.dialog');

/**
 * @fileOverview 统计模块
 * @namespace uinv.FCM.configMgr.model.statistics
 */
namespace.reg('uinv.FCM.configMgr.model.statistics');

/**
 * @fileOverview 资源模块
 * @namespace uinv.FCM.configMgr.model.resources
 */
namespace.reg('uinv.FCM.configMgr.model.resources');

/**
 * @fileOverview 视点模块
 * @namespace uinv.FCM.configMgr.model.viewpoint
 */
namespace.reg('uinv.FCM.configMgr.model.viewpoint');

/**
 * @fileOverview 备份模块
 * @namespace uinv.FCM.configMgr.model.backup
 */
namespace.reg('uinv.FCM.configMgr.model.backup');

/**
 * @fileOverview 监控模块
 * @namespace uinv.FCM.configMgr.model.monitor
 */
namespace.reg('uinv.FCM.configMgr.model.monitor');

/**
 * @description 监控配置表单数据写入内存
 * @memberOf uinv.FCM.configMgr.model.monitor
 */
namespace.reg('uinv.FCM.configMgr.model.monitor.configSetData');

/**
 * @description 根据不同类型给出不同的控件
 * @memberOf uinv.FCM.configMgr.model.monitor
 */
namespace.reg('uinv.FCM.configMgr.model.monitor.configTypeToHtml');

/**
 * @description 根据监控面板配置表单空间类型保存数据到内存
 * @memberOf uinv.FCM.configMgr.model.monitor
 */
namespace.reg('uinv.FCM.configMgr.model.monitor.configTypeToData');

/**
 * @description 根据监控面板配置表单控件类型返回相应类型的值
 * @memberOf uinv.FCM.configMgr.model.monitor
 */
namespace.reg('uinv.FCM.configMgr.model.monitor.configStyleTypeToData');

/**
 * @fileOverview 下载模块
 * @namespace uinv.FCM.configMgr.model.download
 */
namespace.reg('uinv.FCM.configMgr.model.download');

/**
 * @fileOverview 图片模块
 * @namespace uinv.FCM.configMgr.model.images
 */
namespace.reg('uinv.FCM.configMgr.model.images');

/**
 * @fileOverview 表单操作
 * @namespace uinv.FCM.configMgr.form
 */
namespace.reg('uinv.FCM.configMgr.form');

/**
 * @description 根据类型创建DOM对象
 * @memberOf uinv.FCM.configMgr.form
 */
namespace.reg('uinv.FCM.configMgr.form.createTypeHtml');

/**
 * @description 根据不同控件类型，设置表单各种类型的初始值
 * @memberOf uinv.FCM.configMgr.form
 */
namespace.reg('uinv.FCM.configMgr.form.type');

/**
 * @description 根据不同的表单控件类型获取值到内存
 * @memberOf uinv.FCM.configMgr.form
 */
namespace.reg('uinv.FCM.configMgr.form.setValue');

/**
 * @fileOverview 主配置数据
 * @namespace uinv.FCM.configMgr.data
 */
namespace.reg('uinv.FCM.configMgr.data');

/**
 * @fileOverview 其它
 * @namespace uinv.FCM.configMgr.other
 */
namespace.reg('uinv.FCM.configMgr.other');

/**
 * @fileOverview api接口
 * @namespace uinv.FCM.configMgr.api
 */
namespace.reg('uinv.FCM.configMgr.api');

/**
 * @fileOverview 翻译
 * @namespace uinv.FCM.configMgr.translate
 */
namespace.reg('uinv.FCM.configMgr.translate');

/**
 * @fileOverview 信息
 * @namespace uinv.FCM.configMgr.msg
 */
namespace.reg('uinv.FCM.configMgr.msg');





/**
 * @description 获取监控面板数据
 * @memberOf uinv.FCM.configMgr.api
 * @return {Object} { monitorTime:监控时间, monitorPanelConfig:监控配置数据  }
 * @example var result = uinv.FCM.configMgr.api.getMonitor();
 * @author lizhong
 * @since 2013-07
 * @static
 */
uinv.FCM.configMgr.api.getMonitor = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;

	var obj = _obj.model.object.clone( _obj.data.monitor.object );
	
	_obj.model.monitor.obj = _obj.model.stringDB.get(_obj.model.monitor.index);
	
	for(var i=0,k=obj.length;i<k;i++){
		obj[i].condition = _obj.other.conditionReplaceName( obj[i].where );
		obj[i].data = _obj.model.object.clone( _obj.model.monitor.nameFindPanel(obj[i].panel) );
	
		for(var n=0,m=obj[i].form.length;n<m;n++){
			for(var g=0,h=obj[i].form[n].styleConfig.length;g<h;g++){
				obj[i].form[n].styleConfig[g].config = _obj.model.colorpicke.toRgb(obj[i].form[n].styleConfig[g].config);
			}
		}
		
		for(var j in obj[i].data.modify){
			for(var p in obj[i].data.modify[j]){
				if(typeof obj[i].form[ obj[i].data.modify[j][p].row ] != 'undefined'){
					obj[i].data.showMapping[j][p] = obj[i].form[ obj[i].data.modify[j][p].row ][ obj[i].data.modify[j][p].attribute ];
				}
			}
		}
		
		
		for(var o in obj[i].config){
			if( typeof obj[i].config[o] == 'object' ){
				obj[i].data[o] =  _obj.model.object.clone(obj[i].config[o]);
			}else{
				obj[i].data[o] =  obj[i].config[o];
			}
		}
		

		delete obj[i].data.des;
		delete obj[i].data.caption;
		delete obj[i].data.name;
		delete obj[i].data.resPath;
		delete obj[i].where;
		delete obj[i].form;
		delete obj[i].key;
		delete obj[i].panel;
		delete obj[i].config;
	}
	
	return {
		'monitorTime' : _obj.data.monitor.alarm.monitorTime,
		'monitorPanelConfig' : obj
	};
};

/**
 * @description 获取视角数据
 * @memberOf uinv.FCM.configMgr.api
 * @return {Object} { 物体名称:{ x:Number, y:Number, z:Number }, ... }
 * @example var result = uinv.FCM.configMgr.api.getViewpoint();
 * @author lizhong
 * @since 2013-07
 * @static
 */
uinv.FCM.configMgr.api.getViewpoint = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var obj = _obj.model.object.clone( _obj.data.viewpoint );

	for(var i=0,k=obj.length;i<k;i++){
		obj[i].condition = _obj.other.conditionReplaceName( obj[i].where );
		delete obj[i].where;
	}
	
	return obj;
};

/**
 * @description 获取统计数据
 * @memberOf uinv.FCM.configMgr.api
 * @return {Object} 统计数据
 * @example var result = uinv.FCM.configMgr.api.getStatistics();
 * @author lizhong
 * @since 2013-07
 * @static
 */
uinv.FCM.configMgr.api.getStatistics = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var obj = _obj.model.object.clone( _obj.data.statistics );
	
	for(var i in obj){
		for(var n=0,m=obj[i].length;n<m;n++){
			obj[i][n].condition = obj[i][n].where;
			delete obj[i][n].where;
			
			obj[i][n].config = _obj.model.colorpicke.toRgb(obj[i][n].color);
			obj[i][n].number = Number( obj[i][n].number );
			
			delete obj[i][n].color;
		}
	}
	
	return obj;
};

/**
 * @description 获取资源数据
 * @memberOf uinv.FCM.configMgr.api
 * @return {Object} 资源数据
 * @example var result = uinv.FCM.configMgr.api.getResources();
 * @author lizhong
 * @since 2013-07
 * @static
 */
uinv.FCM.configMgr.api.getResources = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var obj = _obj.model.object.clone( _obj.data.resources );
	
	for(var i in obj){
		obj[i].local = obj[i].localPath;
		obj[i].url = obj[i].serverPath.substr(1);
		delete obj[i].localPath;
		delete obj[i].serverPath;
	}
	
	return obj;
};

/**
 * @description 获取图层数据
 * @method memberOf uinv.FCM.configMgr.api
 * @return {Object} 图层数据
 * @example var result = uinv.FCM.configMgr.api.getLayer();
 * @author lizhong
 * @since 2013-07
 * @static
 */
uinv.FCM.configMgr.api.getLayer = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var obj = _obj.model.object.clone( _obj.data.layer );
	
	_obj.model.layer.obj = _obj.model.stringDB.get(_obj.model.layer.index);
	
	for(var i=0,k=obj.length;i<k;i++){
		obj[i].condition = _obj.other.conditionReplaceName( obj[i].obj );
		
		obj[i].tmp = [];
		for(var n=0,m=obj[i].item.length;n<m;n++){
			if( typeof obj[i].itemData == "undefined" ){
				obj[i].itemData = [];			
			}  
			
			obj[i].tmp.push({
				'itemName' : obj[i].item[n] == u.le.get('分割线') ? 'separator' : obj[i].item[n] ,
				'config' : typeof obj[i].itemData[obj[i].item[n]] == 'undefined' ? {} :  _obj.model.object.clone( obj[i].itemData[obj[i].item[n]] )
			});
		}
		
		obj[i].item = obj[i].tmp;
		delete obj[i].obj;
		delete obj[i].tmp;
		delete obj[i].order;
	}
	
	return {
		"objects" : obj,
		"lib" : _obj.model.object.clone( _obj.model.layer.obj )
	};
};

/**
 * @description 获取面板数据
 * @memberOf uinv.FCM.configMgr.api
 * @return {Object} 面板数据
 * @example var result = uinv.FCM.configMgr.api.getPanel();
 * @author lizhong
 * @since 2013-07
 * @static
 */
uinv.FCM.configMgr.api.getPanel = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var obj = _obj.model.object.clone( _obj.data.panel );
	
	_obj.model.panel.obj = _obj.model.stringDB.get(_obj.model.panel.index);
	
	for(var i=0,k=obj.length;i<k;i++){
		obj[i].condition = _obj.other.conditionReplaceName( obj[i].obj );
		
		obj[i].tmp = [];
		for(var n=0,m=obj[i].item.length;n<m;n++){
			if( typeof obj[i].itemData == "undefined" ){
				obj[i].itemData = [];			
			}  
			
			obj[i].tmp.push({
				'itemName' : obj[i].item[n] == u.le.get('分割线') ? 'separator' : obj[i].item[n] ,
				'config' : typeof obj[i].itemData[obj[i].item[n]] == 'undefined' ? {} :  _obj.model.object.clone( obj[i].itemData[obj[i].item[n]] )
			});
		}
		
		obj[i].item = obj[i].tmp;
		delete obj[i].obj;
		delete obj[i].tmp;
		delete obj[i].order;
	}
	
	return {
		"objects" : obj,
		"lib" : _obj.model.object.clone( _obj.model.panel.obj )
	};
};

/**
 * @description 获取表单数据
 * @memberOf uinv.FCM.configMgr.api
 * @param {String} group 过滤组数据，不传入则全部返回
 * @return {Object} 表单数据
 * @example 
 * var result = uinv.FCM.configMgr.api.getForm(); // 全部返回<br />
 * var result = uinv.FCM.configMgr.api.getForm("system"); // 返回group=system的数据
 * @author lizhong
 * @since 2013-07
 * @static
 */
uinv.FCM.configMgr.api.getForm = function(group){
	var _obj = uinv.FCM.configMgr,
		_this = this,
		i = 0,
		k = 0;
	
	var o = _obj.model.object.clone(_obj.form.createFormData);
	
	for(i=0,k=o.length;i<k;i++){
		o[i].value = _obj.data[o[i].group][o[i].name];
		if(o[i].type == 'color'){
			o[i].value = _obj.model.colorpicke.toRgb(o[i].value);
		}
	}
	
	if(group){
		var arr = [];
		for(i=0,k=o.length;i<k;i++){
			if(o[i].group == group){
				arr.push(o[i]);
			}
		}
		o = arr;
	}
	
	return o;	
};

/**
 * @description 获取告警数据
 * @memberOf uinv.FCM.configMgr.api
 * @return {Object} 告警级别数据
 * @example var result = uinv.FCM.configMgr.api.getAlarm();
 * @author lizhong
 * @since 2013-07
 * @static
 */
uinv.FCM.configMgr.api.getAlarm = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var obj = _obj.model.object.clone( _obj.data.monitor.alarm );
	
	if(typeof obj.alarmLevel == 'undefined'){
		obj.alarmLevel = [];
	}
	
	for(var i=0,k=obj.alarmLevel.length;i<k;i++){
		obj.alarmLevel[i].config = _obj.model.colorpicke.toRgb(obj.alarmLevel[i].color);
		delete obj.alarmLevel[i].color;
	}
	
	// 把moniterTime删除，放到moniter接口
	delete obj.monitorTime;
	
	return obj;
};

/**
 * @description 获取系统下载数据
 * @memberOf uinv.FCM.configMgr.api
 * @return {Object} 下载数据
 * @example var result = uinv.FCM.configMgr.api.getDownload();
 * @author lizhong
 * @since 2013-07
 * @static
 */
uinv.FCM.configMgr.api.getDownload = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	return _obj.model.object.clone(_obj.data.download);
};

/**
 * @description 系统配置
 * @type Object
 */
uinv.FCM.configMgr.data.system = {};
/**
 * @description 数据定义
 */

/**
 * @description 布局配置
 * @type Object
 */
uinv.FCM.configMgr.data.layout = {};

/**
 * @description 图层配置
 * @type Array
 */
uinv.FCM.configMgr.data.layer = [];

/**
 * @description 面板配置
 * @type Array
 */
uinv.FCM.configMgr.data.panel = [];

/**
 * @description 统计配置
 * @type Object
 */
uinv.FCM.configMgr.data.statistics = {
	
	/**
	 * @description 功耗
	 * @type Array
	 */
	'power':[],	

	/**
	 * @description 空间
	 * @type Array
	 */
	'availableU':[],
	
	/**
	 * @description 承重
	 * @type Array
	 */	
	'load':[]
};

/**
 * @description 资源配置
 * @type Object
 */
uinv.FCM.configMgr.data.resources = {};

/**
 * @description 视点
 * @type Array
 */
uinv.FCM.configMgr.data.viewpoint = [];

/**
 * @description 监控
 * @type Object
 */
uinv.FCM.configMgr.data.monitor = {
	
	/**
	 * @description 物体
	 * @type Array
	 */
	'object' : [],
	
	/**
	 * @description 告警
	 * @type Object
	 */
	'alarm' : { 
		alarmTime : 0,
		alarmIconSize : 1,
		monitorTime : 1
	}	
};

/**
 * @description 系统刚下载
 * @type Array
 */
uinv.FCM.configMgr.data.download = [];

//----------------------------------------------------
// 基础定义
//----------------------------------------------------

/**
 * @description 生成表单数据 后面可以初始改写
 * @type Array
 */
uinv.FCM.configMgr.form.createFormData = [];

/**
 * @description name轮询记录
 * @type Array
 */
uinv.FCM.configMgr.form.nameInit =  [];

/**
 * @description 数据源对象
 * @type Object
 */
uinv.FCM.configMgr.form.obj = null;

/**
 * @description 当前加载模块的jQuery对象
 * @type Object
 */
uinv.FCM.configMgr.form.box = null;

/**
 * 
 * @description 系统保留data关键字
 * @type Array
 */
uinv.FCM.configMgr.form.keywords = ["download","layer","monitor","panel","resources","statistics","viewpoint"];

//------------------------------------------
// 函数区
//------------------------------------------


/**
 * @description 根据组获取所有项
 * @memberOf uinv.FCM.configMgr.form
 * @param {String} groupName 组名
 * @return {Array} 列表
 */
uinv.FCM.configMgr.form.tabFindItem = function(tabName){
	var _this = this;
	var arr = [];
	for( var i=0,k=_this.createFormData.length;i<k;i++ ){
		if( _this.createFormData[i].tab == tabName ){
			arr.push( _this.createFormData[i] );
		}
	}
	
	return arr;
};

/**
 * @description 检测表单数据是否占用系统保留关键字
 * @memberOf uinv.FCM.configMgr.form
 * @return {Boolean} true 占用 false 不占用
 * @static
 */
uinv.FCM.configMgr.form.checkFormKeyword = function(){
	var _obj = uinv.FCM.configMgr;	
	var _this = this;
	
	for( var n=0,m=_this.createFormData.length;n<m;n++ ){
		for(var i=0,k=_this.keywords.length; i<k; i++){
			if( _this.createFormData[n].group === _this.keywords[i] ){
				return true;
			}
		}
	}
	
	return false;
};

/**
 * @description 根据表单数据创建构建表单页面
 * @memberOf uinv.FCM.configMgr.form
 * @param {Array} o {dom:生成网页后加载的盒子，tab:标签页数据} 表单数据
 * @return {Boolean} return false 占用关键字
 * @static 
 */
uinv.FCM.configMgr.form.createHtml = function(o){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	o.data = _this.tabFindItem(o.tab);

	var html = "";
	for(var i=0,k=o.data.length;i<k;i++){
		if( typeof _this.createTypeHtml[o.data[i].type] == 'function' ){
			html += _this.createTypeHtml[o.data[i].type]( o.data[i]  );
		}
	}
	
	o.dom.html(html);
};

/**
 * @description 根据表单数据初始化DATA
 * @memberOf uinv.FCM.configMgr.form
 * @return {Boolean} return false 占用关键字
 * @static 
 */
uinv.FCM.configMgr.form.initFormDataToData = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var o = _this.createFormData;
	
	if( _this.checkFormKeyword() ){
		_obj.note.alert( _obj.msg.S25 );
		return false;
	}
	
	for(var i=0,k=o.length;i<k;i++){
		
		if(typeof o[i].itemkey == "undefined"){
			o[i].itemkey = "";
		}

		// 赋值
		if(typeof _obj.data[o[i].group] == "undefined"){
			_obj.data[o[i].group] = {};
		}	
		
		if( typeof _obj.data[o[i].group][o[i].name] == 'undefined' ){
			_obj.data[o[i].group][o[i].name] = o[i].defaultValue;
		}
	}
};

/**
 * @description 装载页面<br />
 * 1) 如果异常将显示404
 * @memberOf uinv.FCM.configMgr.form
 * @param {Object} param { page:页面名称, obj:页面DOM对象 }
 * @static
 */
uinv.FCM.configMgr.form.load = function(param){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_this.box  = param.obj || $('.config-load');
	_this.box.load(
		param.page + '?' + Date.parse(new Date()),
		function(response, status, xhr) {
			if ( status=="success" ){	
				_this.init();
				$('.config-submit-btn').show();
			}else{
				$(this).load('./views/config/404.html');
			}

			uinv.FCM.configMgr.translate();
		}
	);
};

/**
 * @description 提交表单到服务器存储
 * @memberOf uinv.FCM.configMgr.form
 * @static
 */
uinv.FCM.configMgr.form.submit = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	_this.nameInit = [];
	
	_this.box.find('*[name][cate][path]').each(function(){
		if( typeof _this.setValue[$(this).attr('cate')] == 'function' ){
			_this.setValue[$(this).attr('cate')](this);
		}
	});
	
	// submit save to service
	uinv.server.manager.frame.saveFrameConfig( uinv.util.toJSON( _obj.data ) , function(result){
		_obj.note.dialog(result.data);
		
		if(result.success && typeof _this.submitCallback == 'function'){
			_this.submitCallback();
		}
	}); 
};

/**
 * @description 保存文本数据，包括副数据
 * @memberOf uinv.FCM.configMgr.form
 * @static
 */
uinv.FCM.configMgr.form.saveData = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	uinv.server.manager.frame.saveFrameConfig( uinv.util.toJSON( _obj.data ) , function(result){
		if(result.success && typeof _this.submitCallback == 'function'){
			_this.submitCallback();
		}
	}); 
};

/**
 * @description 判断这个name是否是第一次轮询
 * @memberOf uinv.FCM.configMgr.form
 * @param {String} name 控件name值
 * @return {Boolean} true 第一次轮询 false 不是第一次轮询
 * @static
 */
uinv.FCM.configMgr.form.isNameFirstEach = function(name){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	if( _obj.model.array.inArray(name, _this.nameInit) ){
		return false;
	}
	
	return true;
};

/**
 * @description 初始化
 * @memberOf uinv.FCM.configMgr.form
 * @static
 */
uinv.FCM.configMgr.form.init = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	
	_this.box.find('*[name][cate]').each(function(){
		if( typeof _this.type[$(this).attr('cate')] == 'function' ){
			_this.type[$(this).attr('cate')](this);
		}
	});
	
	
	_obj.translate();
};



/**
 * @description 布尔类型
 * @param {Object} o 表单数据
 * @return {String} HTML
 */
uinv.FCM.configMgr.form.createTypeHtml.bool = function(o){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	var value = o.itemkey === "" ? _obj.data[o.group][o.name] : _obj.data[o.group][o.name][o.itemkey];
	
	var html = "";
	html += '<div class="row '+o.level+'">';
		html += '<span class="comments"><s>'+o.caption+'</s></span>';
		html += '<span class="form">';
			if(value){
				html += '<label><input itemkey="'+o.itemkey+'" path="'+o.group+'" type="radio" cate="bool" name="'+o.name+'" checked value="1" /><s>是</s></label>';
				html += '<label><input itemkey="'+o.itemkey+'" path="'+o.group+'" type="radio" cate="bool" name="'+o.name+'" value="0" /><s>否</s></label>';					
			}else{
				html += '<label><input itemkey="'+o.itemkey+'" path="'+o.group+'" type="radio" cate="bool" name="'+o.name+'" value="1" /><s>是</s></label>';
				html += '<label><input itemkey="'+o.itemkey+'" path="'+o.group+'" type="radio" cate="bool" name="'+o.name+'" checked value="0" /><s>否</s></label>';			
			}
		html += '</span>';
	html += '</div>';
	
	return html;	
};

/**
 * @description 颜色类型
 * @param {Object} o 表单数据
 * @return {String} HTML
 */
uinv.FCM.configMgr.form.createTypeHtml.color = function(o){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;		
	var value = o.itemkey === "" ? _obj.data[o.group][o.name] : _obj.data[o.group][o.name][o.itemkey];
	
	var html = "";
	html += '<div class="row '+o.level+'">';
		html += '<span class="comments"><s>'+o.caption+'</s></span>';
		html += '<span class="form">';
			html += '<input itemkey="'+o.itemkey+'" path="'+o.group+'" type="text" cate="color" name="'+o.name+'" value="'+value+'" />';
		html += '</span>';
	html += '</div>';
	
	return html;
};

/**
 * @description 图片类型
 * @param {Object} o 表单数据
 * @return {String} HTML
 */
uinv.FCM.configMgr.form.createTypeHtml.image = function(o){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	var value = o.itemkey === "" ? _obj.data[o.group][o.name] : _obj.data[o.group][o.name][o.itemkey];
	
	var html = "";
	html += '<div class="row '+o.dir+' '+o.level+'">';
		html += '<span class="comments"><s>'+o.caption+'</s></span>';
		html += '<span class="form">';
			html += '<img itemkey="'+o.itemkey+'" path="'+o.group+'" src="'+value+'" cate="image" name="'+o.name+'" />';
			html += '<button onclick="uinv.FCM.configMgr.model.images.show({dir:\''+o.dir+'\',name:\''+o.name+'\'});"><s>更换图片</s></button>';
		html += '</span>';
	html += '</div>';
	
	return html;				
};

/**
 * @description 数字类型
 * @param {Object} o 表单数据
 * @return {String} HTML
 */
uinv.FCM.configMgr.form.createTypeHtml.number = function(o){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;	
	var value = o.itemkey === "" ? _obj.data[o.group][o.name] : _obj.data[o.group][o.name][o.itemkey];
	
	var html = "";
	html += '<div class="row '+o.level+'">';
		html += '<span class="comments"><s>'+o.caption+'</s></span>';
		html += '<span class="form">';
			html += '<input itemkey="'+o.itemkey+'" path="'+o.group+'" type="text" cate="number" name="'+o.name+'" value="'+value+'" />';
		html += '</span>';
	html += '</div>';
	
	return html;
};

/**
 * @description 字符类型
 * @param {Object} o 表单数据
 * @return {String} HTML
 */
uinv.FCM.configMgr.form.createTypeHtml.string = function(o){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	var value = o.itemkey === "" ? _obj.data[o.group][o.name] : _obj.data[o.group][o.name][o.itemkey];
	
	var html = "";
	html += '<div class="row '+o.level+'">';
		html += '<span class="comments"><s>'+o.caption+'</s></span>';
		html += '<span class="form">';
			html += '<input itemkey="'+o.itemkey+'" path="'+o.group+'" type="text" cate="string" name="'+o.name+'" value="'+value+'" />';
		html += '</span>';
	html += '</div>';
	
	return html;
};

/**
 * @description 数组类型
 * @param {Object} o 表单数据
 * @return {String} HTML
 */
uinv.FCM.configMgr.form.createTypeHtml.array = function(o){
	var _this = uinv.FCM.configMgr.form;
	
	var html = "";
	html += '<div class="row '+o.level+'">';
		html += '<span class="comments"><s>'+o.caption+'</s></span>';
		html += '<span class="form">';
			for(var i=0,k=o.settings.length;i<k;i++){
				if( typeof _this.createTypeHtml[o.settings[i].type] == 'function' ){
					o.settings[i].name = o.name;
					o.settings[i].group = o.group;
					o.settings[i].cate = 'arrayitem';
					o.settings[i].level = 'children';
					o.settings[i].defaultValue = o.defaultValue[i];
					o.settings[i].itemkey = i;
					html += _this.createTypeHtml[o.settings[i].type](o.settings[i]);
				}
			}
		html += '</span>';
	html += '</div>';
	
	return html;
};


/**
 * @description 单选类型
 * @memberOf uinv.FCM.configMgr.form.setValue
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.setValue.radio = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	
	if( obj.checked === true ){
		if($(obj).attr('itemkey') !== ""){
			_obj.data[$(obj).attr('path')][$(obj).attr('name')][$(obj).attr('itemkey')] = _this.box.find('*[name=' + $(obj).attr('name') + ']:checked').attr('value');
		}else{
			_obj.data[$(obj).attr('path')][$(obj).attr('name')] = _this.box.find('*[name=' + $(obj).attr('name') + ']:checked').attr('value');
		}
	}
};

/**
 * @description 布尔类型
 * @memberOf uinv.FCM.configMgr.form.setValue
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.setValue.bool = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;

	if( obj.checked === true ){
		
		if($(obj).attr('itemkey') !== ""){
			if(obj.value == "1"){
				_obj.data[$(obj).attr('path')][$(obj).attr('name')][$(obj).attr('itemkey')] = true;
			}else{
				_obj.data[$(obj).attr('path')][$(obj).attr('name')][$(obj).attr('itemkey')] = false;
			}			
			
		}else{
			if(obj.value == "1"){
				_obj.data[$(obj).attr('path')][$(obj).attr('name')] = true;
			}else{
				_obj.data[$(obj).attr('path')][$(obj).attr('name')] = false;
			}	
		}
	}
};

/**
 * @description 文本类型
 * @memberOf uinv.FCM.configMgr.form.setValue
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.setValue.text = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	
	if($(obj).attr('itemkey') !== ""){
		_obj.data[$(obj).attr('path')][$(obj).attr('name')][$(obj).attr('itemkey')] = $(obj).val();
	}else{
		_obj.data[$(obj).attr('path')][$(obj).attr('name')] = $(obj).val();
	}
};

/**
 * @description 字符串类型
 * @memberOf uinv.FCM.configMgr.form.setValue
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.setValue.string = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	
	if($(obj).attr('itemkey') !== ""){
		_obj.data[$(obj).attr('path')][$(obj).attr('name')][$(obj).attr('itemkey')] = $(obj).val();
	}else{
		_obj.data[$(obj).attr('path')][$(obj).attr('name')] = $(obj).val();
	}
};

/**
 * @description 数字类型
 * @memberOf uinv.FCM.configMgr.form.setValue
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.setValue.number = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	
	if($(obj).attr('itemkey') !== ""){
		_obj.data[$(obj).attr('path')][$(obj).attr('name')][$(obj).attr('itemkey')] = Number($(obj).val());
	}else{
		_obj.data[$(obj).attr('path')][$(obj).attr('name')] = Number($(obj).val());
	}
};

/**
 * @description 图片类型
 * @memberOf uinv.FCM.configMgr.form.setValue
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.setValue.image = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	if($(obj).attr('itemkey') !== ""){
		_obj.data[$(obj).attr('path')][$(obj).attr('name')][$(obj).attr('itemkey')] = $(obj).attr('src');
	}else{
		_obj.data[$(obj).attr('path')][$(obj).attr('name')] = $(obj).attr('src');
	}
};
	
/**
 * @description 颜色类型
 * @memberOf uinv.FCM.configMgr.form.setValue
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.setValue.color = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	if($(obj).attr('itemkey') !== ""){
		_obj.data[$(obj).attr('path')][$(obj).attr('name')][$(obj).attr('itemkey')] = $(obj).val();
	}else{
		_obj.data[$(obj).attr('path')][$(obj).attr('name')] = $(obj).val();
	}
};
		
/**
 * @description 图层类型
 * @memberOf uinv.FCM.configMgr.form.setValue
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.setValue.layer = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	var name = $(obj).attr('name');
	
	var layerObj = _obj.model.layer.keyFindObj( name );
	
	if(_this.isNameFirstEach(name) ){
		layerObj.item = [];
		layerObj.order = [];
		_this.nameInit.push( name );
	}
	
	layerObj.order.push( $(obj).attr('value') );
	
	if( obj.checked === true ){
		layerObj.item.push( $(obj).attr('value') );
	}
};

/**
 * @description 面板类型
 * @memberOf uinv.FCM.configMgr.form.setValue
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.setValue.panel = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	
	var name = $(obj).attr('name');
	
	var panelObj = _obj.model.panel.keyFindObj( name );
	
	if(_this.isNameFirstEach(name) ){
		panelObj.item = [];
		panelObj.order = [];
		_this.nameInit.push( name );
	}
	
	panelObj.order.push( $(obj).attr('value') );
	
	if( obj.checked === true ){
		panelObj.item.push( $(obj).attr('value') );
	}
};

/**
 * @description 统计类型
 * @memberOf uinv.FCM.configMgr.form.setValue
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.setValue.statistics = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	
	var name = $(obj).attr('name');
	
	if(_this.isNameFirstEach(name) ){
		_obj.data[$(obj).attr('path')][name] = [];
		_this.nameInit.push( name );
	}
	
	$(obj).find('.item').each(function(){
		var item = {};
		$(this).find('*[key]').each(function(){
			item[ $(this).attr('key') ] = $(this).val();
		});
		
		_obj.data[$(obj).attr('path')][name].push(item);
		
	});
};

/**
 * @description 视角类型
 * @memberOf uinv.FCM.configMgr.form.setValue
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.setValue.viewpoint = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	_obj.model.viewpoint.keyFindObj( $(obj).attr('name') ).data[$(obj).attr('key')] = Number($(obj).val());
};

/**
 * @description 告警类型
 * @memberOf uinv.FCM.configMgr.form.setValue
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.setValue.alarm = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	_obj.data[$(obj).attr('path')].alarm[$(obj).attr('name')]  = Number($(obj).val());
};

/**
 * @description 告警层级
 * @memberOf uinv.FCM.configMgr.form.setValue
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.setValue.alarmlevel = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	
	_obj.data[$(obj).attr('path')].alarm[$(obj).attr('name')] = [];
	
	$(obj).find('*.row').each(function(){
		var o = {};
		o.name = $(this).find('input[name=name]').val();
		o.color = $(this).find('input[name=color]').val();
		_obj.data[$(obj).attr('path')].alarm[$(obj).attr('name')].push(o);
	});
};

 
 
/**
 * @description 单选类型
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.type.radio = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	
	if($(obj).attr('itemkey') !== ""){
		if( _obj.data[$(obj).attr('path')][$(obj).attr('name')][$(obj).attr('itemkey')] == $(obj).attr('value') ){
			$(obj).attr('checked', true);
		}	
	}else{
		if( _obj.data[$(obj).attr('path')][$(obj).attr('name')] == $(obj).attr('value') ){
			$(obj).attr('checked', true);
		}		
	}
};

/**
 * @description 布尔类型
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.type.bool = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;			

	if($(obj).attr('itemkey') !== ""){
		if( obj.value == "1" && _obj.data[$(obj).attr('path')][$(obj).attr('name')][$(obj).attr('itemkey')] ){
			$(obj).attr('checked', true);
		}
		
		if( obj.value == "0" && !_obj.data[$(obj).attr('path')][$(obj).attr('name')][$(obj).attr('itemkey')] ){
			$(obj).attr('checked', true);
		}	
	}else{
		if( obj.value == "1" && _obj.data[$(obj).attr('path')][$(obj).attr('name')] ){
			$(obj).attr('checked', true);
		}
		
		if( obj.value == "0" && !_obj.data[$(obj).attr('path')][$(obj).attr('name')] ){
			$(obj).attr('checked', true);
		}	
	}
};

/**
 * @description 文本类型
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.type.text = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	
	if($(obj).attr('itemkey') !== ""){
		$(obj).val( _obj.data[$(obj).attr('path')][$(obj).attr('name')][$(obj).attr('itemkey')] );
	}else{
		$(obj).val( _obj.data[$(obj).attr('path')][$(obj).attr('name')] );
	}
};

/**
 * @description 字符串类型
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.type.string = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	
	if($(obj).attr('itemkey') !== ""){
		$(obj).val( _obj.data[$(obj).attr('path')][$(obj).attr('name')][$(obj).attr('itemkey')] );
	}else{
		$(obj).val( _obj.data[$(obj).attr('path')][$(obj).attr('name')] );
	}
};

/**
 * @description 数字类型
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.type.number = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	
	if($(obj).attr('itemkey') !== ""){
		$(obj).val( _obj.data[$(obj).attr('path')][$(obj).attr('name')][$(obj).attr('itemkey')] );
	}else{
		$(obj).val( _obj.data[$(obj).attr('path')][$(obj).attr('name')] );
	}
};

/**
 * @description 图片类型
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.type.image = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;

	if($(obj).attr('itemkey') !== ""){
		$(obj).attr('src' ,  _obj.data[$(obj).attr('path')][$(obj).attr('name')][$(obj).attr('itemkey')] );		
	}else{
		$(obj).attr('src' ,  _obj.data[$(obj).attr('path')][$(obj).attr('name')] );		
	}
};

/**
 * @description 颜色类型
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.type.color = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;

	if($(obj).attr('itemkey') !== ""){
		$(obj).val( _obj.data[$(obj).attr('path')][$(obj).attr('name')][$(obj).attr('itemkey')] );
	}else{
		$(obj).val( _obj.data[$(obj).attr('path')][$(obj).attr('name')] );
	}
	_obj.model.colorpicke.show(obj);
};

/**
 * @description 图层类型
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.type.layer = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	
	var layerObj = _obj.model.layer.keyFindObj( $(obj).attr('name') );
	
	if( $(obj).attr('value') == u.le.get('分割线')  ){
		$(obj).attr('disabled', true);
	}
	
	if(typeof layerObj.item == 'object'){
		if( _obj.model.array.inArray( $(obj).attr('value') , layerObj.item ) ){
			$(obj).attr('checked', true);
			_obj.model.layer.checkd(obj);
		}	
	}
	
	// _obj.model.layer.checkedLayerOrder( $(obj).attr('name') );
};

/**
 * @description 面板类型
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.type.panel = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	
	var panelObj = _obj.model.panel.keyFindObj( $(obj).attr('name') );
	
	if(typeof panelObj.item == 'object'){
		if( _obj.model.array.inArray( $(obj).attr('value') , panelObj.item ) ){
			$(obj).attr('checked', true);
			_obj.model.panel.checkd(obj);
		}	
	}
	
	// _obj.model.panel.checkedPanelOrder( $(obj).attr('name') );
};

/**
 * @description 统计类型
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.type.statistics = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	
	var html = '';
	for( var i in _obj.data[$(obj).attr('path')][$(obj).attr('name')] ){
		html += _obj.model.statistics.mkhtmlTr( _obj.data[$(obj).attr('path')][$(obj).attr('name')][i] );
	}
	
	$(obj).append(html);
	
	_this.box.find(_obj.model.statistics.classStr).find('input[key=color]').each(function(){
		_obj.model.colorpicke.show(this);
	});
};

/**
 * @description 视角类型
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.type.viewpoint = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	$(obj).val( _obj.model.viewpoint.keyFindObj( $(obj).attr('name') ).data[$(obj).attr('key')] );
};

/**
 * @description 告警类型
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.type.alarm = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	if( typeof  _obj.data.monitor.alarm[$(obj).attr('name')] != 'undefined'){
		$(obj).val( _obj.data[$(obj).attr('path')].alarm[$(obj).attr('name')] );
	}
};

/**
 * @description 告警级别类型
 * @param {DOM} obj 控件节点
 */
uinv.FCM.configMgr.form.type.alarmlevel = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.form;
	
	$(obj).find('*.row').each(function(){
		var dom = $(this).find('input[name=color]').get(0);
		_obj.model.colorpicke.show(dom);
	});
};

/**
 * @description 可视化配置基础路径<br />
 * 1) 理论上所有通过可视化配置上传的所有文件都存放在基础路径下<br />
 * 2) 实际上会有单独的模块存放的文件在基础路径之外，比如资源模块上传的资源都存放在这个基础路径之外<br />
 * 3) 备份配置时会把这个路径下的所有文件及子目录一并备份
 * @type String
 */
uinv.FCM.configMgr.global.path = '/frontendConfigManager';

/**
 * @description 项目路径<br />
 * 1) 实际上当脚本初始化后会在init函数内自动获取项目路径重新赋值<br />
 * 2) 比如URL路径http://localhost:8080/uinv_frontend/admin.html则截取uinv_frontend
 * @type String
 */
uinv.FCM.configMgr.global.projectPath = '';

/**
 * @description 分割线1 
 * @style 1px高的虚线
 * @type String
 */
uinv.FCM.configMgr.global.line1 = '<i class="config-line1"></i>';

/**
 * @description 是否加载完
 * @type Boolean
 */
uinv.FCM.configMgr.global.onload = false;


/**
 * @description 可视化配置系统初始化
 * @memberOf uinv.FCM.configMgr
 * @static
 */
uinv.FCM.configMgr.init = function(){
	
	var _this = this;
	
	// Fixes #1
	// 请求服务器获取对象
	var result = uinv.server.manager.frame.getFrameConfig();
	
	if( result.success && result.data ){
		var data = _this.model.transform.str2obj(result.data);
		_this.model.object.coverObj( data, uinv.FCM.configMgr.data );
	}
		
	// 检测表单生成数据
	uinv.FCM.configMgr.form.initFormDataToData();		
		
	// 添加目录
	uinv.ui.manager.navBar.config['menu-config'] =  './views/config/index.html';
	
	// 加载选择器数据
	_this.model.selector.obj = _this.model.stringDB.get( _this.model.selector.index );
	
	// 项目路径
	var path = window.document.location.pathname.split('/');
	path.pop();
	_this.global.projectPath = path.join('/');
	
};



/**
 * @description 判断字符串是否在数组里<br />
 * 1) 这里判断使用普通相等，并非全等
 * @memberOf uinv.FCM.configMgr.model.array
 * @param {String} str 查找字符串
 * @param {Array} arr 被查找数组
 * @return {Boolean}
 * @static
 */
uinv.FCM.configMgr.model.array.inArray = function(str, arr){
	for(var i = 0 ,k = arr.length; i<k ;i++){
		
		// 这里使用 相等 而非 全等
		if(str == arr[i]){
			return true;
		}
	}
	return false;
};

/**
 * @description 判断字符串在数组中的索引<br />
 * 1) 从第一个元素开始匹配<br />
 * 2) 匹配到字符串后将返回当前index，不在查找后面的数组项<br />
 * 3) 使用普通相等判断，并非全等<br />
 * 4) 如果遍历数组到最后一项仍没有查找到结果将返回 -1
 * @memberOf uinv.FCM.configMgr.model.array
 * @param {String} str 
 * @param {Array} arr
 * @return {Number} 索引 -1 表示字符串不在数组中
 * @static
 */
uinv.FCM.configMgr.model.array.strInArrayIndex = function(str, arr){
	for(var i = 0 ,k = arr.length; i<k ;i++){
		
		// 这里使用 相等 而非 全等
		if(str == arr[i]){
			return i;
		}
	}
	return -1;			
};

/**
 * @description 判断object是否是数组类型
 * @memberOf uinv.FCM.configMgr.model.array
 * @param {Object} o 要判断的Object
 * @return {Boolean} true 数组	false 非数组
 * @static
 */
uinv.FCM.configMgr.model.array.isArray = function(o){
	return o instanceof Array;
};

 
//----------------------------------------------
// 基础定义
//----------------------------------------------

/**
 * @description 所有可用备份模块定义
 * 1) 如果这里定义到模块表示可以备份
 * 2) 没有定义到的模块则不能备份
 * 3) DATA值的是数据索引声明，这和程序内部定义有关
 * @type Array
 */
uinv.FCM.configMgr.model.backup.model = {
	'视角' : { 'model' : 'viewpoint' , 'data' : 'viewpoint'  },
	'监控' : { 'model' : 'monitor' , 'data' : 'monitor'  },
	'图层' : { 'model' : 'layer' , 'data' : 'layer' },
	'面板' : { 'model' : 'panel' , 'data' : 'panel' },
	'资源' : { 'model' : 'resources' , 'data' : 'resources' },
	'统计' : { 'model' : 'statistics', 'data' : 'statistics' },
	'选择' : { 'model' : 'selector', 'data' : 'selector' },
	'系统' : { 'data' : 'system' },
	'布局' : { 'data' : 'layout' },
	'下载' : { 'data' : 'download' }
};

/**
 * @description 备份的模块
 * 1) 这个列表里有哪项就会备份哪一项
 * 2) 备份的时候也可以通过改写此列表项达到按需备份
 * 3) 也作为一个后续通过勾选功能块备份相应模块的一个拓展
 * 4) 目前暂时写死
 * @type Array
 */
uinv.FCM.configMgr.model.backup.backModel =  [
	'视角','图层','资源','下载','监控',
	'统计','选择','系统','布局'
];

/**
 * @description 备份时需要额外备份的文件夹路径
 * 1) 备份程序会根据各个模块提供的路径统一记录在这个列表内
 * 2) 也作为默认
 * @type Array
 */
uinv.FCM.configMgr.model.backup.folders = [];

/**
 * @description 备份时需要额外备份的文件夹文件
 * 1) 备份程序会根据各个模块提供的路径统一记录在这个列表内
 * 2) 也作为默认
 * @type Array
 */
uinv.FCM.configMgr.model.backup.files = [];

/**
 * @description 需要备份的文本数据
 * 1) 将把所有配置信息转字符串改写此值
 * @type String
 */
uinv.FCM.configMgr.model.backup.text = '';


//----------------------------------------------
// 函数区
//----------------------------------------------

/**
 * @description 初始化数据备份基础数据
 * @memberOf uinv.FCM.configMgr.model.backup
 * @static
 */
uinv.FCM.configMgr.model.backup.initData = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	_this.folders = [];
	_this.files = [];
	_this.text = '';
};

/**
 * @description 更新文件备份记录列表
 * @memberOf uinv.FCM.configMgr.model.backup
 * @static
 */
uinv.FCM.configMgr.model.backup.updateFileArr = function(){
	var _obj = uinv.FCM.configMgr,
		_this = this,
		n = 0,
		arr = [];
	
	_this.initData();
	
	// 添加全局路径
	_this.folders.push(_obj.global.path);
	
	for(var i=0,k=_this.backModel.length;i<k;i++){
		if( typeof _this.model[_this.backModel[i]].model != 'undefined' && typeof _obj.model[_this.model[_this.backModel[i]].model].backupFiles == 'function'  ){					
			arr =  _obj.model[_this.model[_this.backModel[i]].model].backupFiles();
			for(n=0,m=arr.length;n<m;n++){
				_this.files.push(arr[n]);
			}
		}
		
		if( typeof _this.model[_this.backModel[i]].model != 'undefined' && typeof _obj.model[_this.model[_this.backModel[i]].model].backupFolders == 'function'  ){					
			arr =  _obj.model[_this.model[_this.backModel[i]].model].backupFolders();
			for(n=0,m=arr.length;n<m;n++){
				_this.folders.push(arr[n]);
			}
		}
	}
};

/**
 * @description 更新备份文本数据值
 * @memberOf uinv.FCM.configMgr.model.backup
 * @static
 */
uinv.FCM.configMgr.model.backup.updateText = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var o = { 
		'config' : _obj.model.transform.str2obj( uinv.server.manager.frame.getFrameConfig().data ),
		'string' : _obj.model.transform.str2obj( uinv.server.manager.frame.getString().data )
	};
	
	var backObj = {
		'config' : {},
		'string' : {}
	};
	
	for(var i=0,k=_this.backModel.length;i<k;i++){ 
		if( typeof _this.model[_this.backModel[i]].data != 'undefined' && typeof o.config[_this.model[_this.backModel[i]].data] != 'undefined' ){
			backObj.config[_this.model[_this.backModel[i]].data] = o.config[_this.model[_this.backModel[i]].data];
		}
		
		if( typeof _this.model[_this.backModel[i]].data != 'undefined' && typeof o.string[_this.model[_this.backModel[i]].data] != 'undefined' ){
			backObj.string[_this.model[_this.backModel[i]].data] = o.string[_this.model[_this.backModel[i]].data];
		}					
	}
	
	_this.text = _obj.model.transform.obj2str( backObj );
};

/**
 * @description 配置数据与文件打包
 * @memberOf uinv.FCM.configMgr.model.backup
 * @see uinv.server.manager.frame.placeZip()
 * @param {DOM} obj 配置按钮DOM节点
 * @static
 */
uinv.FCM.configMgr.model.backup.configCompression = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	$(obj).css('left','8888888px').parent().find('span').html(_obj.msg.S2);
	
	_this.updateFileArr();
	_this.updateText();
	
	uinv.server.manager.frame.placeZip( _this.text, _this.folders, _this.files, function(result){
		if(result.success){
			document.location = _obj.global.projectPath + result.data;
			$(obj).css('left','0').parent().find('span').html(_obj.msg.S2);
		}else{
			_obj.note.alert(result.data);
		}
	});
};

/**
 * @description 上传备份压缩包
 * @memberOf uinv.FCM.configMgr.model.backup
 * @param {DOM} obj file DOM 节点
 * @return {Boolean} 返回false数据格式有误
 * @static
 */
uinv.FCM.configMgr.model.backup.configUpload = function(obj){
	var _obj = uinv.FCM.configMgr,
		_this = this,
		o = null,
		path = obj.value.split('\\'),
		bool = false,
		arr = [],
		fileName = path.pop();
		
	arr = fileName.split(".");	
	if(arr[arr.length-1] != 'zip'){
		_obj.note.alert(_obj.msg.S3);
		return false;
	}
	
	bool = _obj.note.confirm(_obj.msg.F1(fileName));
	if(!bool){
		return false;
	}
	
	uinv.server.manager.frame.upAndUnZip(obj, fileName, function(result){
		
		if(result.success){
			try{
				o = _obj.model.transform.str2obj(result.data);
			}catch(e){
				_obj.note.alert(_obj.msg.S4);
				return false;
			}
			
			_this.setData(o);
		}else{
			_obj.note.alert(result.data);
		}
	});
	
};

/**
 * @description 把上传的数据写入库
 * @memberOf uinv.FCM.configMgr.model.backup
 * @param {Object} o 上传备份的数据
 * @static
 */
uinv.FCM.configMgr.model.backup.setData = function(o){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var i = 0;
	
	var obj = { 
		'config' : _obj.model.transform.str2obj( uinv.server.manager.frame.getFrameConfig().data ),
		'string' : _obj.model.transform.str2obj( uinv.server.manager.frame.getString().data )
	};
	
	if( typeof o.config == 'object' ){
		for(i in o.config){
			obj.config[i] = _obj.model.object.clone( o.config[i] );
		}
	}
	
	if( typeof o.string == 'object' ){
		for(i in o.string){
			obj.string[i] = _obj.model.object.clone( o.string[i] );
		}
	}				
	
	uinv.server.manager.frame.saveFrameConfig( _obj.model.transform.obj2str(obj.config) );
	uinv.server.manager.frame.saveString( _obj.model.transform.obj2str(obj.string), false);
	_this.updateConfig(obj);
};

/**
 * @description 更新备份数据
 * @memberOf uinv.FCM.configMgr.model.backup
 * @param {Object} o 上传备份的数据
 * @static
 */
uinv.FCM.configMgr.model.backup.updateConfig = function(o){
	var _obj = uinv.FCM.configMgr;
	var _this = this;			
	
	_obj.data = _obj.model.object.clone(o.config);
	_obj.form.init();
};

/**
 * @description 颜色范围
 * @type Array
 */
uinv.FCM.configMgr.model.colorpicke.palette =  [
    ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)", /*"rgb(153, 153, 153)","rgb(183, 183, 183)",*/
    "rgb(204, 204, 204)", "rgb(217, 217, 217)", /*"rgb(239, 239, 239)", "rgb(243, 243, 243)",*/ "rgb(255, 255, 255)"],
    ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
    "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
    ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
    "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
    "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
    "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
    "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
    "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
    "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
    "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
    /*"rgb(133, 32, 12)", "rgb(153, 0, 0)", "rgb(180, 95, 6)", "rgb(191, 144, 0)", "rgb(56, 118, 29)",
    "rgb(19, 79, 92)", "rgb(17, 85, 204)", "rgb(11, 83, 148)", "rgb(53, 28, 117)", "rgb(116, 27, 71)",*/
    "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
    "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
];

/**
 * @description RGB转HEX
 * @memberOf uinv.FCM.configMgr.model.colorpicke
 * @param {Array} aColor RGB色值
 * @return {String} HEX 色值
 * @static
 */
uinv.FCM.configMgr.model.colorpicke.toHex = function(aColor){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var strHex = "#";
	for(var i=0; i<aColor.length; i++){
		var hex = Number(aColor[i]).toString(16);
		
		if(hex === "0"){
			hex += hex;	
		}
		strHex += hex.substr(2,2);
	}
	
	if(strHex.length !== 7){
		//strHex = that;	
	}
	return strHex;

};

/**
 * @description HEX转RGB
 * @memberOf uinv.FCM.configMgr.model.colorpicke
 * @param {String} str HEX色值
 * @return {Array} RGB颜色
 * @static
 */
uinv.FCM.configMgr.model.colorpicke.toRgb = function(str){
	var _obj = uinv.FCM.configMgr,
		_this = this,
		i = 0,
		sColorChange = [],
		sColorNew = "",
		sColor = str.toLowerCase(),
		reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
		
	if(sColor && reg.test(sColor)){
		if(sColor.length === 4){
			sColorNew = "#";
			for(i=1; i<4; i+=1){
				sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1));	
			}
			sColor = sColorNew;
		}
		
		//处理六位的颜色值
		sColorChange = [];
		
		for(i=1; i<7; i+=2){
			sColorChange.push(parseInt("0x"+sColor.slice(i,i+2), 16));	
		}

		return sColorChange;
	}else{
		return sColor;	
	}
};

/**
 * @description 显示色盘操作
 * @memberOf uinv.FCM.configMgr.model.colorpicke
 * @see spectrum插件
 * @param {DOM} obj 显示色盘的DOM节点的依据
 * @static
 */
uinv.FCM.configMgr.model.colorpicke.show = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var bool = true;
	var value = obj.value.length >= 3 ? obj.value : _obj.data[$(obj).attr('path')][$(obj).attr('name')];
	$(obj).spectrum({
		color: value ,
		showInitial: bool,
		showAlpha: bool,
		showPalette: bool,
		showSelectionPalette: bool,
		clickoutFiresChange: bool,
		chooseText : u.le.get('确定'),
		cancelText : u.le.get('取消'),
		palette : _this.palette,
		change:function(color){
			$(this).val(color.toHexString());
		} 
	}).val( obj.value );
};

 
/**
 * @description dialog DOM 节点ID值<br />
 * 1) 实际上这里只是一个声明<br />
 * 2) 每次创建一个dialog都会把最新的ID改写此定义
 * @type String
 */
uinv.FCM.configMgr.model.dialog.id = '';

/**
 * @description dialog 创建函数<br />
 * 1) str 可以是一串字符 or HTML格式，宽高度自动计算并居中<br />
 * 2) 你也可以外包一层div赋值width height决定dialog的宽高
 * @memberOf uinv.FCM.configMgr.model.dialog
 * @param {String} str 字符串或者HTML格式字符
 * @static
 */
uinv.FCM.configMgr.model.dialog.show = function(str){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	_this.id = _obj.model.key.create(10);
	
	var html = '';
	html += '<div class="config-dialog-bg config-dialog-bg-'+_this.id+'"></div>';
	html += '<div class="config-dialog config-dialog-'+_this.id+'" style="display:none;">'+str+'</div>';
	
	$('body').css('position','relative').append(html);
	
	var $obj = $('.config-dialog-'+_this.id);

	$obj.css({
		'margin-left':'-'+parseInt($obj.outerWidth()/2,10)+'px',
		'margin-top':'-'+parseInt($obj.outerHeight()/2,10)+'px'
	}).show();
	
	_obj.translate();
};

/**
 * @description 关闭dialog操作
 * @memberOf uinv.FCM.configMgr.model.dialog
 * @param {Function} fun 回调函数
 * @static
 */
uinv.FCM.configMgr.model.dialog.close = function(fun){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	$('.config-dialog-'+_this.id).remove();
	$('.config-dialog-bg-'+_this.id).remove();
	$('.config-dialog').remove();
	$('.config-dialog-bg').remove();
	_this.id = '';
	
	if ( typeof fun == 'function' ) {
		fun.apply(_this);
	} else if( fun ) {
		eval( fun + '()' );
	}
};

/**
 * @description 获取dialog的DOM节点<br />
 * 1) 如果节点不存在会返回null，比如在没有创建dialog的情况调用此方法就会返回null， 因为页面中就不存dialog的DOM节点
 * @memberOf uinv.FCM.configMgr.model.dialog
 * @return {DOM} dialog DOM节点
 * @static
 */
uinv.FCM.configMgr.model.dialog.getObj = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	return $('.config-dialog-'+_this.id);
};

 
/**
 * @description 根据路径查找的数据
 * @memberOf uinv.FCM.configMgr.model.download
 * @param {String} path 路径
 * @return {Object} 返回null表示查找不到
 * @static
 */
uinv.FCM.configMgr.model.download.pathFindObj = function(path){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	for(var i=0,k=_obj.data.download.length;i<k;i++){
		if( _obj.data.download[i].url == path ){
			return _obj.data.download[i];
		}
	}
	
	return null;
};

/**
 * @description 根据路径查找到数据的索引值
 * @memberOf uinv.FCM.configMgr.model.download
 * @param {String} path 路径
 * @return {Number} 返回-1表示查找不到
 * @static
 */
uinv.FCM.configMgr.model.download.pathFindIndex = function(path){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	for(var i=0,k=_obj.data.download.length;i<k;i++){
		if( _obj.data.download[i].url == path ){
			return i;
		}
	}
	
	return -1;				
};

/**
 * @description 更新download数据 (修改or添加)
 * @memberOf uinv.FCM.configMgr.model.download
 * @param {Object} o 要跟新或添加的数据
 * @static
 */
uinv.FCM.configMgr.model.download.set = function(o){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var index = _this.pathFindIndex(o.url);
	if(index>=0){
		var obj = _this.pathFindObj(o.url);
		o.version = obj.version + 1;
		_obj.data.download.splice(index,1,o);
	}else{
		o.version = 1;
		_obj.data.download.push(o);
	}
};

/**
 * @description 删除下载信息
 * @memberOf uinv.FCM.configMgr.model.download
 * @param {String} path 要删除的路径
 * @static
 */
uinv.FCM.configMgr.model.download.del = function(path){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var index = _this.pathFindIndex(path);
	_obj.data.download.splice(index,1);
};


 
//----------------------------
// 基础设置
//----------------------------


/**
 * @description 相册母路径
 * @type String
 */
uinv.FCM.configMgr.model.images.path = '/Images';

/**
 * @description 图片操作时的子目录，在弹开相册时会传入路径改写此值
 * @type String
 */
uinv.FCM.configMgr.model.images.dir = '';

/**
 * @description 相册列表图片的默认高度
 * @type Number
 */
uinv.FCM.configMgr.model.images.imgHeight = 50;

/**
 * 相册列表图片的默认宽度
 * @type Number
 */
uinv.FCM.configMgr.model.images.imgWidth = 100;

/**
 * @description 相册列表文件名过滤列表
 * @type Array
 */
uinv.FCM.configMgr.model.images.limit = [
	'.svn'
];


//----------------------------
// 函数区
//----------------------------


/**
 * @description 图片上传处理
 * @see uinv.server.manager.frame.upImage()
 * @memberOf uinv.FCM.configMgr.model.images
 * @param {DOM} obj file 节点
 * @param {String} dir 文件夹
 * @static
 */
uinv.FCM.configMgr.model.images.imUpload = function(obj, dir){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_this.dir = dir || _this.dir;
	var pathinfo = obj.value.split('\\');
	var filename = encodeURIComponent(pathinfo[pathinfo.length-1]).replaceAll('%','_');
	var path = _obj.global.path + _this.path + _this.dir;
	var result = uinv.server.manager.frame.isFileExist(path+'/'+filename);
	var bool = true;
	if(result.data){
		bool = _obj.note.confirm(_obj.msg.F2(filename));
	}
	
	if(bool){
		uinv.server.manager.frame.upImage(obj, path , filename, function(result){_this.uploadImagesCallback(result);}); 
	}
};

/**
 * @description 删除图片
 * @see uinv.server.manager.frame.delImage()
 * @memberOf uinv.FCM.configMgr.model.images
 * @param {String} path 图片路径
 * @static
 */
uinv.FCM.configMgr.model.images.delImages = function(path){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var bool = _obj.note.confirm(_obj.msg.S5);
	if(bool){
		uinv.server.manager.frame.delImage(path, function(result){ _this.deleteImagesCallback(result); });	
	}
};

/**
 * @description 相册关闭
 * @memberOf uinv.FCM.configMgr.model.images
 * @static
 */
uinv.FCM.configMgr.model.images.close = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_obj.model.dialog.close();
};

/**
 * @description 上传图片回调函数
 * @memberOf uinv.FCM.configMgr.model.images
 * @param {Object} result 上传图片的返回结果
 * @static
 */
uinv.FCM.configMgr.model.images.uploadImagesCallback = function(result){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	if(result.success){
		// 重新构建列表
		_this.updateList();
		_obj.model.dialog.getObj().find('.img .right .views').html('');
	}else{
		_obj.note.alert(result.data);
	}
};

/**
 * @description 删除图片回调函数
 * @memberOf uinv.FCM.configMgr.model.images
 * @param {Object} result 删除图片返回结果
 * @static
 */
uinv.FCM.configMgr.model.images.deleteImagesCallback = function(result){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	if(result.success){
		// 重新构建列表
		_this.updateList();
		// 右侧大图取消
		_obj.model.dialog.getObj().find('.img .right .views').html('');
		
		var okobj = _obj.model.dialog.getObj().find('.img .left .imglist li.ok img');
		var obj = _obj.form.box.find('*[name='+_this.name+']');
		if( obj.attr('src') != okobj.attr('src') ){
			obj.attr('src','');
		}
	}
};

/**
 * @description 选择图片操作
 * @memberOf uinv.FCM.configMgr.model.images
 * @param {DOM} obj 选中图片的DOM节点
 * @static
 */
uinv.FCM.configMgr.model.images.selectImg = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_obj.model.dialog.getObj().find('.img .imglist li.ok').each(function(){
		$(this).removeClass('ok');
	});
	
	$('*[name=' + _this.name + ']').attr('src', $(obj).find('img').attr('src') );
	
	$(obj).addClass('ok');
};
	
/**
 * @description 读取某个操作目录下的图片列表<br />
 * 1) 这里有个bug，实际上如果目录下有其它的飞文件也会返回<br />
 * 2) 已针对这个bug写了一个过滤特定文件的程序
 * @memberOf uinv.FCM.configMgr.model.images
 * @return {Array} 文件列表
 * @static
 */
uinv.FCM.configMgr.model.images.getData = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var path = _obj.global.path + _this.path + _this.dir;
	var result = uinv.server.manager.frame.getImages(path);
	
	if(result.success){
		return result.data;
	}else{
		return [];
	}
};

/**
 * @description 相册面板右侧显示大图，传入img对象，即可显示，并自动居中
 * @memberOf uinv.FCM.configMgr.model.images
 * @param {DOM} obj 图片DOM节点
 * @static
 */
uinv.FCM.configMgr.model.images.viewsImg = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var img = '<img src="'+$(obj).attr('src')+'" />';
	_obj.model.dialog.getObj().find('.img .right .views').html(img);
	var $obj = _obj.model.dialog.getObj().find('.img .right .views img');
	$obj.css({
		'margin-left':'-'+parseInt($obj.outerWidth()/2,10)+'px',
		'margin-top':'-'+parseInt($obj.outerHeight()/2,10)+'px'
	});
	
};

/**
 * @description urldecode
 * @memberOf uinv.FCM.configMgr.model.images
 * @param {String} str urlencode 字符
 * @return {String} urldecode后的字符
 * @static
 */
uinv.FCM.configMgr.model.images.decode = function(str){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	// 把 _ 替换 % 因为之前为了方便urldecode编码命名
	return decodeURIComponent(str.replaceAll('_','%'));
};

/**
 * @description 更新相册列表
 * @memberOf uinv.FCM.configMgr.model.images
 * @static
 */
uinv.FCM.configMgr.model.images.updateList = function(){
	var _obj = uinv.FCM.configMgr,
		_this = this,
		data = _this.getData(),
		cla = "",
		filename = "",
		img = "",
		arr = [],
		pathinfo = [],
		path = _obj.global.path + _this.path + _this.dir + '/';
		
	for(var i=0,k=data.length; i<k; i++){
		
		if( _obj.model.array.inArray(data[i], _this.limit)){
			continue;
		}
		
		var value = _obj.form.box.find('*[name='+ _this.name +']').attr('src');
		
		if( value ){
			pathinfo = value.split('/');
			filename = pathinfo[ pathinfo.length-1 ];
		}else{
			filename = '';
		}
		
		if(filename == data[i]){
			cla = 'ok';
		}else{
			cla = '';
		}
		
		img = '';
		img += '<li class="' + cla + '" onmouseover="uinv.FCM.configMgr.model.images.viewsImg( $(this).find(\'img\').get(0) );" onclick="uinv.FCM.configMgr.model.images.selectImg(this);" >';
			img += '<img onerror="$(this).parent().remove();" src="'+ _obj.global.projectPath + path+data[i]+'" style="max-width:'+_this.imgWidth+'px;max-height:'+_this.imgHeight+'px;" title="'+_this.decode(data[i])+'" />';
			img += '<a onclick="uinv.FCM.configMgr.model.images.delImages(\''+path+data[i]+'\');" class="deletebtn" href="javascript:void(0);">DEL</a>';
		img += '</li>';
		
		arr.push(img);
		
	}
	
	_obj.model.dialog.getObj().find('.img .left .imglist').html(arr.join(''));
};

/**
 * @description 鼠标移除左侧图片列表框后操作函数
 * @memberOf uinv.FCM.configMgr.model.images
 * @static
 */
uinv.FCM.configMgr.model.images.out = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var obj = _obj.form.box.find('*[name='+_this.name+']').get(0);
	_this.viewsImg(obj);
};

/**
 * @description 相册显示主函数入口
 * @memberOf uinv.FCM.configMgr.model.images
 * @param {Object} param { dir:操作的图片目录 , name:本次操作的name值以便于修改配置数据 }
 * @example uinv.FCM.configMgr.model.images.show({dir:"logo",name:"logo"});
 * @static
 */
uinv.FCM.configMgr.model.images.show = function(param){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_this.dir = param.dir || 'global';
	_this.name = param.name || 'global';
	
	if(_this.dir.substr(0,1) != "/" ){
		_this.dir = "/" + _this.dir;
	}
	
	var html = '';
	html += '<div class="img">';
		html += '<div class="left">';
			html += '<div class="header">';
				html += '<div class="action">';
					html += '<span class="uploadbtn">';
						html += '<a href="javascript:void(0);"><s>上传图片</s>';
							html += '<input onchange="uinv.FCM.configMgr.model.images.imUpload(this);" type="file"  />';
						html += '</a>';
					html += '</span>';
				html += '</div>';
			html += '</div>';
			html += '<div class="imglist" onmouseout="uinv.FCM.configMgr.model.images.out();">Loading...</div>';
		html += '</div>';
		html += '<div class="right">';
			html += '<div class="views"></div>';
		html += '</div>';
		html += '<div class="close">';
			html += '<button title="点击关闭窗口" onclick="uinv.FCM.configMgr.model.images.close();"><s>Close</s></button>';
		html += '</div>';
	html+= '</div>';
	
	_obj.model.dialog.show(html);
	_this.updateList();
	
	// 默认选中的图片在右侧显示
	var o = _obj.model.dialog.getObj().find('.img .left .imglist li.ok img').get(0);
	uinv.FCM.configMgr.model.images.viewsImg( o );
};


 
/**
 * @description 生成key的字符范围
 * @type Array
 */
uinv.FCM.configMgr.model.key.str = [
	'a','b','c','d','e','f','g','h','i','j','k','l','m',
	'o','p','q','r','s','t','x','u','v','y','z','w','n',
	'0','1','2','3','4','5','6','7','8','9'
];

/**
 * @description 生成范围间随机数
 * @memberOf uinv.FCM.configMgr.model.key
 * @param {Number} n 最小值
 * @param {Number} m 最大值
 * @return {Number} 随机数
 * @static
 */
uinv.FCM.configMgr.model.key.randint = function(n,m){
    var c = m-n+1;  
    return Math.floor(Math.random() * c + n);
};

/**
 * @description 生成随机字符
 * @memberOf uinv.FCM.configMgr.model.key
 * @return {String} 字符
 * @static
 */
uinv.FCM.configMgr.model.key.randStr = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var leng = _this.str.length - 1;
	var randkey = _this.randint(0, leng);
	return _this.str[randkey];
};

/**
 * @description 生成随机字符串<br />
 * 1) 默认10个长度
 * @memberOf uinv.FCM.configMgr.model.key
 * @param {Number} len 长度
 * @return {String} 字符串
 * @static
 */
uinv.FCM.configMgr.model.key.create = function(len){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var l = len || 10;
	var str = '';
	
	for(var i = 0 ; i<l ; i++){
		str += _this.randStr();
	}

	return str;
};

 
//--------------------------
// 基础定义
//--------------------------

/**
 * @description 全局图层DOM盒子Class值
 * @type String
 */
uinv.FCM.configMgr.model.layer.globalLayerManagementBoxClass = 'layer-global';

/**
 * @description 数据索引
 * @type String
 */
uinv.FCM.configMgr.model.layer.index = 'layer';

/**
 * @description 上传图层对象记录
 * @type String
 */
uinv.FCM.configMgr.model.layer.uploadLayerSelector = '';

/**
 * @description 副数据，将用于存储
 * @type Object
 */
uinv.FCM.configMgr.model.layer.obj = null;

/**
 * @description 图层上移按钮DOM节点class值定义
 * @type String
 */
uinv.FCM.configMgr.model.layer.upMoveBtnClass = 'upmove';

/**
 * @description 图层盒型DOM节点Class定义
 * @type String
 */
uinv.FCM.configMgr.model.layer.classStr = '';


//----------------------
// 操作区
//----------------------

/**
 * @description 根据key查找到图层对象
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {String} key 图层key值
 * @return {Object} 图层对象
 * @static
 */
uinv.FCM.configMgr.model.layer.keyFindObj = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	for(var i = 0,k=_obj.data.layer.length; i<k; i++){
		if( key == _obj.data.layer[i].key){
			return _obj.data.layer[i];
		}
	}
	return {};
};


/**
 * @description 根据key值删除图层对象（内存操作）
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {String} key 图层key值
 * @return {Boolean} true 删除成功 false 删除失败（可能key值不存在）
 */
uinv.FCM.configMgr.model.layer.keyDelObj = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	for(var i = 0, k = _obj.data.layer.length; i<k; i++){
		if( key == _obj.data.layer[i].key ){
			_obj.data.layer.splice(i,1);
			return true;
		}
	}
	
	return false;
};

/**
 * @description 创建物体方法<br />
 * 1) 实际调用选择器模块的公有方法选择对象节点作为创建
 * @memberOf uinv.FCM.configMgr.model.layer
 * @static
 */
uinv.FCM.configMgr.model.layer.createObject = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	_obj.model.selector.show(function( obj ){
		// 检查是否已存在对象
		var bool = _this.checkObjectExist( obj.where );
		if(bool) {
			_obj.note.alert(_obj.msg.S6);
			return false;
		}
	
		// 关闭窗口
		_obj.model.selector.cancelAddNodeWhere();
		
		// 写入对象
		var comObj = _this.addObject( obj );
		
		// 画出html
		var html = _this.mkhtml( comObj );
		$(_this.classStr).append( html );
	});
};

/**
 * @description 插入分割线
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {DOM} obj 单击创建分割线的DOM节点
 * @param {String} key 创建分割线的图层key值
 * @return {Boolean} 如果key值为false将return false终止后面的操作
 * @static
 */
uinv.FCM.configMgr.model.layer.insertDividingLine = function(obj,key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	if(!key){
		_obj.note.dialog(_obj.msg.S7);
		return false;
	}
	
	var html = _this.mkHtmlList({'key':key},{'name':u.le.get('分割线')});
	var box = $(obj).parents('.list').find('ul');
	box.append(html);
	var dom = box.find('li:last').find('*[name][cate][value]').get(0);
	dom.checked = true;
	_this.checkd(dom);
	dom.disabled = true;
};

/**
 * @description 删除物体操作<br />
 * 1) 执行内存删除操作<br />
 * 2) 执行页面DOM节点删除操作
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {String} key 物体key值
 * @static
 */
uinv.FCM.configMgr.model.layer.deleteObj = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_this.keyDelObj(key);
	
	// 删除节点
	_obj.form.box.find('.obj-' + key).remove();
};


/**
 * @description 删除图层项操作<br />
 * 1) 每一个物体下同名的图层都会一并删除<br />
 * 2) 只是内存操作，不提交服务器<br />
 * 3) 每一个物体下都删除同名的DOM节点
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {DOM} obj 触发删除事件的DOM节点
 * @return {Boolean} 将弹出确认会话框，如果取消删除操作则return false终止后面删除动作
 * @static
 */
uinv.FCM.configMgr.model.layer.deleteObjLayer = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var layerKey  = $(obj).parents('li').find('*[cate][name][value]').attr('value');
	
	if(layerKey == u.le.get('分割线')){
		
		$(obj).parents('li').remove();
		
	}else{
		com = _obj.note.confirm(_obj.msg.S8);
		
		if(!com){
			return false;
		}
		
		for(var i in _obj.data.layer){
			_this.keyDeleteObjLayerLi(_obj.data.layer[i].key, layerKey);
			_this.keyDeleteObjLayer(_obj.data.layer[i], layerKey);
		}
	}
};

/**
 * @description 根据图层key删除物体对象里的order与item的图层项
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {Object} obj 物体对象数据
 * @param {String} layerKey 图层key值
 * @static
 */
uinv.FCM.configMgr.model.layer.keyDeleteObjLayer = function(obj, layerKey){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var index = 0;
	
	if( _obj.model.array.inArray(layerKey, obj.order) ){
		index = _obj.model.array.strInArrayIndex( layerKey, obj.order );
		obj.order.splice(index,1);
	}
	
	if( _obj.model.array.inArray(layerKey, obj.item) ){
		index = _obj.model.array.strInArrayIndex( layerKey, obj.item );
		obj.item.splice(index,1);
	}
};

/**
 * @description 根据对象key，图层key，删除DOM节点
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {String} objkey 对象key值
 * @param {String} layerkey 图层key值
 * @static
 */
uinv.FCM.configMgr.model.layer.keyDeleteObjLayerLi = function(objkey,layerkey){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	_obj.form.box.find( _this.classStr ).find('.obj-' + objkey).find('li').each(function(){
		if( $(this).find('*[cate][name][value]').attr('value') == layerkey ){
			$(this).remove();
		}
	});
};

/**
 * @description 修改物体名称<br />
 * 1) DOM节点文本修改<br />
 * 2) 内存操作修改
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {String} key 物体key值
 * @param {DOM} obj 触发修改名称事件的DOM节点
 * @static
 */
uinv.FCM.configMgr.model.layer.modifyObjectName = function(key,obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var value = $(obj).html();
	var h3 = $(obj).parent();
	h3.html( '<input type="text" value="'+value+'" />' );
	h3.find('input').focus().blur(function(){
		_this.keyFindObj(key).name = $(this).val();
		$(this).parent().html( '<span onclick="uinv.FCM.configMgr.model.layer.modifyObjectName(\''+key+'\',this);">' +  $(this).val() + '</span>');
	}).keydown(function(evt){
		var e = evt || windown.event;
		if(e.keyCode == 13){
			_this.keyFindObj(key).name = $(this).val();
			$(this).parent().html('<span onclick="uinv.FCM.configMgr.model.layer.modifyObjectName(\''+key+'\',this);">' +  $(this).val() + '</span>');
		}
	});
};

/**
 * @description 创建物体DOM节点函数
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {Object} obj 物体数据
 * @return {String} DOM节点
 * @static
 */
uinv.FCM.configMgr.model.layer.mkhtml = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;

	var html = '';
	html += '<div class="list obj-'+obj.key+'">';
		html += '<div class="header" style="position:relative;">';
			html += '<h3><span onclick="uinv.FCM.configMgr.model.layer.modifyObjectName(\''+obj.key+'\',this);">'+obj.name+'</span></h3>';
			html += '<span class="action" style="position:absolute;right:10px;">';
				html += '<a onclick="uinv.FCM.configMgr.model.layer.insertDividingLine(this,\''+obj.key+'\');" href="javascript:void(0);"><s>分割线</s></a>';
				html += ' | ';
				html += '<a onclick="uinv.FCM.configMgr.model.layer.deleteObj(\''+obj.key+'\');" href="javascript:void(0);"><s>删除</s></a>';
			html += '</span>';
		html += '</div>';
		html += '<ul>';
		
		for(var i=0,k=obj.order.length; i<k; i++){
			if( obj.order[i] in _this.obj ){
				html += _this.mkHtmlList( obj, _this.obj[obj.order[i]] );
			}else{
				html += _this.mkHtmlList( obj, {'name':obj.order[i] });
			}
		}
		html += '</ul>';
	html += '</div>';
	
	return html;
};

/**
 * @description 创建物体图层项的DOM节点
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {Object} obj 物体数据
 * @param {Object} layer 图层数据
 * @return {}
 * @static
 */
uinv.FCM.configMgr.model.layer.mkHtmlList = function(obj, layer){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var key = typeof layer.__key == 'string' ? layer.__key : layer.name;
	var delbtnValue = layer.name == u.le.get('分割线') ? '撤销' : '删除';
	
	var html = '';
	html += '<li>';
		html +=  '<span class="layer_name">'+layer.name+'</span>';
		html += '<span class="action layer_up">';
			html += '<a onclick="uinv.FCM.configMgr.model.layer.upMove(this);" class="'+_this.upMoveBtnClass+'" href="javascript:void(0);" style="display:none;"><s>上移</s></a>';
			html += '</span>';
			if( typeof layer.itemConfig == 'object' ){
				html += '<span class="layer_edit">';
				html += '<a onclick="uinv.FCM.configMgr.model.layer.itemConfig(\''+key+'\',\''+obj.key+'\');" href="javascript:void(0);"><s>编辑</s></a>';
				html += '</span>';				
			}else{
				html += '<span class="layer_edit">';
				html +='&nbsp;';
				html +='</span>';
			}
			html += '<span class="layer_del">';
			html += '<a onclick="uinv.FCM.configMgr.model.layer.deleteObjLayer(this);" href="javascript:void(0);"><s>'+delbtnValue+'</s></a>';
			html += '</span>';
			html += '<span class="layer_checkbox">';
			html += '<input onclick="uinv.FCM.configMgr.model.layer.checkd(this);"';
			html += ' name="'+ obj.key +'" value="'+ key +'"';
			html += ' cate="layer" path="layer" type="checkbox" />';
		html += '</span>';
	html += '</li>';
	
	return html;
};


/**
 * @description 图层编辑配置DOM节点创建 并且初始化图层配置数据
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {String} key 图层key值
 * @param {String} objectKey 隶属物体key值
 * @static
 */
uinv.FCM.configMgr.model.layer.itemConfig = function(key, objectKey){
	var _obj = uinv.FCM.configMgr;
	var _this = this;	
	
	if(typeof _this.obj[key].itemConfig == 'undefined'){
		_this.note.alert(_obj.msg.S9);
	}

	_layer = _this.keyFindObj(objectKey);
	_layer.itemData = typeof _layer.itemData == 'undefined' ? {} : _layer.itemData;
	_layer.itemData[key] = typeof _layer.itemData[key] == 'undefined' ? {} : _layer.itemData[key];

	var html = '';
	html += '<div class="itemConfig" style="padding:10px;">';
	for(var i = 0 , k = _this.obj[key].itemConfig.length; i<k; i++){
		if( typeof _this.itemConfigTypeToHtml[_this.obj[key].itemConfig[i].type] == 'function' ){
			html += _this.itemConfigTypeToHtml[_this.obj[key].itemConfig[i].type](_this.obj[key].itemConfig[i],key, objectKey);
		}
	}
	html += '<p class="action">';
		html += '<input class="btn_cancel" onclick="uinv.FCM.configMgr.model.dialog.close();" />';
		html += '<input class="btn_save" onclick="uinv.FCM.configMgr.model.layer.itemConfigSubmit();" />';
	html += '</p>';
	
	html += '</div>';
	
	_obj.model.dialog.show(html);
	_this.itemConfigFormInit(objectKey);
};

/**
 * @description 初始化图层配置项表单
 * @memberOf uinv.FCM.configMgr.model.layer
 * @static
 */
uinv.FCM.configMgr.model.layer.itemConfigFormInit = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	_obj.model.dialog.getObj().find('.itemConfig').find('*[name][cate][path]').each(function(){
		if( typeof _this.itemConfigInitData[$(this).attr('cate')] == 'function' ){
			_this.itemConfigInitData[$(this).attr('cate')](this);
		}
	});
};

/**
 * @description 图层配置表单提交 将表单值写入内存中
 * @memberOf uinv.FCM.configMgr.model.layer
 * @static
 */
uinv.FCM.configMgr.model.layer.itemConfigSubmit = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	_obj.model.dialog.getObj().find('.itemConfig').find('*[name][cate][path]').each(function(){
		if( typeof _this.itemConfigSetData[$(this).attr('cate')] == 'function' ){
			_this.itemConfigSetData[$(this).attr('cate')](this);
		}
	});
	
	_obj.model.dialog.close();
};

/**
 * @description 添加图层DOM节点到物体DOM树里
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {String} key 物体key值
 * @param {String} html 创建的DOM图层节点
 * @static
 */
uinv.FCM.configMgr.model.layer.addLayerOneToObj = function( key, html ){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_obj.form.box.find('.obj-' + key).find('ul').append(html);
};

/**
 * @description 根据value删除物体DOM树下的图层项DOM节点
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {String} key 物体key值
 * @param {String} value 图层DOM节点的value值
 * @static
 */
uinv.FCM.configMgr.model.layer.removeObjLayerIsValue = function( key, value ){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_obj.form.box.find('.obj-' + key).find('*[name="'+key+'"][value="'+value+'"]').parents('li').remove();
};

/**
 * @description 图层排序 把已勾选的图层排到前面，未勾选的图层排到后面
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {DOM} obj DOM节点
 * @static
 */
uinv.FCM.configMgr.model.layer.order = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;

	var num = 0;
	var index = 0;
	_obj.form.box.find( '*[name='+$(obj).attr('name')+']' ).each(function(i){
		if( this.checked === true && this != obj){
			num++;
		}else if( this==obj ){
			index = i;
		}
	});
	
	// 排序
	if(index != num){
		if(obj.checked === true){
			_obj.form.box.find( '*[name='+$(obj).attr('name')+']:eq('+num+')' ).parents('li').before( $(obj).parents('li') );
		}else{
			_obj.form.box.find( '*[name='+$(obj).attr('name')+']:eq('+num+')' ).parents('li').after( $(obj).parents('li') );
		}
	}
};

/**
 * @description 显示图层上移按钮 因为图层未勾选的时候会隐藏
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {DOM} obj 触发事件的DOM节点
 * @static
 */
uinv.FCM.configMgr.model.layer.showUpMoveBtn = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	$(obj).parents('li').find( '.' + _this.upMoveBtnClass ).show();
};


/**
 * @description 隐藏上移按钮 因为图层取消选中状态时要隐藏下移按钮
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {DOM} obj DOM节点
 * @static
 */
uinv.FCM.configMgr.model.layer.hideUpMoveBtn = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	$(obj).parents('li').find( '.' + _this.upMoveBtnClass ).hide();
};

/**
 * @description 选中图层触发函数<br />
 * 1) 初始化图层checkbox为true的时候也触发
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {DOM} obj 选中图层的checkbox DOM节点
 * @static
 */
uinv.FCM.configMgr.model.layer.checkd = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	// 排序
	_this.order(obj);
	
	if(obj.checked === true){
		// 添加class
		$(obj).parents('li').addClass('checked');
		
		// 显示 上移按钮
		_this.showUpMoveBtn(obj);
	}else{
		// 添加class
		$(obj).parents('li').removeClass('checked');	
		
		// 隐藏 上移按钮
		_this.hideUpMoveBtn(obj);
	}
	
};

/**
 * @description 选中图层后要把选中的图层排到前面，主要防止在它前面有未选中的图层
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {String} name 图层name值
 * @static
 */
uinv.FCM.configMgr.model.layer.checkedLayerOrder = function(name){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var layerObj = _this.keyFindObj( name );
	var layerForm = _obj.form.box.find('*[name=' + name + ']:checked');
	
	if( layerObj.item.length == layerForm.length ){
		for( var i = 0, k = layerObj.item.length; i<k; i++ ){
			var obj = _obj.form.box.find('*[name=' + name + '][value="' + layerObj.item[i] + '"]');
			var index = obj.parents('li').index();
			if(i != index){
				_obj.form.box.find( '*[name='+ name +']:eq('+ i +')' ).parents('li').before( obj.parents('li') );
			}
		}
	}
};

/**
 * @description 上移图层操作
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {DOM} obj 触发事件的DOM节点
 * @static
 */
uinv.FCM.configMgr.model.layer.upMove = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var checkObj =  $(obj).parents('li').find('input[type=checkbox][name]');
	
	// 如果图层没有被选中状态，就return退出，不执行上移操作
	if( checkObj.get(0).checked === false ) {
		return;
	}
	
	var index = $(obj).parents('li').index();
	
	// 如果图层排在首位就return退出，不执行上移操作
	if(index === 0){
		return;
	}
	
	// 上移操作
	index--;
	var name = checkObj.attr('name');
	_obj.form.box.find( '*[name='+name+']:eq('+index+')' ).parents('li').before( $(obj).parents('li') );	
};

/**
 * @description 判断key是否已被使用，防止key重复
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {String} key值
 * @return {Boolean}
 * @static
 */
uinv.FCM.configMgr.model.layer.checkHasKey = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	for(var i = 0 ,k = _obj.data.layer.length ; i<k ; i++){
		if( _obj.data.layer[i].key == key ){
			return true;
		}
	}
	
	return false;
};

/**
 * @description 创建物体 （内存操作）
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {Object} obj 物体数据
 * @return {Object} 组合过的物体数据
 * @static
 */
uinv.FCM.configMgr.model.layer.addObject = function( obj ){
	var _obj = uinv.FCM.configMgr,
		_this = this,
		key = "",
		i = null,
		bool = false;
	
	do{
		key = _obj.model.key.create(32);
		bool = _this.checkHasKey(key);
	}while(bool);
	
	var comObj = {
		'key' : key,
		'name' : obj.name,
		'obj' : obj.where,
		'itemConfig' : {},
		'order' : [],
		'item' : []
	};
	
	for(i in _this.obj ){
		comObj.order.push(i);
	}
	
	_obj.data.layer.push(comObj);
	return comObj;
};
		
/**
 * @description 检测两个物体是否相等<br />
 * 1) 实际上只是检测物体的condition<br />
 * 2) 当前检测的condition只有name attribute classid
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {Object} o1 物体1
 * @param {Object} o2 物体2
 * @return {Boolean} true 相等 false 不相等
 * @static
 */
uinv.FCM.configMgr.model.layer.judgeObjectIsEq = function(o1,o2){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var bool = false;
	
	// 检测 classid相等
	if( typeof o1.classid != 'undefined' && typeof o2.classid != 'undefined' && o1.classid == o2.classid){
		bool = true;
	}
	
	// 检测 name相等
	if( typeof o1.name != 'undefined' && typeof o2.name != 'undefined' && o1.name == o2.name){
		bool = true;
	}
	
	// 检测attribute
	if( typeof o1.attribute != 'undefined' && typeof o2.attribute != 'undefined' && 
		o1.attribute[0].key ==  o2.attribute[0].key && o1.attribute[0].value ==  o2.attribute[0].value ){
			
		bool = true;
	}				
	
	return bool;
};

/**
 * @description 判断物体是否已经存在<br />
 * 1) 实际上是遍历已创建的物体挨个比较是否有condition一样的物体 fun除外
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {Object} obj 要检测的物体
 * @return {Boolean} true 存在 false 不存在
 * @static
 */
uinv.FCM.configMgr.model.layer.checkObjectExist = function( obj ){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	for(var i=0,k=_obj.data.layer.length; i<k; i++){
		if( _this.judgeObjectIsEq(obj, _obj.data.layer[i].obj ) ){
			return true;
		}
	}
	
	return false;
};
	
/**
 * @description 添加图层逻辑业务处理
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {Object} obj 图层数据
 * @param {Function} fun 回调函数
 * @static
 */
uinv.FCM.configMgr.model.layer.add = function(obj, fun){
	var _obj = uinv.FCM.configMgr;
	var _this = this;

	// 判断是添加到全局还是对象
	if( typeof _this.uploadLayerSelector == 'undefined'  ){
		_this.addLayerToGlobalLib( obj, _this.addLayerToGlobalLibCallback );
	}else{
		_this.addLayerToObjLib( obj, _this.addLayerToObjLibCallback );
	}
};

/**
 * @description 添加图层到全局对象 （内存操作）
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {Object} obj 图层数据
 * @param {Function} fun 回调函数
 * @static
 */
uinv.FCM.configMgr.model.layer.addLayerToGlobalLib = function( obj, fun ){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var key = typeof obj.__key == 'string' ? obj.__key : obj.name;
	
	_this.obj[key] = {};
		
	for(var i in obj){
		_this.obj[key][i] = obj[i];
	}
	
	if( typeof fun == 'function' ){
		fun.apply( _this, [obj] );
	}
};

/**
 * @description 添加图层到全局对象 回调
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {Object} obj 图层数据
 * @static
 */
uinv.FCM.configMgr.model.layer.addLayerToGlobalLibCallback = function( obj ){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	// 添加图层全局对象下
	_this.obj[obj.name] = _obj.model.object.clone(obj);
	
	// 添加到各个图层
	for(var i = 0,k=_obj.data.layer.length; i<k; i++){
		var key = _obj.data.layer[i].key;
		
		//_obj.data.layer[i].lib[obj.name] = _obj.model.object.clone(obj);
		//_obj.data.layer[i].order.push( obj.name );
		
		var html = _this.mkHtmlList( {'key':key}, obj);
		_this.removeObjLayerIsValue( key, obj.name );
		_this.addLayerOneToObj( key , html );	
		
	}
};

/**
 * @description 对象写到文本数据后回调函数
 * @memberOf uinv.FCM.configMgr.model.layer
 * @static
 */
uinv.FCM.configMgr.model.layer.setDBCallback = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
};

/**
 * @description 添加图层到指定物体的图层库内
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {Object} obj 图层
 * @param {Function} fun 回调函数
 * @static
 */
uinv.FCM.configMgr.model.layer.addLayerToObjLib = function( obj, fun ){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var key = obj.name;
	
	if(typeof obj.__key == 'string'){
		key = obj.__key;
	}
	
	var layerObj = _this.keyFindObj( _this.uploadLayerSelector );
	
	layerObj.lib[key] = {};
	layerObj.order.push(key);
	
	for(var i in obj){
		layerObj.lib[key][i] = obj[i];
	}
	
	if( typeof fun == 'function' ){
		fun( layerObj, obj );
	}
};

/**
 * @description 添加图层到指定对象回调函数
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {Object} obj 物体数据
 * @param {Object} layer 图层数据
 * @static
 */
uinv.FCM.configMgr.model.layer.addLayerToObjLibCallback = function( obj, layer ){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	// 是否添加全部
	var appendAll = true;

	// 添加单个
	var key = typeof layer.__key == 'string' ? layer.__key : layer.name;
	var html = _this.mkHtmlList( obj, layer );
	_this.removeObjLayerIsValue( obj.key, key );
	_this.addLayerOneToObj( obj.key , html );
};

/**
 * @description 索引图层副数据
 * @memberOf uinv.FCM.configMgr.model.layer
 * @return {Object} 图层副数据
 */
uinv.FCM.configMgr.model.layer.getLayerList = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	return _obj.model.stringDB.get(_this.index);
};

/**
 * @description 图层上传
 * @memberOf uinv.FCM.configMgr.model.layer
 * @see uinv.server.manager.frame.upAndUnZip()
 * @param {DOM} obj 上传空间DOM对象
 * @param {} selector
 * @static
 */
uinv.FCM.configMgr.model.layer.upload = function(obj, selector){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	if(selector){
		var layerObj = _this.keyFindObj( selector );
		if(typeof layerObj.lib == 'undefined'){
			_obj.note.alert(_obj.msg.s10);
			return;
		}
	}
	
	_this.uploadLayerSelector = selector;
	var pathinfo = $(obj).val().split("\\");
	var filename = pathinfo[ pathinfo.length-1 ];

	uinv.server.manager.frame.upAndUnZip(obj, filename, function(result){ _this.uploadCallback(result); } );
};

/**
 * @description 上传图层回调函数 主要接受回传的图层内容，以做下一步处理
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {Object} result 执行上传操作后服务器返回的结果
 * @static
 */
uinv.FCM.configMgr.model.layer.uploadCallback = function(result){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	if( result.success ){
		
		var obj = _obj.model.transform.str2obj(result.data);
		
		var bool = _this.verificationLayerData(obj);

		if(bool){
			if(_obj.model.array.isArray(obj)){
				for(var i = 0,k=obj.length; i<k; i++){
					_this.add(obj[i] , _this.addCallback );
				}
			}else{
				_this.add(obj , _this.addCallback );
			}							
		}
		
		_obj.form.submit();
	}else{
		_obj.note.alert(result.data);
	}
};

/**
 * @description 检测上传图层数据的合法性
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {Object} obj 上传的图层数据
 * @return {Boolean} true 合法 false 不合法
 * @static
 */
uinv.FCM.configMgr.model.layer.verificationLayerData = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	if(_obj.model.array.isArray(obj)){
	
		for(var i = 0, k=obj.length; i<k; i++){
			if( !_obj.model.object.isObject( obj[i] ) || typeof obj[i].name == 'undefined' ){
				_obj.note.dialog( _obj.msg.S11 );
				return false;
			}
		}
		
		return true;
		
	}else if( _obj.model.object.isObject( obj ) ){
		if( typeof obj.name != 'undefined' ){
			return true;
		}else{
			_obj.note.dialog(_obj.msg.S11  );
			return false;
		}
	}else{
		_obj.note.dialog( _obj.msg.S11  );
		return false;
	}
};

/**
 * @description 根据传入参数创建全局图层的DOM节点
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {Object} obj 图层数据
 * @return {String} DOM节点
 * @static
 */
uinv.FCM.configMgr.model.layer.globalLayerListHtml = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var html = '';
	html += '<li style="margin:10px; position:relative;" key="'+ obj.name +'">';
		html += obj.name;
		html += '<span class="action" style="position:absolute;right:0; top:0;">';
			html += '<a onclick="uinv.FCM.configMgr.model.layer.deleteGlobalLayer(this, \''+ obj.name+'\');" href="javascript:void(0);"><s>删除</s></a>';
		html += '</span>';
	html += '</li>';
	
	return html;
};

/**
 * @description 全局图层管理页面入口
 * @memberOf uinv.FCM.configMgr.model.layer
 * @static
 */
uinv.FCM.configMgr.model.layer.globalLayerManager = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var html = '';
	html += '<div style="width:500px;" class="'+_this.globalLayerManagementBoxClass+'">';
		html += '<div>';
			html += '<s>上传新图层</s><input type="file" onchange="uinv.FCM.configMgr.model.layer.upload(this);" /><br />';
			html += '<input type="text" /><button><s>添加分类</s></button>';
		html += '</div>';
		
		html += '<br />';
		
		html += '<ul style="width:100%;">';
		for(var i in _this.obj){
			html += _this.globalLayerListHtml( _this.obj[i] );
		}
		html += '</ul>';
		
		html += '<div class="action" style="width:100%;text-align:center;">';
			html += '<input class="btn_save" onclick="uinv.FCM.configMgr.model.dialog.close(uinv.FCM.configMgr.model.layer.globalLayerManagerCallBack);" />';
		html += '</div>';
	html += '</div>';
	
	_obj.model.dialog.show(html);
};

/**
 * @description 关闭全局图层管理窗口回调函数
 * @memberOf uinv.FCM.configMgr.model.layer
 * @static
 */
uinv.FCM.configMgr.model.layer.globalLayerManagerCallBack = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_obj.model.stringDB.set( _this.index, _this.obj );
};

/**
 * @description 删除全局图层操作，只操作内存
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {DOM} obj 触发事件的DOM节点
 * @param {String} key 图层key值
 * @static
 */
uinv.FCM.configMgr.model.layer.deleteGlobalLayer = function(obj, key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	if( typeof _this.obj[key] != 'undefined' ){
		delete _this.obj[key];
	}
	
	$(obj).parents('li').remove();
};

/**
 * @description 初始化
 * @memberOf uinv.FCM.configMgr.model.layer
 * @param {String} classStr 图层盒子DOM Class 值
 * @static
 */
uinv.FCM.configMgr.model.layer.init = function(classStr){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	_obj.form.submitCallback = function(){
		_obj.model.stringDB.set( _this.index, _this.obj, _this.setDBCallback );
	};
	
	_this.classStr = classStr || _this.classStr;
	
	_this.obj = _this.getLayerList();

	var html = '';
	for(var i=0,k=_obj.data.layer.length; i<k; i++){
		html += _this.mkhtml( _obj.data.layer[i] );
	}
	
	_obj.form.box.find(_this.classStr).html(html);
};



/**
 * @description 字符串类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.layer.itemConfigInitData.string = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.layer;
	
	var _layer = _obj.model.layer.keyFindObj($(obj).attr('objectkey'));
	if(typeof _layer.itemData[$(obj).attr('path')][$(obj).attr('name')] == 'string'){
		$(obj).val( _layer.itemData[$(obj).attr('path')][$(obj).attr('name')]  );
	}
};

/**
 * @description 数字串类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.layer.itemConfigInitData.number = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.layer;
	
	var _layer = _obj.model.layer.keyFindObj($(obj).attr('objectkey'));
	if(typeof _layer.itemData[$(obj).attr('path')][$(obj).attr('name')] == 'number'){
		$(obj).val( _layer.itemData[$(obj).attr('path')][$(obj).attr('name')] );
	}
};

/**
 * @description 布尔类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.layer.itemConfigInitData.bool = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.layer;
	
	var _layer = _obj.model.layer.keyFindObj($(obj).attr('objectkey'));
	if( typeof _layer.itemData[$(obj).attr('path')][$(obj).attr('name')] == 'boolean' ){
		if( obj.value == '1' && _layer.itemData[$(obj).attr('path')][$(obj).attr('name')] ){
			obj.checked = true;
		}else if( obj.value == '0' && !_layer.itemData[$(obj).attr('path')][$(obj).attr('name')] ){
			obj.checked = true;
		}
	}
};

/**
 * @description 颜色类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.layer.itemConfigInitData.color = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.layer;
	
	var _layer = _obj.model.layer.keyFindObj($(obj).attr('objectkey'));
	if(  typeof _layer.itemData[$(obj).attr('path')][$(obj).attr('name')]  == 'string' ){
		$(obj).val( _layer.itemData[$(obj).attr('path')][$(obj).attr('name')] );
	}
	_obj.model.colorpicke.show(obj);
};

/**
 * @description 3D位置类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.layer.itemConfigInitData.position3d = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.layer;
	
	var _layer = _obj.model.layer.keyFindObj($(obj).attr('objectkey'));
	if(typeof  _layer.itemData[$(obj).attr('path')][$(obj).attr('name')]  == 'object'){
		var index = $(obj).parents('li').index();
		$(obj).val(  _layer.itemData[$(obj).attr('path')][$(obj).attr('name')][index] );
	}				
};

/**
 * @description 2D位置类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.layer.itemConfigInitData.position2d = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.layer;
	
	var _layer = _obj.model.layer.keyFindObj($(obj).attr('objectkey'));
	if(typeof _layer.itemData[$(obj).attr('path')][$(obj).attr('name')] == 'object'){
		var index = $(obj).parents('li').index();
		$(obj).val( _layer.itemData[$(obj).attr('path')][$(obj).attr('name')][index] );
	}				
};

/**
 * @description 下拉类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.layer.itemConfigInitData.select = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.layer;
	
	var _layer = _obj.model.layer.keyFindObj($(obj).attr('objectkey'));
	if(typeof  _layer.itemData[$(obj).attr('path')][$(obj).attr('name')] != 'undefined'){
		var value =  _layer.itemData[$(obj).attr('path')][$(obj).attr('name')];
		$(obj).find('option').each(function(){
			if($(this).attr('value') == value){
				this.selected = true;
			}else if( this.selected ){
				this.selected = false;
			}
		});
	}
};


/**
 * @description 字符串类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.layer.itemConfigSetData.string = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.layer;
	var _layer = _obj.model.layer.keyFindObj($(obj).attr('objectkey'));
	_layer.itemData[$(obj).attr('path')][$(obj).attr('name')] = $(obj).val();
};

/**
 * @description 数字类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.layer.itemConfigSetData.number = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.layer;
	var _layer = _obj.model.layer.keyFindObj($(obj).attr('objectkey'));
	_layer.itemData[$(obj).attr('path')][$(obj).attr('name')] = Number($(obj).val());
};


/**
 * @description 布尔类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.layer.itemConfigSetData.bool = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.layer;
	var _layer = _obj.model.layer.keyFindObj($(obj).attr('objectkey'));
	if( obj.checked ){
		if(obj.value == '1'){
			_layer.itemData[$(obj).attr('path')][$(obj).attr('name')] = true;
		}else{
			_layer.itemData[$(obj).attr('path')][$(obj).attr('name')] = false;
		}
	}
};

/**
 * @description 颜色类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.layer.itemConfigSetData.color = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.layer;
	var _layer = _obj.model.layer.keyFindObj($(obj).attr('objectkey'));
	_layer.itemData[$(obj).attr('path')][$(obj).attr('name')] = $(obj).val();
};

/**
 * @description 3D位置类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.layer.itemConfigSetData.position3d = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.layer;
	
	var _layer = _obj.model.layer.keyFindObj($(obj).attr('objectkey'));
	if( typeof _layer.itemData[$(obj).attr('path')][$(obj).attr('name')] == 'undefined' || _layer.itemData[$(obj).attr('path')][$(obj).attr('name')].length == 3  ){
		_layer.itemData[$(obj).attr('path')][$(obj).attr('name')] = [];
	}
	
	_layer.itemData[$(obj).attr('path')][$(obj).attr('name')].push( $(obj).val() );
};

/**
 * @description 2D位置类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.layer.itemConfigSetData.position2d = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.layer;
	
	var _layer = _obj.model.layer.keyFindObj($(obj).attr('objectkey'));
	if( typeof _layer.itemData[$(obj).attr('path')][$(obj).attr('name')] == 'undefined' || _layer.itemData[$(obj).attr('path')][$(obj).attr('name')].length == 2  ){
		_layer.itemData[$(obj).attr('path')][$(obj).attr('name')] = [];
	}
	
	_layer.itemData[$(obj).attr('path')][$(obj).attr('name')].push( $(obj).val() );
};

/**
 * @description 下拉类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.layer.itemConfigSetData.select = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.layer;
	
	var _layer = _obj.model.layer.keyFindObj($(obj).attr('objectkey'));
	$(obj).find('option').each(function(){
		if(this.selected){
			_layer.itemData[$(obj).attr('path')][$(obj).attr('name')] = $(this).attr('value');
		}
	});
};


/**
 * @description 字符串类型
 * @param {Object} obj 图层数据
 * @param {Stirng} key 图层key值
 * @param {String} objectKey 物体key值
 * @return {String} DOM节点
 */
uinv.FCM.configMgr.model.layer.itemConfigTypeToHtml.string = function(obj,key,objectKey){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.layer;
	
	var value = typeof obj.defaultItem == 'undefined' ? '' :  obj.defaultItem;

	var html = '';
	html += '<p class="row" style="margin:10px auto;">';

		if( typeof obj.caption == 'undefined' ){
			html += '<span>'+obj.name+'</span>';	
		}else{
			html += '<span>'+obj.caption+'</span>';
		}

		html += '<input type="text" objectkey="'+objectKey+'" name="'+obj.name+'" cate="string" path="'+key+'" value="'+value+'" />';

	html += '</p>';
	return html;
};

/**
 * @description 数字类型
 * @param {Object} obj 图层数据
 * @param {Stirng} key 图层key值
 * @param {String} objectKey 物体key值
 * @return {String} DOM节点
 */
uinv.FCM.configMgr.model.layer.itemConfigTypeToHtml.number = function(obj,key,objectKey){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.layer;

	var value = typeof obj.defaultItem == 'undefined' ? '' :  obj.defaultItem;

	var html = '';
	html += '<p class="row" style="margin:10px auto;">';

		if( typeof obj.caption == 'undefined' ){
			html += '<span>'+obj.name+'</span>';	
		}else{
			html += '<span>'+obj.caption+'</span>';
		}

		html += '<input type="text" objectkey="'+objectKey+'" name="'+obj.name+'" cate="number" path="'+key+'" value="'+value+'" />';

	html += '</p>';
	return html;
};

/**
 * @description 布尔类型
 * @param {Object} obj 图层数据
 * @param {Stirng} key 图层key值
 * @param {String} objectKey 物体key值
 * @return {String} DOM节点
 */
uinv.FCM.configMgr.model.layer.itemConfigTypeToHtml.bool = function(obj,key,objectKey){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.layer;
	
	var value = typeof obj.defaultItem == 'undefined' ? false :  obj.defaultItem;

	var html = '';
	html += '<p class="row" style="margin:10px auto;">';

		if( typeof obj.caption == 'undefined' ){
			html += '<span>'+obj.name+'</span>';	
		}else{
			html += '<span>'+obj.caption+'</span>';
		}

		if(value){
			html += obj.items.TRUE+'<input type="radio" objectkey="'+objectKey+'" name="'+obj.name+'" cate="bool" path="'+key+'" value="1" checked /> ';
			html += obj.items.FALSE+'<input type="radio" objectkey="'+objectKey+'" name="'+obj.name+'" cate="bool" path="'+key+'" value="0" /> ';
		}else{
			html += obj.items.TRUE+'<input type="radio" objectkey="'+objectKey+'" name="'+obj.name+'" cate="bool" path="'+key+'" value="1" /> ';
			html += obj.items.FALSE+'<input type="radio" objectkey="'+objectKey+'" name="'+obj.name+'" cate="bool" path="'+key+'" value="0" checked /> ';
		}

	html += '</p>';
	return html;
};

/**
 * @description 颜色类型
 * @param {Object} obj 图层数据
 * @param {Stirng} key 图层key值
 * @param {String} objectKey 物体key值
 * @return {String} DOM节点
 */
uinv.FCM.configMgr.model.layer.itemConfigTypeToHtml.color = function(obj,key,objectKey){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.layer;
	
	var value = typeof obj.defaultItem == 'undefined' ? '#FFFFFF' :  obj.defaultItem;

	var html = '';
	html += '<p class="row" style="margin:10px auto;">';

		if( typeof obj.caption == 'undefined' ){
			html += '<span>'+obj.name+'</span>';	
		}else{
			html += '<span>'+obj.caption+'</span>';
		}

		html += '<input type="text" objectkey="'+objectKey+'" name="'+obj.name+'" cate="color" path="'+key+'" value="'+value+'"  />';

	html += '</p>';
	return html;
};

/**
 * @description 3D位置类型
 * @param {Object} obj 图层数据
 * @param {Stirng} key 图层key值
 * @param {String} objectKey 物体key值
 * @return {String} DOM节点
 */
uinv.FCM.configMgr.model.layer.itemConfigTypeToHtml.position3d = function(obj,key,objectKey){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.layer;

	var html = '';
	html += '<div class="row" style="margin:10px auto;">';
		
		if( typeof obj.caption == 'undefined' ){
			html += '<span>'+obj.name+'</span>';	
		}else{
			html += '<span>'+obj.caption+'</span>';
		}

		html += '<ul>';
			html += '<li style="list-style:none;"><span><s>'+obj.items[0]+'</s></span><input type="text" objectkey="'+objectKey+'" name="'+obj.name+'" cate="position3d" path="'+key+'"  /></li>';
			html += '<li style="list-style:none;"><span><s>'+obj.items[1]+'</s></span><input type="text" objectkey="'+objectKey+'" name="'+obj.name+'" cate="position3d" path="'+key+'"  /></li>';
			html += '<li style="list-style:none;"><span><s>'+obj.items[2]+'</s></span><input type="text" objectkey="'+objectKey+'" name="'+obj.name+'" cate="position3d" path="'+key+'"  /></li>';
		html += '</ul>';

	html += '</div>';
	return html;					
};

/**
 * @description 2D位置类型
 * @param {Object} obj 图层数据
 * @param {Stirng} key 图层key值
 * @param {String} objectKey 物体key值
 * @return {String} DOM节点
 */
uinv.FCM.configMgr.model.layer.itemConfigTypeToHtml.position2d = function(obj,key,objectKey){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.layer;

	var html = '';
	html += '<div class="row" style="margin:10px auto;">';

		if( typeof obj.caption == 'undefined' ){
			html += '<span><s>'+obj.name+'</s></span>';	
		}else{
			html += '<span><s>'+obj.caption+'</s></span>';
		}

		html += '<ul>';
			html += '<li style="list-style:none;"><span><s>'+obj.items[0]+'</s></span><input type="text" objectkey="'+objectKey+'" name="'+obj.name+'" cate="position2d" path="'+key+'"  /></li>';
			html += '<li style="list-style:none;"><span><s>'+obj.items[1]+'</s></span><input type="text" objectkey="'+objectKey+'" name="'+obj.name+'" cate="position2d" path="'+key+'"  /></li>';
		html += '</ul>';

	html += '</div>';
	return html;					
};

/**
 * @description 下拉类型
 * @param {Object} obj 图层数据
 * @param {Stirng} key 图层key值
 * @param {String} objectKey 物体key值
 * @return {String} DOM节点
 */
uinv.FCM.configMgr.model.layer.itemConfigTypeToHtml.select = function(obj,key,objectKey){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.layer;

	var value = typeof obj.defaultItem == 'undefined' ? '' :  obj.defaultItem;

	var html = '';
	html += '<div class="row" style="margin:10px auto;">';

		if( typeof obj.caption == 'undefined' ){
			html += '<span>'+obj.name+'</span>';	
		}else{
			html += '<span>'+obj.caption+'</span>';
		}

		html += '<select class="row_select" objectkey="'+objectKey+'" name="'+obj.name+'" cate="select" path="'+key+'">';
		for(var i = 0, k = obj.items.length; i<k; i++){
			if( obj.items[i]==value ){
				html += '<option value="'+obj.items[i]+'" selected>'+obj.items[i]+'</option>';
			}else{
				html += '<option value="'+obj.items[i]+'">'+obj.items[i]+'</option>';
			}
		}
		html += '</select>';
	html += '</div>';
	return html;
};

//---------------------------------------------------------
// 基础定义
//---------------------------------------------------------

/**
 * @deprecated 所有使用条件下拉的条件列表
 * @type Array
 */
uinv.FCM.configMgr.model.monitor.conditionArr = ['<'];

/**
 * @description 待删除文件列表
 * @type Array
 */
uinv.FCM.configMgr.model.monitor.deleteFileArr = [];

/**
 * @description 副数据定义
 * @type Object
 */
uinv.FCM.configMgr.model.monitor.obj = null;

/**
 * @description 物体盒型DOM class值
 * @type String
 */
uinv.FCM.configMgr.model.monitor.objBoxClassStr = '';

/**
 * @description 面板盒型DOM class值
 * @type String
 */
uinv.FCM.configMgr.model.monitor.styleBoxClassStr = '';

/**
 * @description 告警盒型DOM class值
 * @type String
 */
uinv.FCM.configMgr.model.monitor.alarmlevelBoxClassStr = '';

/**
 * @description 数据索引
 * @type String
 */
uinv.FCM.configMgr.model.monitor.index = 'monitor';

/**
 * @description 位置预制参数
 * @type Array
 */
uinv.FCM.configMgr.model.monitor.position = {
	'x' : [ {'name' : '左', 'value' : 'LEFT' },{ 'name' : '中' , 'value' : 'CENTER' },{ 'name' : '右', 'value' : 'RIGHT'} ],
	'y' : [ {'name' : '上', 'value' : 'TOP' },{ 'name' : '中', 'value' : 'CENTER' },{ 'name' : '下', 'value' : 'BOTTOM'} ],
	'z' : [ {'name' : '前', 'value' : 'FRONT' },{ 'name' : '中', 'value' : 'CENTER' },{ 'name' : '后', 'value' : 'BACK'} ]
};

/**
 * @description 面板编辑列名参数定义
 * @type Object
 */
uinv.FCM.configMgr.model.monitor.panelConfigAttributeField = [
	{ 'name' : '指标名称', 'value' : 'attributeName', 'type' : 'string' },
	{ 'name' : '单位', 'value' : 'unit', 'type' : 'string' },
	{ 'name' : '指标取值', 'value' : 'propertyPath', 'type' : 'string'},
	{ 'name' : '最小值', 'value' : 'min', 'type' : 'number'},
	{ 'name' : '最大值', 'value' : 'max', 'type' : 'number'},
	{ 'name' : '进度条', 'value' : 'isProgressBar', 'type' : 'bool' },
	{ 'name' : '颜色设置', 'value' : 'styleConfig', 'type' : 'styleConfig' }
];


//--------------------------------------------
// 函数区
//--------------------------------------------


/**
 * @description 获取position的select列表
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {String} position x y z 
 * @param {String} value 值
 * @return {String} HTML文本
 * @static
 */
uinv.FCM.configMgr.model.monitor.getSelectOptionHtml = function(position, value){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var html = '';
	for(var i=0,k=_this.position[position].length; i<k; i++){
		if( value == _this.position[position][i].value ){
			html += '<option value="'+_this.position[position][i].value+'" selected>'+_this.position[position][i].name+'</option>';
		}else{
			html += '<option value="'+_this.position[position][i].value+'">'+_this.position[position][i].name+'</option>';
		}
	}
	
	return html;
};

/**
 * @description 打开监控配置
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {String} key 物体key值
 * @return {Boolean} 如果物体没有选择面板则return false终止操作
 * @static
 */
uinv.FCM.configMgr.model.monitor.configShow = function(key){
	var _obj = uinv.FCM.configMgr,
		_this = this,
		i = null,
		tmp = null,
		tmps = null;
	
	var o = _this.keyFindObj(key);
	var panel = _this.nameFindPanel(o.panel);
	if(!panel){
		return false;
	}
	
	var imgSrc =  _obj.global.projectPath + _this.getPanelImagePath(panel) ;
	
	var html = '';
	html += '<div class="monitor">';
		html += '<div class="monitor_warp">';
			html += '<div class="monitor_name"><span><s>面板图片</s></span><img src="'+imgSrc+'" /></div>';
				html += '<div class="monitor_set">';
				
					tmps = typeof o.config.pivotLayout  == 'undefined' ? panel.pivotLayout : o.config.pivotLayout ;
					html += '<div class="each"  key="pivotLayout" cate="array">';
						html += '<span class="monitor_setname"><s>二维位置</s></span>';
						for(i=0,tmp=['x','y','z'];i<tmp.length;i++){ 
							if(i==tmp.length-1){
								html += '<span>';
									html += '<select name="pivotLayout" style="display:none;">'+_this.getSelectOptionHtml(tmp[i], tmps[i])+'</select>';
								html += '</span>';
							}else{
								html += '<span>';
									html += '<select name="pivotLayout">'+_this.getSelectOptionHtml(tmp[i], tmps[i])+'</select>';
								html += '</span>';
							}
						}
					html += '</div>';
					
					tmps = typeof o.config.layout  == 'undefined' ? panel.layout : o.config.layout;
					html += '<div class="each" key="layout" cate="array">';
						html += '<span class="monitor_setname"><s>三维位置</s></span>';
						for(i=0,tmp=['x','y','z'];i<tmp.length;i++){ 
							html += '<span>';
								html += '<select name="layout">'+_this.getSelectOptionHtml(tmp[i], tmps[i])+'</select>';
							html += '</span>';
						}
					html += '</div>';
					
					tmps = typeof o.config.layoutOffset == 'undefined' ? panel.layoutOffset : o.config.layoutOffset ;
					html += '<div class="each" key="layoutOffset" cate="array">';
						html += '<span class="monitor_setname"><s>偏移设置</s></span>';
						html += '<span>';
							html += '<input type="text" name="layoutOffset" value="'+tmps[0]+'" /> m ';
						html += '</span>';
						html += '<span>';
							html += '<input type="text" name="layoutOffset" value="'+tmps[1]+'" /> m ';
						html += '</span>';
						html += '<span>';
							html += '<input type="text" name="layoutOffset" value="'+tmps[2]+'" /> m ';
						html += '</span>';
					html += '</div>';
					
					tmps = typeof o.config.canvasScale == 'undefined' ? panel.canvasScale : o.config.canvasScale ;
					html += '<div class="each" key="canvasScale" cate="number">';
						html += '<span class="monitor_setname"><s>面板大小</s></span>';
						html += '<span class="monitor_zoom">';
							html += '<input type="text" name="canvasScale" value="'+tmps+'" />';
						html += '</span>';
					html += '</div>';
				html += '</div>';
			html += '</div>';
		html += '<div class="each" key="form" cate="form">';
			html += _this.panelConfigFormHtml(panel,o);
		html += '</div>';
		
		html += '<div class="config-submit-btn"><input class="btn_save" onclick="uinv.FCM.configMgr.model.monitor.configHide(\''+o.panel+'\',\''+key+'\');" /></div>';
	html += '</div>';
	
	_obj.model.dialog.show(html);
	
	_obj.model.dialog.getObj().find('.color-config').find('input[name=config]').each(function(){
		_obj.model.colorpicke.show(this);
	});
};

/**
 * @description 隐藏监控配置窗口
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {String} name 面板name值
 * @param {String} key 物体key值
 * @static
 */
uinv.FCM.configMgr.model.monitor.configHide = function(name,key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_obj.model.dialog.getObj().find('.each').each(function(){
		if( typeof  _this.configSetData[$(this).attr('cate')] == 'function'){
			_this.configSetData[$(this).attr('cate')](this, _this.keyFindObj(key));
		}	
	});
	_this.synchronousFormData(key);
	_obj.model.dialog.close();
	_obj.form.saveData();
};

/**
 * @description 同步监控信息配置数据
 * @param {String} key 物体key值
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @static
 */
uinv.FCM.configMgr.model.monitor.synchronousFormData = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var o = _this.keyFindObj(key);
	for(var i=0,k=_this.obj.panel.length;i<k;i++){
		for( var n in  _this.obj.panel[i].modify ){					
			for( var m in  _this.obj.panel[i].modify[n] ){
				
				if( typeof  o.form[ _this.obj.panel[i].modify[n][m].row  ] == 'undefined' ){
					continue;
				}	
				_this.obj.panel[i].showMapping[n][m] = o.form[ _this.obj.panel[i].modify[n][m].row  ][ _this.obj.panel[i].modify[n][m].attribute ];
			}
		}
	}
	
};

/**
 * @description 面板配置指标列表
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {Object} panel 面板数据
 * @param {Object} o 物体配置数据
 * @return {String} 创建HTML文本
 * @static
 */
uinv.FCM.configMgr.model.monitor.panelConfigFormHtml = function(panel,o){
	var _obj = uinv.FCM.configMgr,
		_this = this,
		n = 0,
		i = 0,
		html = '';

	html += '<table class="monitor_table">';
		html += '<tr>';
			for(i=0,k=_this.panelConfigAttributeField.length;i<k;i++){
				html += '<th>'+ _this.panelConfigAttributeField[i].name +'</th>';
			}
		html += '</tr>';

		for(n=0;n<panel.modifyCount;n++){
			html += '<tr class="row">';
				for(i=0,k=_this.panelConfigAttributeField.length;i<k;i++){
					html += '<td>'+ _this.configTypeToHtml[_this.panelConfigAttributeField[i].type]( _this.panelConfigAttributeField[i], o.form[n] ) +'</td>';
				}							
			html += '</tr>';
		}

	
	html += '</table>';
	html += '<div class="color-config">';
		for(n=0;n<panel.modifyCount;n++){
			var param = [];
			if(typeof o.form[n] == 'object' && typeof o.form[n].styleConfig == 'object'){
				param = o.form[n].styleConfig;
			}
			html += _this.styleConfigHtml( param );
		}
	html += '</div>';
	
	return html;
};

/**
 * @description 样式配置节点创建
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {Object} data 面板数据
 * @return {String} HTML
 * @static
 */
uinv.FCM.configMgr.model.monitor.styleConfigHtmlRow = function(data){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	if(typeof data == 'undefined'){
	
		data = {
			'condition' : _this.conditionArr[0],
			'number' : 0,
			'config' : '#FFFFFF'						
		};	
	}
	
	var html = '';
	
	html += '<tr class="one" style="list-style:none;">';
		html += '<td>';
			html += '<select name="condition" cate="string">';
				for(var i=0,k=_this.conditionArr.length;i<k;i++){
					if(data.condition == _this.conditionArr[i]){
						html += '<option value="'+_this.conditionArr[i]+'" selected>'+_this.conditionArr[i]+'</option>';
					}else{
						html += '<option value="'+_this.conditionArr[i]+'">'+_this.conditionArr[i]+'</option>';
					}
				}		
			html += '</select>';
		html += '</td>';
		
		html += '<td>';
			html += '<input type="text" name="number" cate="number" value="'+data.number+'" />';
		html += '</td>';
		
		html += '<td>';
			html += '<input type="text" name="config" cate="color" value="'+data.config+'" />';
		html += '</td>';
		
		html += '<td>';
			html += '<a onclick="uinv.FCM.configMgr.model.monitor.deleteStyleConfigRow(this);" href="javascript:void(0);"><s>删除</s></a>';
		html += '</td>';
	html += '</tr>';
	return html;
};

/**
 * @description 删除样式配置
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {DOM} o 触发事件DOM节点
 * @static
 */
uinv.FCM.configMgr.model.monitor.deleteStyleConfigRow = function(o){
	$(o).parents('tr:eq(0)').remove();
};

/**
 * @description 添加一个样式配置节点
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {DOM} o 触发事件的DOM节点
 * @static
 */
uinv.FCM.configMgr.model.monitor.addStyleConfigHtmlRow = function(o){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var html = _this.styleConfigHtmlRow({
		'condition' : _this.conditionArr[0],
		'number' : 0,
		'config' : '#FFFFFF'
	});
	
	var ul = $(o).parents('.row').find('table');
	ul.append(html);
	
	var dom = ul.find('.one:last').find('input[name=config]').get(0);
	_obj.model.colorpicke.show(dom);
};

/**
 * @description 样式配置页面构建
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {Object} data 样式配置数据
 * @return {String} HTML
 * @static
 */
uinv.FCM.configMgr.model.monitor.styleConfigHtml = function(data){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var html = '';
	
	html += '<div class="row" style="display:none;">';
		html += '<div class="monitor_twarp">';
			html += '<table class="monitor_table">';
				html += '<tr>';
					html += '<th><s>条件</s></th>';
					html += '<th><s>数值</s></th>';
					html += '<th><s>颜色</s></th>';
					html += '<th><s>操作</s></th>';
				html += '</tr>';
				for(var i=0,k=data.length;i<k;i++){
					html += _this.styleConfigHtmlRow(data[i]);
				}
			html += '</table>';
		html += '</div>';
		html += '<div class="action" style="margin-bottom:10px;">';
			html += '<input type="button" class="btn_add" onclick="uinv.FCM.configMgr.model.monitor.addStyleConfigHtmlRow(this);" />';
		html += '</div>';
	html += '</div>';

	return html;
};

/**
 * @description 设置颜色条件面板显示
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {DOM} obj 触发事件DOM节点
 * @static
 */
uinv.FCM.configMgr.model.monitor.settingStyleConfigDisplay = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var index = $(obj).parents('tr.row').index() - 1;
	_obj.model.dialog.getObj().find('.color-config').find('.row').each(function(i){
		if( i == index ){
			$(this).show();
		}else{
			$(this).hide();
		}
	});
};

/**
 * @description 上传监控面板
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {DOM} obj file 控件
 * @static
 */
uinv.FCM.configMgr.model.monitor.uploadPanel = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var path = obj.value.split("\\");
	var fileName = path.pop();

	uinv.server.manager.frame.upAndUnZip(obj, fileName, function(result){
		if(result.success){
			var o = _obj.model.transform.str2obj(result.data);
			if( _obj.model.array.isArray(o) ){
				for(var i=0,k=o.length;i<k;i++){
					_this.uploadPanelHandle(o[i], fileName);
				}
			}else{
				_this.uploadPanelHandle(o, fileName);
			}
		}else{
			_obj.note.alert(result.data);
		}
		
	});  
};

/**
 * @description 上传监控面板处理函数
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {Object} o 监控数据
 * @param {String} fileName 文件名
 * @return {Boolean} false异常
 * @static
 */
uinv.FCM.configMgr.model.monitor.uploadPanelHandle = function(o, fileName){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var i = 0;
	
	o.imagePath = o.previewImagePath;
	
	if(!_this.checkModifyBody(o)){
		return false;
	}
	
	var bool = true;
	
	var obj =  _this.nameFindPanel(o.name);
	
	if( obj ){
		bool = _obj.note.confirm('面板'+o.name+'应经存在，是否要覆盖？');
	}
	
	if( obj && obj.modifyCount > o.modifyCount && typeof obj.form != "undefined" && obj.form.length == obj.modifyCount ){
		var msg = "";
		msg = "您上传的新面板modifyCount比原面板modifyCount小\r\n";
		msg += "将要删除原面板配置信息的最后"+(obj.modifyCount-o.modifyCount)+"行配置\r\n";
		msg += "内容为：\r\n";
		
		var arr = [];
		for(i=o.modifyCount;i<obj.modifyCount;i++){
			arr.push(obj.form[i]);
		}
		msg += _obj.model.transform.obj2str( arr );
		
		bool = _obj.note.confirm(msg);
		
		if(bool){
			obj.form.splice(o.modifyCount, obj.modifyCount - o.modifyCount);	
		}
	}
	
	if(bool){
		o = _this.addPanelToMemory(o);
		uinv.server.manager.frame.cutGeneralFile( o.downloadFile , _this.getPanelZipPath(o) );
		uinv.server.manager.frame.cutGeneralFile( o.imagePath , _this.getPanelImagePath(o) );
		
		// 写入系统下载
		_obj.model.download.set({
			'url' : _this.getPanelZipPath(o),
			'local' : _this.pathToDir(o.image)
		});					
		
		_this.objHtml();
		_this.styleHtml();
		
		// 保存数据
		_obj.form.saveData();
		
		// 如果要删除的文件与新上传的面板同名，取消删除
		var path = _this.getPanelPath(o);
		for(i=0;i<_this.deleteFileArr.length;i++){
			if(_this.deleteFileArr[i] == path){
				_this.deleteFileArr.splice(i,1);
				i=0;
			}
		}
	}
};

/**
 * @description 全路径转路径
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {String} path 路径
 * @return {String} 路径
 * @example uinv.FCM.configMgr.model.monitor.pathToDir("/user/assf/asf.gif"); return  /user/assf
 * @static
 */
uinv.FCM.configMgr.model.monitor.pathToDir = function(path){
	var _obj = uinv.FCM.configMgr,
		_this = this,
		dir = "",
		pathinfo = [];
	
	if(path.indexOf("/")>=0){
		pathinfo = path.split("/");
		pathinfo.pop();
		dir = pathinfo.join("/");
	}
	
	if(path.indexOf("\\")>=0){
		pathinfo = path.split("\\");
		pathinfo.pop();
		dir = pathinfo.join("\\");				
	}
	
	return dir;
};

/**
 * @description 根据面板配置信息获取监控面板主操作路径
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {Object} o 面板数据
 * @return {String} 路径
 * @static
 */
uinv.FCM.configMgr.model.monitor.getPanelPath = function(o){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	return _obj.global.path + '/Monitor/' + o.name ;			
};

/**
 * @description 根据面板数据获取面板图片路径
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {Object} o 面板数据
 * @return {String} 路径
 * @static
 */
uinv.FCM.configMgr.model.monitor.getPanelImagePath = function(o){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	return _obj.global.path + '/Monitor/' + o.name + '/' + o.imagePath;
};

/**
 * @description 根据面板数据获取zip路径
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {Object} o 面板数据
 * @return {String} 路径
 * @static
 */
uinv.FCM.configMgr.model.monitor.getPanelZipPath = function(o){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	return _obj.global.path + '/Monitor/' + o.name + '/download.zip';			
};

/**
 * @description 添加面板数据到内存
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {Object} obj 面板数据
 * @return {Object} 初始设置后的面板数据
 * @static
 */
uinv.FCM.configMgr.model.monitor.addPanelToMemory = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	if(_this.nameFindPanel(obj.name)){
		
		var o = _this.nameFindPanel(obj.name);
		var index = _this.nameFindPanelIndex(obj.name);

		_this.obj.panel.splice( index, 1 ,obj );
	}else{
		_this.obj.panel.push(obj);
	}
	return obj;
};

/**
 * @description 检测面板是否被使用
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {String} name 面板名称
 * @return {Boolean} true 使用 false 没使用
 * @static
 */
uinv.FCM.configMgr.model.monitor.isUsePanel = function(name){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	for(var i=0,k=_obj.data.monitor.object.length;i<k;i++){
		if(  _obj.data.monitor.object[i].panel == name ){
			return true;
		}
	}
	return false;	
};

/**
 * @description 加测面板数据modify配置项是否合法
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {Object} o 面板数据
 * @return {Boolean} true 合法 false 不合法
 * @static
 */
uinv.FCM.configMgr.model.monitor.checkModifyBody = function(o){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	if(typeof o == 'undefined'){
		return false;
	}
	
	var msg = "上传失败\r\n";
	var error = false;
	
	for(var i in o.modify){
		for(var j in o.modify[i]){
			var bool = false;
			
			for(var k in _this.panelConfigAttributeField){	
				if( _this.panelConfigAttributeField[k].value == o.modify[i][j].attribute ){
					bool = true;
				}
			}
			
			if(!bool){
				error = true;
				msg +=  i +" -> " + j + " -> attribute " + o.modify[i][j].attribute + " 字段不存在 \r\n";
			}
			
			if( o.modify[i][j].row >=  o.modifyCount ){
				msg += i +" -> " + j + " -> row : " + o.modify[i][j].row + " 超出modifyCount的值 \r\n";
			}
		}
	}
	
	if(error){
		_obj.note.alert(msg);
		return false;
	}else{
		return true;
	}
};

/**
 * @description 删除监控面板<br />
 * 1) 内存删除<br />
 * 2) DOM删除
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {String} name 要删除面板的name值
 * @return {Boolean} false异常
 * @static
 */
uinv.FCM.configMgr.model.monitor.deletePanel = function(name){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var bool = _this.isUsePanel(name);
	if( bool ){
		_obj.note.alert('删除面板错误：这个面板正在使用，请先解除使用后再删除。');
		return false;
	}
	
	var obj = _this.nameFindPanel(name);
	_obj.model.download.del( _this.getPanelZipPath(obj) );
	_this.deleteFileArr.push( _this.getPanelPath(obj) );
	
	var index = _this.nameFindPanelIndex(name);
	if( index >= 0 ){
		_this.obj.panel.splice(index, 1);
		_this.objHtml();
		_this.styleHtml();
	}
};

/**
 * @description 删除物体<br />
 * 1) 内存删除<br />
 * 2) DOM删除
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {String} key 物体key值
 * @static
 */
uinv.FCM.configMgr.model.monitor.deleteObject = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var index = _this.keyFindObjIndex(key);
	_obj.data.monitor.object.splice(index, 1);
	_this.objHtml();
};

/**
 * @description 创建物体
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @static
 */
uinv.FCM.configMgr.model.monitor.createObject = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	_obj.model.selector.show(function(obj){
		_obj.model.selector.hide();
		
		var o = _this.addObjectToMemory(obj);
		_this.addHtmlRow(o);
	});
};

/**
 * @description 添加物体数据到内存
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {Object} obj 物体数据
 * @return {Object} 初始化后的物体数据
 * @static
 */
uinv.FCM.configMgr.model.monitor.addObjectToMemory = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var key = "";
	
	do{
		key = _obj.model.key.create(10);
	}while(_this.keyFindObj(key));
	
	obj.key = key;
	obj.form = [];
	obj.config = {};
	_obj.data.monitor.object.push(obj);
	return obj;
};

/**
 * @description 根据key查找到物体索引值
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {String} key 物体key值
 * @return {Number} -1 找不到
 * @static
 */
uinv.FCM.configMgr.model.monitor.keyFindObjIndex = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	for(var i=0,k=_obj.data.monitor.object.length;i<k;i++){
		if(  _obj.data.monitor.object[i].key == key ){
			return i;
		}
	}
	return -1;				
};

/**
 * @description 根据key查找到物体数据
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {String} key 物体key值
 * @return {Boolean} false 表示找不到数据
 * @static
 */
uinv.FCM.configMgr.model.monitor.keyFindObj = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	for(var i=0,k=_obj.data.monitor.object.length;i<k;i++){
		if(  _obj.data.monitor.object[i].key == key ){
			return  _obj.data.monitor.object[i];
		}
	}
	return false;
};

/**
 * @description 根据name值找到面板索引
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {String} name 面板name值
 * @return {Number} -1 表示找不到
 * @static
 */
uinv.FCM.configMgr.model.monitor.nameFindPanelIndex = function(name){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	for(var i=0,k=_this.obj.panel.length;i<k;i++){
		if(  _this.obj.panel[i].name == name ){
			return i;
		}
	}
	return -1;				
};

/**
 * @description 根据name值找到面板数据
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {String} name 面板name值
 * @return {Boolean} false表示找不到
 * @static
 */
uinv.FCM.configMgr.model.monitor.nameFindPanel = function(name){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	if(typeof _this.obj.panel == "undefined"){
		_this.obj.panel = [];
	}
	
	for(var i=0,k=_this.obj.panel.length;i<k;i++){
		if(  _this.obj.panel[i].name == name ){
			return _this.obj.panel[i];
		}
	}
	return false;				
};

/**
 * @description 物体面板选择下拉控件处理<br />
 * 1) 如果新选择的面板modifyCount跟上一个modifyCount不一致，将会删除物体config数据
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {DOM} obj 下拉控件节点
 * @param {String} key 物体key值
 * @static
 */
uinv.FCM.configMgr.model.monitor.objSelectPanel = function(obj,key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var bool = true;
	if( _this.nameFindPanel( _this.keyFindObj(key).panel ).modifyCount != _this.nameFindPanel( obj.value ).modifyCount ){
		bool = _obj.note.confirm("此操作将会删除原"+_this.keyFindObj(key).panel+"的配置信息，是否要继续操作？");
		if(bool){
			_this.keyFindObj(key).form = {};
		}
	}
	
	if(bool){
		_this.keyFindObj(key).panel = obj.value;
	}else{
		var panel = _this.keyFindObj(key).panel;
		$(obj).find("option").each(function(){
			if($(this).val() == panel){
				this.selected = true;
			}else{
				this.selected = false;
			}
		});
	}
};

/**
 * @description 物体DOM创建
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {Object} obj 物体数据
 * @static
 */
uinv.FCM.configMgr.model.monitor.addHtmlRow = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var html = _this.objHtmlRow(obj);
	_obj.form.box.find(_this.objBoxClassStr).append(html);
	_obj.translate();
};

/**
 * @description 创建物体HTML文本
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {Object} obj 物体数据
 * @return {String} HTML
 * @static
 */
uinv.FCM.configMgr.model.monitor.objHtmlRow = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var html = '';
	html += '<tr key="'+obj.key+'">';
		html += '<td class="name">';
			html += '<a onclick="uinv.FCM.configMgr.model.monitor.objectRename(this,\''+obj.key+'\');" href="javascript:void(0);">'+obj.name+'</a>';
		html += '</td>';
		
		html += '<td>';
			html += '<select onchange="uinv.FCM.configMgr.model.monitor.objSelectPanel(this,\''+obj.key+'\');">';
				html += '<option value="">'+u.le.get('请选择面板')+'</option>';
				for(var i=0,k=_this.obj.panel.length;i<k;i++){
					if( typeof obj.panel != 'undefined' && obj.panel == _this.obj.panel[i].name ){
						html += '<option value="'+_this.obj.panel[i].name+'" selected>'+_this.obj.panel[i].caption+'</option>';
					}else{
						html += '<option value="'+_this.obj.panel[i].name+'">'+_this.obj.panel[i].caption+'</option>';
					}
				}
			html += '</select>';
		html += '</td>';
		html += '<td><a onclick="uinv.FCM.configMgr.model.monitor.configShow(\''+obj.key+'\');" href="javascript:void(0);"><s>编辑</s></a></td>';
		html += '<td><a onclick="uinv.FCM.configMgr.model.monitor.deleteObject(\''+obj.key+'\');" href="javascript:void(0);"><s>删除</s></a></td>';
	html += '</tr>';
	return html;
	
};

/**
 * @description 物体页面构建
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @static
 */
uinv.FCM.configMgr.model.monitor.objHtml = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var html = '';
	for(var i=0,k=_obj.data.monitor.object.length;i<k;i++){
		html += _this.objHtmlRow( _obj.data.monitor.object[i] );
	}
	
	_obj.form.box.find(_this.objBoxClassStr).find('tr:gt(0)').remove();
	_obj.form.box.find(_this.objBoxClassStr).append(html);
	_obj.translate();
};

/**
 * @description 物体重命名<br />
 * 1) 同时写内存
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {DOM} obj 触发事件DOM节点
 * @param {String} key 物体key值
 */
uinv.FCM.configMgr.model.monitor.objectRename = function(obj,key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var value = $(obj).html();
	var box = $(obj).parent();
	var html = box.html();
	
	box.html( '<input type="text" value="'+value+'" />' );
	box.find('input').focus().blur(function(){
		var value = $(this).val();
		box.html(html).find('a').html(value);
		_this.keyFindObj(key).name = value;
	}).keydown(function(evt){
		var e  = evt || window.event;
		if(e.keyCode==13){
			var value = $(this).val();
			box.html(html).find('a').html(value);
			_this.keyFindObj(key).name = value;
		}
	});
};

/**
 * @description 面板DOM创建
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {Object} obj 面板数据
 * @return {String} HTML
 * @static
 */
uinv.FCM.configMgr.model.monitor.styleHtmlRow = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;

	var html = '';
	html += '<tr key="'+obj.name+'">';
		html += '<td class="name">'+obj.caption+'</td>';
		html += '<td>' +obj.des+ '</td>';
		//html += '<td><a href="javascript:void(0);"><s>上传</s></a></td>';
		html += '<td><a onclick="uinv.FCM.configMgr.model.monitor.deletePanel(\''+obj.name+'\');" href="javascript:void(0);"><s>删除</s></a></td>';
	html += '</tr>';
	return html;
};

/**
 * @description 面板页面构建
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @static
 */
uinv.FCM.configMgr.model.monitor.styleHtml = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var html = '';
	for(var i=0,k=_this.obj.panel.length;i<k;i++){
		html += _this.styleHtmlRow( _this.obj.panel[i] );
	}
	
	_obj.form.box.find(_this.styleBoxClassStr).find('tr:gt(0)').remove();
	_obj.form.box.find(_this.styleBoxClassStr).append(html);
	_obj.translate();
};

/**
 * @description 告警级别页面构建
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @static
 */
uinv.FCM.configMgr.model.monitor.alarmLevelHtml = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var html = "";
	
	if( typeof  _obj.data.monitor.alarm.alarmLevel == 'object' ){
		for(var i=0,k=_obj.data.monitor.alarm.alarmLevel.length;i<k;i++){
			html += _this.alarmLevelHtmlRow( _obj.data.monitor.alarm.alarmLevel[i] );
		}
	}
	_obj.form.box.find(_this.alarmlevelBoxClassStr).find('tr:gt(0)').remove();
	_obj.form.box.find(_this.alarmlevelBoxClassStr).append(html);
};

/**
 * @description 告警数据HTML创建
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {Object} o 告警数据
 * @return {String} HTML
 * @static
 */
uinv.FCM.configMgr.model.monitor.alarmLevelHtmlRow = function(o){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var html = '';
	html += '<tr class="row">';
		html += '<td>';
			html += '<input type="text" name="name" value="'+o.name+'" />';
		html += '</td>';
		html += '<td>';
			html += '<input type="text" name="color" value="'+o.color+'" />';
		html += '</td>';
		html += '<td>';
			html += '<a onclick="uinv.FCM.configMgr.model.monitor.deleteAlarmLevelRow(this);" href="javascript:void(0);"><s>删除</s></a>';
		html += '</td>';
	html += '</tr>';
	return html;
};

/**
 * @description 删除告警级别
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {DOM} obj 触发事件DOM节点
 * @static
 */
uinv.FCM.configMgr.model.monitor.deleteAlarmLevelRow = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	$(obj).parents('.row:eq(0)').remove();
};

/**
 * @description 添加告警级别
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @static
 */
uinv.FCM.configMgr.model.monitor.addAlarmLevel = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var o = { 'name' : '', 'color' : '#FFF' };
	var html = _this.alarmLevelHtmlRow(o);
	_obj.form.box.find(_this.alarmlevelBoxClassStr).append(html);
	var dom = _obj.form.box.find(_this.alarmlevelBoxClassStr).find('.row:last').find('input[name=color]').get(0);
	_obj.model.colorpicke.show(dom);
};

/**
 * @description 初始化
 * @memberOf uinv.FCM.configMgr.model.monitor
 * @param {Object} param 初始化参数
 * @static
 */
uinv.FCM.configMgr.model.monitor.init = function(param){
	var _obj = uinv.FCM.configMgr;
	var _this = this;

	_obj.form.submitCallback = function(){
		_obj.model.stringDB.set( _this.index, _this.obj );
		for(var i=0,k=_this.deleteFileArr.length;i<k;i++){
			uinv.server.manager.frame.delFile(_this.deleteFileArr[i]);
		}
	};
	
	_this.objBoxClassStr = param.objBox || '';
	_this.styleBoxClassStr = param.styleBox || '';
	_this.alarmlevelBoxClassStr = param.alarmlevelBox || '';
	_this.obj = _obj.model.stringDB.get( _this.index );
	_this.obj.panel = typeof _this.obj.panel == 'undefined' ? [] : _this.obj.panel;

	_this.objHtml();
	_this.styleHtml();
	_this.alarmLevelHtml();
};


/**
 * @description 数组类型
 * @param {DOM} obj from表单空间dom节点
 * @param {Object} o 物体数据
 */
uinv.FCM.configMgr.model.monitor.configSetData.array = function(obj, o){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.monitor;
	var key = $(obj).attr('key');
	o.config[key] = [];
	$(obj).find('*[name='+key+']').each(function(){
		o.config[key].push($(this).val());
	});
};

/**
 * @description 数字类型
 * @param {DOM} obj from表单空间dom节点
 * @param {Object} o 物体数据
 */
uinv.FCM.configMgr.model.monitor.configSetData.number = function(obj, o){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.monitor;
	var key = $(obj).attr('key');
	o.config[key] = Number($(obj).find('*[name='+key+']').val());
};

/**
 * @description 表单类型
 * @param {DOM} obj from表单空间dom节点
 * @param {Object} o 物体数据
 */
uinv.FCM.configMgr.model.monitor.configSetData.form = function(obj, o){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.monitor;
	o.form = [];
	$(obj).find('tr.row').each(function(i){
		o.form[i] = {};
		$(this).find('*[name][cate]').each(function(){
			_this.configTypeToData[$(this).attr('cate')](this, o.form[i]);
		});
	});
	
};


/**
 * @description 数字类型
 * @param {String} value 值
 * @return {Number}
 */
uinv.FCM.configMgr.model.monitor.configStyleTypeToData.number = function(value){
	return Number(value);
};

/**
 * @description 字符串类型
 * @param {String} value 值
 * @return {String}
 */
uinv.FCM.configMgr.model.monitor.configStyleTypeToData.string = function(value){
	return value;
};

/**
 * @description 颜色类型
 * @param {String} value 值
 * @return {String}
 */
uinv.FCM.configMgr.model.monitor.configStyleTypeToData.color = function(value){
	var _obj = uinv.FCM.configMgr;
	var _this = _obj.model.monitor;
	return value;
};


/**
 * @description 字符串类型
 * @param {DOM} o From表单控件节点
 * @param {Object} data 数据
 */
uinv.FCM.configMgr.model.monitor.configTypeToData.string = function(o,data){
	data[$(o).attr('name')] = $(o).val();
};

/**
 * @description 数字类型
 * @param {DOM} o From表单控件节点
 * @param {Object} data 数据
 */
uinv.FCM.configMgr.model.monitor.configTypeToData.number = function(o,data){
	data[$(o).attr('name')] = Number($(o).val());
};

/**
 * @description 布尔类型
 * @param {DOM} o From表单控件节点
 * @param {Object} data 数据
 */
uinv.FCM.configMgr.model.monitor.configTypeToData.bool = function(o,data){
	if( $(o).val() == "1" ){
		data[$(o).attr('name')] = true;
	}else{
		data[$(o).attr('name')] = false;
	}
};

/**
 * @description 样式配置类型
 * @param {DOM} o From表单控件节点
 * @param {Object} data 数据
 */
uinv.FCM.configMgr.model.monitor.configTypeToData.styleConfig = function(o,data){
	var _obj = uinv.FCM.configMgr;
	var _this = _obj.model.monitor;
	
	var key = $(o).attr('name');
	data[key] = [];
	
	var index = $(o).parents('tr.row').index() - 1;
	
	_obj.model.dialog.getObj().find('.color-config').find('.row:eq('+index+')').find('table').find('tr.one').each(function(){
		var o = {};
		$(this).find('*[name]').each(function(){
			o[$(this).attr('name')] = _this.configStyleTypeToData[$(this).attr('cate')](this.value);
		});
		data[key].push(o);
	});
	
};


/**
 * @description 字符串类型
 * @param {Object} o 面板数据
 * @param {Object} form 物体配置表单数据
 * @return {String} HTML文本
 */
uinv.FCM.configMgr.model.monitor.configTypeToHtml.string = function(o,form){
	if(typeof form == 'undefined'){
		form = {};
		form[o.value] = '';
	}
	return '<input type="text" name="'+o.value+'" value="'+form[o.value]+'" cate="string" />';
};

/**
 * @description 数字类型
 * @param {Object} o 面板数据
 * @param {Object} form 物体配置表单数据
 * @return {String} HTML文本
 */
uinv.FCM.configMgr.model.monitor.configTypeToHtml.number =  function(o,form){
	if(typeof form == 'undefined'){
		form = {};
		form[o.value] = 0;
	}
	return '<input type="text" name="'+o.value+'" value="'+form[o.value]+'" cate="number" />';
};

/**
 * @description 布尔类型
 * @param {Object} o 面板数据
 * @param {Object} form 物体配置表单数据
 * @return {String} HTML文本
 */
uinv.FCM.configMgr.model.monitor.configTypeToHtml.bool = function(o,form){
	if(typeof form == 'undefined'){
		form = {};
		form[o.value] = false;
	}
	var html = '';
	
	html += '<select name="'+o.value+'" cate="bool">';
		if( form[o.value] ){
			html += '<option value="1" selected>是</option>';
			html += '<option value="0">否</option>';
		}else{
			html += '<option value="1">是</option>';
			html += '<option value="0"  selected>否</option>';							
		}
	html += '</select>';

	return html;
};

/**
 * @description 样式配置类型
 * @param {Object} o 面板数据
 * @param {Object} form 物体配置表单数据
 * @return {String} HTML文本
 */
uinv.FCM.configMgr.model.monitor.configTypeToHtml.styleConfig = function(o,form){
	var _obj = uinv.FCM.configMgr;
	var _this = _obj.model.monitor;
	
	if(typeof form == 'undefined'){
		form = {};
	}

	if(typeof form[o.value] == 'undefined'){
		form[o.value] = [];
	}
		
	_this.styleConfigHtml(form[o.value]);
	
	return '<input type="button" class="btn_set" name="'+o.value+'" cate="styleConfig" onclick="uinv.FCM.configMgr.model.monitor.settingStyleConfigDisplay(this);" />';
};


/**
 * @description 比较两个对象是否完全相等
 * @memberOf uinv.FCM.configMgr.model.object
 * @param {Object} o1 对象1
 * @param {Object} o2 对象2
 * @return {Boolean} true 相等 false 不相等
 * @static
 */
uinv.FCM.configMgr.model.object.o2o = function(o1,o2){
	
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var i = null;

	if(typeof o1 != typeof o2){
		return false;	
	}

	if(typeof o1.length != typeof o2.length ){
		return false;	
	}

	var bool = true;

	for(i in o1){
		if(i in o2){
			if(typeof o1[i] == 'object' ){
				bool = _this.o2o(o1[i],o2[i]);	
			}else if(o1[i] !== o2[i] ){
				bool = false;	
			}

		}else{
			bool = false;	
		}
	}	

	for(i in o2){
		if(i in o1){
			if(typeof o2[i] == 'object' ){
				bool = _this.o2o(o2[i],o1[i]);	
			}else if(o2[i] !== o1[i] ){
				bool = false;	
			}
		}else{
			bool = false;	
		}			
	}
	
	return bool;
};

/**
 * @description 从一个对象覆盖另一个对象
 * @memberOf uinv.FCM.configMgr.model.object
 * @param {Object} formobj 源对象
 * @param {Object} toobj 目标对象
 * @static
 */
uinv.FCM.configMgr.model.object.coverObj = function( formobj, toobj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	for(var i in formobj){
		if(typeof(toobj[i]) == 'undefined'){
			toobj[i] = formobj[i];
		}else{
			if( typeof formobj[i] == 'object' ){
				_this.coverObj( formobj[i], toobj[i] );
			}else{
				toobj[i] = formobj[i];
			}	
		}
	}
};

			
/**
 * @description 深度克隆对象
 * @memberOf uinv.FCM.configMgr.model.object
 * @param {Object} obj 要克隆的对象
 * @return {Object} 克隆的对象
 * @static
 */
uinv.FCM.configMgr.model.object.clone = function(obj) {
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var copy = null;
	
    if (null === obj || "object" != typeof obj){
		return obj;
    }

    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; ++i) {
            copy[i] = _this.clone(obj[i]);
        }
        return copy;
    }

    if (obj instanceof Object) {
		copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)){
				copy[attr] = _this.clone(obj[attr]);
            }
        }
        return copy;
    }

    _obj.note.alert(_obj.msg.S12);
};

/**
 * @description 判断传入的参数是不是object 主要用于区别是数组还是对象
 * @memberOf uinv.FCM.configMgr.model.object
 * @param {Object} o 判断的参数
 * @return {Boolean} true 是对象 false 不是对象
 * @static
 */
uinv.FCM.configMgr.model.object.isObject = function(o){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	return o instanceof Object;
};

 
//--------------------------
// 基础定义
//--------------------------

/**
 * @description 全局面板DOM盒子Class值
 * @type String
 */
uinv.FCM.configMgr.model.panel.globalPanelManagementBoxClass = 'panel-global';

/**
 * @description 数据索引
 * @type String
 */
uinv.FCM.configMgr.model.panel.index = 'panel';

/**
 * @description 上传面板对象记录
 * @type String
 */
uinv.FCM.configMgr.model.panel.uploadPanelSelector = '';

/**
 * @description 副数据，将用于存储
 * @type Object
 */
uinv.FCM.configMgr.model.panel.obj = null;

/**
 * @description 面板上移按钮DOM节点class值定义
 * @type String
 */
uinv.FCM.configMgr.model.panel.upMoveBtnClass = 'upmove';

/**
 * @description 面板盒型DOM节点Class定义
 * @type String
 */
uinv.FCM.configMgr.model.panel.classStr = '';


//----------------------
// 操作区
//----------------------

/**
 * @description 根据key查找到面板对象
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {String} key 面板key值
 * @return {Object} 面板对象
 * @static
 */
uinv.FCM.configMgr.model.panel.keyFindObj = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	for(var i = 0,k=_obj.data.panel.length; i<k; i++){
		if( key == _obj.data.panel[i].key){
			return _obj.data.panel[i];
		}
	}
	return {};
};


/**
 * @description 根据key值删除面板对象（内存操作）
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {String} key 面板key值
 * @return {Boolean} true 删除成功 false 删除失败（可能key值不存在）
 */
uinv.FCM.configMgr.model.panel.keyDelObj = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	for(var i = 0, k = _obj.data.panel.length; i<k; i++){
		if( key == _obj.data.panel[i].key ){
			_obj.data.panel.splice(i,1);
			return true;
		}
	}
	
	return false;
};

/**
 * @description 创建物体方法<br />
 * 1) 实际调用选择器模块的公有方法选择对象节点作为创建
 * @memberOf uinv.FCM.configMgr.model.panel
 * @static
 */
uinv.FCM.configMgr.model.panel.createObject = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	_obj.model.selector.show(function( obj ){
		// 检查是否已存在对象
		var bool = _this.checkObjectExist( obj.where );
		if(bool) {
			_obj.note.alert(_obj.msg.S6);
			return false;
		}
	
		// 关闭窗口
		_obj.model.selector.cancelAddNodeWhere();
		
		// 写入对象
		var comObj = _this.addObject( obj );
		
		// 画出html
		var html = _this.mkhtml( comObj );
		$(_this.classStr).append( html );
	});
};

/**
 * @description 插入分割线
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {DOM} obj 单击创建分割线的DOM节点
 * @param {String} key 创建分割线的面板key值
 * @return {Boolean} 如果key值为false将return false终止后面的操作
 * @static
 */
uinv.FCM.configMgr.model.panel.insertDividingLine = function(obj,key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	if(!key){
		_obj.note.dialog(_obj.msg.S7);
		return false;
	}
	
	var html = _this.mkHtmlList({'key':key},{'name':u.le.get('分割线')});
	var box = $(obj).parents('.list').find('ul');
	box.append(html);
	var dom = box.find('li:last').find('*[name][cate][value]').get(0);
	dom.checked = true;
	_this.checkd(dom);
	dom.disabled = true;
};

/**
 * @description 删除物体操作<br />
 * 1) 执行内存删除操作<br />
 * 2) 执行页面DOM节点删除操作
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {String} key 物体key值
 * @static
 */
uinv.FCM.configMgr.model.panel.deleteObj = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_this.keyDelObj(key);
	
	// 删除节点
	_obj.form.box.find('.obj-' + key).remove();
};


/**
 * @description 删除面板项操作<br />
 * 1) 每一个物体下同名的面板都会一并删除<br />
 * 2) 只是内存操作，不提交服务器<br />
 * 3) 每一个物体下都删除同名的DOM节点
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {DOM} obj 触发删除事件的DOM节点
 * @return {Boolean} 将弹出确认会话框，如果取消删除操作则return false终止后面删除动作
 * @static
 */
uinv.FCM.configMgr.model.panel.deleteObjPanel = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var panelKey  = $(obj).parents('li').find('*[cate][name][value]').attr('value');
	
	if(panelKey == u.le.get('分割线')){
		
		$(obj).parents('li').remove();
		
	}else{
		com = _obj.note.confirm(_obj.msg.S8);
		
		if(!com){
			return false;
		}
		
		for(var i in _obj.data.panel){
			_this.keyDeleteObjPanelLi(_obj.data.panel[i].key, panelKey);
			_this.keyDeleteObjPanel(_obj.data.panel[i], panelKey);
		}
	}
};

/**
 * @description 根据面板key删除物体对象里的order与item的面板项
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {Object} obj 物体对象数据
 * @param {String} panelKey 面板key值
 * @static
 */
uinv.FCM.configMgr.model.panel.keyDeleteObjPanel = function(obj, panelKey){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var index = 0;
	
	if( _obj.model.array.inArray(panelKey, obj.order) ){
		index = _obj.model.array.strInArrayIndex( panelKey, obj.order );
		obj.order.splice(index,1);
	}
	
	if( _obj.model.array.inArray(panelKey, obj.item) ){
		index = _obj.model.array.strInArrayIndex( panelKey, obj.item );
		obj.item.splice(index,1);
	}
};

/**
 * @description 根据对象key，面板key，删除DOM节点
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {String} objkey 对象key值
 * @param {String} panelkey 面板key值
 * @static
 */
uinv.FCM.configMgr.model.panel.keyDeleteObjPanelLi = function(objkey,panelkey){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	_obj.form.box.find( _this.classStr ).find('.obj-' + objkey).find('li').each(function(){
		if( $(this).find('*[cate][name][value]').attr('value') == panelkey ){
			$(this).remove();
		}
	});
};

/**
 * @description 修改物体名称<br />
 * 1) DOM节点文本修改<br />
 * 2) 内存操作修改
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {String} key 物体key值
 * @param {DOM} obj 触发修改名称事件的DOM节点
 * @static
 */
uinv.FCM.configMgr.model.panel.modifyObjectName = function(key,obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var value = $(obj).html();
	var h3 = $(obj).parent();
	h3.html( '<input type="text" value="'+value+'" />' );
	h3.find('input').focus().blur(function(){
		_this.keyFindObj(key).name = $(this).val();
		$(this).parent().html( '<span onclick="uinv.FCM.configMgr.model.panel.modifyObjectName(\''+key+'\',this);">' +  $(this).val() + '</span>');
	}).keydown(function(evt){
		var e = evt || windown.event;
		if(e.keyCode == 13){
			_this.keyFindObj(key).name = $(this).val();
			$(this).parent().html('<span onclick="uinv.FCM.configMgr.model.panel.modifyObjectName(\''+key+'\',this);">' +  $(this).val() + '</span>');
		}
	});
};

/**
 * @description 创建物体DOM节点函数
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {Object} obj 物体数据
 * @return {String} DOM节点
 * @static
 */
uinv.FCM.configMgr.model.panel.mkhtml = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;

	var html = '';
	html += '<div class="list obj-'+obj.key+'">';
		html += '<div class="header" style="position:relative;">';
			html += '<h3><span onclick="uinv.FCM.configMgr.model.panel.modifyObjectName(\''+obj.key+'\',this);">'+obj.name+'</span></h3>';
			html += '<span class="action" style="position:absolute;right:10px;">';
				//html += '<a onclick="uinv.FCM.configMgr.model.panel.insertDividingLine(this,\''+obj.key+'\');" href="javascript:void(0);"><s>分割线</s></a>';
				//html += ' | ';
				html += '<a onclick="uinv.FCM.configMgr.model.panel.deleteObj(\''+obj.key+'\');" href="javascript:void(0);"><s>删除</s></a>';
			html += '</span>';
		html += '</div>';
		html += '<ul>';
		
		for(var i=0,k=obj.order.length; i<k; i++){
			if( obj.order[i] in _this.obj ){
				html += _this.mkHtmlList( obj, _this.obj[obj.order[i]] );
			}else{
				html += _this.mkHtmlList( obj, {'name':obj.order[i] });
			}
		}
		html += '</ul>';
	html += '</div>';
	
	return html;
};

/**
 * @description 创建物体面板项的DOM节点
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {Object} obj 物体数据
 * @param {Object} panel 面板数据
 * @return {}
 * @static
 */
uinv.FCM.configMgr.model.panel.mkHtmlList = function(obj, panel){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var key = typeof panel.__key == 'string' ? panel.__key : panel.name;
	var delbtnValue = panel.name == u.le.get('分割线') ? '撤销' : '删除';
	
	var html = '';
	html += '<li>';
		html +=  '<span class="panel_name">'+panel.name+'</span>';
		html += '<span class="action panel_up">';
			html += '<a onclick="uinv.FCM.configMgr.model.panel.upMove(this);" class="'+_this.upMoveBtnClass+'" href="javascript:void(0);" style="display:none;"><s>上移</s></a>';
			html += '</span>';
			if( typeof panel.itemConfig == 'object' ){
				html += '<span class="panel_edit">';
				html += '<a onclick="uinv.FCM.configMgr.model.panel.itemConfig(\''+key+'\',\''+obj.key+'\');" href="javascript:void(0);"><s>编辑</s></a>';
				html += '</span>';				
			}else{
				html += '<span class="panel_edit">';
				html +='&nbsp;';
				html +='</span>';
			}
			html += '<span class="panel_del">';
			html += '<a onclick="uinv.FCM.configMgr.model.panel.deleteObjPanel(this);" href="javascript:void(0);"><s>'+delbtnValue+'</s></a>';
			html += '</span>';
			html += '<span class="panel_checkbox">';
			html += '<input onclick="uinv.FCM.configMgr.model.panel.checkd(this);"';
			html += ' name="'+ obj.key +'" value="'+ key +'"';
			html += ' cate="panel" path="panel" type="checkbox" />';
		html += '</span>';
	html += '</li>';
	
	return html;
};


/**
 * @description 面板编辑配置DOM节点创建 并且初始化面板配置数据
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {String} key 面板key值
 * @param {String} objectKey 隶属物体key值
 * @static
 */
uinv.FCM.configMgr.model.panel.itemConfig = function(key, objectKey){
	var _obj = uinv.FCM.configMgr;
	var _this = this;	
	
	if(typeof _this.obj[key].itemConfig == 'undefined'){
		_this.note.alert(_obj.msg.S9);
	}

	_panel = _this.keyFindObj(objectKey);
	_panel.itemData = typeof _panel.itemData == 'undefined' ? {} : _panel.itemData;
	_panel.itemData[key] = typeof _panel.itemData[key] == 'undefined' ? {} : _panel.itemData[key];

	var html = '';
	html += '<div class="itemConfig" style="padding:10px;">';
	for(var i = 0 , k = _this.obj[key].itemConfig.length; i<k; i++){
		if( typeof _this.itemConfigTypeToHtml[_this.obj[key].itemConfig[i].type] == 'function' ){
			html += _this.itemConfigTypeToHtml[_this.obj[key].itemConfig[i].type](_this.obj[key].itemConfig[i],key, objectKey);
		}
	}
	html += '<p class="action">';
		html += '<input class="btn_cancel" onclick="uinv.FCM.configMgr.model.dialog.close();" />';
		html += '<input class="btn_save" onclick="uinv.FCM.configMgr.model.panel.itemConfigSubmit();" />';
	html += '</p>';
	
	html += '</div>';
	
	_obj.model.dialog.show(html);
	_this.itemConfigFormInit(objectKey);
};

/**
 * @description 初始化面板配置项表单
 * @memberOf uinv.FCM.configMgr.model.panel
 * @static
 */
uinv.FCM.configMgr.model.panel.itemConfigFormInit = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	_obj.model.dialog.getObj().find('.itemConfig').find('*[name][cate][path]').each(function(){
		if( typeof _this.itemConfigInitData[$(this).attr('cate')] == 'function' ){
			_this.itemConfigInitData[$(this).attr('cate')](this);
		}
	});
};

/**
 * @description 面板配置表单提交 将表单值写入内存中
 * @memberOf uinv.FCM.configMgr.model.panel
 * @static
 */
uinv.FCM.configMgr.model.panel.itemConfigSubmit = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	_obj.model.dialog.getObj().find('.itemConfig').find('*[name][cate][path]').each(function(){
		if( typeof _this.itemConfigSetData[$(this).attr('cate')] == 'function' ){
			_this.itemConfigSetData[$(this).attr('cate')](this);
		}
	});
	
	_obj.model.dialog.close();
};

/**
 * @description 添加面板DOM节点到物体DOM树里
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {String} key 物体key值
 * @param {String} html 创建的DOM面板节点
 * @static
 */
uinv.FCM.configMgr.model.panel.addPanelOneToObj = function( key, html ){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_obj.form.box.find('.obj-' + key).find('ul').append(html);
};

/**
 * @description 根据value删除物体DOM树下的面板项DOM节点
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {String} key 物体key值
 * @param {String} value 面板DOM节点的value值
 * @static
 */
uinv.FCM.configMgr.model.panel.removeObjPanelIsValue = function( key, value ){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_obj.form.box.find('.obj-' + key).find('*[name="'+key+'"][value="'+value+'"]').parents('li').remove();
};

/**
 * @description 面板排序 把已勾选的面板排到前面，未勾选的面板排到后面
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {DOM} obj DOM节点
 * @static
 */
uinv.FCM.configMgr.model.panel.order = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;

	var num = 0;
	var index = 0;
	_obj.form.box.find( '*[name='+$(obj).attr('name')+']' ).each(function(i){
		if( this.checked === true && this != obj){
			num++;
		}else if( this==obj ){
			index = i;
		}
	});
	
	// 排序
	if(index != num){
		if(obj.checked === true){
			_obj.form.box.find( '*[name='+$(obj).attr('name')+']:eq('+num+')' ).parents('li').before( $(obj).parents('li') );
		}else{
			_obj.form.box.find( '*[name='+$(obj).attr('name')+']:eq('+num+')' ).parents('li').after( $(obj).parents('li') );
		}
	}
};

/**
 * @description 显示面板上移按钮 因为面板未勾选的时候会隐藏
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {DOM} obj 触发事件的DOM节点
 * @static
 */
uinv.FCM.configMgr.model.panel.showUpMoveBtn = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	$(obj).parents('li').find( '.' + _this.upMoveBtnClass ).show();
};


/**
 * @description 隐藏上移按钮 因为面板取消选中状态时要隐藏下移按钮
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {DOM} obj DOM节点
 * @static
 */
uinv.FCM.configMgr.model.panel.hideUpMoveBtn = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	$(obj).parents('li').find( '.' + _this.upMoveBtnClass ).hide();
};

/**
 * @description 选中面板触发函数<br />
 * 1) 初始化面板checkbox为true的时候也触发
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {DOM} obj 选中面板的checkbox DOM节点
 * @static
 */
uinv.FCM.configMgr.model.panel.checkd = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	// 排序
	_this.order(obj);
	
	if(obj.checked === true){
		// 添加class
		$(obj).parents('li').addClass('checked');
		
		// 显示 上移按钮
		_this.showUpMoveBtn(obj);
	}else{
		// 添加class
		$(obj).parents('li').removeClass('checked');	
		
		// 隐藏 上移按钮
		_this.hideUpMoveBtn(obj);
	}
	
};

/**
 * @description 选中面板后要把选中的面板排到前面，主要防止在它前面有未选中的面板
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {String} name 面板name值
 * @static
 */
uinv.FCM.configMgr.model.panel.checkedPanelOrder = function(name){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var panelObj = _this.keyFindObj( name );
	var panelForm = _obj.form.box.find('*[name=' + name + ']:checked');
	
	if( panelObj.item.length == panelForm.length ){
		for( var i = 0, k = panelObj.item.length; i<k; i++ ){
			var obj = _obj.form.box.find('*[name=' + name + '][value="' + panelObj.item[i] + '"]');
			var index = obj.parents('li').index();
			if(i != index){
				_obj.form.box.find( '*[name='+ name +']:eq('+ i +')' ).parents('li').before( obj.parents('li') );
			}
		}
	}
};

/**
 * @description 上移面板操作
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {DOM} obj 触发事件的DOM节点
 * @static
 */
uinv.FCM.configMgr.model.panel.upMove = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var checkObj =  $(obj).parents('li').find('input[type=checkbox][name]');
	
	// 如果面板没有被选中状态，就return退出，不执行上移操作
	if( checkObj.get(0).checked === false ) {
		return;
	}
	
	var index = $(obj).parents('li').index();
	
	// 如果面板排在首位就return退出，不执行上移操作
	if(index === 0){
		return;
	}
	
	// 上移操作
	index--;
	var name = checkObj.attr('name');
	_obj.form.box.find( '*[name='+name+']:eq('+index+')' ).parents('li').before( $(obj).parents('li') );	
};

/**
 * @description 判断key是否已被使用，防止key重复
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {String} key值
 * @return {Boolean}
 * @static
 */
uinv.FCM.configMgr.model.panel.checkHasKey = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	for(var i = 0 ,k = _obj.data.panel.length ; i<k ; i++){
		if( _obj.data.panel[i].key == key ){
			return true;
		}
	}
	
	return false;
};

/**
 * @description 创建物体 （内存操作）
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {Object} obj 物体数据
 * @return {Object} 组合过的物体数据
 * @static
 */
uinv.FCM.configMgr.model.panel.addObject = function( obj ){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var key = "";
	var bool = false;
	
	do{
		key = _obj.model.key.create(32);
		bool = _this.checkHasKey(key);
	}while(bool);
	
	var comObj = {
		'key' : key,
		'name' : obj.name,
		'obj' : obj.where,
		'itemConfig' : {},
		'order' : [],
		'item' : []
	};
	
	for(var i in _this.obj ){
		comObj.order.push(i);
	}
	
	_obj.data.panel.push(comObj);
	return comObj;
};
		
/**
 * @description 检测两个物体是否相等<br />
 * 1) 实际上只是检测物体的condition<br />
 * 2) 当前检测的condition只有name attribute classid
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {Object} o1 物体1
 * @param {Object} o2 物体2
 * @return {Boolean} true 相等 false 不相等
 * @static
 */
uinv.FCM.configMgr.model.panel.judgeObjectIsEq = function(o1,o2){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var bool = false;
	
	// 检测 classid相等
	if( typeof o1.classid != 'undefined' && typeof o2.classid != 'undefined' && o1.classid == o2.classid){
		bool = true;
	}
	
	// 检测 name相等
	if( typeof o1.name != 'undefined' && typeof o2.name != 'undefined' && o1.name == o2.name){
		bool = true;
	}
	
	// 检测attribute
	if( typeof o1.attribute != 'undefined' && typeof o2.attribute != 'undefined' && 
		o1.attribute[0].key ==  o2.attribute[0].key && o1.attribute[0].value ==  o2.attribute[0].value ){
			
		bool = true;
	}				
	
	return bool;
};

/**
 * @description 判断物体是否已经存在<br />
 * 1) 实际上是遍历已创建的物体挨个比较是否有condition一样的物体 fun除外
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {Object} obj 要检测的物体
 * @return {Boolean} true 存在 false 不存在
 * @static
 */
uinv.FCM.configMgr.model.panel.checkObjectExist = function( obj ){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	for(var i=0,k=_obj.data.panel.length; i<k; i++){
		if( _this.judgeObjectIsEq(obj, _obj.data.panel[i].obj ) ){
			return true;
		}
	}
	
	return false;
};
	
/**
 * @description 添加面板逻辑业务处理
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {Object} obj 面板数据
 * @param {Function} fun 回调函数
 * @static
 */
uinv.FCM.configMgr.model.panel.add = function(obj, fun){
	var _obj = uinv.FCM.configMgr;
	var _this = this;

	// 判断是添加到全局还是对象
	if( typeof _this.uploadPanelSelector == 'undefined'  ){
		_this.addPanelToGlobalLib( obj, _this.addPanelToGlobalLibCallback );
	}else{
		_this.addPanelToObjLib( obj, _this.addPanelToObjLibCallback );
	}
};

/**
 * @description 添加面板到全局对象 （内存操作）
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {Object} obj 面板数据
 * @param {Function} fun 回调函数
 * @static
 */
uinv.FCM.configMgr.model.panel.addPanelToGlobalLib = function( obj, fun ){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var key = typeof obj.__key == 'string' ? obj.__key : obj.name;
	
	_this.obj[key] = {};
		
	for(var i in obj){
		_this.obj[key][i] = obj[i];
	}
	
	if( typeof fun == 'function' ){
		fun.apply( _this, [obj] );
	}
};

/**
 * @description 添加面板到全局对象 回调
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {Object} obj 面板数据
 * @static
 */
uinv.FCM.configMgr.model.panel.addPanelToGlobalLibCallback = function( obj ){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	// 添加面板全局对象下
	_this.obj[obj.name] = _obj.model.object.clone(obj);
	
	// 添加到各个面板
	for(var i = 0,k=_obj.data.panel.length; i<k; i++){
		var key = _obj.data.panel[i].key;
		
		//_obj.data.panel[i].lib[obj.name] = _obj.model.object.clone(obj);
		//_obj.data.panel[i].order.push( obj.name );
		
		var html = _this.mkHtmlList( {'key':key}, obj);
		_this.removeObjPanelIsValue( key, obj.name );
		_this.addPanelOneToObj( key , html );	
		
	}
};

/**
 * @description 对象写到文本数据后回调函数
 * @memberOf uinv.FCM.configMgr.model.panel
 * @static
 */
uinv.FCM.configMgr.model.panel.setDBCallback = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
};

/**
 * @description 添加面板到指定物体的面板库内
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {Object} obj 面板
 * @param {Function} fun 回调函数
 * @static
 */
uinv.FCM.configMgr.model.panel.addPanelToObjLib = function( obj, fun ){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var key = obj.name;
	
	if(typeof obj.__key == 'string'){
		key = obj.__key;
	}
	
	var panelObj = _this.keyFindObj( _this.uploadPanelSelector );
	
	panelObj.lib[key] = {};
	panelObj.order.push(key);
	
	for(var i in obj){
		panelObj.lib[key][i] = obj[i];
	}
	
	if( typeof fun == 'function' ){
		fun( panelObj, obj );
	}
};

/**
 * @description 添加面板到指定对象回调函数
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {Object} obj 物体数据
 * @param {Object} panel 面板数据
 * @static
 */
uinv.FCM.configMgr.model.panel.addPanelToObjLibCallback = function( obj, panel ){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	// 是否添加全部
	var appendAll = true;

	// 添加单个
	var key = typeof panel.__key == 'string' ? panel.__key : panel.name;
	var html = _this.mkHtmlList( obj, panel );
	_this.removeObjPanelIsValue( obj.key, key );
	_this.addPanelOneToObj( obj.key , html );
};

/**
 * @description 索引面板副数据
 * @memberOf uinv.FCM.configMgr.model.panel
 * @return {Object} 面板副数据
 */
uinv.FCM.configMgr.model.panel.getPanelList = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	return _obj.model.stringDB.get(_this.index);
};

/**
 * @description 面板上传
 * @memberOf uinv.FCM.configMgr.model.panel
 * @see uinv.server.manager.frame.upAndUnZip()
 * @param {DOM} obj 上传空间DOM对象
 * @param {} selector
 * @static
 */
uinv.FCM.configMgr.model.panel.upload = function(obj, selector){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	if(selector){
		var panelObj = _this.keyFindObj( selector );
		if(typeof panelObj.lib == 'undefined'){
			_obj.note.alert(_obj.msg.s10);
			return;
		}
	}
	
	_this.uploadPanelSelector = selector;
	var pathinfo = $(obj).val().split("\\");
	var filename = pathinfo[ pathinfo.length-1 ];

	uinv.server.manager.frame.upAndUnZip(obj, filename, function(result){ _this.uploadCallback(result); } );
};

/**
 * @description 上传面板回调函数 主要接受回传的面板内容，以做下一步处理
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {Object} result 执行上传操作后服务器返回的结果
 * @static
 */
uinv.FCM.configMgr.model.panel.uploadCallback = function(result){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	if( result.success ){
		
		var obj = _obj.model.transform.str2obj(result.data);
		
		var bool = _this.verificationPanelData(obj);

		if(bool){
			if(_obj.model.array.isArray(obj)){
				for(var i = 0,k=obj.length; i<k; i++){
					_this.add(obj[i] , _this.addCallback );
				}
			}else{
				_this.add(obj , _this.addCallback );
			}							
		}
		
		_obj.form.submit();
	}else{
		_obj.note.alert(result.data);
	}
};

/**
 * @description 检测上传面板数据的合法性
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {Object} obj 上传的面板数据
 * @return {Boolean} true 合法 false 不合法
 * @static
 */
uinv.FCM.configMgr.model.panel.verificationPanelData = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	if(_obj.model.array.isArray(obj)){
	
		for(var i = 0, k=obj.length; i<k; i++){
			if( !_obj.model.object.isObject( obj[i] ) || typeof obj[i].name == 'undefined' ){
				_obj.note.dialog( _obj.msg.S11  );
				return false;
			}
		}
		
		return true;
		
	}else if( _obj.model.object.isObject( obj ) ){
		if( typeof obj.name != 'undefined' ){
			return true;
		}else{
			_obj.note.dialog( _obj.msg.S11  );
			return false;
		}
	}else{
		_obj.note.dialog( _obj.msg.S11  );
		return false;
	}
};

/**
 * @description 根据传入参数创建全局面板的DOM节点
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {Object} obj 面板数据
 * @return {String} DOM节点
 * @static
 */
uinv.FCM.configMgr.model.panel.globalPanelListHtml = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var html = '';
	html += '<li style="margin:10px; position:relative;" key="'+ obj.name +'">';
		html += obj.name;
		html += '<span class="action" style="position:absolute;right:0; top:0;">';
			html += '<a onclick="uinv.FCM.configMgr.model.panel.deleteGlobalPanel(this, \''+ obj.name+'\');" href="javascript:void(0);"><s>删除</s></a>';
		html += '</span>';
	html += '</li>';
	
	return html;
};

/**
 * @description 全局面板管理页面入口
 * @memberOf uinv.FCM.configMgr.model.panel
 * @static
 */
uinv.FCM.configMgr.model.panel.globalPanelManager = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var html = '';
	html += '<div style="width:500px;" class="'+_this.globalPanelManagementBoxClass+'">';
		html += '<div>';
			html += '<s>上传新面板</s><input type="file" onchange="uinv.FCM.configMgr.model.panel.upload(this);" /><br />';
			html += '<input type="text" /><button><s>添加分类</s></button>';
		html += '</div>';
		
		html += '<br />';
		
		html += '<ul style="width:100%;">';
		for(var i in _this.obj){
			html += _this.globalPanelListHtml( _this.obj[i] );
		}
		html += '</ul>';
		
		html += '<div class="action" style="width:100%;text-align:center;">';
			html += '<input class="btn_save" onclick="uinv.FCM.configMgr.model.dialog.close(uinv.FCM.configMgr.model.panel.globalPanelManagerCallBack);" />';
		html += '</div>';
	html += '</div>';
	
	_obj.model.dialog.show(html);
};

/**
 * @description 关闭全局面板管理窗口回调函数
 * @memberOf uinv.FCM.configMgr.model.panel
 * @static
 */
uinv.FCM.configMgr.model.panel.globalPanelManagerCallBack = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_obj.model.stringDB.set( _this.index, _this.obj );
};

/**
 * @description 删除全局面板操作，只操作内存
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {DOM} obj 触发事件的DOM节点
 * @param {String} key 面板key值
 * @static
 */
uinv.FCM.configMgr.model.panel.deleteGlobalPanel = function(obj, key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	if( typeof _this.obj[key] != 'undefined' ){
		delete _this.obj[key];
	}
	
	$(obj).parents('li').remove();
};

/**
 * @description 初始化
 * @memberOf uinv.FCM.configMgr.model.panel
 * @param {String} classStr 面板盒子DOM Class 值
 * @static
 */
uinv.FCM.configMgr.model.panel.init = function(classStr){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	_obj.form.submitCallback = function(){
		_obj.model.stringDB.set( _this.index, _this.obj, _this.setDBCallback );
	};
	
	_this.classStr = classStr || _this.classStr;
	
	_this.obj = _this.getPanelList();

	var html = '';
	for(var i=0,k=_obj.data.panel.length; i<k; i++){
		html += _this.mkhtml( _obj.data.panel[i] );
	}
	
	_obj.form.box.find(_this.classStr).html(html);
};

 
/**
 * @description 字符串类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.panel.itemConfigInitData.string = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.panel;
	
	var _panel = _obj.model.panel.keyFindObj($(obj).attr('objectkey'));
	if(typeof _panel.itemData[$(obj).attr('path')][$(obj).attr('name')] == 'string'){
		$(obj).val( _panel.itemData[$(obj).attr('path')][$(obj).attr('name')]  );
	}
};

/**
 * @description 数字串类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.panel.itemConfigInitData.number = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.panel;
	
	var _panel = _obj.model.panel.keyFindObj($(obj).attr('objectkey'));
	if(typeof _panel.itemData[$(obj).attr('path')][$(obj).attr('name')] == 'number'){
		$(obj).val( _panel.itemData[$(obj).attr('path')][$(obj).attr('name')] );
	}
};

/**
 * @description 布尔类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.panel.itemConfigInitData.bool = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.panel;
	
	var _panel = _obj.model.panel.keyFindObj($(obj).attr('objectkey'));
	if( typeof _panel.itemData[$(obj).attr('path')][$(obj).attr('name')] == 'boolean' ){
		if( obj.value == '1' && _panel.itemData[$(obj).attr('path')][$(obj).attr('name')] ){
			obj.checked = true;
		}else if( obj.value == '0' && !_panel.itemData[$(obj).attr('path')][$(obj).attr('name')] ){
			obj.checked = true;
		}
	}
};

/**
 * @description 颜色类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.panel.itemConfigInitData.color = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.panel;
	
	var _panel = _obj.model.panel.keyFindObj($(obj).attr('objectkey'));
	if(  typeof _panel.itemData[$(obj).attr('path')][$(obj).attr('name')]  == 'string' ){
		$(obj).val( _panel.itemData[$(obj).attr('path')][$(obj).attr('name')] );
	}
	_obj.model.colorpicke.show(obj);
};

/**
 * @description 3D位置类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.panel.itemConfigInitData.position3d = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.panel;
	
	var _panel = _obj.model.panel.keyFindObj($(obj).attr('objectkey'));
	if(typeof  _panel.itemData[$(obj).attr('path')][$(obj).attr('name')]  == 'object'){
		var index = $(obj).parents('li').index();
		$(obj).val(  _panel.itemData[$(obj).attr('path')][$(obj).attr('name')][index] );
	}				
};

/**
 * @description 2D位置类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.panel.itemConfigInitData.position2d = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.panel;
	
	var _panel = _obj.model.panel.keyFindObj($(obj).attr('objectkey'));
	if(typeof _panel.itemData[$(obj).attr('path')][$(obj).attr('name')] == 'object'){
		var index = $(obj).parents('li').index();
		$(obj).val( _panel.itemData[$(obj).attr('path')][$(obj).attr('name')][index] );
	}				
};

/**
 * @description 下拉类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.panel.itemConfigInitData.select = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.panel;
	
	var _panel = _obj.model.panel.keyFindObj($(obj).attr('objectkey'));
	if(typeof  _panel.itemData[$(obj).attr('path')][$(obj).attr('name')] != 'undefined'){
		var value =  _panel.itemData[$(obj).attr('path')][$(obj).attr('name')];
		$(obj).find('option').each(function(){
			if($(this).attr('value') == value){
				this.selected = true;
			}else if( this.selected ){
				this.selected = false;
			}
		});
	}
};

 
 
/**
 * @description 字符串类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.panel.itemConfigSetData.string = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.panel;
	var _panel = _obj.model.panel.keyFindObj($(obj).attr('objectkey'));
	_panel.itemData[$(obj).attr('path')][$(obj).attr('name')] = $(obj).val();
};

/**
 * @description 数字类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.panel.itemConfigSetData.number = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.panel;
	var _panel = _obj.model.panel.keyFindObj($(obj).attr('objectkey'));
	_panel.itemData[$(obj).attr('path')][$(obj).attr('name')] = Number($(obj).val());
};


/**
 * @description 布尔类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.panel.itemConfigSetData.bool = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.panel;
	var _panel = _obj.model.panel.keyFindObj($(obj).attr('objectkey'));
	if( obj.checked ){
		if(obj.value == '1'){
			_panel.itemData[$(obj).attr('path')][$(obj).attr('name')] = true;
		}else{
			_panel.itemData[$(obj).attr('path')][$(obj).attr('name')] = false;
		}
	}
};

/**
 * @description 颜色类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.panel.itemConfigSetData.color = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.panel;
	var _panel = _obj.model.panel.keyFindObj($(obj).attr('objectkey'));
	_panel.itemData[$(obj).attr('path')][$(obj).attr('name')] = $(obj).val();
};

/**
 * @description 3D位置类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.panel.itemConfigSetData.position3d = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.panel;
	
	var _panel = _obj.model.panel.keyFindObj($(obj).attr('objectkey'));
	if( typeof _panel.itemData[$(obj).attr('path')][$(obj).attr('name')] == 'undefined' || _panel.itemData[$(obj).attr('path')][$(obj).attr('name')].length == 3  ){
		_panel.itemData[$(obj).attr('path')][$(obj).attr('name')] = [];
	}
	
	_panel.itemData[$(obj).attr('path')][$(obj).attr('name')].push( $(obj).val() );
};

/**
 * @description 2D位置类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.panel.itemConfigSetData.position2d = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.panel;
	
	var _panel = _obj.model.panel.keyFindObj($(obj).attr('objectkey'));
	if( typeof _panel.itemData[$(obj).attr('path')][$(obj).attr('name')] == 'undefined' || _panel.itemData[$(obj).attr('path')][$(obj).attr('name')].length == 2  ){
		_panel.itemData[$(obj).attr('path')][$(obj).attr('name')] = [];
	}
	
	_panel.itemData[$(obj).attr('path')][$(obj).attr('name')].push( $(obj).val() );
};

/**
 * @description 下拉类型
 * @param {DOM} obj DOM节点
 */
uinv.FCM.configMgr.model.panel.itemConfigSetData.select = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.panel;
	
	var _panel = _obj.model.panel.keyFindObj($(obj).attr('objectkey'));
	$(obj).find('option').each(function(){
		if(this.selected){
			_panel.itemData[$(obj).attr('path')][$(obj).attr('name')] = $(this).attr('value');
		}
	});
};

 
/**
 * @description 字符串类型
 * @param {Object} obj 面板数据
 * @param {Stirng} key 面板key值
 * @param {String} objectKey 物体key值
 * @return {String} DOM节点
 */
uinv.FCM.configMgr.model.panel.itemConfigTypeToHtml.string = function(obj,key,objectKey){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.panel;
	
	var value = typeof obj.defaultItem == 'undefined' ? '' :  obj.defaultItem;

	var html = '';
	html += '<p class="row" style="margin:10px auto;">';

		if( typeof obj.caption == 'undefined' ){
			html += '<span>'+obj.name+'</span>';	
		}else{
			html += '<span>'+obj.caption+'</span>';
		}

		html += '<input type="text" objectkey="'+objectKey+'" name="'+obj.name+'" cate="string" path="'+key+'" value="'+value+'" />';

	html += '</p>';
	return html;
};

/**
 * @description 数字类型
 * @param {Object} obj 面板数据
 * @param {Stirng} key 面板key值
 * @param {String} objectKey 物体key值
 * @return {String} DOM节点
 */
uinv.FCM.configMgr.model.panel.itemConfigTypeToHtml.number = function(obj,key,objectKey){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.panel;
	
	var value = typeof obj.defaultItem == 'undefined' ? '' :  obj.defaultItem;

	var html = '';
	html += '<p class="row" style="margin:10px auto;">';

		if( typeof obj.caption == 'undefined' ){
			html += '<span>'+obj.name+'</span>';	
		}else{
			html += '<span>'+obj.caption+'</span>';
		}

		html += '<input type="text" objectkey="'+objectKey+'" name="'+obj.name+'" cate="number" path="'+key+'" value="'+value+'" />';

	html += '</p>';
	return html;
};

/**
 * @description 布尔类型
 * @param {Object} obj 面板数据
 * @param {Stirng} key 面板key值
 * @param {String} objectKey 物体key值
 * @return {String} DOM节点
 */
uinv.FCM.configMgr.model.panel.itemConfigTypeToHtml.bool = function(obj,key,objectKey){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.panel;

	var value = typeof obj.defaultItem == 'undefined' ? false :  obj.defaultItem;

	var html = '';
	html += '<p class="row" style="margin:10px auto;">';
	
	if( typeof obj.caption == 'undefined' ){
		html += '<span>'+obj.name+'</span>';	
	}else{
		html += '<span>'+obj.caption+'</span>';
	}

	if(value){
		html += obj.items.TRUE+'<input type="radio" objectkey="'+objectKey+'" name="'+obj.name+'" cate="bool" path="'+key+'" value="1" checked /> ';
		html += obj.items.FALSE+'<input type="radio" objectkey="'+objectKey+'" name="'+obj.name+'" cate="bool" path="'+key+'" value="0" /> ';
	}else{
		html += obj.items.TRUE+'<input type="radio" objectkey="'+objectKey+'" name="'+obj.name+'" cate="bool" path="'+key+'" value="1" /> ';
		html += obj.items.FALSE+'<input type="radio" objectkey="'+objectKey+'" name="'+obj.name+'" cate="bool" path="'+key+'" value="0" checked /> ';
	}
	
	html += '</p>';
	return html;
};

/**
 * @description 颜色类型
 * @param {Object} obj 面板数据
 * @param {Stirng} key 面板key值
 * @param {String} objectKey 物体key值
 * @return {String} DOM节点
 */
uinv.FCM.configMgr.model.panel.itemConfigTypeToHtml.color = function(obj,key,objectKey){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.panel;

	var value = typeof obj.defaultItem == 'undefined' ? '#FFFFFF' :  obj.defaultItem;

	var html = '';
	html += '<p class="row" style="margin:10px auto;">';
		if( typeof obj.caption == 'undefined' ){
			html += '<span>'+obj.name+'</span>';	
		}else{
			html += '<span>'+obj.caption+'</span>';
		}

		html += '<input type="text" objectkey="'+objectKey+'" name="'+obj.name+'" cate="color" path="'+key+'" value="'+value+'"  />';

	html += '</p>';
	return html;
};

/**
 * @description 3D位置类型
 * @param {Object} obj 面板数据
 * @param {Stirng} key 面板key值
 * @param {String} objectKey 物体key值
 * @return {String} DOM节点
 */
uinv.FCM.configMgr.model.panel.itemConfigTypeToHtml.position3d = function(obj,key,objectKey){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.panel;

	var html = '';
	html += '<div class="row" style="margin:10px auto;">';

		if( typeof obj.caption == 'undefined' ){
			html += '<span>'+obj.name+'</span>';	
		}else{
			html += '<span>'+obj.caption+'</span>';
		}

		html += '<ul>';
			html += '<li style="list-style:none;"><span><s>'+obj.items[0]+'</s></span><input type="text" objectkey="'+objectKey+'" name="'+obj.name+'" cate="position3d" path="'+key+'"  /></li>';
			html += '<li style="list-style:none;"><span><s>'+obj.items[1]+'</s></span><input type="text" objectkey="'+objectKey+'" name="'+obj.name+'" cate="position3d" path="'+key+'"  /></li>';
			html += '<li style="list-style:none;"><span><s>'+obj.items[2]+'</s></span><input type="text" objectkey="'+objectKey+'" name="'+obj.name+'" cate="position3d" path="'+key+'"  /></li>';
		html += '</ul>';

	html += '</div>';
	
	return html;					
};

/**
 * @description 2D位置类型
 * @param {Object} obj 面板数据
 * @param {Stirng} key 面板key值
 * @param {String} objectKey 物体key值
 * @return {String} DOM节点
 */
uinv.FCM.configMgr.model.panel.itemConfigTypeToHtml.position2d = function(obj,key,objectKey){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.panel;
	
	var html = '';
	html += '<div class="row" style="margin:10px auto;">';

		if( typeof obj.caption == 'undefined' ){
			html += '<span><s>'+obj.name+'</s></span>';	
		}else{
			html += '<span><s>'+obj.caption+'</s></span>';
		}

		html += '<ul>';
			html += '<li style="list-style:none;"><span><s>'+obj.items[0]+'</s></span><input type="text" objectkey="'+objectKey+'" name="'+obj.name+'" cate="position2d" path="'+key+'"  /></li>';
			html += '<li style="list-style:none;"><span><s>'+obj.items[1]+'</s></span><input type="text" objectkey="'+objectKey+'" name="'+obj.name+'" cate="position2d" path="'+key+'"  /></li>';
		html += '</ul>';

	html += '</div>';
	return html;					
};

/**
 * @description 下拉类型
 * @param {Object} obj 面板数据
 * @param {Stirng} key 面板key值
 * @param {String} objectKey 物体key值
 * @return {String} DOM节点
 */
uinv.FCM.configMgr.model.panel.itemConfigTypeToHtml.select = function(obj,key,objectKey){
	var _obj = uinv.FCM.configMgr;
	var _this = uinv.FCM.configMgr.model.panel;
	
	var value = typeof obj.defaultItem == 'undefined' ? '' :  obj.defaultItem;

	var html = '';
	html += '<div class="row" style="margin:10px auto;">';

		if( typeof obj.caption == 'undefined' ){
			html += '<span>'+obj.name+'</span>';	
		}else{
			html += '<span>'+obj.caption+'</span>';
		}

		html += '<select class="row_select" objectkey="'+objectKey+'" name="'+obj.name+'" cate="select" path="'+key+'">';
		for(var i = 0, k = obj.items.length; i<k; i++){
			if( obj.items[i]==value ){
				html += '<option value="'+obj.items[i]+'" selected>'+obj.items[i]+'</option>';
			}else{
				html += '<option value="'+obj.items[i]+'">'+obj.items[i]+'</option>';
			}
		}
		html += '</select>';
	html += '</div>';
	return html;
};


//-----------------------------------
// 基础定义
//-----------------------------------

/**
 * @description 上传资源文件夹定义
 * @type String
 */
uinv.FCM.configMgr.model.resources.upResourcesDir = "/projects/resources";

/**
 * @description 待删除文件<br />
 * 1) 主要解决用户执行删除资源后提交保存时删除遗留的文件<br />
 * 2) 最后还会二次判断确保没有正在被使用的资源文件
 * @type Array
 */
uinv.FCM.configMgr.model.resources.delFileArr = [];

/**
 * @description 资源模块盒型DOM节点的Class值
 * @type String
 */
uinv.FCM.configMgr.model.resources.resourcesManagerClass = 'resourcesManager';


//-----------------------------------
// 函数区
//-----------------------------------

/**
 * @description 根据传入参数设置某个资源的数据
 * @memberOf uinv.FCM.configMgr.model.resources
 * @param {String} key 资源key值
 * @param {Object} param 要设置的数据
 * @static
 */
uinv.FCM.configMgr.model.resources.setData = function(key, param){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_obj.data.resources[key] = {
		'serverPath' : param.serverPath,
		'localPath' : param.localPath,
		'version' : param.version
	};				
};

/**
 * @description 上传资源包后回调函数
 * @memberOf uinv.FCM.configMgr.model.resources
 * @param {Object} result 上传资源包处理结果
 * @static
 */
uinv.FCM.configMgr.model.resources.uploadResourcesFileCallback = function(result){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	if(result.success){
		var param = _this.getResourcesManagerFormData();
		if(param.type == 'update'){
			var version = Number(param.version) + 1;
			_this.setResourcesManagerFormData('version', version);
		}
		
		_this.resourcesManagerHandleCallback();
	}else{
		_this.note.alert(result.data);
	}
};
	
/**
 * @description 检测资源管理表单数据是否合法
 * @memberOf uinv.FCM.configMgr.model.resources
 * @param {Object} param 检测表单的数据
 * @return {Object} { error 1 有错误 0 没有错误, msg 错误信息 }
 * @static
 */
uinv.FCM.configMgr.model.resources.checkForm = function(param){
	var _obj = uinv.FCM.configMgr;
	var _this = this;	
	
	var result = {
		'error' : 0,
		'msg'   : []
	};
	
	if( typeof param.title == 'undefined' || param.title === "" ){
		result.error = 1;
		result.msg.push(_obj.msg.S13);
	}
	
	if( typeof param.serverPath == 'undefined' || param.serverPath === "" ){
		result.error = 1;
		result.msg.push(_obj.msg.S14);
	}
	
	if( typeof param.version == 'undefined' || param.version === "" ){
		result.error = 1;
		result.msg.push(_obj.msg.S15);
	}	

	if( typeof param.localPath == 'undefined' || param.localPath === "" ){
		result.error = 1;
		result.msg.push(_obj.msg.S16);
	}
	
	if( param.type == 'create' && ( typeof param.resourcesFile == 'undefined' || param.resourcesFile === "" ) ){
		result.error = 1;
		result.msg.push(_obj.msg.S17);
	}
	
	return result;
};

/**
 * @description 资源表单处理回调函数
 * @memberOf uinv.FCM.configMgr.model.resources
 * @static
 */
uinv.FCM.configMgr.model.resources.resourcesManagerHandleCallback = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var param = _this.getResourcesManagerFormData();

	if( typeof _obj.data.resources[param.originalTitle] != 'undefined' ){
			delete _obj.data.resources[param.originalTitle];
	}
	
	_this.setData(param.title, param);
	
	// 关闭窗口
	_this.resourcesManagerClose();
	
	_this.mkhtml();
};	

/**
 * @description 创建新资源处理函数
 * @memberOf uinv.FCM.configMgr.model.resources
 * @param {Object} obj 要创建资源的数据
 * @return {Boolean} 如果表单有错误将return false 终止后面操作
 * @static
 */
uinv.FCM.configMgr.model.resources.handleResourcesManager = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var param = _this.getResourcesManagerFormData();
	var res = _this.checkForm(param);
	
	if( res.error ){
		_obj.note.alert( res.msg.join("\r\n") );
		return false;
	}
	
	if( param.resourcesFile !== "" ){
		var pathinfo = _this.pathToFileNameAndFoder( param.serverPath  ); 
		
		if( ( param.type=='create' && _this.serverPathFindObj(param.serverPath) ) || 
				( param.type=='update' && _this.serverPathFindObj(param.serverPath) && 
				_obj.data.resources[param.originalTitle].serverPath != param.serverPath )  ){
			_obj.note.alert(_obj.msg.F3(pathinfo.filename));
			return false;
		}
		
		var bool = true;
	
		if(param.type=='create' && param.title in _obj.data.resources){
			bool = _obj.note.confirm( _obj.msg.F4(param.title) );
			if(bool){
				_this.delFileArr.push(_obj.data.resources[param.title].serverPath);
			}else{
				return false;	
			}
		}
		
		if( param.type=='create' || (param.type=='update' && param.serverPath != _obj.data.resources[param.originalTitle].serverPath ) ){
			var result = uinv.server.manager.frame.isFileExist(param.serverPath);	
			if(result.data){
				bool = _obj.note.confirm( _obj.msg.F5(pathinfo.filename) );
				if(!bool){
					return;
				}
			}		
		}
		
		if(param.type=='update' && _obj.data.resources[param.originalTitle].serverPath != param.serverPath ){
			_this.delFileArr.push(_obj.data.resources[param.originalTitle].serverPath);
		}
		
		uinv.server.manager.frame.upFile(
			param.resourcesObj,
			pathinfo.foder,
			pathinfo.filename,
			function(result){ _this.uploadResourcesFileCallback(result); }
		);				
	}else{
		_this.resourcesManagerHandleCallback();
	}
};

/**
 * @description 根据服务器路径查找资源
 * @memberOf uinv.FCM.configMgr.model.resources
 * @param {String} path 路径
 * @return {Object} 如果返回null表示找不到
 * @static
 */
uinv.FCM.configMgr.model.resources.serverPathFindObj = function(path){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	for(var i in _obj.data.resources){
		if(_obj.data.resources[i].serverPath == path){
			return _obj.data.resources[i];
		}
	}
	return null;
};

/**
 * @description 根据路径 返回 foder filename
 * @memberOf uinv.FCM.configMgr.model.resources
 * @param {String} path 路径
 * @return {Object} {filename:文件名 , foder: 路径名}
 * @example var pathinfo = uinv.FCM.configMgr.model.resources.pathToFileNameAndFoder("/public/foder/filename.js");
 * @static
 */
uinv.FCM.configMgr.model.resources.pathToFileNameAndFoder = function(path){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var result = {};
	
	if( typeof path == 'string' ){
		var pathinfo = path.split('/');
		result.filename = pathinfo[pathinfo.length-1];
		pathinfo.pop();
		if(pathinfo.length >= 1){
			result.foder = pathinfo.join('/') + '/';
		}else{
			result.foder = '';
		}
	}else{
		result.filename = '';
		result.foder = '';
	}
	
	return result;
};
	

/**
 * @description 资源管理器关闭
 * @memberOf uinv.FCM.configMgr.model.resources
 * @static
 */
uinv.FCM.configMgr.model.resources.resourcesManagerClose = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_obj.model.dialog.close();
	_obj.form.saveData();
};

/**
 * @description 创建资源管理表单DOM节点<br />
 * 1) key 存在表示修改操作<br />
 * 2) key 为空表示创建操作
 * @memberOf uinv.FCM.configMgr.model.resources
 * @param {Stirng} key 要操作的资源key值
 * @return {Boolean} 有异常则return false 终止操作
 * @static
 */
uinv.FCM.configMgr.model.resources.resourcesManager = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	if(key && typeof _obj.data.resources[key] == 'undefined'){
		_this.note.alert( _obj.msg.S10 );
		return false;
	}
	
	var title = key || '';
	var type = key ? 'update' : 'create' ;
	var data = _this.keyFindObj(key);
	
	var html = '';
	html += '<div class="'+_this.resourcesManagerClass+'" style="width:400px; height:200px; padding:10px;">';
		html += '<p style="margin:10px auto 0;"><span><s>资源名称</s></span><input type="text" original="'+title+'" name="title" value="'+title+'" /></p>';
		html += '<p style="margin:10px auto 0; display:none;"><span><s>服务器目录</s></span><input type="text" original="'+data.serverPath+'" name="serverPath" value="'+data.serverPath+'" /></p>';
		html += '<p style="margin:10px auto 0;"><span><s>本地目录</s></span><input type="text" name="localPath" value="'+data.localPath+'" /></p>';
		html += '<p style="margin:10px auto 0;"><span><s>版本</s></span><input type="text" name="version" value="'+data.version+'" readonly /></p>';
		html += '<p style="margin:10px auto 0;"><span><s>资源包</s></span><input type="file" name="resourcesFile" /></p>';
		html += '<input type="hidden" name="type" value="'+type+'" />';
		html += '<p class="action">';
			html += '<input type="button" class="btn_cancel" onclick="uinv.FCM.configMgr.model.dialog.close();" />';
			html += '<input type="button" class="btn_save" onclick="uinv.FCM.configMgr.model.resources.handleResourcesManager(this);" />';
		html += '</p>';
	html += '</div>';
	
	_obj.model.dialog.show(html);
};

/**
 * @description 根据key找到对象，如果key不存在，则返回空对象
 * @memberOf uinv.FCM.configMgr.model.resources
 * @param {String} key 资源key值
 * @return {Object} 资源数据
 * @static
 */
uinv.FCM.configMgr.model.resources.keyFindObj = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var obj = {};
	if( typeof key == 'undefined' || typeof _obj.data.resources[key] == 'undefined' ){
		obj = {
			'title' : '',
			'serverPath' : _this.upResourcesDir,
			'localPath' : '',
			'version' : 1
		};	
	}else{
		obj = _obj.data.resources[key];
	}
	
	return obj;
};

/**
 * @description 获取资源管理器表单数据
 * @memberOf uinv.FCM.configMgr.model.resources
 * @return {Object} 表单数据
 * @static
 */
uinv.FCM.configMgr.model.resources.getResourcesManagerFormData = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var box = _obj.model.dialog.getObj().find( '.' + _this.resourcesManagerClass );
	
	// 固定目录
	if( box.find('input[name=resourcesFile]').val() !== "" ){
		var pathinfo = box.find('input[name=resourcesFile]').val().split("\\");
		box.find('input[name=serverPath]').val( _this.upResourcesDir + "/" + pathinfo[pathinfo.length-1] );		
	}
	// END		
	
	return {
		'title' : $.trim(box.find('input[name=title]').val()),
		'originalTitle' : box.find('input[name=title]').attr('original'),
		'serverPath' : $.trim(box.find('input[name=serverPath]').val()),
		'originalServerPath' : box.find('input[name=serverPath]').attr('original'),
		'localPath' : $.trim(box.find('input[name=localPath]').val()),
		'resourcesFile' : $.trim(box.find('input[name=resourcesFile]').val()),
		'resourcesObj' : box.find('input[name=resourcesFile]').get(0),
		'version' : $.trim(box.find('input[name=version]').val()),
		'type' : box.find('input[name=type]').val()	
	};
};

/**
 * @description 根据name值设置表单数据
 * @memberOf uinv.FCM.configMgr.model.resources
 * @param {String} key 表单name值
 * @param {String} value 表单值
 * @static
 */
uinv.FCM.configMgr.model.resources.setResourcesManagerFormData = function(key,value){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var box = _obj.model.dialog.getObj().find( '.' + _this.resourcesManagerClass );
	box.find('input[name='+key+']').val(value);
};

/**
 * @description 创建资源标签页DOM节点
 * @memberOf uinv.FCM.configMgr.model.resources
 * @static
 */
uinv.FCM.configMgr.model.resources.mkhtml = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var html = '';
	for(var i in _obj.data.resources){
		html += '<tr>';
			html += '<td>' + i + '</td>';
			html += '<td><a href="'+ _obj.global.projectPath +_obj.data.resources[i].serverPath+'" target="_blank" title="'+u.le.get("点击下载")+'">' + _obj.data.resources[i].serverPath + '</a></td>';
			html += '<td>' + _obj.data.resources[i].localPath + '</td>';
			html += '<td>' + _obj.data.resources[i].version + '</td>';
			html += '<td>';
				html += '<a onclick="uinv.FCM.configMgr.model.resources.delResource(\''+i+'\');" href="javascript:void(0);"><s>删除</s></a>';
			html += '</td>';
			html += '<td>';
				html += '<a onclick="uinv.FCM.configMgr.model.resources.resourcesManager(\''+i+'\');" href="javascript:void(0);"><s>更新</s></a>';
			html += '</td>';
		html += '</td>';
	}
	_obj.form.box.find(_this.classStr).find('tr:gt(0)').remove();
	_obj.form.box.find(_this.classStr).append( html );
	_obj.translate();
};
		
/**
 * @description 删除资源
 * @memberOf uinv.FCM.configMgr.model.resources
 * @param {String} key 要删除的资源key值
 * @return {Boolean} 如果取消操作则return false 终止后面的操作
 * @static
 */
uinv.FCM.configMgr.model.resources.delResource = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var bool = _obj.note.confirm( _obj.msg.S18 );
	if(!bool){
		return false;
	}
	 
	if( typeof _obj.data.resources[key] != 'undefined'  ){
		//_this.delFileArr.push(_obj.data.resources[key].serverPath);
		uinv.server.manager.frame.delFile( _obj.data.resources[key].serverPath );
		delete _obj.data.resources[key];
	}

	_this.mkhtml();
	_obj.form.saveData();
};

/**
 * @description 备份接口<br />
 * 1) 这个接口名为规范定义<br />
 * 2) 当用户备份数据时将从这个接口获取额外需要打包备份的文件<br />
 * 3) 此函数遍历所有资源获取所有资源路径后返回作为额外备份文件
 * @memberOf uinv.FCM.configMgr.model.resources
 * @return {Array} 路径列表
 * @static
 */
uinv.FCM.configMgr.model.resources.backupFiles = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var files = [];
	for(var i in _obj.data.resources){
		files.push( _obj.data.resources[i].serverPath );
	}
	
	return files;
};

/**
 * @description 初始化
 * @memberOf uinv.FCM.configMgr.model.resources
 * @param {String} classStr 资源盒型DOM的Class值
 * @static
 */
uinv.FCM.configMgr.model.resources.init = function(classStr){
	var _obj = uinv.FCM.configMgr;
	var _this = this;

	_obj.form.submitCallback = function(){
		while( _this.delFileArr.length >= 1 ){
			var path = _this.delFileArr.pop(); 
			uinv.server.manager.frame.delFile(path);
		}
	};
	
	_this.classStr = classStr || '.resources-list';
	_this.mkhtml();
};


//----------------
// 选择器基础定义
//----------------

/**
 * @description 提交选择节点后的回调函数<br />
 * 1) 调用show方法时传入，如果为null则等于没有回调函数<br />
 * 2) 主要是返回选择的结果
 * @type Function
 */
uinv.FCM.configMgr.model.selector.publicSelectNodeSubmitCallback = null;

/**
 * @description 选择器主容器的class值<br />
 * 1) 模块初始的时候传入，大部分DOM操作将依赖此值
 * @type String
 */
uinv.FCM.configMgr.model.selector.classStr = '';

/**
 * @description 选择器副数据 初始时从服务器载入配置，有变更时会也作为数据提交到服务器保存
 * @type Object
 */
uinv.FCM.configMgr.model.selector.obj = null;

/**
 * @description 副数据索引 读写副数据时用到
 * @type String
 */
uinv.FCM.configMgr.model.selector.index = 'selector';

/**
 * 当前选中节点的key值
 * @type String
 */
uinv.FCM.configMgr.model.selector.selectKey = '';


//------------------------------
// 创建对象公有函数处理
//------------------------------

/**
 * @description 创建对象选择器公用方法 呈现<br />
 * 1) 通过dialog模块呈现<br />
 * 2) 回调函数 返回 obj { 'name' : '物体名称', 'where' : { 物体的条件 } }<br />
 * 3) 主要用于其它模块创建对象时使用
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {Function} fun 回调函数
 * @static
 */
uinv.FCM.configMgr.model.selector.show = function(fun){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	// 回调函数赋值给publicSelectNodeSubmitCallback
	// 当操作结束后会调用这个回调函数
	_this.publicSelectNodeSubmitCallback = fun;
	
	var html = '';
	html += '<div class="selector" style="width:500px;height:300px;">';
		html += '<div class="tree" style="height:250px;width:100%;border:1px solid #EEE;overflow-y:auto;">';
			html += _this.publicShowHtml(_this.obj.tree);
		html += '</div>';
		
		html += '<div class="action">';
			html += '<input class="btn_cancel" onclick="uinv.FCM.configMgr.model.dialog.close();" />';
			html += '<input class="btn_save" onclick="uinv.FCM.configMgr.model.selector.publicSelectNodeSubmit();" />';
		html += '</div>';
	html += '</div>';
	
	_obj.model.dialog.show(html);
};

/**
 * @description 创建对象选择器公用方法 关闭<br />
 * 1) 实际是调用dialog模块的close方法
 * @memberOf uinv.FCM.configMgr.model.selector
 * @static
 */
uinv.FCM.configMgr.model.selector.hide = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_obj.model.dialog.close();
};

/**
 * @description 创建对象选择器公用方法 提交处理函数<br />
 * 1) 主要判断是否选择了节点<br />
 * 2) 回调函数在这里触发，并将返回选择的结果
 * @memberOf uinv.FCM.configMgr.model.selector
 * @static
 */
uinv.FCM.configMgr.model.selector.publicSelectNodeSubmit = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var selectNode = _obj.model.dialog.getObj().find('.tree').find('.ok');
	if(selectNode.length == 1){
		var key = selectNode.attr('key');
		if(key && key in _this.obj.lib ){
			if( typeof _this.publicSelectNodeSubmitCallback == 'function' ){
				var obj = { 'name' : _this.obj.lib[key].name , 'where': {} };
				obj.where[ _this.obj.lib[key].where ] = _this.obj.lib[key].formDataRemember[ _this.obj.lib[key].where ];
				_this.publicSelectNodeSubmitCallback(_obj.model.object.clone(obj));
			}
		}else{ 
			_obj.note.alert( _obj.msg.S19 );
		}
	}else{
		_obj.note.alert( _obj.msg.S20 );
	}
};

/**
 * @description 创建对象选择器公用模块 选择节点处理函数
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {DOM} obj DOM节点
 * @param {String} key 被操作节点的key值
 * @static
 */
uinv.FCM.configMgr.model.selector.publicSelectNode = function(obj,key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	_obj.model.dialog.getObj().find('.tree').find('.ok').removeClass('ok');
	
	if(_this.objIsExistWhere(key)){
		$(obj).parents('.treeNode:eq(0)').addClass('ok');
	}else{
		_obj.note.alert( _obj.msg.S21 );
	}
};

/**
 * @description 创建对象选择器公用模块 创建DOM节点<br />
 * 1) 此方法为递归调用 如当前节点下还有子节点时再把子节点传入递归调用
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {Object} obj 树的节点
 * @return {String} dom 节点
 * @static
 */
uinv.FCM.configMgr.model.selector.publicShowHtml = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	if(typeof obj == 'undefined'){ 
		return '';
	}
	
	var html = '';
	for(var i = 0, k = obj.length; i<k; i++){
		if( _this.objIsExistWhere(obj[i].key ) ){
			html += '<div class="treeNode where" key="'+obj[i].key+'">';
			html += '<span onclick="uinv.FCM.configMgr.model.selector.publicSelectNode(this,\''+obj[i].key+'\');">'+ _this.obj.lib[obj[i].key].name +'</span>';
		}else{
			html += '<div class="treeNode">';
			html += '<span>'+ _this.obj.lib[obj[i].key].name +'</span>';
		}
		
		if( typeof obj[i].childrenNode == 'object' ){
			html += '<div class="childrenNode">';
				html += _this.publicShowHtml(obj[i].childrenNode);
			html += '</div>';
		}
		
		html += '</div>';
	}
	
	return html;
};


//-------------------------
// 节点条件管理
//-------------------------

/**
 * @description 关闭为节点添加条件的Dialog
 * @param {Function} fun 回调方法
 * @memberOf uinv.FCM.configMgr.model.selector
 * @static
 */
uinv.FCM.configMgr.model.selector.cancelAddNodeWhere = function(fun){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_obj.model.dialog.close();
	if(typeof fun == 'function'){
		fun.apply(_this);
	}
};

/**
 * @description 获取所有整个系统定义的所有Class ID
 * @see uinv.factory.getAllClass()
 * @memberOf uinv.FCM.configMgr.model.selector
 * @return {Object} ClassID Object
 * @static
 */
uinv.FCM.configMgr.model.selector.getAllClassID = function(){
	return uinv.factory.getAllClass();		
};

/**
 * @description 获取某一个ClassID的信息
 * @param {Number} classid 
 * @memberOf uinv.FCM.configMgr.model.selector
 * @return {Object} classid 的属性
 * @static
 */
uinv.FCM.configMgr.model.selector.getOneClassID = function(classid){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var all = _this.getAllClassID();
	for(var i in all){
		if(all[i].classId == classid){
			return all[i];
		}
	}
};

/**
 * @description 节点重命名
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {String} key 要操作节点的key值
 * @static
 */
uinv.FCM.configMgr.model.selector.nodeRename = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var html = '<input type="text" value="'+_this.obj.lib[key].name+'" />';
	_this.keyFindNodeHtmlObj(key).find('>span').html(html).find('input').focus().blur(function(){
		_this.obj.lib[key].name = $(this).val();
		$(this).parent().html( _this.obj.lib[key].name );
	}).keydown(function(evt){
		var e = evt || window.event;
		if(e.keyCode == 13){
			_this.obj.lib[key].name = $(this).val();
			$(this).parent().html( _this.obj.lib[key].name );
		}
	});
};

/**
 * @description 根据某一个几点的key值返回该节点的DOM对象<br />
 * 1) 如果key值有效，则返回此节点的DOM对象<br />
 * 2) 如果key值为空，则返回整个selector盒子DOM对象
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {String} key 节点的key值
 * @return {DOM} DOM对象
 * @static
 */
uinv.FCM.configMgr.model.selector.keyFindNodeHtmlObj = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	if(key === ''){
		return _obj.form.box.find(_this.classStr);
	}else{
		return _obj.form.box.find(_this.classStr).find('*[key='+key+']');
	}
};

/**
 * @description 删除节点<br />
 * 1) 页面上删除DOM节点<br />
 * 2) 内存里删除节点对象<br />
 * 3) 如果节点下面有子节点也会一并删除
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {String} key 要删除的key对象
 * @static
 */
uinv.FCM.configMgr.model.selector.deleteNode = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var bool = _obj.note.confirm( _obj.msg.S23 );
	
	if(bool){
		var node = _this.keyFindTreeNodeObj( _this.obj.tree, key);
		node.parent.splice(node.index,1);
		delete _this.obj.lib[key];
		_this.keyFindNodeHtmlObj(key).remove();		
	}
};


/**
 * @description 创建节点<br />
 * 1) 如果传入父节点则在此父节点下创建子节点<br />
 * 2) 如果不传入父节点则在根下创建节点<br />
 * 3) 创建相应的DOM节点<br />
 * 4) 内存里写入节点信息
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {String} parentKey 创建节点的父节点key值
 * @static
 */
uinv.FCM.configMgr.model.selector.createNode = function(parentKey){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var key = "";
	_this.selectKey = parentKey || '';
	
	if(typeof _this.obj.lib == 'undefined'){
		_this.obj.lib = {};
	}
	
	if(typeof _this.obj.tree == 'undefined'){
		_this.obj.tree = [];
	}
	
	do{
		key = _obj.model.key.create();
	}while(key in _this.obj.lib);
	
	var node = { name: '新节点', key: key };
	_this.insertNodeToTreeObj(node, parentKey);
	_this.insertNodeToTreeDom(node, parentKey);
};

/**
 * @description 把一个节点插入内存中树中<br />
 * 1) 如果传入父节点的key，则在父节点的key下插入此节点<br />
 * 2) 如果不传入父节点则在根下插入此节点
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {Object} node 要插入的节点
 * @param {String} parentKey 父节点key值
 * @static
 */
uinv.FCM.configMgr.model.selector.insertNodeToTreeObj = function(node,parentKey){
	var _obj = uinv.FCM.configMgr,
		_this = this,
		nodeObj = {};
		
	if(parentKey){
		var obj = _this.keyFindTreeNodeObj(_this.obj.tree, parentKey).obj;
		if(typeof obj.childrenNode == 'undefined'){
			obj.childrenNode = [];
		}
		nodeObj = obj.childrenNode;
	}else{
		nodeObj = _this.obj.tree;
	}
	
	nodeObj.push( {'key': node.key } );
	_this.obj.lib[node.key] = { 'name' : node.name };
};

/**
 * @description 将节点插入到DOM树里<br />
 * 1) 如果传入父节点key，则在父节点的DOM树下插入子节点<br />
 * 2) 如果不传入父节点key，则在根树下插入子节点
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {Object} node 要操作的节点
 * @param {String} parentKey 父节点key值
 * @static
 */
uinv.FCM.configMgr.model.selector.insertNodeToTreeDom = function(node, parentKey){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var html = '';
	html += '<div  key="'+node.key+'" class="treeNode" style="padding-left:20px;">';
		html += '<span onclick="uinv.FCM.configMgr.model.selector.selectNode(\''+node.key+'\',event);"  oncontextmenu="uinv.FCM.configMgr.model.selector.contextMenu(event,this);">'+node.name+'</span>';
		html += '<div class="childrenNode"></div>';
	html += '</div>';

	_this.keyFindNodeHtmlObj( _this.selectKey ).find('>.childrenNode').append(html);
};

/**
 * @description 根据key值查找到节点对象<br />
 * 1) 此方法为递归查找<br />
 * 2) 如果搜索到匹配节点后将return，不再执行后面的遍历匹配
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {Object} obj 要搜索的对象
 * @param {String} key 要匹配的key值
 * @return {Boolean|Object} 返回false表示没有匹配项 返回object表示匹配到的节点对象
 * @static
 */
uinv.FCM.configMgr.model.selector.keyFindTreeNodeObj = function(obj,key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;				
	for(var i = 0, k=obj.length; i<k; i++){
		if(obj[i].key == key){
			return {'obj':obj[i],'parent':obj,'index':i};
		}
		
		if(typeof obj[i].childrenNode == 'object'){
			var result = _this.keyFindTreeNodeObj(obj[i].childrenNode, key);
			if(result){
				return result;
			}
		}
	}
	
	return false;
};

/**
 * @description 递归创建树的DOM节点
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {Object} obj 节点对象
 * @return {String} DOM节点
 * @static
 */
uinv.FCM.configMgr.model.selector.recursionTreeHtml = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var html = '';
	for(var i = 0, k=obj.length; i<k; i++){
		if( _this.objIsExistWhere( obj[i].key ) ){
			html += '<div class="treeNode where" style="padding-left:20px;"  key="'+obj[i].key+'">';
		}else{
			html += '<div class="treeNode" style="padding-left:20px;"  key="'+obj[i].key+'">';
		}
			html += '<span onclick="uinv.FCM.configMgr.model.selector.selectNode(\''+obj[i].key+'\',event);" oncontextmenu="uinv.FCM.configMgr.model.selector.contextMenu(event,this);">'+_this.obj.lib[obj[i].key].name+'</span>';
			
			html += '<div class="childrenNode">';
			if(typeof obj[i].childrenNode == 'object'){
				html +=  _this.recursionTreeHtml(obj[i].childrenNode);
			}
			html += '</div>';
		html += '</div>';
	}
	return html;
};

/**
 * @description 创建树的DOM节点方法
 * @memberOf uinv.FCM.configMgr.model.selector
 * @return {String} DOM节点
 * @static
 */
uinv.FCM.configMgr.model.selector.treeHtml = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var html = '';
	
	html += '<div class="childrenNode">';
	if(typeof _this.obj.tree == 'object'){
		html += _this.recursionTreeHtml(  _this.obj.tree );
	}
	
	html += '</div>';
	
	return html;
};

/**
 * @description 添加条件的提交操作
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {String} key 节点key值
 * @static
 */
uinv.FCM.configMgr.model.selector.addNodeWhereFormSubmit = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_this.obj.lib[key].where = _obj.model.dialog.getObj().find('input[type=radio][name=wheretype]:checked').val();
	
	_obj.model.dialog.getObj().find('input[type=radio][name=wheretype]').each(function(){
		if( typeof _this.whereTypeSetObj[$(this).val()] == 'function' ){
			_this.whereTypeSetObj[$(this).val()](this,key);
		}
	});
	
	_this.keyFindNodeHtmlObj(key ).addClass('where');
	_this.cancelAddNodeWhere();
};

/**
 * @description 判断节点是否存在条件
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {String} key 节点key值
 * @return {Boolean} true 有条件 false 无条件
 * @static
 */
uinv.FCM.configMgr.model.selector.objIsExistWhere = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	if( typeof _this.obj.lib[key].where == 'undefined' ){
		return false;
	}
	
	return true;
};
			
/**
 * @description 添加条件表单初始化
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {String} key 节点key值
 * @static
 */
uinv.FCM.configMgr.model.selector.addNodeWhereFormInit = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	if( _this.objIsExistWhere(key) ){
		_obj.model.dialog.getObj().find('input[type=radio][name=wheretype][value='+_this.obj.lib[key].where+']').attr('checked',true);
	}
};

/**
 * @description 节点form数据记忆的初始化 （内存操作）
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {String} key 节点key值
 * @static
 */
uinv.FCM.configMgr.model.selector.formDataRememberInit = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;			
	_this.obj.lib[key].formDataRemember = {
		'classid':0,
		'name' : '',
		'attribute' : [{ 'key' : '', 'value' : '' }],
		'fun' : ''
	};				
};

/**
 * @description 删除节点的条件<br />
 * 1) 从内存中删除条件<br />
 * 2) DOM节点删除有条件的Class值，使他恢复没有条件时的样式
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {String} key 节点key值
 * @static
 */
uinv.FCM.configMgr.model.selector.delNodeWhere = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;

	if(key || key in _this.obj.lib){
		delete _this.obj.lib[key].where;
		_this.keyFindNodeHtmlObj(key).removeClass('where');
	}
};

/**
 * @description 编辑节点条件方法
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {String} key 节点key值
 * @return {Boolean} 如果key值无效或者key值不存在树里就return flase 终止下面的操作
 * @static
 */
uinv.FCM.configMgr.model.selector.editNodeWhere = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var classid = _this.getAllClassID();

	if(!key || !(key in _this.obj.lib)){
		return false;
	}
	
	if( key in _this.obj.lib && typeof _this.obj.lib[key].formDataRemember == 'undefined' ){
		_this.formDataRememberInit(key);
	}
	
	var html = '';
	html += '<div class="addnodewhere">';
		
		html += '<div class="row">';
			html += '<span>';
				html += '<input type="radio" name="wheretype" value="classid" checked /> ';
				html += '<s>classid</s>';
			html += '</span>';
			html += '<select class="classidselect" name="classid">';
			for(var i in classid){
				if( _this.obj.lib[key].formDataRemember.classid == classid[i].classId ) {
					html += '<option value="'+classid[i].classId+'" selected>'+ classid[i].caption +'</option>';
				}else{
					html += '<option value="'+classid[i].classId+'">'+ classid[i].caption +'</option>';
				}
			}
			html += '</select>';
		html += '</div>';
		
		html += '<div class="row">';
			html += '<span>';
				html += '<input type="radio" name="wheretype" value="name" /> ';
				html += '<s>物体名称</s>';
			html += '</span>';
			html += '<input type="text" name="name" value="'+_this.obj.lib[key].formDataRemember.name+'" />';
		html += '</div>';
		
		html += '<div class="row">';
			html += '<span>';
				html += '<input type="radio" name="wheretype" value="attribute" /> ';
				html += '<s>属性定义</s>';
			html += '</span>';
			
			html += '<div class="row" style="clear:both;">';
				html += '<span><s>属性名</s></span><input type="text" name="key" value="'+_this.obj.lib[key].formDataRemember.attribute[0].key+'" /> ';
			html += '</div>';
			html += '<div class="row">';
				html += '<span><s>属性值</s></span><input type="text" name="value" value="'+_this.obj.lib[key].formDataRemember.attribute[0].value+'" />';
			html += '</div>';
		html += '</div>';
		
		html += '<div class="row">';
			html += '<span>';
				html += '<input type="radio" name="wheretype" value="fun" /> ';
				html += '<s>函数</s>';
			html += '</span>';
			html += '<textarea name="fun">'+_this.obj.lib[key].formDataRemember.fun+'</textarea>';
		html += '</div>';
		
		html += '<div class="btn">';
			html += '<input class="btn_save" onclick="uinv.FCM.configMgr.model.selector.addNodeWhereFormSubmit(\''+key+'\');" />';
			html += '<input class="btn_cancel" onclick="uinv.FCM.configMgr.model.selector.cancelAddNodeWhere();"  />';
		html += '</div>';
	html += '</div>';
	
	_obj.model.dialog.show(html);
	_this.addNodeWhereFormInit(key);
	
};

/**
 * @description 右键弹出主处理函数
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {Event} evt
 * @param {DOM} obj 触发右键的DOM节点
 * @return {Boolean}
 * @static
 */
uinv.FCM.configMgr.model.selector.contextMenu = function(evt,obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var _dom = obj;
	var e = evt || window.event;
	
	if(e.preventDefault){
		e.preventDefault();
	}
	
	if (e.stopPropagation){
		e.stopPropagation();
	}else{
		e.returnValue = false; // 解决IE8右键弹出
		e.cancelBubble = true;
	}
	
	_obj.form.box.find(_this.classStr).find('.ok').removeClass('ok');
	
	var key = '';
	if($(_dom).parent().attr('key')){
		key = $(_dom).parent().attr('key');
		_this.selectNode( key, e );
	}
	
	_this.contextMenuShow(e, key);
	
	return false;
};

/**
 * @description 子节点展开
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {String} key 节点key值
 * @static
 */
uinv.FCM.configMgr.model.selector.treeNodeShow = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_this.keyFindNodeHtmlObj(key).removeClass('childrenNodeHide').find('>.childrenNode').show();
};

/**
 * @description 子节点收起
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {String} key 节点key值
 * @static
 */
uinv.FCM.configMgr.model.selector.treeNodeHide = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_this.keyFindNodeHtmlObj(key).addClass('childrenNodeHide').find('>.childrenNode').hide();
};

/**
 * @description 右键菜单操作触发动作路由
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {Function} fun 触发的方法
 * @param {String} key 操作的方法
 * @static
 */
uinv.FCM.configMgr.model.selector.contextMenuRouting = function(fun, key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_this.contextMenuHide();
	
	eval( '_this.' + fun + '(\''+key+'\');' );
};

/**
 * @description 获取创建右键DOM节点
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {Event} e
 * @param {String} key 节点key值
 * @return {String} 创建右键菜单DOM节点
 * @static
 */
uinv.FCM.configMgr.model.selector.getContextMenuHtml = function(e, key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var pos = {
		x : e.clientX - _obj.form.box.offset().left,
		y : e.clientY - _obj.form.box.offset().top
	};
	
	var html = '';
	html += '<div class="config-contextmenu" style="background:#E6E6FA;width:100px;position:absolute;z-index:9999;left:'+pos.x+'px;top:'+pos.y+'px;">';
		if( key && key in _this.obj.lib ){
			if(_this.keyFindNodeHtmlObj(key).find('>.childrenNode>.treeNode').length>=1){
				if( _this.keyFindNodeHtmlObj(key).find('>.childrenNode').is(':visible') ){
					html += '<li style="list-style:none;" onclick="uinv.FCM.configMgr.model.selector.contextMenuRouting(\'treeNodeHide\',\''+key+'\');"><s>收起</s></li>';
				}else{
					html += '<li style="list-style:none;" onclick="uinv.FCM.configMgr.model.selector.contextMenuRouting(\'treeNodeShow\',\''+key+'\');"><s>展开</s></li>';
				}
			}
			
			html += '<li style="list-style:none;" onclick="uinv.FCM.configMgr.model.selector.contextMenuRouting(\'createNode\',\''+key+'\');"><s>创建节点</s></li>';
			html += '<li style="list-style:none;" onclick="uinv.FCM.configMgr.model.selector.contextMenuRouting(\'deleteNode\',\''+key+'\');"><s>删除节点</s></li>';
			html += '<li style="list-style:none;" onclick="uinv.FCM.configMgr.model.selector.contextMenuRouting(\'nodeRename\',\''+key+'\');"><s>重新命名</s></li>';
			if( _this.objIsExistWhere(key) ){
				html += '<li style="list-style:none;" onclick="uinv.FCM.configMgr.model.selector.contextMenuRouting(\'editNodeWhere\',\''+key+'\');"><s>修改条件</s></li>';
				html += '<li style="list-style:none;" onclick="uinv.FCM.configMgr.model.selector.contextMenuRouting(\'delNodeWhere\',\''+key+'\');"><s>删除条件</s></li>';					
			}else{
				html += '<li style="list-style:none;" onclick="uinv.FCM.configMgr.model.selector.contextMenuRouting(\'editNodeWhere\',\''+key+'\');"><s>添加条件</s></li>';
			}

		}else{
			html += '<li style="list-style:none;" onclick="uinv.FCM.configMgr.model.selector.contextMenuRouting(\'createNode\',\''+key+'\');"><s>创建节点</s></li>';
		}
	html += '</div>';
	return html;
};

/**
 * @description 右键DOM节点添加到DOM树种并显示
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {Event} e 
 * @param {String} key 节点key值
 * @static
 */
uinv.FCM.configMgr.model.selector.contextMenuShow = function(e, key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_this.contextMenuHide();
	var html = _this.getContextMenuHtml(e, key);
	_obj.form.box.append(html);	
	
	_obj.translate();
};

/**
 * @description 右键DOM节点隐藏 实际上右键的DOM节点会被remove删除操作
 * @memberOf uinv.FCM.configMgr.model.selector
 * @static
 */
uinv.FCM.configMgr.model.selector.contextMenuHide = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_obj.form.box.find('.config-contextmenu').remove();
};

/**
 * @description 当前节点选择操作<br />
 * 1) 样式中添加选中节点的样式<br />
 * 2) 内存记录当前选中的节点key值
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {String} key 节点key值
 * @param {Event} evt
 * @static
 */
uinv.FCM.configMgr.model.selector.selectNode = function(key,evt){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var e = evt || window.event;
	
	if(e.preventDefault){
		e.preventDefault();
	}
	
	if (e.stopPropagation){
		e.stopPropagation();
	}else{
		e.cancelBubble = true;
	}
	
	_this.contextMenuHide();
	_this.cancelSelectNode();
	_this.selectKey = key;
	_this.keyFindNodeHtmlObj(key).addClass('ok');
};

/**
 * @description 撤销选中的节点<br />
 * 1) DOM节点上移除选中样式<br />
 * 2) 内存里删除选中记录
 * @memberOf uinv.FCM.configMgr.model.selector
 * @static
 */
uinv.FCM.configMgr.model.selector.cancelSelectNode = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_this.selectKey = '';
	_obj.form.box.find(_this.classStr).find('.ok').removeClass('ok');
};

/**
 * @description 选择器模块初始化
 * @memberOf uinv.FCM.configMgr.model.selector
 * @param {String} classStr 选择器盒子DOM Class 值
 * @static
 */
uinv.FCM.configMgr.model.selector.init = function(classStr){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	_obj.form.submitCallback = function(){
		_obj.model.stringDB.set( _this.index, _this.obj, function(){} );
	};

	_this.obj = _obj.model.stringDB.get(_this.index);
	_this.classStr = classStr;
	
	_obj.form.box.find(_this.classStr).html( _this.treeHtml() );
	
	_obj.form.box.find(_this.classStr).click(function(){
		_this.cancelSelectNode();
		_this.contextMenuHide();
	});
	
	$('.config-info').html( _obj.msg.S22 );
};


/**
 * @description classid类型
 * @param {DOM} obj DOM节点
 * @param {String} key值
 * @static
 */
uinv.FCM.configMgr.model.selector.whereTypeSetObj.classid = function(obj,key){
	var _obj = uinv.FCM.configMgr;
	var _this = _obj.model.selector;
	_this.obj.lib[key].formDataRemember.classid = Number($(obj).parents('.row').find('select[name=classid]').val());
};

/**
 * @description name类型
 * @param {DOM} obj DOM节点
 * @param {String} key值
 * @static
 */
uinv.FCM.configMgr.model.selector.whereTypeSetObj.name = function(obj,key){
	var _obj = uinv.FCM.configMgr;
	var _this = _obj.model.selector;
	_this.obj.lib[key].formDataRemember.name = $(obj).parents('.row').find('input[name=name]').val();
};

/**
 * @description attribute类型
 * @param {DOM} obj DOM节点
 * @param {String} key值
 * @static
 */
uinv.FCM.configMgr.model.selector.whereTypeSetObj.attribute = function(obj,key){
	var _obj = uinv.FCM.configMgr;
	var _this = _obj.model.selector;
	_this.obj.lib[key].formDataRemember.attribute = [{
		'key' : $(obj).parents('.row').find('input[name=key]').val(),
		'value' : $(obj).parents('.row').find('input[name=value]').val()
	}];
};

/**
 * @description Function类型
 * @param {DOM} obj DOM节点
 * @param {String} key值
 * @static
 */
uinv.FCM.configMgr.model.selector.whereTypeSetObj.fun = function(obj,key){
	var _obj = uinv.FCM.configMgr;
	var _this = _obj.model.selector;
	_this.obj.lib[key].formDataRemember.fun = $(obj).parents('.row').find('textarea[name=fun]').val();
	
};

//---------------------------------
// 基础定义
//---------------------------------

/**
 * @description 统计盒型DOM节点Class值 这里只是定义 初始化时由传入实际的值改写
 * @type String
 */
uinv.FCM.configMgr.model.statistics.classStr = '';

/**
 * @description 统计条件范围
 * @type Array
 */
uinv.FCM.configMgr.model.statistics.where = ['<'];

/**
 * @description 统计对象名称映射
 * @type Object
 */
uinv.FCM.configMgr.model.statistics.nameDisplay = {
	'availableU' : u.le.get('空间'),
	'load' : u.le.get('承重'),
	'power' : u.le.get('功耗')
};

/**
 * @description 新增统计条件项默认颜色
 * @type String
 */
uinv.FCM.configMgr.model.statistics.defaultColor = '#FFFFFF';
		
//---------------------------
// 统计处理函数
//---------------------------

/**
 * @description 删除统计条件项
 * @memberOf uinv.FCM.configMgr.model.statistics
 * @param {DOM} obj 触发事件DOM节点
 * @static
 */
uinv.FCM.configMgr.model.statistics.delRow = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;			
	$(obj).parents('tr').remove();
};

/**
 * @description 添加统计条件项<br />
 * 1) DOM操作 不写内存
 * @memberOf uinv.FCM.configMgr.model.statistics
 * @param {DOM} obj 触发事件DOM节点
 * @static
 */
uinv.FCM.configMgr.model.statistics.addRow = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;	
	var data = {
		'number' : "",
		'color' : "#FFF",
		'where' :  _this.where[0]
	};
	
	var html = _this.mkhtmlTr(data);
	$(obj).parents('.list').find('table').append(html);
	var dom = $(obj).parents('.list').find('table').find('tr:last').find('input[key=color]').get(0);
	_obj.model.colorpicke.show(dom);
};

/**
 * @description 创建统计项的DOM节点
 * @memberOf uinv.FCM.configMgr.model.statistics
 * @param {Object} obj 统计数据
 * @return {String} 可以创建DOM节点的HTML文本
 * @static
 */
uinv.FCM.configMgr.model.statistics.mkhtmlTr = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	if(typeof obj != 'object'){
		obj = {};
	}
	
	obj.where = typeof obj.where == 'undefined' ? _this.where[0] :  obj.where;
	obj.color = typeof obj.color == 'undefined' ? _this.defaultColor : obj.color;
	obj.number = typeof obj.number == 'undefined' ? '' : obj.number;

	var html = '';
	html += '<tr style="height:50px;" class="item">';
		html += '<td>';
			html += '<select key="where">';
			for(var i = 0,k = _this.where.length; i<k; i++){
				if(obj.where == _this.where[i]){
					html += '<option value="'+_this.where[i]+'" selected>'+_this.where[i]+'</option>';
				}else{
					html += '<option value="'+_this.where[i]+'">'+_this.where[i]+'</option>';
				}
			}
			html += '</select>';
		html += '</td>';
		html += '<td>';
			html += '<input class="config-input-text config-input-percentage" type="text" key="number" value="'+obj.number+'" /><span class="config-unit">%</span>';
		html += '</td>';
		html += '<td>';
			html += '<input type="text" key="color" value="'+obj.color+'" />';
		html += '</td>';
		html += '<td>';
			html += '<button onclick="uinv.FCM.configMgr.model.statistics.delRow(this);"><s>删除</s></button>';
		html += '</td>';
	html += '</tr>';
	
	return html;
};

/**
 * @description 创建统计对象的DOM节点
 * @memberOf uinv.FCM.configMgr.model.statistics
 * @static
 */
uinv.FCM.configMgr.model.statistics.mkhtml = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var arr = [];
	
	for(var i in _obj.data.statistics){
		var html = '';
		html += '<div class="list">';
			html += '<div class="header">'+_this.nameDisplay[i]+'</div>';
			html += '<table style="width:100%;text-align:center;" path="statistics" name="'+i+'" cate="statistics">';
				html += '<tr>';
					html += '<th><s>条件</s></th>';
					html += '<th><s>数值</s></th>';
					html += '<th><s>颜色</s></th>';
					html += '<th><s>删除</s></th>';
				html += '</tr>';
			html += '</table>';
			html += '<div class="action" style="text-align:right;">';
				html += '<input type="button" class="btn_add" onclick="uinv.FCM.configMgr.model.statistics.addRow(this);" />';
			html += '</div>';
		html += '</div>';
		arr.push(html);
	}
	
	_obj.form.box.find(_this.classStr).html(arr.join(_obj.global.line1));
	_obj.translate();
};

/**
 * @description 初始化
 * @memberOf uinv.FCM.configMgr.model.statistics
 * @param {String} classStr 统计盒型DOM节点Class值
 * @static
 */
uinv.FCM.configMgr.model.statistics.init = function(classStr){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_this.classStr = classStr;
	_this.mkhtml();
};

/**
 * @description 读取文本数据
 * @memberOf uinv.FCM.configMgr.model.stringDB
 * @see uinv.server.manager.frame.getString()
 * @return {Object} 读取结果
 * @static
 */
uinv.FCM.configMgr.model.stringDB.readString = function(){
	return uinv.server.manager.frame.getString();
};

/**
 * @description 写入文本数据
 * @memberOf uinv.FCM.configMgr.model.stringDB
 * @see uinv.server.manager.frame.saveString()
 * @param {String} str 文本数据
 * @param {Function} fun 回调函数
 * @static
 */
uinv.FCM.configMgr.model.stringDB.writeString = function(str, fun){
	var _obj = uinv.FCM.configMgr;
	var _this = this;				
	uinv.server.manager.frame.saveString(str, false, function(result){
		if(result.success){
			if(typeof fun == 'function'){
				fun.apply(_this);
			}
		}else{
			_obj.note.alert(result.data);
		}
	});
};

/**
 * @description 索引文本数据并返回索引的Object
 * @memberOf uinv.FCM.configMgr.model.stringDB
 * @param {String} index 索引
 * @return {Object} 索引的Object
 * @static
 */
uinv.FCM.configMgr.model.stringDB.get = function(index){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var result = _this.readString();
	if(result.success){
		try{
			var obj = _obj.model.transform.str2obj(result.data);
			if(typeof(obj[index]) == "undefined"){
				return {};
			}else{
				return  obj[index];
			}
		}catch(e){
			return {};
		}

	}else{
		_obj.note.alert('stringDB.get() : ' + result.data);
		return {};
	}
};

/**
 * @description 根据索引把Object信息转字符串写入文本数据存储
 * @memberOf uinv.FCM.configMgr.model.stringDB
 * @param {String} index 索引
 * @param {Object} obj 要存储的数据
 * @param {Function} fun 回调函数
 * @return {Boolean} 如果object失效则return false终止后面的操作
 * @static
 */
uinv.FCM.configMgr.model.stringDB.set = function( index , obj, fun ){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	if( typeof obj == 'undefined' ) { 
		return false;
	}

	var result = _this.readString();
	var db = {};
	if(result.success){
		if(result.data){
			db = _obj.model.transform.str2obj(result.data);
		}

		db[index] = obj;
		var str = _obj.model.transform.obj2str(db);
		
		// Fixes #2
		if(typeof str == "string" && str !== "" ){
			_this.writeString( str, fun );
		}else{
			_obj.note.alert(_obj.msg.S26);
		}
		
	}else{
		_obj.note.alert(result.data);
	}
};

 
/**
 * @description 对象转字符串
 * @memberOf uinv.FCM.configMgr.model.transform
 * @param {Object} o 对象
 * @return {String}
 * @static
 */
uinv.FCM.configMgr.model.transform.obj2str = function(o){
	
	//return $.toJson(o);
	
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var i = null;
	
	if(typeof o == 'undefined'){
		return '""';
	}
	
    var r = [];
    if( typeof o == "string" ){
        return "\""+o.replace(/([\'\"\\])/g,"\\$1").replace(/(\n)/g,"\\n").replace(/(\r)/g,"\\r").replace(/(\t)/g,"\\t")+"\"";
    }
    if( typeof o == "object" ){
        if(!o.sort){
            for( i in o ){
                r.push( "\"" + i + "\"" + ":" + _this.obj2str(o[i]) );
            }
            if( !!document.all && !/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString) ){
                r.push( "toString:" + o.toString.toString() );
            }
            r= "{"+r.join()+"}";
        }else{
            for( i=0,k=o.length; i<k ; i++ ){
                r.push( _this.obj2str(o[i]) );
            }
            r= "[" + r.join() + "]";
        } 
        return r;
    } 
    return o.toString();
};

/**
 * @description 字符串转对象
 * @memberOf uinv.FCM.configMgr.model.transform
 * @param {String} s 字符串
 * @return {Object|Boolean} 返回object表示转换成功 返回 false 表示转换失败
 * @static
 */
uinv.FCM.configMgr.model.transform.str2obj = function(s){
	//return $.jsonTo(s);
	
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	if(typeof s == "string"){
		s = s.replaceAll("\r\n",'');
		s = s.replaceAll("\n",'');
		s = s.replaceAll("\t",'');
		try{
			return eval("(function(){ return  " + s + " })();");
		}catch(e){
			//_obj.note.alert('str2obj:'+e);
			return false;
		}
		
	}else{
		//_obj.note.alert('str2obj:参数必须是字符串！');
		return false;
	}
};


//----------------------------------
// 基础定义
//----------------------------------

/**
 * @description 视点盒型DOM Class值
 * @type String
 */
uinv.FCM.configMgr.model.viewpoint.classStr = '';

//----------------------------------
// 函数区
//----------------------------------

/**
 * @description 创建物体
 * @memberOf uinv.FCM.configMgr.model.viewpoint
 * @static
 */
uinv.FCM.configMgr.model.viewpoint.createObject = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_obj.model.selector.show(function(obj){
		_obj.model.selector.cancelAddNodeWhere();
		var o = _this.addObjectToMemory(obj);
		_this.addHtmlRow(o);
	});
};

/**
 * @description 根据key查找物体
 * @memberOf uinv.FCM.configMgr.model.viewpoint
 * @param {String} key 物体key值
 * @return {Boolean|Object} 查找到物体返回Object 查找不到返回false
 * @static
 */
uinv.FCM.configMgr.model.viewpoint.keyFindObj = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	for(var i=0,k=_obj.data.viewpoint.length; i<k; i++){
		if( _obj.data.viewpoint[i].key == key ){
			return _obj.data.viewpoint[i];
		}
	}
	
	return false;
};

/**
 * @description 根据key查找到物体的索引值
 * @memberOf uinv.FCM.configMgr.model.viewpoint
 * @param {String} key 物体key值
 * @return {Number} -1 表示物体搜索不到
 * @static
 */
uinv.FCM.configMgr.model.viewpoint.keyFindIndex = function(key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	for(var i=0,k=_obj.data.viewpoint.length; i<k; i++){
		if( _obj.data.viewpoint[i].key == key ){
			return i;
		}
	}
	return -1;
};

/**
 * @description 生成唯一key<br />
 * 1) 实际调用key模块生成32位的key值<br />
 * 2) 生成key以后会遍历目前所有物体使用的key，如果有重复的则重新生成直到生成的key没有被使用
 * @memberOf uinv.FCM.configMgr.model.viewpoint
 * @return {String} key值
 * @static
 */
uinv.FCM.configMgr.model.viewpoint.createKey = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var key = "";
	
	do{
		key = _obj.model.key.create(32);
	}while( _this.keyFindObj(key) );
	
	return key;
};

/**
 * @description 添加新创建物体数据到内存
 * @memberOf uinv.FCM.configMgr.model.viewpoint
 * @param {Object} obj 选择器返回的物体
 * @return {Object} 初始化后的物体
 * @static
 */
uinv.FCM.configMgr.model.viewpoint.addObjectToMemory = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var o = {
		'name' : obj.name,
		'where' : obj.where,
		'key' : _this.createKey(),
		'data' : {
			'x' : 0,
			'y' : 0,
			'z' : 0
		}
	};
	
	_obj.data.viewpoint.push(o);
	return o;
};

/**
 * @description 添加物体DOM节点
 * @memberOf uinv.FCM.configMgr.model.viewpoint
 * @param {Object} obj 物体数据
 * @static
 */
uinv.FCM.configMgr.model.viewpoint.addHtmlRow = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;	
	_obj.form.box.find(_this.classStr).append( _this.mkhtmlRow(obj) );
	_obj.translate();
};

/**
 * @description 根据物体数据生成HTML文本
 * @memberOf uinv.FCM.configMgr.model.viewpoint
 * @param {Object} obj 物体数据
 * @return {String} HTML文本
 */
uinv.FCM.configMgr.model.viewpoint.mkhtmlRow = function(obj){
	var _obj = uinv.FCM.configMgr;
	var _this = this;			
	var html = '';
	html += '<tr class="row" key="'+obj.key+'">';
		html += '<td>';
			html += '<h3><span onclick="uinv.FCM.configMgr.model.viewpoint.objectRename(this,\''+obj.key+'\');" class="name">'+obj.name+'</span></h3>';
		html += '</td>';
		for(var i in obj.data){
			html += '<td><input class="w50" type="text" key="'+i+'" name="'+obj.key+'" cate="viewpoint" path="viewpoint" /></td>';
		}
		html += '<td><a onclick="uinv.FCM.configMgr.model.viewpoint.objectDelete(this,\''+obj.key+'\');" href="javascript:void(0);"><s>删除</s></a></td>';
	html += '</tr>';
	return html;
};

/**
 * @description 创建所有物体的DOM节点
 * @memberOf uinv.FCM.configMgr.model.viewpoint
 * @static
 */
uinv.FCM.configMgr.model.viewpoint.mkhtml = function(){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	var html = '';
	for(var i=0,k=_obj.data.viewpoint.length; i<k; i++){
		html += _this.mkhtmlRow(_obj.data.viewpoint[i]);	
	}
	
	_obj.form.box.find(_this.classStr).find('tr:gt(0)').remove();
	_obj.form.box.find(_this.classStr).append(html);
	_obj.translate();
};

/**
 * @description 物体重命名 (内存也会改写)<br />
 * 1) 内存会改写<br />
 * 2) 实际上把触发事件的文本修改成input输入框，焦点离开或回车后恢复
 * @memberOf uinv.FCM.configMgr.model.viewpoint
 * @param {DOM} obj 触发事件的DOM节点
 * @param {String} key 物体key值
 * @static
 */
uinv.FCM.configMgr.model.viewpoint.objectRename = function(obj,key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var dom = $(obj).parent();
	var html = dom.html();
	dom.html( '<input type="text" value="'+$(obj).html()+'" />' );
	dom.find('input').focus().blur(function(){
		_this.keyFindObj(key).name = $(this).val();
		dom.html(html);
		dom.find('span').html( $(this).val() );
	}).keydown(function(evt){
		var e = evt || window.event;
		if(e.keyCode == 13){
			_this.keyFindObj(key).name = $(this).val();
			dom.html(html);
			dom.find('span').html( $(this).val() );
		}
	});
};

/**
 * @description 删除物体<br />
 * 1) 由触发这个事件的DOM节点往父节点找到row后删除<br />
 * 2) 内存也会改写
 * @memberOf uinv.FCM.configMgr.model.viewpoint
 * @param {DOM} obj 触发事件的DOM节点
 * @param {String} key 物体key值
 */
uinv.FCM.configMgr.model.viewpoint.objectDelete = function(obj,key){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	var bool = _obj.note.confirm( _obj.msg.S24 );
	
	if(bool){
		var index = _this.keyFindIndex(key);
		_obj.data.viewpoint.splice(index,1);
		$(obj).parents('*[key='+key+']').remove();	
	}
};

/**
 * @description 初始化
 * @memberOf uinv.FCM.configMgr.model.viewpoint
 * @param {String} classStr
 * @static
 */
uinv.FCM.configMgr.model.viewpoint.init = function(classStr){
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	_this.classStr = classStr || '';
	_this.mkhtml();
};

//----------------------------------------
// 普通提示区
//----------------------------------------


uinv.FCM.configMgr.msg.S1 = "下载配置";
uinv.FCM.configMgr.msg.S2 = "正在打包...";

uinv.FCM.configMgr.msg.S3 = "错误(S3)：您上传的备份文件有错误，请重新上传正确备份的zip压缩包文件！";
uinv.FCM.configMgr.msg.S4 = "错误(S4)：您上传的备份配置信息数据格式错误，不能执行恢复操作！";
uinv.FCM.configMgr.msg.S5 = "警告(S5)：删除后不可以恢复，确认删除此图片？";
uinv.FCM.configMgr.msg.S6 = "错误(S6)：同样条件的物体已存在，不能重复创建重复条件的物体！";
uinv.FCM.configMgr.msg.S7 = "错误(S7)：请指定要操作的物体！";
uinv.FCM.configMgr.msg.S8 = "警告(S8)：此操作将会把所有物体下同名项一并删除，继续删除吗？";
uinv.FCM.configMgr.msg.S9 = "错误(S9)：此项不可编辑配置！";
uinv.FCM.configMgr.msg.S10 = "错误(S10)：物体不存在！";
uinv.FCM.configMgr.msg.S11 = "错误(S11)：数据格式验证不通过！";
uinv.FCM.configMgr.msg.S12 = "错误(S12)：不能克隆对象！";

uinv.FCM.configMgr.msg.S13 = "错误(S13)：资源名称不能为空！";
uinv.FCM.configMgr.msg.S14 = "错误(S14)：服务器路径不能为空！";
uinv.FCM.configMgr.msg.S15 = "错误(S15)：版本号不能为空！";
uinv.FCM.configMgr.msg.S16 = "错误(S16)：本地路径不能为空 ！";
uinv.FCM.configMgr.msg.S17 = "错误(S17)：资源包不能为空！";

uinv.FCM.configMgr.msg.S18 = "警告(S18)：删除资源包不可恢复，确认删除吗？";
uinv.FCM.configMgr.msg.S19 = "错误(S19)：系统异常！";

uinv.FCM.configMgr.msg.S20 = "错误(S20)：请选择节点！";
uinv.FCM.configMgr.msg.S21 = "错误(S21)：未添加条件的节点不能选择！";
uinv.FCM.configMgr.msg.S22 = "节点字体加粗表示已添加条件";
uinv.FCM.configMgr.msg.S23 = "警告(S23)：此操作将会将节点及它的子节点彻底删除，确认删除吗？";

uinv.FCM.configMgr.msg.S24 = "警告(S24)：此操作将会将会删除此物体及物体的视角配置信息，确认删除吗？";
uinv.FCM.configMgr.msg.S25 = "错误(S25)：Form数据定义占用系统关键字！";

uinv.FCM.configMgr.msg.S26 = "错误(S26)：副数据转换string异常！";


//---------------------------------------
// 函数提示区
//---------------------------------------

uinv.FCM.configMgr.msg.F1 = function(fileName){
	return "警告(F1)：恢复操作将会把上传的配置信息覆盖当前系统的配置信息不可恢复\r\n确认继续"+fileName+"配置恢复操作？";	
};

uinv.FCM.configMgr.msg.F2 = function(fileName){
	return "警告(F2)：" + fileName + "图片已存在，是否要覆盖旧的图片？";
};

uinv.FCM.configMgr.msg.F3 = function(fileName){
	return "错误(F3)：" + fileName + "资源已存在！";
};

uinv.FCM.configMgr.msg.F4 = function(title){
	return "警告(F4)：" + title + "资源已存在，要覆盖旧的资源项吗？";
};

uinv.FCM.configMgr.msg.F5 = function(fileName){
	return "警告(F5)：同名资源包 "+fileName+" 已存在服务器，要覆盖旧的资源包吗？";
};




/**
 * @description 弹出警告信息，将信息翻译后调用系统的alert函数
 * @memberOf uinv.FCM.configMgr.note
 * @param {String} str 警告信息
 * @static
 */
uinv.FCM.configMgr.note.alert = function(str){
	alert(u.le.get(str));
};

/**
 * @description 弹出确认回话信息，将信息翻译后调用系统的confirm函数
 * @memberOf uinv.FCM.configMgr.note
 * @param {String} str 确认信息
 * @return {Boolean}
 * @static
 */
uinv.FCM.configMgr.note.confirm = function(str){
	return confirm(u.le.get(str));
};

/**
 * @description 信息提示，将提示信息翻译后调用dialog函数弹层提示，大小随内容自适应
 * @memberOf uinv.FCM.configMgr.note
 * @param {String} str 提示信息
 * @static
 */
uinv.FCM.configMgr.note.dialog = function(str){
	var html = '';
	html += '<div class="dialog-note">';
		html += '<div><s>' + str + '</s></div>';
		html += '<div class="action"><button class="button-btn" onclick="uinv.FCM.configMgr.model.dialog.close();"><s>确定</s></button></div>';
	html += '</div>';
	
	uinv.FCM.configMgr.model.dialog.show(html);
};


/**
 * @description 把条件名称转换为规范规范名称
 * @memberOf uinv.FCM.configMgr.other
 * @param {Object} o 数据
 * @return {Object} 返回转换后的数据
 * @static
 */
uinv.FCM.configMgr.other.conditionReplaceName = function(o){
			
	var _obj = uinv.FCM.configMgr;
	var _this = this;
	
	for(var i in o){
		switch(i){
			case 'classid' :
				o.REGTYPE_CLASSID = o[i];
				delete o[i];
				break;
			case 'name' :
				o.REGTYPE_OBJECT = o[i];
				delete o[i];
				break;
			case 'attribute' :
				o.REGTYPE_ATTRIBUTE = {};
				for(var n=0,m=o[i].length;n<m;n++){
					o.REGTYPE_ATTRIBUTE[o[i][n].key] =  o[i][n].value;
				}
				delete o[i];
				break;	
			case 'fun' :
				o.REGTYPE_FUNCTION = o[i];
				delete o[i];
				break;
		}
	}
	
	return o;
};

/**
 * @description 翻译功能 默认遍历页面所有s标签的文本使用u.le.get函数翻译替换
 * @memberOf uinv.FCM.configMgr
 * @since 2013-07-31
 * @static
 */
uinv.FCM.configMgr.translate = function(){
	
	$('s').each(function(){
		if($(this).html!==""){
			$(this).replaceWith(u.le.get($(this).html()));
		}
	});
	
	/*
	$("a,input").each(function(){
		if($(this).attr("value")!== ""){
			$(this).attr({"value": u.le.get($(this).attr("value"))});
		}
		if($(this)!= undefined && $(this).attr("title")!= ""){
			$(this).attr({"title":u.le.get($(this).attr("title"))});
		}
	});


	$("select").each(function(){
		if($(this).attr("data-placeholder")!==""){
			$(this).attr({"data-placeholder": u.le.get($(this).attr("data-placeholder"))});
		}
	});

	
	$("select option").each(function(){
		if($(this).html()!== ""){
			$(this).html(u.le.get($(this).html()));
		}
	});
	*/
};


/**
 * @fileOverview <span style="color:blue;">可视化配置系统文档说明</span>
 * @author lizhong
 * @since 2013-08-06
 * @version 1.0.0
 * @lastCreateDate 2013-08-08
 */
 
 
 