class Painter

  attr_accessor :name
  attr_reader :date_of_birth

  ALL = []

  def initialize(name, date_of_birth)
    @name = name
    @date_of_birth = date_of_birth
    ALL << self
  end

  def paintings
    ## return an array of painting instances that this painter has made
    Painting.all.select do |painting|
      painting.painter == self
    end
  end

  def make_painting(title, width, height)
    ## takes a title, width, and height. It creates a new Painting instance, and adds it to the Painter's painting collection
    Painting.new(self,title, width, height)
  end

  def galleries
    #returns an array of Gallery instances
    self.paintings.collect do |painting|
      painting.gallery
    end.compact.uniq
  end

  def self.all
    ALL
  end

end
