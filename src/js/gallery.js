import { UnsplashAPI } from './UnsplashAPI';
import { createGalleryCard } from './createGalleryCard';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

const apiGallery = new UnsplashAPI();

const container = document.getElementById('tui-pagination-container');
const options = {
  totalItems: 0,
  itemsPerPage: 12,
  visiblePages: 5,
  page: 1,
};
const pagination = new Pagination(container, options);

const page = pagination.getCurrentPage();

const galleryRef = document.querySelector('.js-gallery');

apiGallery.getPopularImage(page).then(({ results, total }) => {
  pagination.reset(total);
  const markup = createGalleryCard(results);
  galleryRef.innerHTML = markup;
});
