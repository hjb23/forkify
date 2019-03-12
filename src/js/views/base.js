export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchResultsList: document.querySelector('.results__list'),
    searchResults: document.querySelector('.results'),
    searchRePages: document.querySelector('.results__pages'),
};

export const elementStrings = {
    loader: 'loader',
}

export const renderLoader = parent => {
    const loader = `
        <div class ="${elementStrings.loader}">
            <svg>
                <use href ="img/icons.svg#icon-cw"> </use>
            </svg>
        </div>
    `;

    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {

    const loader = document.querySelector(`.${elementStrings.loader}`);

    if(loader) loader.parentElement.removeChild(loader);
    
}