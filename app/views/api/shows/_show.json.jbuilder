json.extract! show, :id, :title, :year, :rating, :description, :show_type, :movie_id, :episode_ids, :preview_id
json.posterUrl url_for(show.poster_file)
