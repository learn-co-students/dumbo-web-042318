class ApplicationController < Sinatra::Base

  set :views, "app/views"
  set :method_override, true

  # root
  # render a home page
  get "/" do
    "Go to <a href=\"/books\">/books</a>."
  end


end









##
