class Gallery

  attr_accessor :name
  attr_reader :location

  def initialize(name, location)
    @name = name
    @location = location
  end

  def receive_donation(painting)
     #takes a painting as an argument and adds it to that gallery's inventory
     painting.gallery = self
  end

end
