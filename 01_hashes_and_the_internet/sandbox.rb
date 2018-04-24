require 'rest_client'
require 'pry'
require 'json'



# get user input
# make a request
# parse request
# puts title, author(s), description for first 10 books

def welcome
  puts "Hey friend! Why don'tcha make a search?"
  query = gets.chomp

  formatted_query = query.split.join("+")

  response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{formatted_query}")

  results_hash = JSON.parse(response)

  books = results_hash["items"]

  books[0..10].each do |book|
    puts "BOOK TITLE: #{book['volumeInfo']['title']}"
    puts "BOOK DESCRIPTION: #{book['volumeInfo']['description'][0..140]}..."
    puts "******************************************"
  end

end

welcome
