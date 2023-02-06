function createLibrary(libraryInfo) {
  const library = {
    name: libraryInfo,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
  return library;
}

function addBook(shelf, book) {
  if (book.genre === "fantasy") {
    shelf.shelves.fantasy.push(book);
  }
  if (book.genre === "nonFiction") {
    shelf.shelves.nonFiction.push(book);
  }
  if (book.genre === "fiction") {
    shelf.shelves.fiction.push(book);
  }
}

function checkoutBook(library, title, genre) {
  const unavailable = `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
  const available = `You have now checked out ${title} from the ${library.name}`;

  const bookIndex = library.shelves[genre].findIndex(
    (book) => book.title === title
  );
  if (bookIndex === -1) {
    return unavailable;
  }
  library.shelves[genre].splice(bookIndex, 1);
  return available;
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
};
