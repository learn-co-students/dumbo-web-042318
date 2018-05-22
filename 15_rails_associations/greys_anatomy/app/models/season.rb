class Season < ApplicationRecord
  has_many :character_seasons
  has_many :characters, through: :character_seasons

  def person_ids
    self.character_ids
  end

  def person_ids=(ids)
    puts "Using mass assignment that I created!"
    self.character_ids = ids
  end
end
