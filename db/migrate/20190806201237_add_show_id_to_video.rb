class AddShowIdToVideo < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :show_id, :integer
  end
end
