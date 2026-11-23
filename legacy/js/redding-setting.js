// 阅读设置功能实现

// 定义相关DOM元素和变量
const $settings = $('#readingSettings');        // 整个设置面板
const $settingsToggle = $('#settingsToggle');   // 触发显示/隐藏设置面板的按钮
const $settingsClose = $('#settingsClose');     // 关闭设置面板的按钮
let autoCloseTimer = null;                      // 用于自动收起功能的定时器

// 显示/隐藏设置栏功能
$settingsToggle.click(function() {
    $settings.toggleClass('show');  // 切换显示/隐藏状态
    
    // 显示时重置自动收起定时器
    if ($settings.hasClass('show')) {
        resetAutoCloseTimer();
    }else {
        clearTimeout(autoCloseTimer); // 隐藏时清除定时器
    }
});

// 关闭设置栏功能
$settingsClose.click(function() {
    $settings.removeClass('show');      // 移除显示类
    clearTimeout(autoCloseTimer);       // 清除自动收起定时器
});

// 自动收起功能实现
function resetAutoCloseTimer() {
    clearTimeout(autoCloseTimer);  // 清除现有定时器
    
    // 设置新的定时器，5秒后自动收起
    autoCloseTimer = setTimeout(function() {
        $settings.removeClass('show');
    }, 5000);
}

// 监听设置栏内的鼠标移动，重置自动收起定时器
$settings.on('mousemove', function() {
    resetAutoCloseTimer();  // 用户操作时重置定时器
});

// 字体设置功能
$('.font-btn').click(function() {
    // 移除所有字体按钮的激活状态，为当前点击的按钮添加激活状态
    $('.font-btn').removeClass('active');
    $(this).addClass('active');
    
    const font = $(this).data('font');          // 获取字体类型
    const $content = $('.article-content');     // 文章内容区域
    
    // 根据选择的字体类型应用相应样式
    switch(font) {
        case 'default':
            $content.css('font-family', 'inherit');  // 默认字体
            break;
        case 'song':
            $content.css('font-family', '"SimSun", "宋体", serif');  // 宋体
            break;
        case 'hei':
            $content.css('font-family', '"SimHei", "黑体", sans-serif');  // 黑体
            break;
        case 'kai':
            $content.css('font-family', '"KaiTi", "楷体", serif');  // 楷体
            break;
    }
    
    resetAutoCloseTimer();  // 重置自动收起定时器
});

// 字号设置功能
$('#fontSizeRange').on('input', function() {
    const size = $(this).val();  // 获取滑块的值（单位：rem）
    
    // 应用字号设置到不同元素
    $('.article-content').css('font-size', `${size}rem`);                // 正文内容
    $('.article-header p').css('font-size', `${parseFloat(size) + 0.1}rem`);  // 标题下方文字
    $('.article-title').css('font-size', `${parseFloat(size) * 2}rem`);  // 文章标题（两倍字号）
    
    resetAutoCloseTimer();  // 重置自动收起定时器
});

// 行间距设置功能
$('#lineHeightRange').on('input', function() {
    const height = $(this).val();  // 获取行高值
    
    // 应用行间距设置
    $('.article-content').css('line-height', height);    // 正文内容
    $('.article-header p').css('line-height', height);   // 标题下方文字
    
    resetAutoCloseTimer();  // 重置自动收起定时器
});

// 主题色设置功能
$('.theme-btn').click(function() {
    $('.theme-btn').removeClass('active');
    $(this).addClass('active');
    const theme = $(this).data('theme');
    const $navLink = $('.nav-link');
    const $headerLine = $('.header-line-sec-foot');
    const $articleTitle = $('.article-title');
    const $nav = $('.nav'); // 导航栏元素
    const $settingsToggle = $('#settingsToggle');
    
    switch(theme) {
        case 'default':
            $navLink.css('background-color', '#E0B284');
            $navLink.hover(
                function() { $(this).css('background-color', '#D49A6A'); },
                function() { $(this).css('background-color', '#E0B284'); }
            );
            $headerLine.css('background-color', '#E0B284');
            $articleTitle.css('color', '#8B5A2B');
            $settingsToggle.css('background-color', '#E0B284');
            $settingsToggle.hover(
                function() { $(this).css('background-color', '#D49A6A'); },
                function() { $(this).css('background-color', '#E0B284'); }
            );
            // 主题色默认时，导航栏背景色跟随当前背景模式（保持原有逻辑）
            const currentBg = $('.bg-btn.active').data('bg');
            if (currentBg === 'white' || currentBg === 'cream') {
                $nav.css('background-color', '#EDE7DC');
            } else if (currentBg === 'night') {
                $nav.css('background-color', '#2E2E2E');
            } else if (currentBg === 'sepia') {
                $nav.css('background-color', '#E8E0C8');
            }
            break;
        case 'blue':
            $navLink.css('background-color', '#6A8CAF');
            $navLink.hover(
                function() { $(this).css('background-color', '#4A7093'); },
                function() { $(this).css('background-color', '#6A8CAF'); }
            );
            $headerLine.css('background-color', '#6A8CAF');
            $articleTitle.css('color', '#3A5A7D');
            $settingsToggle.css('background-color', '#6A8CAF');
            $settingsToggle.hover(
                function() { $(this).css('background-color', '#4A7093'); },
                function() { $(this).css('background-color', '#6A8CAF'); }
            );
            // 蓝色主题适配导航栏背景
            const currentBgBlue = $('.bg-btn.active').data('bg');
            if (currentBgBlue === 'white' || currentBgBlue === 'cream') {
                $nav.css('background-color', '#E6EDF5');
            } else if (currentBgBlue === 'night') {
                $nav.css('background-color', '#253545');
            } else if (currentBgBlue === 'sepia') {
                $nav.css('background-color', '#E0E8F0');
            }
            break;
        case 'green':
            $navLink.css('background-color', '#7BA05B');
            $navLink.hover(
                function() { $(this).css('background-color', '#5B803B'); },
                function() { $(this).css('background-color', '#7BA05B'); }
            );
            $headerLine.css('background-color', '#7BA05B');
            $articleTitle.css('color', '#4B702B');
            $settingsToggle.css('background-color', '#7BA05B');
            $settingsToggle.hover(
                function() { $(this).css('background-color', '#5B803B'); },
                function() { $(this).css('background-color', '#7BA05B'); }
            );
            // 绿色主题适配导航栏背景
            const currentBgGreen = $('.bg-btn.active').data('bg');
            if (currentBgGreen === 'white' || currentBgGreen === 'cream') {
                $nav.css('background-color', '#E8F0E0');
            } else if (currentBgGreen === 'night') {
                $nav.css('background-color', '#2A3520');
            } else if (currentBgGreen === 'sepia') {
                $nav.css('background-color', '#E0F0D8');
            }
            break;
        case 'purple':
            $navLink.css('background-color', '#9D75CB');
            $navLink.hover(
                function() { $(this).css('background-color', '#7D55AB'); },
                function() { $(this).css('background-color', '#9D75CB'); }
            );
            $headerLine.css('background-color', '#9D75CB');
            $articleTitle.css('color', '#6D459B');
            $settingsToggle.css('background-color', '#9D75CB');
            $settingsToggle.hover(
                function() { $(this).css('background-color', '#7D55AB'); },
                function() { $(this).css('background-color', '#9D75CB'); }
            );
            // 紫色主题适配导航栏背景
            const currentBgPurple = $('.bg-btn.active').data('bg');
            if (currentBgPurple === 'white' || currentBgPurple === 'cream') {
                $nav.css('background-color', '#F0E8F5');
            } else if (currentBgPurple === 'night') {
                $nav.css('background-color', '#352545');
            } else if (currentBgPurple === 'sepia') {
                $nav.css('background-color', '#E8E0F0');
            }
            break;
    }
    resetAutoCloseTimer();
});

// 背景设置功能
$('.bg-btn').click(function() {
    $('.bg-btn').removeClass('active');
    $(this).addClass('active');
    const bg = $(this).data('bg');
    const $body = $('body');
    const $nav = $('.nav'); // 导航栏元素
    const $content = $('.article-content');
    const $header = $('.article-header');
    // 获取当前激活的主题色，保证背景和主题色搭配协调
    const currentTheme = $('.theme-btn.active').data('theme');
    
    // 背景色逻辑 + 导航栏背景色适配
    switch(bg) {
        case 'white':
            $body.css('background-color', '#fff');
            // 根据当前主题色适配导航栏背景
            if (currentTheme === 'default') $nav.css('background-color', '#EDE7DC');
            else if (currentTheme === 'blue') $nav.css('background-color', '#E6EDF5');
            else if (currentTheme === 'green') $nav.css('background-color', '#E8F0E0');
            else if (currentTheme === 'purple') $nav.css('background-color', '#F0E8F5');
            
            $content.css('color', '#444');
            $header.find('p').css('color', '#666');
            $header.find('.article-date').css('color', '#999');
            break;
        case 'cream':
            $body.css('background-color', '#F5F5DC');
            if (currentTheme === 'default') $nav.css('background-color', '#E8E4D8');
            else if (currentTheme === 'blue') $nav.css('background-color', '#E6EDF0');
            else if (currentTheme === 'green') $nav.css('background-color', '#E8F0D8');
            else if (currentTheme === 'purple') $nav.css('background-color', '#F0E8E0');
            
            $content.css('color', '#444');
            $header.find('p').css('color', '#666');
            $header.find('.article-date').css('color', '#999');
            break;
        case 'night':
            $body.css('background-color', '#1E1E1E');
            if (currentTheme === 'default') $nav.css('background-color', '#2E2E2E');
            else if (currentTheme === 'blue') $nav.css('background-color', '#253545');
            else if (currentTheme === 'green') $nav.css('background-color', '#2A3520');
            else if (currentTheme === 'purple') $nav.css('background-color', '#352545');
            
            $content.css('color', '#E0E0E0');
            $header.find('p').css('color', '#C0C0C0');
            $header.find('.article-date').css('color', '#A0A0A0');
            break;
        case 'sepia':
            $body.css('background-color', '#F4ECD8');
            if (currentTheme === 'default') $nav.css('background-color', '#E8E0C8');
            else if (currentTheme === 'blue') $nav.css('background-color', '#E0E8F0');
            else if (currentTheme === 'green') $nav.css('background-color', '#E0F0D8');
            else if (currentTheme === 'purple') $nav.css('background-color', '#E8E0F0');
            
            $content.css('color', '#5A4B38');
            $header.find('p').css('color', '#6A5B48');
            $header.find('.article-date').css('color', '#7A6B58');
            break;
    }
    resetAutoCloseTimer();
});

// 点击页面其他区域关闭设置栏
$(document).click(function(e) {
    // 检查点击目标是否是设置面板或触发按钮
    if (!$(e.target).closest('#readingSettings, #settingsToggle').length) {
        $settings.removeClass('show');      // 收起设置面板
        clearTimeout(autoCloseTimer);       // 清除自动收起定时器
    }
});