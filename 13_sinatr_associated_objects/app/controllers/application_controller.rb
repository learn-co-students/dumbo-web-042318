class ApplicationController < Sinatra::Base

  set :views, "app/views"
  set :method_override, true

  # root
  # render a home page
  get "/" do
    "Go to <a href=\"/books\">/books</a>."
  end

  # index
  # render a list of resources
  get "/books" do
    # grab information from the database
    @books = Book.all

    # render a view with that information
    erb :'index.html'
  end

  # new
  # render a form to create a resource
  get '/books/new' do
    erb :'new.html'
  end

  # create
  # create the resource and then redirect somewhere
  post '/books' do
    binding.pry
    book = Book.create(params)

    # go to show page
    redirect "/books/#{book.id}"
  end

  # show
  # render one resource
  get '/books/:id' do
    @book = Book.find(params["id"])
    erb :'show.html'
  end

  # edit
  get '/books/:id/edit' do
    @book = Book.find(params["id"])
    erb :'edit.html'
  end


  # update
  patch '/books/:id' do
    # operating on the database
    book = Book.find(params["id"])
    book.update(book_params)
    # book.update(
    #   title: params["title"],
    #   author: params["author"],
    #   snippet: params["snippet"]
    # )

    # rendering OR redirecting
    redirect "/books/#{book.id}"
  end

  # delete
  delete '/books/:id' do
    # do something on the database
    book = Book.find(params["id"])
    book.destroy

    # redirect somewhere
    redirect "/books"
  end

  private

  def book_params
    params_copy = params.dup
    params_copy.delete "id"
    params_copy.delete "_method"
    params_copy
  end

end









##
