// design patterns: factory

// const author = {
//    "firstName": "first",
//    "lastName": "last"
// }

// const book1 = {
//   "title": "Something",
//   "author": author,
//   "printBook": printBook
// }

// const book2 = {
//   "title": "anotherBook",
//   "author": author,
//   "printBook": printBook
// }


// function bookFactory(title /* STRING */, author /* STRING */) {
//   // what needs to happen here to create a new book?
//   const book = {}
//
//   book.title = title
//   book.author = { name: author }
//   book.printBook = bookFactory.printBook
//   book.printAuthor = bookFactory.printAuthor
//   book.class = bookFactory.class
//
//   return book
// }
//
// bookFactory.class = "Book"
//
// bookFactory.printBook = function printBook() {
//   console.log(this.title)
// }
//
// bookFactory.printAuthor = function printAuthor() {
//   console.log(this.author.name)
// }
//
// const book1 = bookFactory("The Yellow Wallpaper", "Charlotte Perkins Gilman")
// const book2 = bookFactory("The Bell Jar", "Sylvia Plath")

// creates a new object {}
// sets the prototype of that object to the constructor's prototype
// call the constructor function WITH THE OBJECT AS THE VALUE OF THIS
// return the new object
// function Book(title, author) {
//   this.title = title
//   this.author = { name: author }
//   this.constructor.all.push(this)
// }
//
// // Book.prototype.class = "Book"
// Book.class = "Book"
// Book.all = []
// Book.printAllBooks = function() {
//   console.log(this.all)
// }
// Book.prototype.printBook = function printBook() {
//   console.log(this.title)
// }
// Book.prototype.printAuthor = function printAuthor() {
//   console.log(this.author.name)
// }
//
// const book1 = new Book("The Yellow Wallpaper", "Charlotte Perkins Gilman")
// const book2 = new Book("The Bell Jar", "Sylvia Plath")


// class Book {
//   constructor(title, author) {
//     this.title = title
//     this.author = { name: author }
//     this.constructor.all.push(this)
//   }
//
//   printBook() {
//     console.log(this.title)
//   }
//
//   printAuthor() {
//     console.log(this.author.name)
//   }
//
//   static printAllBooks() {
//     // class method
//     console.log(this.all)
//   }
// }
//
// Book.all = []
//
//
// const book1 = new Book("The Yellow Wallpaper", "Charlotte Perkins Gilman")
// const book2 = new Book("The Bell Jar", "Sylvia Plath")
