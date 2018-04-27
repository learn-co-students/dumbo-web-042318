require 'pry'

require_relative 'painter.rb'
require_relative 'painting.rb'
require_relative 'gallery.rb'

leo = Painter.new('Leo','April 15,1452')
saige = Painter.new('Saige', 'January 25')
picasso = Painter.new('Pablo', 'February 25')

mona_lisa = leo.make_painting('Mona Lisa', '18', '24')
musician = leo.make_painting('Portrait of a Musician', '18', '24')
great_selfie = saige.make_painting('The Great Selfie', '1', '1')

somethin_bout_yellow = picasso.make_painting('Something Yellow','5','4')
the_cubey_one = picasso.make_painting('Cubism One', '8', '3')

moma = Gallery.new('MoMA', 'New York City')
louvre = Gallery.new('Louvre', 'Paris')
prado = Gallery.new('Prado', 'Madrid')

moma.receive_donation(mona_lisa)
louvre.receive_donation(great_selfie)

prado.receive_donation(somethin_bout_yellow)
prado.receive_donation(the_cubey_one)


binding.pry

true
