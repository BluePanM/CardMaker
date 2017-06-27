/**
 * Powered by MidAutumnMoon.
 */

/**
 * 平台判定，PC or Mobile
 */
define(function () {
	return {
		platform: function () {
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				return 'mobile';
			}
			return 'PC';
		}
	};
});