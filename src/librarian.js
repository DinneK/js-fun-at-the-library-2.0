class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(name, condition) {
    if (condition) {
      return `Good morning, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  }

  findBook(book) {
    const foundBook = this.library.shelves.fantasy.find((title) => title.title);
    if (book === foundBook.title) {
      this.library.shelves.fantasy.pop();
      return `Yes, we have ${book}`;
    } else {
      return `Sorry, we do not have ${book}`;
    }
  }

  calculateLateFee(days) {
    const lateFee = days * 0.25;
    const roundedFee = Math.ceil(lateFee);
    return roundedFee;
  }
}

module.exports = Librarian;
