class DropVideos < ActiveRecord::Migration[5.2]
  def up
    drop_table :videos
  end

  def down
    fail ActiveRecord::IrreversibleMigration
  end
end
