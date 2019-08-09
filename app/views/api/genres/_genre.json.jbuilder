json.extract! genre, :id, :name
json.showIds genre.shows.map { |show| show.id }