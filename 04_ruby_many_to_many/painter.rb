class Painter

  attr_accessor :name
  attr_reader :date_of_birth

  def initialize(name, date_of_birth)
    @name = name
    @date_of_birth = date_of_birth
  end

  def paintings
    ## return an array of painting instances that this painter has made
    Painting.all.select do |painting|
      painting.painter == self
    end
  end

  def make_painting(title, width, height)
    ## takes a title, width, and height. It creates a new Painting instance, and adds it to the Painter's painting collection
    new_painting = Painting.new(title, width, height)
    new_painting.painter = self
  end

end
