const booksConteiner = document.querySelector("#books-conteiner");
getBooks();
async function getBooks() {
  const response = await fetch("./js/data/dataBooks.json");
  const booksArray = await response.json();
  renderBooks(booksArray);
}
function renderBooks(booksArray) {
  booksArray.forEach(function (item) {
    const booksHTML = `
      <article class="book" data-id="${item.id}">
              <div class="book__img-wrapper">
                <img src="./images/${item.imgSrc}" alt="${item.imgAlt}" />
              </div>
              <div class="book__content">
                <h3 class="book__content-title">${item.title}</h3>
                <p class="book__content-price">$ ${item.price} USD</p>
                <p class="book__content-description">
                ${item.txt}
                </p>
                <h4 class="book__content-view">${item.view}</h4>
                <a class="book__content-btn btn-with-border" href="#!"
                  ><span>Order Now</span></a
                >
              </div>
      </article>
    `;
    booksConteiner.insertAdjacentHTML("beforeend", booksHTML);
  });
}