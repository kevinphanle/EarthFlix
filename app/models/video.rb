# == Schema Information
#
# Table name: videos
#
#  id            :bigint           not null, primary key
#  video_url     :string           not null
#  name          :string           not null
#  description   :string           not null
#  duration      :integer          not null
#  thumbnail_url :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  video_type    :string           not null
#

class Video < ApplicationRecord

    VIDEO_TYPES = %w(MOVIE EPISODE)

    validates :name, :description, :duration, presence: true
    validates :video_type, inclusion: { in: VIDEO_TYPES }, presence: true
    # validates :video_url, uniqueness: true, presence: true

    has_many :show_videos

    has_many :shows,
        through: :show_videos,
        source: :show
    
    has_one :movie

    # has_one_attached :poster
    has_one_attached :video_file
end
