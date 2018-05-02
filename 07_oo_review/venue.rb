
class Venue
  attr_accessor :city

  @@all = []

  # Venue should initialize with a title and city
  def initialize(title, city)
    @title = title
    @city = city
    @@all << self
  end

  # Venue should have a method Venue.all method which returns all the instances of Venue
  def self.all
    @@all
  end

  # Venue should have a method Venue#concerts that lists
  # all the concerts that have ever been performed in that venue
  def concerts
    Concert.all.select do |concert|
      concert.venue == self
    end
  end

  # Venue should have a method Venue#bands that lists
  # all the bands that have ever played in that venue
  def bands
    Concert.all.select do |concert|
      concert.venue == self
    end.map do |concert|
      concert.band
    end
  end

end
