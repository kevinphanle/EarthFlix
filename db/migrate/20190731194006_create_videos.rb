class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :video_url, null: false
      t.string :name, null: false
      t.string :description, null: false
      t.string :type, null: false
      t.integer :duration, null: false
      t.string :thumbnail_url, null: false

      t.timestamps
    end
    add_index :videos, :video_url, unique: true
  end
end
