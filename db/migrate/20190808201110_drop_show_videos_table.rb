class DropShowVideosTable < ActiveRecord::Migration[5.2]
  def change
      drop_table :show_videos do |t|
        t.integer :show_id, null: false
        t.integer :video_id, null: false
        t.timestamps null: false
      end
  end
end
