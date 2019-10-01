# == Schema Information
#
# Table name: shows
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  year        :integer          not null
#  rating      :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :string
#  show_type   :string
#

class Show < ApplicationRecord

    validates :year, :description, :rating, presence: true
    validates :title, presence: true, uniqueness: true

    has_many :show_genres,
    foreign_key: :show_id,
    class_name: :ShowGenre
    
    has_many :genres,
        through: :show_genres,
        source: :genre,
        dependent: :destroy

    has_many :my_lists,
    foreign_key: :show_id,
    className: :MyList


    has_one_attached :poster_file
    has_one_attached :video_file
    
end
