class RemoveTypeFromVideos < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :type, :string
  end
end
