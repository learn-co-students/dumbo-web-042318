class Graph
  attr_accessor :scale, :x_bound, :y_bound


  # has many shapes

  def initialize(scale, x_bound, y_bound)
    @scale = scale
    @x_bound = x_bound
    @y_bound = y_bound

  end

  def add_shape(shape)
    # shape instance as argument

    shape.plot(self)
  end

  def shapes
    # how do we get a list of shapes that
    # belong to this graph?
    Shape.all.select { |shape| shape.graph == self }
  end

end
