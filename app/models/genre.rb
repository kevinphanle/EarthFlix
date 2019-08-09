# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Genre < ApplicationRecord
    validates :name, presence: true, uniqueness: true

    has_many :show_genres,
    foreign_key: :genre_id,
    class_name: :ShowGenre
    
    has_many :shows,
        through: :show_genres,
        source: :show
end
