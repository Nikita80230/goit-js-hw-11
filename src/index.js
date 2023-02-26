import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { getData } from "./api/api";
import { addMarkup } from "./utils";
import { createGalleryItem } from "./markup/markup";
import { formEl, galleryEl } from "./refs";



formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const inputValue = event.target[0].value
    console.log(inputValue)

    getData(`?key=33932006-79f38c9b6065fca1824d3cdc5&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`).then(response => {
        const {hits} = response
        console.log(hits)
        const cardsMarkup = createGalleryItem(hits);
        addMarkup(cardsMarkup, galleryEl)
    })
    .catch(error => {
        console.log(error.message)
    })
}

// galleryEl.addEventListener("click", () => SimpleLightbox.close()) ??????????????