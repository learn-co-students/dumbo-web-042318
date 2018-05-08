class Artist < GenericModel::Base
  has_many :genres
  belongs_to :label
end

# artist.genres => [array]
# artist.label => label
