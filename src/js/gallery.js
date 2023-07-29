import { UnsplashAPI } from "./UnsplashAPI";

const apiGallery = new UnsplashAPI()

apiGallery.getPopularImage(1).then(data=> console.log(data));
