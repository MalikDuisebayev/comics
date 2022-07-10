import {
  API_KEY,
  API_URL,
  URL_COMICS,
  IMG_STANDARD_XLARGE,
  IMG_NOT_AVAILABLE,
  URL_CHARACTERS,
} from "../../constants/api.js";
import { getDataApi } from "../../utils/GetDataApi.js";
import { ROOT_INDEX } from "../../constants/root";
import "./Comics.css";

import Error from "../Error";

class Comics {
  async renderComics() {
    const data = await getDataApi.getData(API_URL + URL_COMICS, API_KEY);

    let htmlCatalog = "";

    data.forEach(({ id, title, thumbnail: { extension, path } }) => {
      if (path.lastIndexOf(IMG_NOT_AVAILABLE) === -1) {
        const uri = `${API_URL}${URL_COMICS}/${id}/${URL_CHARACTERS}`;
        const imgSrc = `${path}/${IMG_STANDARD_XLARGE}.${extension}`;
        htmlCatalog += `
          <li class="comics__border comics__item" data-uri="${uri}"> 
              <span class ="comics__name"> ${title} </span>
              <img class="comics__img" src="${imgSrc}">
          </li>
        `;
      }
    });

    const html = `
        <ul class="comics__container"> ${htmlCatalog} </ul>
    `;

    return { html, data };
  }

  async render() {
    const { html, data } = await this.renderComics();
    if (!data) {
      return Error.render();
    }
    return (ROOT_INDEX.innerHTML = html);
  }

  eventListener() {
    document.querySelectorAll(".comics__item").forEach((el) => {
      const uri = el.getAttribute("data-uri");
      el.addEventListener("click", (event) => {
        console.log(uri);
      });
    });
  }
}

export default new Comics();
