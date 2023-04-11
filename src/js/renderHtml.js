import { galleryItems } from './imgs';

function createLi(email, password) {
  const markup = `<li> Email: ${email}, Password: ${password}</li>`;
  return markup;
}

function createLiFromStorage(VALUES_KEY) {
  if (localStorage.getItem(VALUES_KEY)) {
    const values = localStorage.getItem(VALUES_KEY);
    const parseValue = JSON.parse(values);

    const item = parseValue
      .map(({ email, password }) => {
        const markupMap = `<li> Email: ${email}, Password: ${password}</li>`;

        return markupMap;
      })
      .join(' ');
    return item;
  }
  console.log(item);
}

function createLiImg(filterValue) {
  if (filterValue) {
    return galleryItems
      .filter(({ filter }) => filter === filterValue)
      .map(({ preview, original, description }) => {
        return `<li class="galleryItem">
              <a class="gallery-link" href="${original}">
                <img class="gallery-img" src="${preview}" alt="${description}" data-sourse="${original}"  >
              </a>
            </li>`;
      })
      .join(' ');
  }

  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="galleryItem">
              <a class="gallery-link" href="${original}">
                <img class="gallery-img" src="${preview}" alt="${description}" data-sourse="${original}"  >
              </a>
            </li>`;
    })
    .join(' ');
}

function createFilters() {
  const filtersObj = galleryItems.map(({ filter }) => filter);
  const unique = [...new Set(filtersObj)];
  const filter = unique
    .map(item => {
      return `<li class="filter-item">
             ${item}
            </li>`;
    })
    .join(' ');
  return filter;
}

function createCountry(country) {
  console.log(country);

  const markUp = country
    .map(
      ({ name, capital }) =>
        `<li class="">
   <p>${name.official}</p>
   <p>${capital}</p>
   </li>`
    )
    .join(' ');

  return markUp;
}

export {
  createLi,
  createLiFromStorage,
  createLiImg,
  createFilters,
  createCountry,
};