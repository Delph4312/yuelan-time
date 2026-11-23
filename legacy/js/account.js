// 登录/注册标签切换
$(document).ready(function() {
	$('#login-tab').click(function() {
		$(this).addClass('active');
		$('#register-tab').removeClass('active');
		$('#login-form').show();
		$('#register-form').hide();
	});
				
	$('#register-tab').click(function() {
		$(this).addClass('active');
		$('#login-tab').removeClass('active');
		$('#login-form').hide();
		$('#register-form').show();
	});
});