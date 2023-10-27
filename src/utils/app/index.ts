import checkNumber from '../validate/check-number';
import { handlerName, handlerEmail, handlerPhone, handlerText } from '../validate';
import handlerPost from '../button-post';
import hiddenModal from '../modal';

function App() {
  const inputName = document.querySelector<HTMLInputElement>('.form__name input');
  handlerName(inputName);

  const inputEmail = document.querySelector<HTMLInputElement>('.form__email input');
  handlerEmail(inputEmail);

  const phoneInput = document.querySelector<HTMLInputElement>('.phone');
  checkNumber(phoneInput);
  handlerPhone(phoneInput);

  const inputText = document.querySelector<HTMLTextAreaElement>('.form__text textarea');
  handlerText(inputText);

  const openButton = document.querySelector<HTMLButtonElement>('.seo__body-btn');
  hiddenModal(openButton);

  const closeButton = document.querySelector<HTMLButtonElement>('.modal__close');
  hiddenModal(closeButton);

  const postButton = document.querySelector<HTMLButtonElement>('.form__button');
  handlerPost(postButton);
}

export default App;
