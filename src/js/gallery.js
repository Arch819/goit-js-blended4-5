import { Notify } from 'notiflix';
import { UnsplashAPI } from './UnsplashAPI';
import { createGalleryCard } from './createGalleryCard';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

const apiGallery = new UnsplashAPI();

const container = document.getElementById('tui-pagination-container');
const form = document.querySelector('.js-search-form');
const options = {
  totalItems: 0,
  itemsPerPage: 12,
  visiblePages: 5,
  page: 1,
};
const pagination = new Pagination(container, options);

const page = pagination.getCurrentPage();

const galleryRef = document.querySelector('.js-gallery');

form.addEventListener('submit', onSubmitForm);

apiGallery.getPopularImage(page).then(({ results, total }) => {
  pagination.reset(total);
  const markup = createGalleryCard(results);
  galleryRef.innerHTML = markup;
});

pagination.on('afterMove', getPopular);

function onSubmitForm(event) {
  event.preventDefault();
  const { query } = event.target.elements;
  const searchQuery = query.value.trim();
  if (!searchQuery) {
    return Notify.failure('Enter something');
  }
  apiGallery.query = searchQuery;

  pagination.off('afterMove', getPopular);
  pagination.off('afterMove', getByQuery);
  apiGallery.getImagesByQuery(page).then(({ results, total }) => {
    pagination.reset(total);
    const markup = createGalleryCard(results);
    galleryRef.innerHTML = markup;
  });

  pagination.on('afterMove', getByQuery);
}

function getPopular(event) {
    const currentPage = event.page;
    apiGallery.getPopularImage(currentPage).then(({ results, total }) => {
      const markup = createGalleryCard(results);
      galleryRef.innerHTML = markup;
    });
};
  
function getByQuery(event) {
  const currentPage = event.page;
  apiGallery.getImagesByQuery(currentPage).then(({ results, total }) => {
    const markup = createGalleryCard(results);
    galleryRef.innerHTML = markup;
  });
}
