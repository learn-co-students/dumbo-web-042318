class Book < ActiveRecord::Base
  # has a foreign key of author_id
  belongs_to :author
end
