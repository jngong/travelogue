class Entry < ApplicationRecord
  belongs_to :user
  belongs_to :place

  validates_presence_of :comments, :rating
end
