export function createGalleryItem(items = []) {
    return items.map(({
        webformatURL,
        largeImageURL,
        tag,
        likes,
        views,
        comments,
        downloads}) => {
        return `<div class="photo-card">
        <a href=${largeImageURL}>
            <img src="${webformatURL}" alt="${tag}" loading="lazy" width="400px" height="300px"/>
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes: ${likes}</b>
          </p>
          <p class="info-item">
            <b>Views: ${views}</b>
          </p>
          <p class="info-item">
            <b>Comments: ${comments}</b>
          </p>
          <p class="info-item">
            <b>Downloads: ${downloads}</b>
          </p>
          
        </div>
        
      </div>`
    }).join("")
}



// webformatURLTimeRanges,
// largeImageURLTimeRanges,
// TimeRanges,
// likesTimeRanges,
// viewsTimeRanges,
// commentsTimeRanges,
// downloadsTimeRanges,

