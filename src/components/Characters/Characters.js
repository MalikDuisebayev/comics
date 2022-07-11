import { API_KEY } from "../../constants/api";
import { getDataApi } from "../../utils/GetDataApi";
import { IMG_STANDARD_XLARGE } from "../../constants/api";
import { ROOT_INDEX, ROOT_MODAL } from "../../constants/root";
import "./Characters.css";

class Characters {
  renderContent(data) {
    let htmlContent = "";
    data.forEach(({ name, thumbnail: { path, extension } }) => {
      const imgSrc = `${path}/${IMG_STANDARD_XLARGE}.${extension}`;
      htmlContent += `
        <li class="characters__item"> 
            <img class="characters__img" src="${imgSrc}" alt="${name}">
            <span class="characters__name" > ${name} </span>
        </li>
      `;
    });
    const htmlWrapper = `
        <div class="wrapper">
            <button class="characters__close"
            onclick="modal.innerHTML = ''"
            > ❌</button>
            <ul class = "characters__container">
                ${htmlContent}
            </ul>
        </div>
    `;

    ROOT_MODAL.innerHTML = htmlWrapper;
  }

  renderNotification() {
    let html = `
      <div class="wrapper">
        <div class="characters__not">
          <p> Персонажи не найдены </p>
        </div>
      </div>
    `;
    setTimeout(() => {
      return (ROOT_MODAL.innerHTML = "");
    }, 2000);
    ROOT_MODAL.innerHTML = html;
  }

  async render(uri) {
    const data = await getDataApi.getData(uri, API_KEY);
    data.length ? this.renderContent(data) : this.renderNotification();
  }
}
export default new Characters();
