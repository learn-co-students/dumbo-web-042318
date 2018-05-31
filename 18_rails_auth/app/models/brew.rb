class Brew < ApplicationRecord
  has_many :purchases
  has_many :customers, through: :purchases

  def self.strongest
    Brew.where(strength: Brew.maximum('strength'))
  end
end
