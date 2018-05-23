class Brew < ApplicationRecord
  # strength should be from 1 - 5
  validates :blend_name, presence: true
  validates :strength, inclusion: { in: 1..5, message: "%{value} is not a valid strength. Please choose something from 1 - 5" }

  # find 5 strongest
  def self.strongest_blends
    self.order(:strength => :desc).limit(5)
  end
end
