class Painting
  # initialize
  # instance variables (properties)
  # instance methods (behavior)
  # class variables (class properties)
  # class methods (class behavior)

  attr_accessor :price, :owner
  attr_reader :style, :year

  @@all = []

  def initialize(name, year, painter)
    @name = name
    @year = year
    @painter = painter # keep this in mind
    @@all << self
  end

  def when_was_i
    puts name
    puts year
    puts owner
  end

  def self.list_of_paintings
    # remember all paintings we created
    @@all
  end

end
