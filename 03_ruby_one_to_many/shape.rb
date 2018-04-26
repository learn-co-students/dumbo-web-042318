class Shape
  attr_accessor :width, :height, :x, :y, :type
  attr_reader :graph

  # belongs to a graph

  @@all = []

  def initialize(type, width, height, x, y)
    @type = type
    @width = width
    @height = height
    @x = x
    @y = y
    # @graph = nil
    @@all << self
  end

  def plot(graph)
    # take a graph instance as an argument
    # put something on the graph / writer for graph
    @graph = graph
  end

  def area
    # calculate area based on the type of shape
  end

  def perimeter
    # calculate perimeter based on shape
  end

  def self.all
    @@all
  end


end
