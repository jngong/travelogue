class CreatePlaces < ActiveRecord::Migration[6.0]
  def change
    create_table :places do |t|
      t.string :name
      t.string :description
      t.string :address
      t.string :city
      t.string :state
      t.string :country
      t.string :country_iso2
      t.string :img_url
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
