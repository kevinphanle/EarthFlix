# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string           not null
#  duration    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  video_type  :string           not null
#  show_id     :integer
#

require 'test_helper'

class VideoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
