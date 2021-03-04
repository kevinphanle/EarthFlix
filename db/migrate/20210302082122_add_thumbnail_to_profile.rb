class AddThumbnailToProfile < ActiveRecord::Migration[5.2]
  def change
    add_column :profiles, :thumbnail, :string
  end
end
