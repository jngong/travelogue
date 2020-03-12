class AddImgUrlToEntries < ActiveRecord::Migration[6.0]
  def change
    add_column :entries, :img_url, :string
  end
end
