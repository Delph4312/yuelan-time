// 菜单交互逻辑
document.addEventListener('DOMContentLoaded', function() {
	const menuBtn = document.querySelector('.menu-btn');
	const mainNav = document.getElementById('main-nav');
	// const menuIconLines = document.querySelectorAll('.menu-line');
	
	if (menuBtn && mainNav) {
	// 切换菜单显示/隐藏
	menuBtn.addEventListener('click', function(event) {
		const isExpanded = this.getAttribute('aria-expanded') === 'true';
		// 更新按钮状态
		this.setAttribute('aria-expanded', !isExpanded);
		// 切换菜单显示
		mainNav.classList.toggle('show');
		// 可选：阻止事件冒泡
		event.stopPropagation();
		});
		// 点击页面其他地方关闭菜单
		document.addEventListener('click', function(event) {
			if (!mainNav.contains(event.target) && !menuBtn.contains(event.target)) {
				menuBtn.setAttribute('aria-expanded', 'false');
				mainNav.classList.remove('show');
			}
		});
		
		// ESC键关闭菜单
		document.addEventListener('keydown', function(event) {
			if (event.key === 'Escape') {
				menuBtn.setAttribute('aria-expanded', 'false');
				mainNav.classList.remove('show');
			}
		});
	}
});