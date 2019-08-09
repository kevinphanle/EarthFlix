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

class ShowGenre < ApplicationRecord
    belongs_to :show
    belongs_to :genre
end
