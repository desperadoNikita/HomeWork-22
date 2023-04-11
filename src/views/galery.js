

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createLiImg, createFilters } from '../js/renderHtml';

const refs = {
  filters: document.querySelector('.filters'),
  list: document.querySelector('.list'),
};

refs.filters.insertAdjacentHTML('beforeend', createFilters());
refs.list.insertAdjacentHTML('beforeend', createLiImg());

refs.filters.addEventListener('click', filter);

function filter(e) {
  e.preventDefault();

  if (e.target.nodeName === 'LI') {
    const clickedFilter = e.target;
    const filterValue = clickedFilter.textContent.trim();

    const filters = refs.filters.querySelectorAll('.filter-item');
    filters.forEach((filter) => filter.classList.remove('active'));

    clickedFilter.classList.add('active');

    refs.list.innerHTML = '';
    refs.list.insertAdjacentHTML('beforeend', createLiImg(filterValue));
  }
}


let arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log('вхід :>> ', arr4);
console.log('вихід', arr4.flat(2));


let lightbox = new SimpleLightbox('.list a', {
  captionsData: 'alt',
  captionDelay: '250ms',
});