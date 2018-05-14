class ApplicationController < Sinatra::Base

  get "/" do
    "Go to <a href=\"/books\">/books</a>."
  end

  # index
  get "/books" do
    books = Book.all.map do |book|
      "<li>#{book.title}</li>"
    end

    <<-HTML
      <a href="/books/new">Add Book</a>
      <ul>
        #{books.join}
      </ul>
    HTML
  end

  # new
  get '/books/new' do
    <<-HTML
      <form action="/books" method="post">
        <label for="book-title">Book title</label>
        <input id="book-title" type="text" name="title" placeholder="Book title">

        <label for="book-author">Book Author</label>
        <input id="book-author" type="text" name="author" placeholder="Book author">

        <label for="book-snippet">Snippet</label>
        <textarea id="book-snippet" name="snippet"></textarea>

        <input type="submit">
      </form>
    HTML
  end

  # create
  post '/books' do
    book = Book.create(params)

    # go to show page
    redirect "/books/#{book.id}"
  end

  # show
  get '/books/:id' do
    book = Book.find(params["id"])
    <<-HTML
      <h1>#{book.title}</h1>
      <small>#{book.author}</small>
      <p>#{book.snippet}</p>
    HTML
  end

end
