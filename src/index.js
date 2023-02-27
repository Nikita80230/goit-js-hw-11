import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


import { getData } from "./api/api";
import { addMarkup, clearMarkup } from "./utils";
import { createGalleryItem } from "./markup/markup";
import { formEl, galleryEl, loadMoreBtn } from "./refs";

var lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    overlayOpacity: 0.8,
    docClose: true
  });

formEl.addEventListener("submit", onSubmit);
loadMoreBtn.addEventListener("click", onLoadMoreBtn);

let inputValue = "";
let currentPage = 1;
let totalQuantityOfPage;

function onSubmit(event) {
    event.preventDefault();
    
    clearMarkup("", galleryEl);
    
    inputValue = event.target.elements.searchQuery.value.trim();

    if(!inputValue){
        Notify.failure("Sorry, there are no images matching your search query. Please try again.");
        return;
    }
    
    getData(inputValue).then(({data}) => {
       
        const {hits, totalHits} = data
        totalQuantityOfPage = Math.ceil(totalHits / 40);
        

        if(totalHits > 0) {
            loadMoreBtn.classList.remove('is-hidden');
        }
        
        if(totalHits <= 40) {
            loadMoreBtn.classList.add('is-hidden')
            Notify.failure("Sorry, there are no images matching your search query. Please try again.");
        }
        
        
        const cardsMarkup = createGalleryItem(hits);
        addMarkup(cardsMarkup, galleryEl)
        lightbox.refresh();
        
    })
    .catch(error => {
        console.log(error.message)
    })
}

function onLoadMoreBtn(event) {
    event.preventDefault();
    
    currentPage += 1;
    
    getData(inputValue, currentPage).then(({data}) => {
        
        const {hits} = data;
        
        const cardsMarkup = createGalleryItem(hits);

        addMarkup(cardsMarkup, galleryEl)

        lightbox.refresh();
        if(totalQuantityOfPage === currentPage) {
            Notify.warning("We're sorry, but you've reached the end of search results.");
            loadMoreBtn.classList.add('is-hidden')
        }
        
    })
    .catch(error => {
        console.log(error.message)
        Notify.failure("Sorry, there are no images matching your search query. Please try again.");
    })
}
