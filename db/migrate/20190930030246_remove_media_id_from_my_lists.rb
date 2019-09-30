class RemoveMediaIdFromMyLists < ActiveRecord::Migration[5.2]
  def change
    remove_column :my_lists, :media_id, :integer
    add_column :my_lists, :show_id, :integer
  end
end
