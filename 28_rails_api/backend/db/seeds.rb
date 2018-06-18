# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Animal.create(name: 'Tim', species: Species.create(name: 'Platypus'), gender: 'male')
Animal.create(name: 'Natalie', species: Species.create(name: 'Otter'), gender: 'female' )
Animal.create(name: 'Matt', species: Species.create(name: 'Octopus'), gender: 'male')
