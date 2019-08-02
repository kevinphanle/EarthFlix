class CreateShows < ActiveRecord::Migration[5.2]
  def change
    create_table :shows do |t|
      t.string :title, null: false
      t.integer :year, null: false
      t.float :rating, null: false
      t.timestamps
    end
  end
end
