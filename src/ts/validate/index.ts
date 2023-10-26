function handlerName(item: HTMLInputElement | null) {
  item?.addEventListener('input', (event: Event) => {
    const itemTarget = event.target as HTMLInputElement;

    const formName = document.querySelector<HTMLLabelElement>('.form__name');
    const errorPrompt = document.querySelector<HTMLParagraphElement>('.form__name-prompt');

    const regexp = /^[a-zA-Zа-яА-Я]{3,}/;
    if (regexp.test(itemTarget.value) && formName) {
      formName.classList.remove('form__name-error');
      if (errorPrompt) errorPrompt.innerHTML = '';
    } else if (formName) {
      formName.classList.add('form__name-error');
      const textError =
        itemTarget.value.length >= 3 ? 'Используйте только буквы' : 'Длина меньше 3 символов';
      if (errorPrompt) errorPrompt.innerHTML = textError;
      if (itemTarget.value.length === 0 && errorPrompt)
        errorPrompt.innerHTML = 'Это поле обязательно для ввода';
    }
  });
}

function handlerEmail(item: HTMLInputElement | null) {
  item?.addEventListener('input', (event: Event) => {
    const itemTarget = event.target as HTMLInputElement;

    const formEmail = document.querySelector<HTMLLabelElement>('.form__email');
    const errorPrompt = document.querySelector<HTMLParagraphElement>('.form__email-prompt');

    const regexp = /^[a-zA-Z0-9а-яА-Я]{1,}[\w]*@[a-z]{1,}$/;
    if (regexp.test(itemTarget.value) && formEmail) {
      if (errorPrompt) errorPrompt.innerHTML = '';
      formEmail.classList.remove('form__name-error');
    } else {
      if (errorPrompt)
        errorPrompt.innerHTML =
          'Имя почты длиной минимум в 1 символ, использовано "@" и 1 символ после';
      if (formEmail) formEmail.classList.add('form__name-error');
      if (itemTarget.value.length === 0 && errorPrompt)
        errorPrompt.innerHTML = 'Это поле обязательно для ввода';
    }
  });
}

export { handlerName, handlerEmail };
