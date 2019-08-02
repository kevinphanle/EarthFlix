class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.integer :video_id, null: false
      t.string :name, null: false
      t.string :description, null: false

      t.timestamps
    end
  end
end
