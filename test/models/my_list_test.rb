# == Schema Information
#
# Table name: my_lists
#
#  id         :bigint           not null, primary key
#  profile_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  show_id    :integer
#

require 'test_helper'

class MyListTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
