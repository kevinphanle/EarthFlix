class CreateShowGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :show_genres do |t|
      t.references :show, foreign_key: true
      t.references :genre, foreign_key: true
      t.timestamps
    end
  end
end
