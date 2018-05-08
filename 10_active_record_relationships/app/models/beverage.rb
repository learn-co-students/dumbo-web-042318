class Beverage < ActiveRecord::Base
  belongs_to :producer # => Producer, should be :producer_id col on this class
  has_many :beverage_ingredients # => BeverageIngredient
  has_many :ingredients, through: :beverage_ingredients # => Ingredient
end
