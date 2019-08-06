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

    SHOW_TYPES = %w(MOVIE SERIES)

    validates :title, :year, :description, presence: true
    validates :show_type, presence: true, inclusion: { in: SHOW_TYPES }

    has_many :show_videos

    has_many :videos

    has_one_attached :poster_file
    
    def preview_id 
        self.videos.each { |video| return video.id if video.video_type == "EPISODE"}
    end


    def movie_id
        self.videos.each { |video| return video.id if video.video_type == "MOVIE"}
    end

    def episode_ids
        self.videos.map  { |video| video.id if video.video_type == "EPISODE" }
    end 
end
