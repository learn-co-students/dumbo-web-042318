class Painting

  attr_accessor :title, :painter, :gallery
  attr_reader :width, :height

  @@all = []

  def initialize(painter, title, width, height)
    @painter = painter
    @title = title
    @width = width
    @height = height
    @@all << self
  end

  def self.all
    @@all
  end

  def painter_name
    ## return it's painter's name
    self.painter.name
  end

end
