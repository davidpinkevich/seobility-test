import { TValid } from '../../types';

export const dataValid: TValid = {
  name: { valid: false, value: '' },
  email: { valid: false, value: '' },
  phone: { valid: false, value: '' },
  text: { valid: false, value: '' },
};

function handlerName(item: HTMLInputElement | null) {
  item?.addEventListener('input', (event: Event) => {
    const itemTarget = event.target as HTMLInputElement;

    const formName = document.querySelector<HTMLLabelElement>('.form__name');
    const errorPrompt = document.querySelector<HTMLParagraphElement>('.form__name-prompt');

    const regexp = /^[a-zA-Zа-яА-Я]{3,}/;
    if (regexp.test(itemTarget.value) && formName) {
      formName.classList.remove('form__name-error');
      dataValid.name.valid = true;
      dataValid.name.value = itemTarget.value;
      if (errorPrompt) errorPrompt.innerHTML = '';
    } else if (formName) {
      dataValid.name.valid = false;
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
      dataValid.email.valid = true;
      dataValid.email.value = itemTarget.value;
      formEmail.classList.remove('form__name-error');
    } else {
      dataValid.email.valid = false;
      if (errorPrompt)
        errorPrompt.innerHTML =
          'Имя почты длиной минимум в 1 символ, использовано "@" и 1 символ после (не цифра)';
      if (formEmail) formEmail.classList.add('form__name-error');
      if (itemTarget.value.length === 0 && errorPrompt)
        errorPrompt.innerHTML = 'Это поле обязательно для ввода';
    }
  });
}

function handlerPhone(item: HTMLInputElement | null) {
  item?.addEventListener('input', (event: Event) => {
    const itemTarget = event.target as HTMLInputElement;

    const formPhone = document.querySelector<HTMLLabelElement>('.form__phone');
    const errorPrompt = document.querySelector<HTMLParagraphElement>('.form__phone-prompt');

    const regexp = /[0-9]/g;

    if (itemTarget.value.match(regexp)?.length === 12 && formPhone) {
      if (errorPrompt) errorPrompt.innerHTML = '';
      dataValid.phone.valid = true;
      dataValid.phone.value = itemTarget.value;
      formPhone.classList.remove('form__name-error');
    } else {
      dataValid.phone.valid = false;
      if (errorPrompt) errorPrompt.innerHTML = 'Номер должен состять из 12 цифр';
      if (formPhone) formPhone.classList.add('form__name-error');
      if (itemTarget.value.length === 0 && errorPrompt)
        errorPrompt.innerHTML = 'Это поле обязательно для ввода';
    }
  });
}

function handlerText(item: HTMLTextAreaElement | null) {
  item?.addEventListener('input', (event: Event) => {
    const itemTarget = event.target as HTMLInputElement;

    const formPhone = document.querySelector<HTMLLabelElement>('.form__text');
    const errorPrompt = document.querySelector<HTMLParagraphElement>('.form__text-prompt');

    const regexp = /.+/;

    if (regexp.test(itemTarget.value) && formPhone) {
      if (errorPrompt) errorPrompt.innerHTML = '';
      dataValid.text.valid = true;
      dataValid.text.value = itemTarget.value;
      formPhone.classList.remove('form__name-error');
    } else {
      dataValid.phone.valid = false;
      if (formPhone) formPhone.classList.add('form__name-error');
      if (itemTarget.value.length === 0 && errorPrompt)
        errorPrompt.innerHTML = 'Сообщение должно состять хотя бы из 1 символа';
    }
  });
}

export { handlerName, handlerEmail, handlerPhone, handlerText };
