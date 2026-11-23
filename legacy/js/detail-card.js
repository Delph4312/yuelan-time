// 1. 获取元素
const subscribeCards = document.querySelectorAll('.subscribe-card');
const detailCards = document.querySelectorAll('.detail-card');
const closeBtns = document.querySelectorAll('.close-btn');

// 2. 点击卡片显示对应详情
subscribeCards.forEach(card => {
  card.addEventListener('click', () => {
    // 先隐藏所有详情卡片
    detailCards.forEach(dc => dc.classList.remove('active'));
    // 获取目标详情卡片ID
    const targetId = card.getAttribute('data-target');
    // 显示目标详情卡片
    const targetCard = document.getElementById(targetId);
    if (targetCard) {
      targetCard.classList.add('active');
    }
  });
});

// 3. 点击关闭按钮隐藏详情卡片
closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const detailCard = btn.closest('.detail-card');
    detailCard.classList.remove('active');
  });
});

// 4. 可选：按ESC键关闭详情卡片
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    detailCards.forEach(dc => dc.classList.remove('active'));
  }
});