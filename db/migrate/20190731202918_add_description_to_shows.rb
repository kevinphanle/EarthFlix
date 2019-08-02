class AddDescriptionToShows < ActiveRecord::Migration[5.2]
  def change
    add_column :shows, :description, :string
  end
end
