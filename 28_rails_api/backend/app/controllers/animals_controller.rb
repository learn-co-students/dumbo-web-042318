class AnimalsController < ApplicationController
  protect_from_forgery except: [:create]

  def index
    @animals = Animal.all
    # render html: index template
    render json: @animals
  end

  def create
    animal = Animal.create(
      name: params[:name],
      gender: params[:gender],
      species: Species.find_or_create_by(name: params[:species])
    )
    render json: animal
  end
end
