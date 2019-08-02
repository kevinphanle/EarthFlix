class AddShowTypeToShow < ActiveRecord::Migration[5.2]
  def change
    add_column :shows, :show_type, :string
  end
end
