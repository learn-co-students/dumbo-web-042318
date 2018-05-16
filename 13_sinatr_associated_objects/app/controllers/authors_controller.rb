class AuthorsController < ApplicationController # < Sinatra::Base

  # set :views, "app/views/authors"

  # index
  get "/authors" do
    @authors = Author.all

    erb :'authors/index.html'
  end

  # new - show a form
  get "/authors/new" do
    # don't need the db for this one

    erb :'authors/new.html'
  end

  # show
  get "/authors/:id" do
    @author = Author.find(params["id"])

    erb :'authors/show.html'
  end

  # create
  post "/authors" do
    author = Author.create(params["author"])

    redirect "/authors/#{author.id}"
  end

  # # edit - show a form
  # get "/authors/:id/edit" do
  #   @author = Author.find(params["id"])
  # end
  #
  # # update
  # patch "/authors/:id" do
  #   @author = Author.find(params["id"])
  # end

  # delete
  delete "/authors/:id" do
    @author = Author.find(params["id"])
    @author.destroy # destroy all the authors books

    redirect "/authors"
  end

end
