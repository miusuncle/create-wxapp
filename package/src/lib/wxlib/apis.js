/**
 * 小程序 API 名称
 * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/
 */
module.exports = [
	/**
	 * ---------------------------------------------------------------
	 * 网络 - 发起请求
	 * ---------------------------------------------------------------
	 */

	// 发起 HTTP(S) 请求
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html#wxrequestobject
	'request',

	/**
	 * ---------------------------------------------------------------
	 * 网络 - 上传、下载
	 * ---------------------------------------------------------------
	 */

	// 将本地资源上传到开发者服务器
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-file.html#wxuploadfileobject
	// 'uploadFile',

	// 下载文件资源到本地
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-file.html#wxdownloadfileobject
	// 'downloadFile',

	/**
	 * ---------------------------------------------------------------
	 * 网络 - WebSocket
	 * ---------------------------------------------------------------
	 */

	// 创建一个 WebSocket 连接
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html#wxconnectsocketobject
	// 'connectSocket',

	// 通过 WebSocket 连接发送数据
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-socket.html#wxsendsocketmessageobject
	// 'sendSocketMessage',

	/**
	 * ---------------------------------------------------------------
	 * 媒体 - 图片
	 * ---------------------------------------------------------------
	 */

	// 从本地相册选择图片或使用相机拍照
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-picture.html#wxchooseimageobject
	// 'chooseImage',

	// 预览图片
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-picture.html#wxpreviewimageobject
	// 'previewImage',

	// 获取图片信息
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-picture.html#wxpreviewimageobject
	// 'getImageInfo',

	/**
	 * ---------------------------------------------------------------
	 * 媒体 - 录音
	 * ---------------------------------------------------------------
	 */

	// 开始录音
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-record.html#wxstartrecordobject
	// 'startRecord',

	/**
	 * ---------------------------------------------------------------
	 * 媒体 - 音频控制
	 * ---------------------------------------------------------------
	 */

	// 开始播放语音
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-voice.html#wxplayvoiceobject
	// 'playVoice',

	/**
	 * ---------------------------------------------------------------
	 * 媒体 - 音乐播放控制
	 * ---------------------------------------------------------------
	 */

	// 获取后台音乐播放状态
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-background-audio.html#wxgetbackgroundaudioplayerstateobject
	// 'getBackgroundAudioPlayerState',

	// 使用后台播放器播放音乐
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-background-audio.html#wxplaybackgroundaudioobject
	// 'playBackgroundAudio',

	// 控制音乐播放进度
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-background-audio.html#wxseekbackgroundaudioobject
	// 'seekBackgroundAudio',

	/**
	 * ---------------------------------------------------------------
	 * 媒体 - 视频
	 * ---------------------------------------------------------------
	 */

	// 拍摄视频或从手机相册中选视频，返回视频的临时文件路径
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-video.html#wxchoosevideoobject
	// 'chooseVideo',

	/**
	 * ---------------------------------------------------------------
	 * 文件
	 * ---------------------------------------------------------------
	 */

	// 保存文件到本地
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/file.html#wxsavefileobject
	// 'saveFile',

	// 获取本地已保存的文件列表
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/file.html#wxgetsavedfilelistobject
	// 'getSavedFileList',

	// 获取本地文件的文件信息
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/file.html#wxgetsavedfileinfoobject
	// 'getSavedFileInfo',

	// 删除本地存储的文件
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/file.html#wxremovesavedfileobject
	// 'removeSavedFile',

	// 新开页面打开文档
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/file.html#wxopendocumentobject
	// 'openDocument',

	/**
	 * ---------------------------------------------------------------
	 * 数据缓存
	 * ---------------------------------------------------------------
	 */

	// 将数据异步存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxsetstorageobject
	// 'setStorage',

	// 从本地缓存中异步获取指定 key 对应的内容
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxgetstorageobject
	// 'getStorage',

	// 异步获取当前storage的相关信息
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxgetstorageinfoobject
	// 'getStorageInfo',

	// 从本地缓存中异步移除指定 key
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxremovestorageobject
	// 'removeStorage',

	// 异步清理本地数据缓存
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html#wxclearstorage
	// 'clearStorage',

	/**
	 * ---------------------------------------------------------------
	 * 位置 - 获取位置
	 * ---------------------------------------------------------------
	 */

	// 获取当前的地理位置、速度
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/location.html#wxgetlocationobject
	// 'getLocation',

	// 打开地图选择位置
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/location.html#wxchooselocationobject
	// 'chooseLocation',

	/**
	 * ---------------------------------------------------------------
	 * 位置 - 查看位置
	 * ---------------------------------------------------------------
	 */

	// 使用微信内置地图查看位置
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/location.html#wxopenlocationobject
	// 'openLocation',

	/**
	 * ---------------------------------------------------------------
	 * 设备 - 系统信息
	 * ---------------------------------------------------------------
	 */

	// 获取系统信息
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/systeminfo.html#wxgetsysteminfoobject
	// 'getSystemInfo',

	/**
	 * ---------------------------------------------------------------
	 * 设备 - 网络状态
	 * ---------------------------------------------------------------
	 */

	// 获取网络类型
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/device.html#wxgetnetworktypeobject
	// 'getNetworkType',

	/**
	 * ---------------------------------------------------------------
	 * 设备 - 加速度计
	 * ---------------------------------------------------------------
	 */

	// 开始监听加速度数据
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/accelerometer.html#wxstartaccelerometerobject
	// 'startAccelerometer',

	// 停止监听加速度数据
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/accelerometer.html#wxstopaccelerometerobject
	// 'stopAccelerometer',

	/**
	 * ---------------------------------------------------------------
	 * 设备 - 罗盘
	 * ---------------------------------------------------------------
	 */

	// 开始监听罗盘数据
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/compass.html#wxstartcompassobject
	// 'startCompass',

	// 停止监听罗盘数据。
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/compass.html#wxstopcompassobject
	// 'stopCompass',

	/**
	 * ---------------------------------------------------------------
	 * 设备 - 拨打电话
	 * ---------------------------------------------------------------
	 */

	// 拨打电话号码
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/phonecall.html#wxmakephonecallobject
	// 'makePhoneCall',

	/**
	 * ---------------------------------------------------------------
	 * 设备 - 扫码
	 * ---------------------------------------------------------------
	 */

	// 调起客户端扫码界面，扫码成功后返回对应的结果
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/scancode.html#wxscancodeobject
	// 'scanCode',

	/**
	 * ---------------------------------------------------------------
	 * 设备 - 剪贴板
	 * ---------------------------------------------------------------
	 */

	// 设置系统剪贴板的内容
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/clipboard.html#wxsetclipboarddataobject
	// 'setClipboardData',

	// 获取系统剪贴板内容
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/clipboard.html#wxgetclipboarddataobject
	// 'getClipboardData',

	/**
	 * ---------------------------------------------------------------
	 * 设备 - 蓝牙
	 * ---------------------------------------------------------------
	 */

	// 初始化蓝牙适配器
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxopenbluetoothadapterobject
	// 'openBluetoothAdapter',

	// 关闭蓝牙模块
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxclosebluetoothadapterobject
	// 'closeBluetoothAdapter',

	// 获取本机蓝牙适配器状态
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxgetbluetoothadapterstateobject
	// 'getBluetoothAdapterState',

	// 开始搜寻附近的蓝牙外围设备
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxstartbluetoothdevicesdiscoveryobject
	// 'startBluetoothDevicesDiscovery',

	// 停止搜寻附近的蓝牙外围设备
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxstopbluetoothdevicesdiscoveryobject
	// 'stopBluetoothDevicesDiscovery',

	// 获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxgetbluetoothdevicesobject
	// 'getBluetoothDevices',

	// 根据 uuid 获取处于已连接状态的设备
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxgetconnectedbluethoothdevicesobject
	// 'getConnectedBluetoothDevices',

	// 连接低功耗蓝牙设备
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxcreatebleconnectionobject
	// 'createBLEConnection',

	// 断开与低功耗蓝牙设备的连接
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxclosebleconnectionobject
	// 'closeBLEConnection',

	// 获取蓝牙设备所有 service（服务）
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxgetbledeviceservicesobject
	// 'getBLEDeviceServices',

	// 获取蓝牙设备所有 characteristic（特征值）
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxgetbledevicecharacteristicsobject
	// 'getBLEDeviceCharacteristics',

	// 读取低功耗蓝牙设备的特征值的二进制数据值
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxreadblecharacteristicvalueobject
	// 'readBLECharacteristicValue',

	// 向低功耗蓝牙设备特征值中写入二进制数据
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxwriteblecharacteristicvalueobject
	// 'writeBLECharacteristicValue',

	// 启用低功耗蓝牙设备特征值变化时的 notify 功能
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/bluetooth.html#wxnotifyblecharacteristicvaluechangedobject
	// 'notifyBLECharacteristicValueChanged',

	/**
	 * ---------------------------------------------------------------
	 * 界面 - 交互反馈
	 * ---------------------------------------------------------------
	 */

	// 显示消息提示框
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxshowmodalobject
	// 'showToast',

	// 显示 loading 提示框
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxshowloadingobject
	// 'showLoading',

	// ​显示模态弹窗
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxhidetoast
	// 'showModal',

	// 显示操作菜单
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html#wxshowactionsheetobject
	// 'showActionSheet',

	/**
	 * ---------------------------------------------------------------
	 * 界面 - 设置导航条
	 * ---------------------------------------------------------------
	 */

	// 动态设置当前页面的标题
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui.html#wxsetnavigationbartitleobject
	// 'setNavigationBarTitle',

	/**
	 * ---------------------------------------------------------------
	 * 界面 - 导航
	 * ---------------------------------------------------------------
	 */

	// 保留当前页面，跳转到应用内的某个页面，使用 wx.navigateBack 可以返回到原页面
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxnavigatetoobject
	// 'navigateTo',

	// 关闭当前页面，跳转到应用内的某个页面
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxredirecttoobject
	// 'redirectTo',

	// 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/ui-navigate.html#wxswitchtabobject
	// 'switchTab',

	/**
	 * ---------------------------------------------------------------
	 * 开放接口 - 登录
	 * ---------------------------------------------------------------
	 */

	// 调用接口获取登录凭证（code）
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-login.html#wxloginobject
	'login',

	// 检测当前用户登录态是否有效
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-login.html#wxchecksessionobject
	'checkSession',

	/**
	 * ---------------------------------------------------------------
	 * 开放接口 - 用户信息
	 * ---------------------------------------------------------------
	 */

	// 获取用户信息
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/open.html#wxgetuserinfoobject
	'getUserInfo',

	/**
	 * ---------------------------------------------------------------
	 * 开放接口 - 微信支付
	 * ---------------------------------------------------------------
	 */

	// 发起微信支付
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-pay.html#wxrequestpaymentobject
	// 'requestPayment',

	/**
	 * ---------------------------------------------------------------
	 * 开放接口 - 收货地址
	 * ---------------------------------------------------------------
	 */

	// 调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/address.html#wxchooseaddressobject
	// 'chooseAddress',

	/**
	 * ---------------------------------------------------------------
	 * 开放接口 - 卡券
	 * ---------------------------------------------------------------
	 */

	// 批量添加卡券
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/card.html#wxaddcardobject
	// 'addCard',

	// 查看微信卡包中的卡券
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/card.html#wxopencardobject
	// 'openCard',

	/**
	 * ---------------------------------------------------------------
	 * 开放接口 - 设置
	 * ---------------------------------------------------------------
	 */

	// 调起客户端小程序设置界面，返回用户设置的操作结果
	// @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/setting.html#opensettingobject
	// 'openSetting',
];