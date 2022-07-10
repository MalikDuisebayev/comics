import { ROOT_INDEX } from "../../constants/root";
import "./Error.css";

class Error {
  render() {
    const htmlWrapper = `
        <div class="error__container"> 
                <p class="error__title">Произошла ошибка</p>
                <p class="error__title">Попробуйте позже</p>
        </div>
    `;
    ROOT_INDEX.innerHTML = htmlWrapper;
  }
}

export default new Error();
