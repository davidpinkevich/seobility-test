function hiddenModal(btn: HTMLButtonElement | null) {
  const modal = document.querySelector<HTMLDivElement>('.modal');
  btn?.addEventListener('click', () => {
    if (modal) modal.classList.toggle('hidden');
    if (btn.classList.contains('modal__close')) {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
  });
}

export default hiddenModal;
