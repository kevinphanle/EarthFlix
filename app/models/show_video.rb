# == Schema Information
#
# Table name: show_videos
#
#  id         :bigint           not null, primary key
#  show_id    :integer          not null
#  video_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ShowVideo < ApplicationRecord
    validates :video_id, uniqueness: { scope: [:video_id, :show_id]}

    belongs_to :video
    belongs_to :show
end
