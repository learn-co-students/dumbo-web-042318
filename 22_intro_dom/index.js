class Author {
  constructor(name) {
    this.name = name
  }
}

const BookBook = (function() {
  let bookId = 1

  class Book {
    constructor(title, authorName) {
      this.id = bookId++
      this.title = title
      this.author = new Author(authorName)
      this.constructor.all.push(this)
    }

    printBook() {
      console.log(this.title)
    }

    printAuthor() {
      console.log(this.author.name)
    }

    template() {
      return `<li id="book-${this.id}">
        <span class="title">${this.title}</span>
        <span class="author">${this.author.name}</span>
      </li>`
    }

    static printAllBooks() {
      // class method
      console.log(this.all)
    }
  }

  Book.all = []

  return Book // A FUNCTION!
})()

const book1 = new BookBook("The Yellow Wallpaper", "Charlotte Perkins Gilman")
const book2 = new BookBook("The Bell Jar", "Sylvia Plath")
const book3 = new BookBook("A Little Life", "Hanya Yanagihara")
const book4 = new BookBook("The Fault in Our Stars", "John Green")
const book5 = new BookBook("A Walk to Remember", "Nicholas Sparks")

function updateBook(bookFourQS) {
  const bookFourTitle = bookFourQS.querySelector('.title')
  const capitalText = bookFourTitle.innerText.toUpperCase() // string
  bookFourTitle.innerText = capitalText + '!!!'
  // bookFourTitle.style.fontSize = '20em'
}

function deleteBooks(books) {
  if (books.children.length) {
    books.children[0].remove()
  } else {
    BookBook.all
      .map(book => book.template())
      .forEach(bookTemplate => {
        books.innerHTML += bookTemplate
      })
  }
}

function initializeApplication() {
  // CREATE: Get all books on the page
  const books = document.getElementById('books')
  BookBook.all
  	.map(book => book.template())
  	.forEach(bookTemplate => {
  		books.innerHTML += bookTemplate
  	})

  // READ: Get only the titles on the page
  const titlesHTMLColl = document.getElementsByClassName('title')
  const titlesNodeList = document.querySelectorAll('.title')

  const titlesHTMLCollArr = [...titlesHTMLColl]
  const titlesNodeListArr = Array.from(titlesNodeList)

  // READ: Get the book with the id of 4
  const bookFourGE = document.getElementById('book-4')
  const bookFourQS = document.querySelector('#book-4')


  // UPDATE: After five seconds update book 4 to capitalize the title
  window.setTimeout(updateBook, 3000, bookFourQS)

  // DELETE: After 6 seconds delete the fourth book
  window.setInterval(deleteBooks, 1000, books)

  // EVENTS: click, mouseover, DOMContentLoaded, changevolume, play/stop, focus, ambientlight
  document.getElementById('books').addEventListener('click', function(e) {
    if (e.target.className === 'title') {
      e.target.style.color = 'pink'
      setTimeout(function() {
        e.target.style.color = 'black'
      }, 1000)
    }
  })

  document.getElementById('books').addEventListener('mouseover', function(e) {
    e.target.style.color = 'purple'
    setTimeout(function() {
      e.target.style.color = 'black'
    }, 500)
  })
}

document.addEventListener('DOMContentLoaded', initializeApplication)



// // bind, call, apply
// // iife's
// // closures
//
//
//
//
//
//
// // const adder = (function setUpAdder() {
// //   console.log('outer function called')
// //   let num = 1
// //   console.log('num variable set to', num)
// //
// //   return function(numToAdd) {
// //     console.log('inner function called')
// //     num += numToAdd
// //     console.log('value of num in inner function is', num)
// //     return num
// //   }
// // })()
//
//
//
//
//
//
//
//
//
//
//
// // new BookBook('some title', 'some author')
//
//
//
//
//
//
//
//
//
