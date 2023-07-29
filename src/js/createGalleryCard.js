export function createGalleryCard(images) {
  return images
    .map(
      ({ urls, alt_description }) =>
        `<li class='gallery__item'><img src='${urls.small}' alt='${alt_description}'></li>`
    )
    .join('');
}
