class Gallery

  attr_accessor :name
  attr_reader :location

  ALL = []

  def initialize(name, location)
    @name = name
    @location = location
    ALL << self
  end

  def receive_donation(painting)
     #takes a painting as an argument and adds it to that gallery's inventory
     painting.gallery = self
  end

  def paintings
    # returns an array of Painting instances in this gallery
    Painting.all.select do |painting|
      painting.gallery == self
    end
  end

  def painters
    # returns an array of Painter instances who's work is in this gallery
    self.paintings.map do |painting|
      painting.painter
    end.uniq
  end

  def self.all
    ALL
  end

  def self.all_ordered_by_location
    all.sort_by do |gallery|
      gallery.location
    end
  end

end
