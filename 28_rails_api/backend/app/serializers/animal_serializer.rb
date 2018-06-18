class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :species_name

  def species_name
    self.object.species.name
  end


end
