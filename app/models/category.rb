class Category < ApplicationRecord
    has_many :places

    validates_presence_of :category_name
end
