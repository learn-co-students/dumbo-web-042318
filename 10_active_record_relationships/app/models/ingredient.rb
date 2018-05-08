class Ingredient < ActiveRecord::Base
  has_many :beverage_ingredients
  has_many :beverages, through: :beverage_ingredients
end
