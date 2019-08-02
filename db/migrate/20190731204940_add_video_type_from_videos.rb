class AddVideoTypeFromVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :video_type, :string, null: false
  end
end
