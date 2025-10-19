import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    addHandlerClick(handler){
        this._parentElement.addEventListener('click',function (e){
            // 这里使用 close 是因为还有可能点击到按钮内部的其他元素，比如 span
            const btn = e.target.closest(".btn--inline");
            if(!btn) return;

            const gotoPage = +btn.dataset.goto;

            handler(gotoPage);
        })
    }

    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultPerPage);
        console.log(numPages)
        // Page 1, and there are other pages
        if (curPage === 1 && numPages > 1){
           return `
            <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
           `;
        }

        // Page 1, and there are NO other pages
        if (numPages === 1){
            return '';
        }

        // Last page
        if(curPage === numPages && numPages > 1){
            return `
            <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>
            `;
        }

        // other page
        if (curPage < numPages){
            return `
            <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
              <span>Page ${curPage - 1}</span>
            </button>
            <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
              <span>Page ${curPage + 1}</span>
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
              </svg>
             </button>
            `;
        }
    }
}

export default new PaginationView();