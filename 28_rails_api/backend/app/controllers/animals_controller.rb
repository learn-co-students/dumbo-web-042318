class AnimalsController < ApplicationController
  protect_from_forgery except: [:create]

  def index
    @animals = Animal.all
    # render html: index template
    render json: @animals
  end

  def create
    animal = Animal.new(animal_params)
    animal.species = animal_species
    animal.save
    render json: animal
  end

  private

  def animal_params
    params.require(:animal).permit(:name, :gender)
  end

  def animal_species
    Species.find_or_create_by(name: params[:animal][:species])
  end
end
