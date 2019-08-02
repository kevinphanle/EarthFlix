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

require 'test_helper'

class ShowVideoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
