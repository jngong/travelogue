class Place < ApplicationRecord
  belongs_to :category
  has_many :entries, dependent: :destroy

  validates_presence_of :name, :description, :city, :country_iso2
end
