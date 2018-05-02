class Concert
  # Concert should have methods Concert#band and Concert#venue that return the band and venue associated to the Concert
  attr_reader :band, :venue

  @@all = []

  # Concert should initialize with a date, band, and venue
  # NOTE: Not including relationships yet
  def initialize(date, band, venue)
    @date = date
    @band = band
    @venue = venue
    @@all << self
  end

  # Concert should have a Concert.all method which returns all the instances of Concert
  def self.all
    @@all
  end

  # Concert should have a method Concert#hometown_show? that returns true if the concert is in the band's hometown
  def hometown_show?
    # self.venue.city
    # self.band.hometown

    self.venue.city == self.band.hometown
  end

end










## hello
