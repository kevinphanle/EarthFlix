class CreateShowVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :show_videos do |t|
      t.integer :show_id, null: false
      t.integer :video_id, null: false
      t.timestamps
    end
  end
end
