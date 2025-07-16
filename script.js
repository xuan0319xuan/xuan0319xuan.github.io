window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hero-flower').forEach(flower => {
    flower.classList.add('spin-on-load');
    flower.addEventListener('animationend', () => {
      flower.classList.remove('spin-on-load');
    }, { once: true });
  });

  // 點擊整個 work-banner-card 跳轉
  document.querySelectorAll('.work-banner-card').forEach((card, idx) => {
    let link = card.querySelector('.view-more-btn');
    if (link) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        if (e.target.closest('.view-more-btn')) return;
        // 第一個專案需要密碼
        if (idx === 0) {
          e.preventDefault();
          showPasswordModal(link.getAttribute('href'));
          return;
        }
        window.location.href = link.getAttribute('href');
      });
      // 按鈕本身也要攔截
      link.addEventListener('click', (e) => {
        if (idx === 0) {
          e.preventDefault();
          showPasswordModal(link.getAttribute('href'));
        }
      });
    }
  });

  // 密碼彈窗邏輯
  function showPasswordModal(targetHref) {
    const modal = document.getElementById('password-modal');
    const input = document.getElementById('modal-password-input');
    const errorMsg = document.getElementById('modal-error-msg');
    const cancelBtn = document.getElementById('modal-cancel-btn');
    const confirmBtn = document.getElementById('modal-confirm-btn');
    modal.style.display = 'flex';
    input.value = '';
    errorMsg.style.display = 'none';
    input.focus();

    function closeModal() {
      modal.style.display = 'none';
      input.value = '';
      errorMsg.style.display = 'none';
      cancelBtn.removeEventListener('click', onCancel);
      confirmBtn.removeEventListener('click', onConfirm);
      input.removeEventListener('keydown', onKeyDown);
    }
    function onCancel() {
      closeModal();
    }
    function onConfirm() {
      if (input.value === '0000') {
        closeModal();
        window.location.href = targetHref;
      } else {
        errorMsg.style.display = 'block';
        input.value = '';
        input.focus();
      }
    }
    function onKeyDown(e) {
      if (e.key === 'Enter') onConfirm();
      if (e.key === 'Escape') closeModal();
    }
    cancelBtn.addEventListener('click', onCancel);
    confirmBtn.addEventListener('click', onConfirm);
    input.addEventListener('keydown', onKeyDown);
  }
});
