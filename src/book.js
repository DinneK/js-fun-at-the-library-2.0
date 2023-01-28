function createTitle(bookIdea) {
  return `The ${bookIdea}`;
}

function buildMainCharacter(name, age, pronouns) {
  return { name, age, pronouns };
}

function saveReview(bookReviews, reviews) {
  if (reviews.includes(bookReviews)) {
    return reviews.length;
  } else {
    reviews.push(bookReviews);
  }
}

function calculatePageCount(bookTitle, bookPageCount) {
  return (bookPageCount = bookTitle.length * 20);
}

function writeBook(title, mainCharacter, genre) {
  var book = {
    title,
    mainCharacter,
    pageCount: calculatePageCount(title),
    genre,
  };
  return book;
}

function editBook(ghoulBook) {
  ghoulBook.pageCount = ghoulBook.pageCount * 0.75;
  return ghoulBook;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook,
};
