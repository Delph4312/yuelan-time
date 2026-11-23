$(document).ready(function() {
	// 初始化轮播，配置自动播放参数
	$('#carousel').carousel({
		interval: 3000,// 3秒自动切换
		pause: false,// 关闭鼠标悬停暂停
		wrap: true,// 循环播放（最后一张切回第一张）
	});
	
	// 兜底绑定左右切换按钮事件，确保按钮生效
	$('.carousel-control-prev').click(function(e) {
		e.preventDefault(); // 阻止a标签默认的锚点跳转行为
		$('#carousel').carousel('prev');
	});
	$('.carousel-control-next').click(function(e) {
		e.preventDefault();
		$('#carousel').carousel('next');
	});
});