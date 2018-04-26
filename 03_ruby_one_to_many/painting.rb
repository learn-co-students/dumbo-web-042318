class Painting

  attr_accessor :title, :painter
  attr_reader :width, :height

  @@all = []

  def initialize(title, width, height)
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
    painter.name
  end

end
