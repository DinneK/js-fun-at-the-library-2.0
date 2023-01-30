function shelfBook(book, shelf) {
  if (!shelf.includes(book.genre) && shelf.length < 3) {
    shelf.unshift(book);
  }
  return shelf;
}

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (book === shelf[i].title) {
      shelf.splice(i, 1);
    }
  }
}

function listTitles(shelf) {
  const titles = shelf.map((book) => {
    return book.title;
  });
  return titles.toString().split(",").join(", ");
}

function searchShelf(shelf, title) {
  const onShelf = shelf.some((book) => {
    if (book.title === title) {
      return true;
    } else {
      return false;
    }
  });
  return onShelf;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf,
};
