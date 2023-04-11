import throttle from 'lodash.throttle';
import NewClass from '../views/country';
import Notiflix from 'notiflix';
import { createCountry } from './renderHtml';

const refs = {
  input: document.querySelector('#search-box'),
  country: document.querySelector('.country-list'),
  info: document.querySelector('.country-info'),
};

const newClass = new NewClass();
refs.input.addEventListener('input', throttle(inputValue, 1000));

function inputValue(e) {
  const value = e.target.value.trim();
  newClass.val = value;

  if (!value) {
    refs.country.innerHTML = '';
    refs.info.innerHTML = '';
    Notiflix.Notify.info('Введіть валідне значення');
    return;
  }

  newClass.fetchCountries().then(response => {
    if (response.length < 10 && response.length > 2) {
      refs.country.innerHTML = '';
      refs.info.innerHTML = '';
      Notiflix.Notify.info('Уточніть, будь ласка.');
      refs.country.innerHTML = createCountry(response);
    }

    if (response.length >= 10) {
      refs.country.innerHTML = '';
      refs.info.innerHTML = '';
      Notiflix.Notify.info('Занадто багато результатів');
      refs.country.innerHTML = createCountry(response);
    }
  });
}