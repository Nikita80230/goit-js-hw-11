export function addMarkup(markup, elem) {
  elem.insertAdjacentHTML("beforeend", markup)
}
  
export function clearMarkup(markup, elem) {
  elem.innerHTML = ""
  
}