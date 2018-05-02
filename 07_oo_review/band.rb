class Band
  # Band should have a Band#name and Band#hometown and a band should be able to change it's name
  attr_accessor :name
  attr_reader :hometown

  # class variable to hold instances of Band
  @@all = []

  # Band should initialize with a name and hometown
  def initialize(name, hometown)
    @name = name
    @hometown = hometown
    @@all << self
  end

  # Band should have a method Band.all that returns all the instances of Band
  def self.all
    @@all
  end

  # Band should have a method Band.all_introductions that puts out a message of
  # "Hello, we are {insert band name here} and we're from {insert hometown here}"
  # for each band
  def self.all_introductions
    # we already have self.all / Band.all
    self.all.each do |band|
      puts "Hello, we are #{band.name} and we're from #{band.hometown}."
    end
  end

  # Band should have a method Band#concerts should return an array of
  # all that band's concerts
  def concerts
    # get all of the concerts for this band
    Concert.all.select do |concert|
      concert.band == self
    end
  end

  # Band should have a method Band#venues that
  # returns an array of all the venues the band has concerts in
  def venues
    self.concerts.collect do |concert|
      concert.venue
    end
  end

  # Band should have a method Band#play_in_venue that
  # takes a venue and date as a string as arguments and associates
  # the band to that venue
  def play_in_venue(venue, date)
    # date
    # self
    # venue
    Concert.new(date, self, venue)
  end

  # def name
  #   @name
  # end
  #
  # def hometown
  #   @hometown
  # end
  #
  # def name=(name)
  #   @name = name
  # end

end
