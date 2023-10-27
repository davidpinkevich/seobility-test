import { handlerName, handlerEmail } from '../validate';

function App() {
  const inputName = document.querySelector<HTMLInputElement>('.form__name input');
  handlerName(inputName);

  const inputEmail = document.querySelector<HTMLInputElement>('.form__email input');
  handlerEmail(inputEmail);
}

export default App;
