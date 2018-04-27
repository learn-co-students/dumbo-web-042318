# Many To Many Relationships

## Recap

Everything in ruby is an object

objects has attributes
  - encapsulate date
  - encapsulate behavior

borg = Classroom.new(String.new('Borg'))
borg.students
=> ['drin', 'shawn', 'daiane']

What is a domain?
Subject matter of a problem or application

What is a model?
class who's responsibility is to encapsulate data


## Objectives

* Implement a more complex domain model -
  * ObjectA has many objectC(s) through ObjectB
  * ObjectC has many objectA(s) through ObjectB
* Practice passing custom objects as arguments to methods
* Demonstrate single source of truth
* Demonstrate SRP

## Deliverables

* Create a Painter class.
  <!-- * `#initialize` which takes a name and date of birth
  * a reader and writer method for name
  * a reader method for date of birth
  * `#paintings` that returns an array of Painting instances
  * `#make_painting` that takes a title, width, and height. It creates a new Painting instance, and adds it to the Painter's painting collection -->
  <!-- * `.all` that returns all the Painters created -->
  <!-- * `#galleries` that returns an array of Gallery instances -->
  * `.painters_in_alph_order` puts out a list of painter names in alphabetical order
* Create a Painting class
  <!-- * should initialize with a title, width, and height
  * a reader and writer for title
  * a reader for width and height
  * `#painter` that returns an instance of the Painter class
  * `.all` that returns all the Paintings created
  * `#painter_name` that returns the name of the Painting's Painter -->
* Create a Gallery class
  * should initialize with a name and location
  * a reader method for location
  * a reader and writer for name
  * `.all` that returns all the Galleries created
  <!-- * `#receive_donation` takes a painting as an argument and adds it to that gallery's inventory -->
  * `#paintings`returns an array of Painting instances in this gallery
  * `#painters`returns an array of Painter instances who's work is in this gallery
  * `.all_ordered_by_location` returns an array of all Gallery instances ordered alphabetically by location
