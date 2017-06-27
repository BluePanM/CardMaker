/**
 * Powered by MidAutumnMoon.
 */
// 模块化反馈系统
// TODO 上线之后把反馈系统与后端结合起来，这里只输出给console
define(function () {
	return {
		// 报告的等级
		info: 0,                // 通知等级
		warn: 1,                // 警告等级
		error: 2,               // 错误等级


		/**
		 * 日志记录函数
		 * @param level 消息等级
		 * @param message 消息
		 */
		upload: function (level, message) {
			// 处理不同等级的通知
			switch (level) {
				case this.info :
					console.info(message);
					break;
				case this.warn :
					console.warn(message);
					break;
				case this.error :
					console.error(message);
					break;
				default :
					console.log('[没有错误等级]' + message);
			}
		}
	};
});