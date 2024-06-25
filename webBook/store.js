class Store {
    constructor(name) {
      this.name = name;
      this.listBooks = [];
    }
  
    addBook(book) {
      this.listBooks.push(book);
    }
  
    removeBook(index) {
      this.listBooks.splice(index, 1);
    }
  
    getOneBook(index) {
      return this.listBooks[index];
    }
  
    update(index, newBook) {
      this.listBooks[index] = newBook;
    }
  }