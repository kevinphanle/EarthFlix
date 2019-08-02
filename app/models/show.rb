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

    SHOW_TYPES = %w(MOVIE SHOW)

    validates :title, :year, :description, presence: true

    has_many :show_videos

    has_many :videos,
        through: :show_videos,
        source: :video

    has_one_attached :poster_file


end
