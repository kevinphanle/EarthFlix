json.extract! show, :id, :title, :description, :rating, :year
json.posterUrl url_for(show.poster_file)
json.videoUrl url_for(show.video_file)