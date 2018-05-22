class CharacterSeason < ApplicationRecord
  belongs_to :character
  belongs_to :season
end
