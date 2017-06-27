/**
 * Powered by MidAutumnMoon.
 */
/** 主模块，加载各个模块用 */
require.config({
	paths: {
		// =========== 工具模块 ====================
		jquery: 'tools/jquery-3.2.1.min',                       // jQuery
		platform: 'tools/ChoosePlatform',                       // 平台选择
		// =======================================

		// =========== 网页渲染模块 =================
		renderer: 'page-renderer/Renderer',                     // 大的渲染器

		chooseCard: 'page-renderer/ChooseCard',                 // 选择卡片
		// ========================================

		// =========== 模板渲染&生成模块 ============
		// =======================================

		// ========= 日志报告反馈模块 ===============
		back: 'backer/Backer',
		// =======================================

		// ============= 模板信息 ==================
		allTemplates: '../Templates/templates'
		// ========================================
	}
});

require(['platform', 'jquery'], function (p, $) {
	const page = $('#page');                                // pc页面
	const mobile = $('#mobile');                            // 手机页面
	// 把这些东西隐藏起来，平台判定后再显示
	// 只是这中间有个时间差（从DOM加载到运行这块代码），会导致鬼畜
	page.hide();
	mobile.hide();
	// 平台判定
	if(p.platform() === 'mobile') {
		// 如果是移动端就不支持了（补一补CSS）
		mobile.show();
	}
	// 如果是PC的话就开始渲染页面吧
	page.show();
});

require(['renderer'], function (renderer) {
	renderer.startRenderer();
});