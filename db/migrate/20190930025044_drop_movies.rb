class DropMovies < ActiveRecord::Migration[5.2]
  def up
    drop_table :movies
  end

  def down
    fail ActiveRecord::IrreversibleMigration
  end
end
