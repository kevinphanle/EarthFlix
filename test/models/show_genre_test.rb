# == Schema Information
#
# Table name: show_genres
#
#  id         :bigint           not null, primary key
#  show_id    :bigint
#  genre_id   :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ShowGenreTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
