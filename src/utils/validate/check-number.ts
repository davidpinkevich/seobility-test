import IMask from 'imask';

function maskNumber(item: HTMLInputElement | null) {
  if (item) {
    const maskOptions = {
      mask: '+{375} (00) 000-00-00',
    };
    IMask(item, maskOptions);
  }
}

export default maskNumber;
