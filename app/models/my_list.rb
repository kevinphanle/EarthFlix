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

class MyList < ApplicationRecord
  validates :profile_id, :show_id, presence: true
  validates :profile_id, uniqueness: { scope: :show_id }

  belongs_to :profile,
  foreign_key: :profile_id,
  class_name: :Profile

  belongs_to :show,
  foreign_key: :show_id,
  class_name: :Show
end
