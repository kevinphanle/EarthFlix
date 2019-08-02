class RemoveVideoUrlFromVideo < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :video_url, :string
  end
end
