//this function will create the card
function createCardPreview({
  header = "Hello world",
  description = "this is an description",
}) {
  return `<div class="card-preview-container">
        <div class="top-bar"></div>
        <div class="notes-text-area">
          <h4 class="heading">${header}</h4>
          <p class="description">${description.slice(30)}..</p>
        </div>
      </div>`;
}
