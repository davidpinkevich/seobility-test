import URL from '../../constants';
import postData from '../../services';
import { dataValid } from '../validate';

function handlerPost(item: HTMLButtonElement | null) {
  const inputName = document.querySelector<HTMLInputElement>('.form__name input');
  const inputEmail = document.querySelector<HTMLInputElement>('.form__email input');
  const phoneInput = document.querySelector<HTMLInputElement>('.phone');
  const inputText = document.querySelector<HTMLTextAreaElement>('.form__text textarea');

  const main = document.querySelector('main');

  const form = document.forms[0];
  form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
  });

  item?.addEventListener('click', async () => {
    if (Object.values(dataValid).every((x) => x.valid)) {
      // eslint-disable-next-line no-param-reassign
      item.disabled = true;
      const data = await postData(URL, {
        name: dataValid.name.value,
        email: dataValid.email.value,
        phone: dataValid.phone.value,
        text: dataValid.text.value,
      });
      console.log(data);
      if (data.status === 'success') {
        const result = document.createElement('div');
        result.classList.add('seo__body-result-true');
        result.innerHTML = data.message;
        main?.append(result);
        setTimeout(() => {
          result.remove();
          // eslint-disable-next-line no-param-reassign
          item.disabled = false;
        }, 2500);
        if (inputName) {
          inputName.value = '';
          dataValid.name.value = '';
          dataValid.name.valid = false;
        }
        if (inputEmail) {
          inputEmail.value = '';
          dataValid.email.value = '';
          dataValid.email.valid = false;
        }
        if (phoneInput) {
          phoneInput.value = '';
          dataValid.phone.value = '';
          dataValid.phone.valid = false;
        }
        if (inputText) {
          inputText.value = '';
          dataValid.text.value = '';
          dataValid.text.valid = false;
        }
      } else {
        const result = document.createElement('div');
        result.classList.add('seo__body-result-false');
        result.innerHTML = data.message;
        main?.append(result);
        setTimeout(() => {
          result.remove();
          // eslint-disable-next-line no-param-reassign
          item.disabled = false;
        }, 2500);
      }
    }
  });
}

export default handlerPost;
