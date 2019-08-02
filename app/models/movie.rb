# == Schema Information
#
# Table name: movies
#
#  id          :bigint           not null, primary key
#  video_id    :integer          not null
#  name        :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Movie < ApplicationRecord
    validates :video_id, uniqueness: true
    validates :video_id, :name, :description, presence: true

    belongs_to :video
end
